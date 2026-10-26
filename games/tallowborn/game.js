'use strict';
/* TALLOWBORN: you are a knight of living wax. Candles burn in your body; spent wax drips down and fuses into the candle below.
   All art procedural (canvas) + one painted backdrop. Sound is procedural WebAudio. */
const Q = new URLSearchParams(location.search);
const FAST = Q.has('fast');
const SEED = Q.get('seed') ? (+Q.get('seed') >>> 0) : (Date.now() % 1e9);
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
let rnd = mulberry32(SEED);
const ri = n => Math.floor(rnd()*n), pick = a => a[ri(a.length)];
const shuffle = a => {for(let i=a.length-1;i>0;i--){const j=ri(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
const sleep = ms => new Promise(r => setTimeout(r, FAST ? 0 : ms));
const $ = s => document.querySelector(s);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* ---------- funnel analytics (local only) ---------- */
const FUNNEL_KEY = 'tb_funnel_v1';
function track(ev, data = {}) {
  try {
    const a = JSON.parse(localStorage.getItem(FUNNEL_KEY) || '[]');
    a.push(Object.assign({ ev, t: Date.now(), seed: SEED }, data));
    while (a.length > 500) a.shift();
    localStorage.setItem(FUNNEL_KEY, JSON.stringify(a));
    const c = JSON.parse(localStorage.getItem(FUNNEL_KEY + '_counts') || '{}');
    c[ev] = (c[ev] || 0) + 1;
    localStorage.setItem(FUNNEL_KEY + '_counts', JSON.stringify(c));
  } catch (e) {}
}
const onceSent = new Set();
function trackOnce(ev, data) { if (!onceSent.has(ev)) { onceSent.add(ev); track(ev, data); } }
function firstAction(kind) { trackOnce('first_action', { kind }); }

/* ---------- data ---------- */
const SIG = {
  ember:  { n:'Ember',  t:'deal 2',                  c:'#e8a547', dmg:2 },
  brand:  { n:'Brand',  t:'deal 4',                  c:'#ff7a4d', dmg:4 },
  ward:   { n:'Ward',   t:'gain 3 ward',             c:'#9fb6da' },
  mend:   { n:'Mend',   t:'heal 2 wax',              c:'#9fc98f' },
  thorn:  { n:'Thorn',  t:'deal 1 per lit neighbour',c:'#c49be0' },
  hunger: { n:'Hunger', t:'deal 3; neighbours lose 1 wick', c:'#e0607a', dmg:3 },
  tithe:  { n:'Tithe',  t:'+1 tallow next turn',     c:'#e8dcc0' },
  radiant:{ n:'Radiant',t:'+2 light',                c:'#fff0b8', light:2 },
  shroud: { n:'Shroud', t:'-3 light',                c:'#9a86c0', light:-3 },
  ash:    { n:'Ash',    t:'nothing; clogs a socket', c:'#777' },
};
const CANDLES = {
  stub:   { n:'Tallow Stub',    cost:1, wick:2, s:['ember'] },
  votive: { n:'Votive',         cost:1, wick:3, s:['ward'] },
  weep:   { n:'Weeping Taper',  cost:0, wick:1, s:['ember'] },
  martyr: { n:"Martyr's Taper", cost:2, wick:1, s:['brand'], wax:'red' },
  censer: { n:'Censer',         cost:1, wick:3, s:['radiant'] },
  briar:  { n:'Briar Candle',   cost:1, wick:3, s:['thorn'] },
  black:  { n:'Black Candle',   cost:1, wick:3, s:['shroud','ember'], wax:'black' },
  bone:   { n:'Bone Candle',    cost:2, wick:2, s:['hunger'], wax:'bone' },
  saint:  { n:"Saint's Wick",   cost:2, wick:4, s:['mend','ward'] },
  tithe:  { n:'Tithe Candle',   cost:0, wick:1, s:['tithe'] },
  pyre:   { n:'Pyre Candle',    cost:3, wick:2, s:['brand','radiant'], wax:'red' },
  bell:   { n:'Bellwax',        cost:2, wick:4, s:['ward','thorn'] },
  ash:    { n:'Ash',            cost:0, wick:1, s:['ash'], wax:'ash', junk:true, light:0 },
};
const REWARD_POOL = ['votive','martyr','censer','briar','black','bone','saint','tithe','pyre','bell','stub','weep'];
const FOES = {
  pilgrim:{ n:'Ashen Pilgrim', hp:44, lore:'It walks toward any light. Slowly.', pat:[['strike',5],['ward',5],['strike',6],['multi',2,2]], shape:'hood' },
  moth:   { n:'Moth Widow', hp:72, lore:'Drawn to Blaze: it grows stronger in it.', pat:[['multi',3,3],['strike',8],['multi',3,3],['ward',7]], moth:true, shape:'moth' },
  bell:   { n:'Bell-Ringer', hp:74, lore:'Its breath gutters your brightest flame.', pat:[['strike',8],['breath'],['strike',9],['smother',1],['breath'],['multi',4,2]], shape:'bell' },
  choir:  { n:'Choir of Wax', hp:74, lore:'Sings ash into your candles.', pat:[['smother',2],['multi',4,2],['ward',8],['strike',10]], shape:'choir' },
  eater:  { n:'The Wick-Eater', hp:140, elite:true, lore:'Devours your shortest candle. Gnaws your weakest limb.', pat:[['devour'],['sever',11],['multi',5,2],['ward',10],['devour'],['strike',13]], shape:'maw' },
  king:   { n:'The Unlit King', hp:300, boss:true, lore:'He was the last flame. He forgot why.', pat:[['strike',10],['breath'],['heavy',16],['smother',2],['multi',5,3],['sever',12],['strike',12],['ward',14]], shape:'king' },
};
/* the body: six sockets. u,v = candle base inside the effigy box (0..1) */
const PARTS = {
  crown:{ n:'Crown',     max:8,  u:.50, v:.15, bonus:'+1 light' },
  armL: { n:'Left Arm',  max:10, u:.155,v:.52,  bonus:'blows +1' },
  heart:{ n:'Heart',     max:16, u:.50, v:.43,  bonus:'ward & mend ×2' },
  armR: { n:'Right Arm', max:10, u:.845,v:.52,  bonus:'blows +1' },
  legL: { n:'Left Leg',  max:12, u:.355,v:.79,  bonus:'+1 wick' },
  legR: { n:'Right Leg', max:12, u:.645,v:.79,  bonus:'+1 wick' },
};
const ORDER = ['crown','armL','heart','armR','legL','legR'];
const LIMBS = ['crown','armL','armR','legL','legR'];
/* gravity: where wax runs when a candle burns out, by stance */
const FLOW = {
  upright:{ crown:['armL','heart','armR'], armL:['legL'], heart:['legL','legR'], armR:['legR'], legL:['pool'], legR:['pool'] },
  left:   { crown:['armL'], armL:['legL'], heart:['legL'], armR:['heart'], legL:['pool'], legR:['legL'] },
  right:  { crown:['armR'], armR:['legR'], heart:['legR'], armL:['heart'], legR:['pool'], legL:['legR'] },
};
const ADJ = { crown:['armL','heart','armR'], armL:['crown','heart','legL'], heart:['crown','armL','armR','legL','legR'], armR:['crown','heart','legR'], legL:['armL','heart','legR'], legR:['armR','heart','legL'] };

/* ---------- state ---------- */
let S = null, F = null, uidN = 1;
function mkCard(id) { const d = CANDLES[id]; return { uid: uidN++, id, sigils: d.s.slice(), fused: [] }; }
function cardLight(c, part) { const d = CANDLES[c.id]; let l = d.light ?? 1; for (const s of c.sigils) l += SIG[s].light || 0; if (part === 'crown' && !d.junk) l += 1; return l; }
function essence(c) { return CANDLES[c.id].s[0]; }
function alive(p) { return S.body[p].wax > 0; }
function fury() { return LIMBS.filter(p => !alive(p)).length; }

function newRun() {
  rnd = mulberry32(S ? (SEED + (S.runNo||0) * 7919) >>> 0 : SEED);
  const runNo = S ? (S.runNo||0) + 1 : 1;
  const mid = shuffle(['moth','bell','choir']);
  const body = {}; for (const p of ORDER) body[p] = { wax: PARTS[p].max, max: PARTS[p].max };
  S = {
    runNo, body, pool: 0, step: 0,
    deck: ['stub','stub','stub','votive','votive','censer','martyr','briar','weep'].map(mkCard),
    path: [
      { type:'fight', foes:['pilgrim'] },
      { type:'fight', foes:[mid[0], mid[1]] },
      { type:'shrine' },
      { type:'fight', foes:[mid[2], mid[0] === 'moth' ? 'bell' : 'moth'].filter((v,i,a)=>a.indexOf(v)===i) },
      { type:'fight', foes:['eater'] },
      { type:'shrine' },
      { type:'fight', foes:['king'] },
    ],
    fusions: 0, maxLight: 0, turns: 0, kills: 0, lost: 0, recasts: 0, start: Date.now(), beaten: [], lean: 'upright',
  };
  track('run_start', { run: runNo });
  buildSockets();
  renderPath();
  nextStep();
}

/* ---------- path ---------- */
function renderPath() {
  const el = $('#path'); el.innerHTML = '';
  if (!S) return;
  S.path.forEach((p, i) => {
    const s = document.createElement('span');
    s.textContent = p.type === 'shrine' ? '✝' : (p.foes[0] === 'king' ? '♛' : p.foes[0] === 'eater' ? '☠' : '◆');
    s.title = p.type === 'shrine' ? 'Shrine' : p.foes.map(f => FOES[f].n).join(' / ');
    if (i < S.step) s.className = 'done'; else if (i === S.step) s.className = 'now';
    el.appendChild(s);
  });
}
function nextStep() {
  renderPath();
  const p = S.path[S.step];
  if (!p) return endRun(true, 'The Unlit King gutters out. You are the last flame now.');
  track('step_reached', { step: S.step, type: p.type });
  if (p.type === 'shrine') return shrine();
  if (p.foes.length === 1) return startFight(p.foes[0]);
  const used = new Set(S.beaten);
  const opts = p.foes.filter(f => !used.has(f));
  if (opts.length <= 1) return startFight(opts[0] || p.foes[0]);
  showOverlay(`<div class="panel"><h2>Two doors in the dark</h2><p class="tag">Choose what you will face.</p>
    <div class="choices">${opts.map(f => doorHtml(f)).join('')}</div></div>`);
  document.querySelectorAll('.door').forEach(d => d.onclick = () => { sfx('place'); hideOverlay(); startFight(d.dataset.f); });
}
function doorHtml(f) { const o = FOES[f]; return `<div class="door ${o.elite?'elite':''} ${o.boss?'boss':''}" data-f="${f}"><b>${o.n}</b><span class="hp">♥ ${o.hp}</span><small>${o.lore}</small></div>`; }

/* ---------- fight ---------- */
function startFight(fid) {
  const o = FOES[fid];
  const board = {}; for (const p of ORDER) board[p] = null;
  F = { fid, foe: { ...o, hp: o.hp, maxHp: o.hp, block: 0, str: 0, idx: 0 }, board,
        draw: shuffle(S.deck.slice()), hand: [], discard: [], tallow: 3, tithe: 0, ward: 0, turn: 0,
        sel: null, mode: null, busy: false, intent: null, darkMod: 0, phase2: false, lastBand: null };
  foeAnim.shape = o.shape; foeAnim.hit = 0; foeAnim.appear = 0;
  $('#foeName').textContent = o.n;
  log(o.lore);
  sfx('bell');
  startTurn();
}
function drawCards(n) {
  for (let i = 0; i < n; i++) {
    if (!F.draw.length) { if (!F.discard.length) break; F.draw = shuffle(F.discard); F.discard = []; }
    F.hand.push(F.draw.pop());
  }
}
function pickTarget() {
  const al = ORDER.filter(alive);
  const limbs = al.filter(p => p !== 'heart');
  return limbs.length ? pick(limbs.concat(rnd() < .35 ? ['heart'] : [])) : 'heart';
}
function startTurn() {
  F.turn++; S.turns++;
  F.ward = 0;
  F.tallow = 3 + F.tithe; F.tithe = 0;
  F.discard.push(...F.hand); F.hand = [];
  drawCards(5);
  const p = F.foe.pat[F.foe.idx % F.foe.pat.length];
  F.intent = { type: p[0], v: p[1] || 0, n: p[2] || 1, target: pickTarget() };
  F.sel = null; F.mode = null; F.busy = false;
  render();
}
function lightNow() {
  if (!F) return 0;
  let l = F.darkMod;
  for (const p of ORDER) { const b = F.board[p]; if (b) l += cardLight(b.card, p); }
  return Math.max(0, l);
}
function band(l) { return l <= 2 ? 'gloom' : l >= 7 ? 'blaze' : 'glow'; }
const MULT = { gloom: 1, glow: 1.2, blaze: 1.4 };

function canPlay(handIdx, p) {
  const c = F.hand[handIdx]; if (!c) return false;
  return !F.busy && alive(p) && !F.board[p] && CANDLES[c.id].cost <= F.tallow;
}
function playCard(handIdx, p) {
  if (F.busy) return false;
  const c = F.hand[handIdx]; if (!c) return false;
  const d = CANDLES[c.id];
  if (!alive(p)) { log(`Your ${PARTS[p].n} is gone. Re-cast it first.`); sfx('deny'); return false; }
  if (F.board[p]) { log('That socket already burns.'); sfx('deny'); return false; }
  if (d.cost > F.tallow) { log('Not enough tallow.'); sfx('deny'); return false; }
  F.tallow -= d.cost;
  F.hand.splice(handIdx, 1);
  F.board[p] = { card: c, wick: d.wick + (p === 'legL' || p === 'legR' ? 1 : 0) };
  F.sel = null;
  firstAction('place'); coachMark('drag');
  sfx('place');
  burst(p, 16, '#ffcc77');
  render();
  return true;
}
function setLean(l) {
  if (!S || !FLOW[l]) return;
  if (S.lean !== l) { S.lean = l; sfx('lean'); if (l !== 'upright') { trackOnce('first_lean'); coachMark('lean'); } }
  document.querySelectorAll('#lean button').forEach(b => b.classList.toggle('on', b.dataset.lean === l));
}
function applyMode(p) {
  if (!F || F.busy) return;
  if (F.mode === 'pinch') {
    if (!F.board[p]) return;
    if (F.tallow < 1) { sfx('deny'); return; }
    F.tallow--; F.mode = null; firstAction('pinch');
    F.busy = true;
    burnOut(p, 'pinch').then(async () => { F.busy = false; render(); await checkFoeDead(); });
  } else if (F.mode === 'recast') {
    recast(p);
  }
}
function recast(p) {
  const b = S.body[p];
  if (F.tallow < 1) { log('Not enough tallow.'); sfx('deny'); return false; }
  if (b.wax <= 0) {
    if (S.pool < 4) { log('The pool holds too little wax (4 needed).'); sfx('deny'); return false; }
    S.pool -= 4; F.tallow--; b.wax = Math.ceil(b.max * .6); S.recasts++;
    log(`You scoop the pool and re-cast your ${PARTS[p].n}. It is soft, but it holds a flame.`);
    track('recast', { part: p, step: S.step }); coachMark('lost');
  } else if (b.wax < b.max) {
    if (S.pool < 2) { log('The pool holds too little wax (2 needed).'); sfx('deny'); return false; }
    S.pool -= 2; F.tallow--; b.wax = Math.min(b.max, b.wax + 4);
    log(`You smear warm wax over your ${PARTS[p].n}.`);
  } else { log(`Your ${PARTS[p].n} is whole.`); return false; }
  F.mode = null; sfx('fuse'); burst(p, 20, '#efe4cc'); firstAction('recast');
  render(); return true;
}

/* wax runs downhill. Empty sockets pass it on; the floor collects it. */
function flowTargets(from) { return FLOW[S.lean][from] || ['pool']; }
function dripInto(from, ess, depth, out) {
  for (const t of flowTargets(from)) {
    if (t === 'pool') { out.pool++; continue; }
    const nb = F.board[t];
    if (!alive(t) || !nb) { if (depth < 3) dripInto(t, ess, depth + 1, out); else out.pool++; continue; }
    out.hits.push(t);
  }
  return out;
}
async function burnOut(p, cause) {
  const b = F.board[p]; if (!b) return;
  F.board[p] = null;
  const ess = essence(b.card);
  if (!b.card.tmp) F.discard.push(b.card);
  const pos = sockPos(p);
  for (let k = 0; k < 12; k++) smoke.push({ x: pos.x, y: pos.y - 24, vx: (rnd()-.5)*0.6, vy: -0.6 - rnd()*0.8, life: 1 });
  sfx('snuff');
  if (ess === 'ash') { render(); return; }
  const out = dripInto(p, ess, 0, { hits: [], pool: 0 });
  const single = out.hits.length === 1 && S.lean !== 'upright';
  const fusedNames = [];
  for (const t of out.hits) {
    const nb = F.board[t]; if (!nb) continue;
    const c = nb.card;
    const same = c.sigils.filter(s => s === ess).length;
    nb.wick += single ? 2 : 1;
    if (c.fused.length < 2 && same < 2 && !c.tmp && !CANDLES[c.id].junk) {
      c.sigils.push(ess); c.fused.push(ess); S.fusions++;
      fusedNames.push(PARTS[t].n);
      drip(p, t, SIG[ess].c);
      const q = sockPos(t); floater(q.x, q.y - 44, '+' + SIG[ess].n, SIG[ess].c, 1.15);
      flashSock(t);
      trackOnce('first_fusion', { step: S.step });
    } else {
      drip(p, t, '#d9cfb8');
      const q = sockPos(t); floater(q.x, q.y - 44, '+' + (single ? 2 : 1) + ' wick', '#e8a547');
    }
  }
  if (out.pool) { S.pool += out.pool; drip(p, 'pool', '#e8dcc3'); }
  if (fusedNames.length) { log(`${CANDLES[b.card.id].n} gutters. Its ${SIG[ess].n} runs down into your ${fusedNames.join(' and ')}. Forever.`); sfx('fuse'); }
  else if (out.pool) log(`${CANDLES[b.card.id].n} gutters. The wax runs to the floor (pool +${out.pool}).`);
  render();
  await sleep(380);
}

async function endTurn() {
  if (!F || F.busy) return;
  F.busy = true; F.sel = null; F.mode = null; firstAction('end_turn'); coachMark('burn'); if (coachCur === 'drip') coachMark('drip'); if (coachCur === 'light') coachMark('light');
  render();
  const l = lightNow(), bd = band(l), m = MULT[bd], fu = fury();
  S.maxLight = Math.max(S.maxLight, l);
  for (const p of ORDER) {
    const b = F.board[p]; if (!b) continue;
    const arm = p === 'armL' || p === 'armR', heart = p === 'heart';
    let fired = false, armUsed = false;
    for (const s of b.card.sigils) {
      const bonus = (arm && !armUsed ? 1 : 0) + fu;
      if (SIG[s].dmg || s === 'thorn') armUsed = true;
      if (s === 'ember' || s === 'brand') { hitFoe((SIG[s].dmg + bonus) * m, p); fired = true; }
      else if (s === 'thorn') { const k = ADJ[p].filter(n => F.board[n]).length; if (k) { hitFoe((k + bonus) * m, p); fired = true; } }
      else if (s === 'hunger') { hitFoe((3 + bonus) * m, p); ADJ[p].forEach(n => F.board[n] && (F.board[n].wick -= 1)); fired = true; }
      else if (s === 'ward') { const w = heart ? 6 : 3; F.ward += w; const q = sockPos(p); floater(q.x, q.y - 46, '+' + w + ' ward', '#9fb6da'); fired = true; }
      else if (s === 'mend') { const h = heart ? 4 : 2; const tgt = ORDER.filter(alive).sort((a, c) => (S.body[a].wax / S.body[a].max) - (S.body[c].wax / S.body[c].max))[0]; S.body[tgt].wax = Math.min(S.body[tgt].max, S.body[tgt].wax + h); const q = sockPos(tgt); floater(q.x, q.y - 46, '+' + h + ' wax', '#9fc98f'); fired = true; }
      else if (s === 'tithe') { F.tithe += 1; const q = sockPos(p); floater(q.x, q.y - 46, '+1 tallow', '#e8dcc0'); fired = true; }
    }
    if (fired) { flashSock(p); render(); await sleep(230); }
    if (F.foe.hp <= 0) break;
  }
  if (await checkFoeDead()) return;
  for (const p of ORDER) if (F.board[p]) F.board[p].wick -= 1;
  render(); await sleep(200);
  for (const p of ORDER) if (F.board[p] && F.board[p].wick <= 0) await burnOut(p, 'burn');
  if (await checkFoeDead()) return;
  await foeAct();
  if (S.dead) return;
  F.foe.idx++;
  startTurn();
}
function hitFoe(n, from) {
  n = Math.floor(n);
  const f = F.foe;
  let d = n;
  if (f.block > 0) { const a = Math.min(f.block, d); f.block -= a; d -= a; }
  f.hp -= d;
  foeAnim.hit = 1;
  const p = foeCenter();
  floater(p.x + (rnd()-.5)*70, p.y + (rnd()-.5)*40, d ? '-' + d : 'blocked', d ? '#ffb070' : '#9fb6da', 1.4);
  if (from != null) bolt(from);
  for (let k = 0; k < 6; k++) embers.push({ x: p.x, y: p.y, vx: (Math.random()-.5)*4, vy: (Math.random()-.5)*4, life: 1, c: '#ffb35a' });
  sfx('hit');
}
async function checkFoeDead() {
  if (F.foe.hp > 0) {
    if (F.fid === 'king' && !F.phase2 && F.foe.hp <= F.foe.maxHp / 2) {
      F.phase2 = true; F.darkMod = -2; F.foe.str += 2;
      log('The King inhales the room. The dark deepens: light −2, his blows +2.'); sfx('breath'); wind = 1; render();
    }
    return false;
  }
  F.busy = true;
  S.kills++; S.beaten.push(F.fid);
  track('fight_won', { foe: F.fid, turn: F.turn, step: S.step });
  log(`${F.foe.n} is snuffed.`);
  sfx('win');
  await sleep(700);
  S.deck = S.deck.filter(c => !c.tmp);
  // after a fight the wax settles: living parts firm up a little
  for (const p of ORDER) { const b = S.body[p]; if (b.wax > 0) b.wax = Math.min(b.max, b.wax + 3); }
  if (F.foe.boss) { S.step++; renderPath(); endRun(true, 'The Unlit King gutters out. You are the last flame now.'); return true; }
  if (F.foe.elite) { S.body.heart.max += 3; S.body.heart.wax += 3; }
  S.step++;
  reward();
  return true;
}
function damagePart(p, dmg) {
  const b = S.body[p];
  b.wax -= dmg;
  const q = sockPos(p);
  floater(q.x, q.y - 20, '-' + dmg, p === 'heart' ? '#ff4d4d' : '#ff9b7d', 1.4);
  for (let k = 0; k < 10; k++) embers.push({ x: q.x + (Math.random()-.5)*20, y: q.y, vx: (Math.random()-.5)*3, vy: Math.random()*2, life: 1, c: '#e8dcc3', g: .12 });
  partHit[p] = 1;
  if (b.wax <= 0) {
    b.wax = 0;
    if (p === 'heart') return 'dead';
    const c = F.board[p];
    F.board[p] = null; if (c && !c.card.tmp) F.discard.push(c.card);
    S.pool += 3; S.lost++;
    log(`Your ${PARTS[p].n} sloughs off and spatters the floor. Pool +3. Fury +1: every blow burns hotter.`);
    sfx('limb'); shake = 14;
    track('limb_lost', { part: p, foe: F.fid, step: S.step });
    for (let k = 0; k < 30; k++) embers.push({ x: q.x, y: q.y, vx: (Math.random()-.5)*5, vy: Math.random()*-3, life: 1, c: '#e8dcc3', g: .2 });
  }
  return 'ok';
}
async function foeAct() {
  const f = F.foe, it = F.intent, l = lightNow(), bd = band(l);
  f.block = 0;
  await sleep(250);
  if (['strike','heavy','multi','sever'].includes(it.type)) {
    if (f.moth && bd === 'blaze') { f.str += 1; log('The Moth Widow drinks your light. +1 strength.'); }
    const n = it.type === 'multi' ? it.n : 1;
    for (let k = 0; k < n; k++) {
      let dmg = it.v + f.str;
      if (bd === 'blaze') dmg = Math.floor(dmg * 1.5);
      if (bd === 'gloom' && rnd() < 0.5) { const q = sockPos('heart'); floater(q.x, q.y - 70, 'MISS', '#9a86c0', 1.3); sfx('miss'); await sleep(220); continue; }
      let tgt;
      if (it.type === 'sever') { const lm = LIMBS.filter(alive).sort((a, b) => S.body[a].wax - S.body[b].wax); tgt = lm[0] || 'heart'; }
      else if (bd === 'blaze') tgt = 'heart';
      else if (bd === 'gloom') tgt = pick(ORDER.filter(alive));
      else tgt = alive(it.target) ? it.target : pickTarget();
      const a = Math.min(F.ward, dmg); F.ward -= a; dmg -= a;
      foeAnim.lunge = 1;
      if (!dmg) { const q = sockPos(tgt); floater(q.x, q.y - 20, 'warded', '#9fb6da', 1.2); sfx('ward'); render(); await sleep(240); continue; }
      shake = tgt === 'heart' ? 11 : 7; sfx(tgt === 'heart' ? 'heartHit' : 'hurt');
      const r = damagePart(tgt, dmg);
      render(); await sleep(280);
      if (r === 'dead') { S.dead = true; endRun(false, `${f.n} found your heart on turn ${F.turn}${bd === 'blaze' ? ', by the light of your own blaze' : ''}. It had ${Math.max(0, f.hp)} ♥ left.`); return; }
    }
  } else if (it.type === 'ward') { f.block = it.v; log(`${f.n} hardens: ${it.v} ward.`); sfx('ward'); }
  else if (it.type === 'smother') {
    for (let k = 0; k < it.v; k++) { const c = mkCard('ash'); c.tmp = true; F.discard.push(c); }
    log(`${f.n} sings. ${it.v} Ash ${it.v > 1 ? 'candles fall' : 'candle falls'} into your discard.`); sfx('breath');
  } else if (it.type === 'breath' || it.type === 'devour') {
    const lit = ORDER.filter(p => F.board[p]);
    if (!lit.length) log('It finds nothing to take.');
    else if (it.type === 'breath') {
      lit.sort((a, b) => cardLight(F.board[b].card, b) - cardLight(F.board[a].card, a) || F.board[b].wick - F.board[a].wick);
      log(`${f.n} breathes. Your brightest flame gutters, and its wax runs down.`); sfx('breath'); wind = 1;
      await sleep(300);
      await burnOut(lit[0], 'breath');
    } else {
      lit.sort((a, b) => F.board[a].wick - F.board[b].wick);
      const p = lit[0]; const b = F.board[p];
      F.board[p] = null; if (!b.card.tmp) F.discard.push(b.card);
      log(`${f.n} devours the ${CANDLES[b.card.id].n} in your ${PARTS[p].n}. No wax remains.`); sfx('hurt'); shake = 6;
    }
  }
  render();
  await sleep(250);
}

/* ---------- rewards / shrines ---------- */
function cardHtml(c, extra = '') {
  const d = CANDLES[c.id];
  const base = d.s.map(s => `<em style="color:${SIG[s].c}">${SIG[s].n}</em> ${SIG[s].t}`);
  const fu = c.fused.length ? `<div class="f">✦ ${c.fused.map(s => SIG[s].n).join(' ✦ ')}</div>` : '';
  return `<div class="card ${extra}" data-uid="${c.uid}"><div class="cost">${d.cost}</div><div class="meta">☀${cardLight(c)} · ${d.wick}w</div>
    <div class="glyph ${d.wax||''}"></div><div class="nm">${d.n}</div><div class="tx">${base.join('<br>')}${fu}</div></div>`;
}
function reward() {
  const ids = shuffle(REWARD_POOL.slice()).slice(0, 3);
  const cs = ids.map(mkCard);
  const elite = FOES[F.fid].elite ? '<p class="tag">The Wick-Eater falls. Your heart hardens: +3 max wax.</p>' : '';
  showOverlay(`<div class="panel"><h2>Wax remains</h2>${elite}<p class="tag">Take one candle into your body's store.</p>
    <div class="choices">${cs.map(c => cardHtml(c)).join('')}</div><button class="skip">Take nothing</button></div>`);
  document.querySelectorAll('#overlay .card').forEach(el => el.onclick = () => {
    S.deck.push(cs.find(c => c.uid == el.dataset.uid)); sfx('place'); hideOverlay(); nextStep();
  });
  $('#overlay .skip').onclick = () => { hideOverlay(); nextStep(); };
}
function shrine() {
  const sig = pick(['ember','ward','brand','thorn','mend','radiant']);
  const lost = LIMBS.filter(p => !alive(p)).length;
  showOverlay(`<div class="panel"><h2>A cold shrine</h2><p class="tag">Old wax, still warm. You may take one offering.</p>
    <div class="choices">
      <div class="door" data-o="kneel"><b>Re-cast</b><small>Kneel in the shrine's wax. Every part is made whole${lost ? `, and your ${lost} lost limb${lost > 1 ? 's grow' : ' grows'} back` : ''}.</small></div>
      <div class="door" data-o="anoint"><b>Anoint</b><small>Fuse <span style="color:${SIG[sig].c}">${SIG[sig].n}</span> (${SIG[sig].t}) into a candle of your choice.</small></div>
      <div class="door" data-o="snuff"><b>Snuff</b><small>Remove one candle from your store for good.</small></div>
    </div></div>`);
  document.querySelectorAll('.door').forEach(d => d.onclick = () => {
    const o = d.dataset.o; sfx('place');
    if (o === 'kneel') { for (const p of ORDER) S.body[p].wax = S.body[p].max; S.pool += 2; hideOverlay(); S.step++; drawEffigyOnly(); nextStep(); }
    else deckPick(o === 'anoint' ? `Fuse ${SIG[sig].n} into which candle?` : 'Snuff which candle?', c => {
      if (o === 'anoint') { if (c.sigils.length < 4) { c.sigils.push(sig); c.fused.push(sig); S.fusions++; } }
      else S.deck = S.deck.filter(x => x !== c);
      hideOverlay(); S.step++; nextStep();
    });
  });
}
function deckPick(title, cb) {
  showOverlay(`<div class="panel"><h2>${title}</h2><div class="choices">${S.deck.map(c => cardHtml(c)).join('')}</div></div>`);
  document.querySelectorAll('#overlay .card').forEach(el => el.onclick = () => cb(S.deck.find(c => c.uid == el.dataset.uid)));
}

/* ---------- end ---------- */
function endRun(win, reason) {
  if (F) F.busy = true;
  const mins = ((Date.now() - S.start) / 60000).toFixed(1);
  const best = S.deck.slice().sort((a, b) => b.fused.length - a.fused.length)[0];
  track(win ? 'run_win' : 'run_loss', { reason, step: S.step, foe: F && F.fid, turns: S.turns, fusions: S.fusions, lost: S.lost, minutes: +mins });
  sfx(win ? 'win' : 'death');
  showOverlay(`<div class="panel"><h1 class="${win ? '' : 'dead'}">${win ? 'LAST FLAME' : 'GUTTERED'}</h1>
    <p class="reason">${reason}</p>
    <div class="stats">Doors passed: ${S.step} of ${S.path.length} · Turns: ${S.turns} · Fusions: ${S.fusions}<br>
    Limbs lost: ${S.lost} · Re-cast: ${S.recasts} · Brightest: ${S.maxLight} light · ${mins} min<br>
    ${best && best.fused.length ? `Most fused candle: <b>${CANDLES[best.id].n}</b> (${best.sigils.map(s => SIG[s].n).join(' + ')})` : 'No candle carried another\'s wax.'}</div>
    <button class="big" id="again">Kindle again</button></div>`);
  $('#again').onclick = () => { hideOverlay(); newRun(); };
}


/* ---------- coach marks: first run only, one line at a time ---------- */
const COACH_KEY = 'tb_coach_v1';
let coachSeen = {}; try { coachSeen = JSON.parse(localStorage.getItem(COACH_KEY) || '{}'); } catch (e) {}
let coachCur = null, coachTimer = 0;
function coachDone(k) { return !!coachSeen[k]; }
function coachMark(k) { if (coachSeen[k]) return; coachSeen[k] = 1; try { localStorage.setItem(COACH_KEY, JSON.stringify(coachSeen)); } catch (e) {} if (coachCur === k) coachHide(); }
function coachHide() { const c = $('#coach'); if (c) c.classList.remove('show'); document.querySelectorAll('.pulse').forEach(e => e.classList.remove('pulse')); coachCur = null; }
function coach(k, title, text, sel, opts = {}) {
  if (coachSeen[k] || titleMode) return;
  if (coachCur && coachCur !== k && !opts.force) return;
  let c = $('#coach'); if (!c) { c = document.createElement('div'); c.id = 'coach'; document.body.appendChild(c); c.addEventListener('pointerdown', e => { e.stopPropagation(); coachMark(coachCur); }); }
  coachCur = k;
  c.innerHTML = `<b>${title}</b>${text}<small>TAP TO DISMISS</small>`;
  document.querySelectorAll('.pulse').forEach(e => e.classList.remove('pulse'));
  const a = typeof sel === 'string' ? $(sel) : sel; if (!a) return;
  if (opts.pulse !== false) a.classList.add('pulse');
  const place = () => {
    if (coachCur !== k) return;
    const r = a.getBoundingClientRect(), cw = c.offsetWidth, ch = c.offsetHeight;
    const below = opts.side ? opts.side === 'below' : r.top < innerHeight * .45;
    let x = clamp(r.left + r.width / 2 - cw / 2, 8, innerWidth - cw - 8);
    let y = below ? r.bottom + 12 : r.top - ch - 12;
    y = clamp(y, 8, innerHeight - ch - 8);
    c.style.left = x + 'px'; c.style.top = y + 'px';
    c.style.setProperty('--ax', clamp(r.left + r.width / 2 - x, 14, cw - 14) + 'px');
    c.className = 'show ' + (below ? 'below' : 'above');
  };
  requestAnimationFrame(place); clearTimeout(coachTimer); coachTimer = setTimeout(place, 120);
  addEventListener('resize', place, { once: true });
}
function coachTick() {
  if (!F || !S || titleMode || $('#overlay').classList.contains('show')) { if (coachCur) $('#coach') && $('#coach').classList.remove('show'); return; }
  if (F.busy) return;
  const lit = ORDER.filter(p => F.board[p]);
  if (!coachDone('drag')) return coach('drag', 'Your body is the board', 'Drag a candle onto a glowing socket of your wax body. Or tap a card, then tap a socket.', '#hand', { side: 'above' });
  if (!coachDone('burn') && lit.length >= 1 && F.tallow === 0 || !coachDone('burn') && lit.length >= 2) return coach('burn', 'Burn', 'Every lit candle fires when you burn. Then each loses one wick.', '#endBtn', { side: 'above' });
  if (!coachDone('burn')) return;
  const dying = lit.find(p => F.board[p].wick <= 1 && p !== 'legL' && p !== 'legR');
  if (!coachDone('drip') && dying) return coach('drip', 'Wax runs downhill', `This candle burns out this turn. Its first sigil drips into the candle below and <i>fuses there for good</i>.`, `#effigy .sock[data-p="${dying}"]`, { side: 'below' });
  if (!coachDone('lean') && coachDone('drip') && S.turns >= 3) return coach('lean', 'Lean', 'Lean left or right to steer the dripping wax down one side. A single stream gives +2 wick.', '#lean', { side: 'above' });
  const bd = band(lightNow());
  if (!coachDone('light') && S.turns >= 2 && bd !== 'glow') return coach('light', bd === 'blaze' ? 'Blaze: it can see you' : 'Gloom: it is blind', bd === 'blaze' ? 'Your flames hit ×1.4, but its blows land ×1.5 and go for your Heart.' : 'Its intent is hidden and half its blows miss, but your flames are weaker.', '#dial', { side: 'below' });
  if (!coachDone('lost') && LIMBS.some(p => !alive(p))) return coach('lost', 'A limb fell', 'You gain Fury: +1 on every damage sigil. Spend 4 pool wax on Recast to grow it back.', '#recastBtn', { side: 'above' });
}
/* ---------- DOM render ---------- */
function log(t) { $('#log').textContent = t; }
function showOverlay(h) { const o = $('#overlay'); o.innerHTML = h; o.classList.add('show'); $('#seen').classList.remove('show'); }
function hideOverlay() { $('#overlay').classList.remove('show'); }
function buildSockets() {
  const ef = $('#effigy'); ef.innerHTML = '';
  for (const p of ORDER) {
    const s = document.createElement('div');
    s.className = 'sock'; s.dataset.p = p;
    s.style.left = PARTS[p].u * 100 + '%'; s.style.top = PARTS[p].v * 100 + '%';
    s.innerHTML = `<div class="sg"></div><span class="wk"></span><span class="nm">${PARTS[p].n}</span><div class="wx"><i></i></div>`;
    s.addEventListener('click', () => onSock(p));
    ef.appendChild(s);
  }
}
function drawEffigyOnly() { if (F) render(); }
function intentText() {
  const f = F.foe, it = F.intent, bd = band(lightNow());
  const mul = bd === 'blaze' ? 1.5 : 1, dm = v => Math.floor((v + f.str) * mul);
  const tgt = it.type === 'sever' ? 'your weakest limb' : bd === 'blaze' ? 'your HEART' : PARTS[alive(it.target) ? it.target : 'heart'].n;
  const hit = ['strike','heavy','multi','sever'].includes(it.type);
  const base = { strike: `Strike ${dm(it.v)}`, heavy: `Heavy blow ${dm(it.v)}`, multi: `${it.n} × ${dm(it.v)}`, sever: `Sever ${dm(it.v)}`, ward: `Ward ${it.v}`,
    breath: 'Breath: gutters your brightest flame', smother: `Smother: ${it.v} Ash into your store`, devour: 'Devour: eats your shortest candle' }[it.type];
  return { hit, html: `<span class="k">It will</span> ${base}${hit ? ` <span class="tgt">→ ${tgt}</span>` : ''}`, heart: hit && (bd === 'blaze' || (it.target === 'heart' && it.type !== 'sever')) };
}
function render() {
  if (!F || !S) return;
  const l = lightNow(), bd = band(l), f = F.foe;
  // dial
  $('#lightNum').textContent = l; $('#bandName').textContent = bd.toUpperCase();
  $('#dial').className = bd;
  $('#needle').style.transform = `rotate(${-90 + clamp(l, 0, 10) / 10 * 180}deg)`;
  if (F.lastBand && F.lastBand !== 'blaze' && bd === 'blaze') seenFlash();
  F.lastBand = bd;
  setAudioLight(l);
  // foe
  $('#foeHp').style.width = Math.max(0, f.hp / f.maxHp * 100) + '%';
  $('#foeHpTxt').textContent = `${Math.max(0, f.hp)} / ${f.maxHp}${f.block ? '   ⛉ ' + f.block : ''}${f.str ? '   +' + f.str + ' str' : ''}`;
  const ie = $('#intent');
  if (bd === 'gloom') { ie.className = 'hidden'; ie.innerHTML = 'In the gloom it cannot see you. Half its blows will miss.'; }
  else { const t = intentText(); ie.className = (t.hit ? 'danger' : '') + (t.heart ? ' heart' : ''); ie.innerHTML = t.html; }
  // side
  $('#pool').textContent = S.pool; $('#ward').textContent = F.ward; $('#fury').textContent = '+' + fury();
  // sockets
  renderSockets();
  // hand
  const hand = $('#hand');
  hand.innerHTML = F.hand.map((c, k) => cardHtml(c, (F.sel === k ? 'sel ' : '') + (CANDLES[c.id].cost > F.tallow ? 'poor' : ''))).join('');
  $('#tallow').innerHTML = `<div class="drops">${Array.from({ length: Math.max(3, F.tallow) }, (_, k) => `<i class="${k < F.tallow ? '' : 'spent'}"></i>`).join('')}</div>tallow`;
  $('#endBtn').disabled = F.busy;
  $('#pinchBtn').disabled = F.busy || F.tallow < 1;
  $('#recastBtn').disabled = F.busy || F.tallow < 1 || S.pool < 2;
  $('#pinchBtn').classList.toggle('on', F.mode === 'pinch');
  $('#recastBtn').classList.toggle('on', F.mode === 'recast');
  coachTick();
}
function renderSockets(hot) {
  const ef = $('#effigy'); if (!ef.children.length) return;
  const bd = F ? band(lightNow()) : 'glow';
  for (const s of ef.children) {
    const p = s.dataset.p, b = F && F.board[p], body = S.body[p], lost = body.wax <= 0;
    let cls = 'sock';
    if (lost) cls += ' lost';
    if (F && !F.busy) {
      if (F.sel != null && canPlay(F.sel, p)) cls += ' target';
      if (F.mode === 'pinch' && b) cls += ' modeT';
      if (F.mode === 'recast' && body.wax < body.max) cls += ' modeT';
    }
    if (hot === p) cls += ' hot';
    if (F && !F.busy && F.turn === 1 && S.step === 0 && !F.board[p] && alive(p) && F.sel == null && !F.mode && !coachDone('drag')) cls += ' invite';
    if (F && F.intent && bd === 'glow' && F.intent.target === p && ['strike','heavy','multi'].includes(F.intent.type)) cls += ' aimed';
    if (s.classList.contains('flash')) cls += ' flash';
    s.className = cls;
    const fr = body.wax / body.max;
    const bar = s.querySelector('.wx'); bar.classList.toggle('low', fr < .4); bar.firstChild.style.width = fr * 100 + '%';
    const nm = ef.clientWidth < 330 ? PARTS[p].n.replace(/^(Left|Right) /, (m, a) => a[0] + '. ') : PARTS[p].n;
    s.querySelector('.nm').textContent = lost ? nm + ' · lost' : `${nm} ${body.wax}`;
    const key = b ? b.card.uid + ':' + b.wick + ':' + b.card.sigils.join() : '';
    if (s.dataset.k !== key) {
      s.dataset.k = key;
      const d = b && CANDLES[b.card.id];
      s.querySelector('.sg').innerHTML = b ? b.card.sigils.map((x, k) => `<b class="${k >= d.s.length ? 'fu' : ''}" style="color:${SIG[x].c}">${SIG[x].n}</b>`).join('') + `<b class="wkb" title="wick: turns left">🕯${b.wick}</b>` : '';
      s.querySelector('.wk').textContent = b ? b.wick + 'w' : '';
    }
  }
}
function flashSock(p) { const s = $(`#effigy .sock[data-p="${p}"]`); if (!s) return; s.classList.remove('flash'); void s.offsetWidth; s.classList.add('flash'); }
function seenFlash() {
  const el = $('#seen'); el.querySelector('span').textContent = F.fid === 'king' ? 'HE CAN SEE YOU NOW' : 'IT CAN SEE YOU NOW';
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); shake = Math.max(shake, 9); sfx('seen');
  trackOnce('first_blaze', { step: S.step, foe: F.fid });
}

/* ---------- input: click, tap, drag & drop ---------- */
function onCard(k) { if (!F || F.busy) return; audioInit(); F.mode = null; F.sel = F.sel === k ? null : k; if (F.sel != null) { log('Drop it into a socket of your body.'); sfx('pick'); } render(); }
function onSock(p) {
  if (!F || F.busy) return; audioInit();
  if (F.mode) return applyMode(p);
  if (F.sel != null) return playCard(F.sel, p);
  const b = F.board[p];
  const flow = flowTargets(p).map(t => t === 'pool' ? 'the floor' : PARTS[t].n).join(' and ');
  if (b) { const d = CANDLES[b.card.id]; log(`${d.n} in your ${PARTS[p].n}: ${b.card.sigils.map(s => SIG[s].n + ' (' + SIG[s].t + ')').join(', ')}. When it gutters, its ${SIG[essence(b.card)].n} runs into your ${flow}.`); }
  else log(`${PARTS[p].n}: ${PARTS[p].bonus}. Wax from here runs into your ${flow}.`);
}
function sockAt(x, y) {
  let best = null, bd = 1e9;
  for (const s of $('#effigy').children) { const r = s.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2; const d = Math.hypot(x - cx, y - cy); if (d < r.width * .85 && d < bd) { bd = d; best = s.dataset.p; } }
  return best;
}
let drag = null;
$('#hand').addEventListener('pointerdown', e => {
  const el = e.target.closest('.card'); if (!el || !F || F.busy) return;
  audioInit();
  const k = [...$('#hand').children].indexOf(el);
  drag = { k, el, x0: e.clientX, y0: e.clientY, on: false, touch: e.pointerType === 'touch', ghost: null };
  e.preventDefault();
});
addEventListener('pointermove', e => {
  if (!drag) return;
  if (!drag.on && Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) > 8) {
    drag.on = true; F.mode = null; F.sel = drag.k;
    const r = drag.el.getBoundingClientRect();
    drag.ghost = drag.el.cloneNode(true); drag.ghost.classList.remove('sel', 'poor'); drag.ghost.style.width = r.width + 'px';
    $('#drag').appendChild(drag.ghost); drag.el.classList.add('ghost'); drag.w = r.width; drag.h = r.height; sfx('pick');
  }
  if (drag.on) {
    const oy = drag.touch ? 70 : 0;
    drag.px = e.clientX; drag.py = e.clientY - oy;
    drag.ghost.style.transform = `translate(${drag.px - drag.w / 2}px,${drag.py - drag.h * .35}px)`;
    const p = sockAt(drag.px, drag.py); if (p !== drag.hot) { drag.hot = p; renderSockets(p && canPlay(drag.k, p) ? p : null); }
  }
});
function endDrag(e, cancel) {
  if (!drag) return;
  const d = drag; drag = null;
  if (d.ghost) d.ghost.remove();
  if (!d.on) { if (!cancel) onCard(d.k); return; }
  F.sel = null;
  const p = cancel ? null : sockAt(d.px, d.py);
  if (p && playCard(d.k, p)) trackOnce('first_drag');
  else render();
}
addEventListener('pointerup', e => endDrag(e, false));
addEventListener('pointercancel', e => endDrag(e, true));
$('#endBtn').onclick = () => { audioInit(); endTurn(); };
$('#pinchBtn').onclick = () => { if (!F || F.busy) return; F.sel = null; F.mode = F.mode === 'pinch' ? null : 'pinch'; if (F.mode) log('Pinch which candle? It gutters now and its wax runs down.'); render(); };
$('#recastBtn').onclick = () => { if (!F || F.busy) return; F.sel = null; F.mode = F.mode === 'recast' ? null : 'recast'; if (F.mode) log(`Scoop the pool (${S.pool}): 4 wax re-casts a lost limb, 2 patches a damaged part.`); render(); };
document.querySelectorAll('#lean button').forEach(b => b.onclick = () => { audioInit(); setLean(b.dataset.lean); if (F) { log(b.dataset.lean === 'upright' ? 'You stand straight. Wax splits as it falls.' : `You lean ${b.dataset.lean}. Wax runs to that side, and a single stream feeds +2 wick.`); render(); } });
addEventListener('keydown', e => {
  if (!F || $('#overlay').classList.contains('show')) return;
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); endTurn(); }
  else if (e.key >= '1' && e.key <= '9') onCard(+e.key - 1);
  else if (e.key === 'a' || e.key === 'ArrowLeft') setLean('left');
  else if (e.key === 's' || e.key === 'ArrowDown') setLean('upright');
  else if (e.key === 'd' || e.key === 'ArrowRight') setLean('right');
  else if (e.key === 'Escape') { F.sel = null; F.mode = null; render(); }
});

/* ---------- audio (WebAudio, procedural) ---------- */
let AC = null, master = null, muted = false, choirG = null, droneF = null, crackleT = 0, tollT = 0;
try { muted = localStorage.getItem('tb_audio_v1') === 'off'; } catch (e) {}
function audioInit() {
  if (AC) { if (AC.state === 'suspended') AC.resume(); return; }
  try {
    AC = new (window.AudioContext || window.webkitAudioContext)();
    const comp = AC.createDynamicsCompressor(); comp.connect(AC.destination);
    master = AC.createGain(); master.gain.value = muted ? 0 : 0.85; master.connect(comp);
    droneF = AC.createBiquadFilter(); droneF.type = 'lowpass'; droneF.frequency.value = 180;
    const g = AC.createGain(); g.gain.value = 0.06; droneF.connect(g); g.connect(master);
    [49, 49.4, 73.4].forEach(f => { const o = AC.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; o.connect(droneF); o.start(); });
    const lfo = AC.createOscillator(), lg = AC.createGain(); lfo.frequency.value = .07; lg.gain.value = 60; lfo.connect(lg); lg.connect(droneF.frequency); lfo.start();
    // the choir: formant-filtered voices that swell with light
    const form = AC.createBiquadFilter(); form.type = 'bandpass'; form.frequency.value = 760; form.Q.value = 3;
    const form2 = AC.createBiquadFilter(); form2.type = 'bandpass'; form2.frequency.value = 1150; form2.Q.value = 4;
    choirG = AC.createGain(); choirG.gain.value = 0; form.connect(choirG); form2.connect(choirG); choirG.connect(master);
    [110, 130.8, 164.8, 220].forEach((f, i) => { const o = AC.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f; const v = AC.createOscillator(), vg = AC.createGain(); v.frequency.value = 4.5 + i * .4; vg.gain.value = 1.6; v.connect(vg); vg.connect(o.frequency); v.start(); o.connect(form); o.connect(form2); o.start(); });
  } catch (e) { AC = null; }
}
function setAudioLight(l) {
  if (!AC) return;
  const t = AC.currentTime, bd = band(l);
  choirG.gain.setTargetAtTime(muted ? 0 : bd === 'blaze' ? .05 : bd === 'glow' ? .016 : 0, t, .8);
  droneF.frequency.setTargetAtTime(150 + Math.min(10, l) * 30, t, .6);
}
function tone(f, d, type = 'sine', v = .08, f2, when = 0) {
  if (!AC || muted) return; const t = AC.currentTime + when, o = AC.createOscillator(), g = AC.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + .01); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.connect(g); g.connect(master); o.start(t); o.stop(t + d + .02);
}
function noise(d, v = .06, freq = 1500, type = 'bandpass', q = 1) {
  if (!AC || muted) return; const t = AC.currentTime, n = Math.floor(AC.sampleRate * d), buf = AC.createBuffer(1, n, AC.sampleRate), ch = buf.getChannelData(0);
  for (let i = 0; i < n; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 2);
  const s = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain(); s.buffer = buf; f.type = type; f.frequency.value = freq; f.Q.value = q; g.gain.value = v;
  s.connect(f); f.connect(g); g.connect(master); s.start(t);
}
function bellTone(f, v) { [1, 2.0, 2.76, 4.07].forEach((m, i) => tone(f * m, 3.2 / (i + 1), 'sine', v / (i + 1))); }
function sfx(k) {
  if (!AC) return;
  ({ place: () => { noise(.12, .09, 3200, 'highpass'); tone(300, .3, 'sine', .04, 520); noise(.4, .03, 900); },
     pick: () => tone(660, .08, 'triangle', .025, 880),
     lean: () => { noise(.25, .04, 400, 'lowpass'); tone(140, .3, 'sine', .04, 90); },
     hit: () => { tone(120, .25, 'triangle', .12, 45); noise(.12, .05, 2000); },
     hurt: () => { noise(.5, .09, 1800, 'bandpass', .7); tone(80, .3, 'sawtooth', .05, 40); },
     heartHit: () => { tone(55, .5, 'sine', .25, 30); noise(.5, .1, 1400, 'bandpass', .7); tone(70, .4, 'sawtooth', .05, 35); },
     limb: () => { tone(45, .8, 'sine', .3, 25); noise(.8, .14, 600, 'lowpass'); noise(.25, .08, 3000, 'highpass'); },
     ward: () => tone(880, .25, 'triangle', .03, 1320),
     snuff: () => noise(.45, .06, 700),
     drip: () => tone(1100, .1, 'sine', .05, 420),
     fuse: () => { tone(330, .9, 'sine', .05); tone(495, .9, 'sine', .035, null, .06); tone(742, 1.2, 'triangle', .02, null, .12); },
     breath: () => noise(1.3, .1, 450, 'lowpass'),
     bell: () => bellTone(98, .08),
     seen: () => { bellTone(65, .14); noise(1.2, .07, 300, 'lowpass'); tone(220, 1.6, 'sawtooth', .02, 207); },
     miss: () => noise(.2, .05, 3000),
     deny: () => tone(150, .12, 'square', .03),
     win: () => { [261, 329, 392, 523].forEach((f, i) => tone(f, 1.6, 'sine', .045, null, i * .09)); },
     death: () => { tone(98, 3, 'sawtooth', .06, 36); noise(2, .07, 300, 'lowpass'); bellTone(49, .1); },
  })[k]?.();
}
$('#mute').onclick = () => { audioInit(); muted = !muted; try { localStorage.setItem('tb_audio_v1', muted ? 'off' : 'on'); } catch (e) {} $('#mute').style.opacity = muted ? .4 : 1; if (master) master.gain.value = muted ? 0 : .85; };
$('#mute').style.opacity = muted ? .4 : 1;

/* ---------- canvas: crypt, effigy, foe, flames ---------- */
const bg = $('#bg'), fx = $('#fx'), bx = bg.getContext('2d'), fxx = fx.getContext('2d');
let W = 0, H = 0, DPR = 1, shake = 0, wind = 0, T = 0;
const embers = [], smoke = [], drips = [], floaters = [], bolts = [];
const foeAnim = { shape: 'hood', hit: 0, appear: 0, lunge: 0 };
const partHit = {};
function resize() { DPR = Math.min(2, window.devicePixelRatio || 1); W = innerWidth; H = innerHeight; for (const c of [bg, fx]) { c.width = W * DPR; c.height = H * DPR; } }
addEventListener('resize', resize); resize();
function effRect() { return $('#effigy').getBoundingClientRect(); }
function sockPos(p) {
  const r = effRect();
  if (p === 'pool') return { x: r.left + r.width * .5, y: r.top + r.height * .965 };
  return { x: r.left + PARTS[p].u * r.width, y: r.top + (PARTS[p].v + .015) * r.height };
}
function foeCenter() { const r = $('#foe').getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height * .5 }; }
function floater(x, y, t, c, s = 1) { floaters.push({ x, y, t, c, s, life: 1 }); }
function burst(p, n, c) { const q = sockPos(p); for (let k = 0; k < n; k++) embers.push({ x: q.x, y: q.y - 16, vx: (Math.random()-.5)*3, vy: -Math.random()*3, life: 1, c }); }
function drip(a, b, c) { for (let k = 0; k < 7; k++) drips.push({ a, b, t: -k * 0.07, c }); }
function bolt(p) { bolts.push({ p: candleTop(p) || sockPos(p), life: 1 }); }
function candleH(b, r) { return (r.height / 560) * (16 + Math.min(6, b.wick) * 9); }
function candleTop(p) { if (!F || !F.board[p]) return null; const q = sockPos(p), r = effRect(); return { x: q.x, y: q.y - candleH(F.board[p], r) }; }

const WAXC = { '': ['#b9ab8e','#f3ead6','#a8997c'], red: ['#5a101c','#c0384e','#4a0c16'], black: ['#141118','#463e55','#0e0c11'], bone: ['#cfc6b4','#fffaf0','#bdb3a0'], ash: ['#333','#5f5f5f','#2a2a2a'] };
function limbPath(ctx, pts) { ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]); }
function drawBody(ctx, r, vis) {
  const w = r.width, h = r.height, X = u => r.left + u * w, Y = v => r.top + v * h;
  const body = S ? S.body : null;
  const fr = p => body ? body[p].wax / body[p].max : 1;
  const gone = p => body && body[p].wax <= 0;
  const waxGrad = (y0, y1) => { const g = ctx.createLinearGradient(0, Y(y0), 0, Y(y1)); g.addColorStop(0, '#f1e7d2'); g.addColorStop(.55, '#cbbd9f'); g.addColorStop(1, '#7c705d'); return g; };
  ctx.save();
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  // floor shadow + wax pool
  const pool = S ? S.pool : 3;
  ctx.fillStyle = 'rgba(0,0,0,.55)'; ctx.beginPath(); ctx.ellipse(X(.5), Y(.955), w * .42, h * .03, 0, 0, Math.PI * 2); ctx.fill();
  const pw = w * (.12 + Math.min(1, pool / 14) * .34);
  const pg = ctx.createRadialGradient(X(.5), Y(.955), 2, X(.5), Y(.955), pw);
  pg.addColorStop(0, '#efe4cc'); pg.addColorStop(.7, '#b9ab8e'); pg.addColorStop(1, 'rgba(120,108,90,0)');
  ctx.fillStyle = pg; ctx.beginPath(); ctx.ellipse(X(.5), Y(.958), pw, h * .022 * (1 + Math.min(1, pool / 14)), 0, 0, Math.PI * 2); ctx.fill();
  const limb = (p, pts, lw) => {
    const f = fr(p), lost = gone(p);
    let P = pts;
    if (lost) { const a = pts[0], b = pts[1]; P = [a, [a[0] + (b[0] - a[0]) * .35, a[1] + (b[1] - a[1]) * .35]]; }
    const L = P.map(([u, v]) => [X(u), Y(v)]);
    const lwPx = w * lw * (lost ? .8 : .72 + .28 * f);
    ctx.strokeStyle = '#211a13'; ctx.lineWidth = lwPx + 4; limbPath(ctx, L); ctx.stroke();
    ctx.strokeStyle = waxGrad(pts[0][1] - .05, pts[pts.length - 1][1] + .05); ctx.lineWidth = lwPx; limbPath(ctx, L); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,250,235,.35)'; ctx.lineWidth = lwPx * .22; ctx.save(); ctx.translate(-lwPx * .2, 0); limbPath(ctx, L); ctx.stroke(); ctx.restore();
    if (partHit[p] > 0) { ctx.strokeStyle = `rgba(255,120,90,${partHit[p] * .7})`; ctx.lineWidth = lwPx; limbPath(ctx, L); ctx.stroke(); }
    // melt drips
    const n = lost ? 3 : Math.round((1 - f) * 5);
    for (let k = 0; k < n; k++) {
      const s = (k * 0.37 + p.length * .13) % 1, seg = Math.min(L.length - 2, Math.floor(s * (L.length - 1)));
      const a = L[seg], b = L[seg + 1], tt = (s * (L.length - 1)) % 1;
      const x = a[0] + (b[0] - a[0]) * tt + (k % 2 ? 1 : -1) * lwPx * .35, y = a[1] + (b[1] - a[1]) * tt;
      const len = h * (.02 + .03 * ((k * 7) % 3) / 2) * (1 + Math.sin(T * .7 + k) * .1);
      ctx.fillStyle = '#d8ccb2'; ctx.beginPath(); ctx.moveTo(x - 3, y); ctx.quadraticCurveTo(x - 2.5, y + len * .7, x, y + len); ctx.quadraticCurveTo(x + 2.5, y + len * .7, x + 3, y); ctx.fill();
    }
    if (lost) { const e = L[L.length - 1]; ctx.fillStyle = '#6E1423'; ctx.beginPath(); ctx.arc(e[0], e[1], lwPx * .32, 0, Math.PI * 2); ctx.fill(); }
  };
  // legs
  limb('legL', [[.44, .62], [.36, .78], [.33, .92]], .13);
  limb('legR', [[.56, .62], [.64, .78], [.67, .92]], .13);
  for (const [p, u] of [['legL', .31], ['legR', .69]]) if (!gone(p)) { ctx.fillStyle = '#9d907a'; ctx.beginPath(); ctx.ellipse(X(u), Y(.93), w * .075, h * .018, 0, 0, Math.PI * 2); ctx.fill(); }
  // arms
  limb('armL', [[.31, .33], [.22, .43], [.155, .54]], .1);
  limb('armR', [[.69, .33], [.78, .43], [.845, .54]], .1);
  for (const p of ['armL', 'armR']) if (!gone(p)) { const u = PARTS[p].u; ctx.fillStyle = '#a89a80'; ctx.beginPath(); ctx.ellipse(X(u), Y(.545), w * .06, h * .022, 0, 0, Math.PI); ctx.fill(); }
  // torso
  const fh = fr('heart');
  ctx.beginPath();
  ctx.moveTo(X(.29), Y(.31)); ctx.quadraticCurveTo(X(.5), Y(.28), X(.71), Y(.31));
  ctx.quadraticCurveTo(X(.69), Y(.47), X(.62), Y(.64)); ctx.quadraticCurveTo(X(.5), Y(.665 - (1 - fh) * .02), X(.38), Y(.64));
  ctx.quadraticCurveTo(X(.31), Y(.47), X(.29), Y(.31)); ctx.closePath();
  ctx.fillStyle = waxGrad(.28, .66); ctx.fill(); ctx.strokeStyle = '#211a13'; ctx.lineWidth = 3; ctx.stroke();
  if (partHit.heart > 0) { ctx.fillStyle = `rgba(255,70,60,${partHit.heart * .45})`; ctx.fill(); }
  // rib/plate seams
  ctx.strokeStyle = 'rgba(60,48,36,.35)'; ctx.lineWidth = 1.5;
  for (const v of [.52, .58]) { ctx.beginPath(); ctx.moveTo(X(.36), Y(v)); ctx.quadraticCurveTo(X(.5), Y(v + .015), X(.64), Y(v)); ctx.stroke(); }
  // heart cavity
  const lit = F && F.board.heart;
  const hc = ctx.createRadialGradient(X(.5), Y(.43), 2, X(.5), Y(.43), w * .085);
  hc.addColorStop(0, lit ? '#3a1a0a' : '#120c08'); hc.addColorStop(.8, '#0b0806'); hc.addColorStop(1, '#3b2f22');
  ctx.fillStyle = hc; ctx.beginPath(); ctx.ellipse(X(.5), Y(.425), w * .08, h * .06, 0, 0, Math.PI * 2); ctx.fill();
  if (S && fh < .5) { ctx.strokeStyle = `rgba(163,32,47,${.4 + Math.sin(T * 6) * .25})`; ctx.lineWidth = 2; ctx.stroke(); }
  // head + crown
  const cg = gone('crown'), fc = fr('crown');
  ctx.fillStyle = waxGrad(.17, .29);
  ctx.beginPath(); const hx = X(.5), top = Y(cg ? .2 : .17);
  ctx.moveTo(hx - w * .085, Y(.285)); ctx.lineTo(hx - w * .09, top + h * .03); ctx.quadraticCurveTo(hx, top - h * .015, hx + w * .09, top + h * .03); ctx.lineTo(hx + w * .085, Y(.285)); ctx.closePath();
  ctx.fill(); ctx.strokeStyle = '#211a13'; ctx.lineWidth = 3; ctx.stroke();
  if (partHit.crown > 0) { ctx.fillStyle = `rgba(255,120,90,${partHit.crown * .6})`; ctx.fill(); }
  // visor: the eyes are always lit from within
  ctx.fillStyle = '#0b0806'; ctx.fillRect(hx - w * .065, Y(.225), w * .13, h * .012);
  const eg = ctx.createLinearGradient(hx - w * .065, 0, hx + w * .065, 0); eg.addColorStop(0, 'rgba(255,140,40,0)'); eg.addColorStop(.5, `rgba(255,170,70,${.5 + vis * .4})`); eg.addColorStop(1, 'rgba(255,140,40,0)');
  ctx.fillStyle = eg; ctx.fillRect(hx - w * .065, Y(.227), w * .13, h * .007);
  if (!cg) {
    ctx.fillStyle = '#c9b98f';
    const sp = 5, cw = w * .17 * (.75 + .25 * fc);
    ctx.beginPath(); ctx.moveTo(hx - cw / 2, top + h * .028);
    for (let k = 0; k <= sp; k++) { const x = hx - cw / 2 + k * cw / sp; const tall = (k % 2 ? .035 : .02) * (.6 + .4 * fc); ctx.lineTo(x, top + h * .028 - (k === 0 || k === sp ? 0 : h * tall)); if (k < sp) ctx.lineTo(x + cw / sp / 2, top + h * .02); }
    ctx.lineTo(hx + cw / 2, top + h * .03); ctx.closePath(); ctx.fill(); ctx.strokeStyle = '#3b2f22'; ctx.lineWidth = 1.5; ctx.stroke();
  }
  ctx.restore();
}
function drawFoe(ctx, cx, cy, sc, vis) {
  const sh = foeAnim.shape, hit = foeAnim.hit;
  ctx.save(); ctx.translate(cx + (hit ? (Math.random() - .5) * 12 * hit : 0) + foeAnim.lunge * 26, cy); ctx.scale(sc, sc);
  const breath = Math.sin(T * 1.3) * 2;
  const g = ctx.createLinearGradient(0, -130, 0, 110);
  g.addColorStop(0, `rgba(${120 + 100 * vis | 0},${100 + 60 * vis | 0},${80 + 30 * vis | 0},${0.18 + vis * 0.5})`); g.addColorStop(.45, `rgba(22,16,12,${0.45 + vis * 0.5})`); g.addColorStop(1, 'rgba(11,10,8,0)');
  ctx.fillStyle = g; ctx.strokeStyle = `rgba(232,220,195,${0.06 + vis * 0.28})`; ctx.lineWidth = 1.4;
  ctx.beginPath();
  if (sh === 'moth') { for (const s of [-1, 1]) { ctx.moveTo(0, -30); ctx.bezierCurveTo(s * 130, -130 + breath * 3, s * 160, 10, s * 30, 20); ctx.bezierCurveTo(s * 120, 40, s * 80, 110, 0, 40); } }
  else if (sh === 'bell') { ctx.moveTo(-22, -80); ctx.quadraticCurveTo(0, -102, 22, -80); ctx.lineTo(62, 46); ctx.quadraticCurveTo(0, 66, -62, 46); ctx.closePath(); }
  else if (sh === 'choir') { for (const ox of [-64, 0, 64]) { ctx.moveTo(ox - 26, 100); ctx.quadraticCurveTo(ox - 28, -40, ox, -64 - (ox ? 0 : 16) + breath); ctx.quadraticCurveTo(ox + 28, -40, ox + 26, 100); } }
  else if (sh === 'maw') { ctx.ellipse(0, -10, 88, 76 + breath, 0, 0, Math.PI * 2); }
  else { ctx.moveTo(-76, 100); ctx.quadraticCurveTo(-82, -10, -44, -32); ctx.quadraticCurveTo(-32, -104 + breath, 0, -110 + breath); ctx.quadraticCurveTo(32, -104 + breath, 44, -32); ctx.quadraticCurveTo(82, -10, 76, 100); ctx.closePath(); }
  ctx.fill(); ctx.stroke();
  if (sh === 'king') { ctx.beginPath(); for (let k = -2; k <= 2; k++) { ctx.moveTo(k * 12 - 7, -100 + breath); ctx.lineTo(k * 12, -134 + Math.abs(k) * 6 + breath); ctx.lineTo(k * 12 + 7, -100 + breath); } ctx.fillStyle = `rgba(170,140,80,${0.25 + vis * 0.6})`; ctx.fill(); }
  if (sh === 'maw') { ctx.beginPath(); for (let k = -5; k <= 5; k++) { ctx.moveTo(k * 13 - 5, 0); ctx.lineTo(k * 13, 20 + Math.sin(T * 3 + k) * 3); ctx.lineTo(k * 13 + 5, 0); } ctx.fillStyle = `rgba(232,220,195,${0.3 + vis * 0.6})`; ctx.fill(); }
  const ey = sh === 'maw' ? -38 : sh === 'bell' ? -44 : sh === 'moth' ? -20 : -68 + breath;
  const blink = (Math.sin(T * .7) > .985) ? .15 : 1, seeing = F && band(lightNow()) === 'blaze';
  for (const ex of (sh === 'choir' ? [-70, -58, -6, 6, 58, 70] : [-10, 10])) {
    const rr = seeing ? 13 : 9;
    const e = ctx.createRadialGradient(ex, ey, 0, ex, ey, rr);
    e.addColorStop(0, seeing ? `rgba(255,70,50,${blink})` : `rgba(255,${hit ? 120 : 225},${hit ? 90 : 190},${.95 * blink})`); e.addColorStop(1, 'rgba(255,60,40,0)');
    ctx.fillStyle = e; ctx.beginPath(); ctx.arc(ex, ey, rr, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}
function drawCandle(ctx, x, y, hgt, wpx, wax, fusedCols) {
  const c = WAXC[wax || ''];
  const g = ctx.createLinearGradient(x - wpx / 2, 0, x + wpx / 2, 0); g.addColorStop(0, c[0]); g.addColorStop(.4, c[1]); g.addColorStop(1, c[2]);
  ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - wpx / 2, y); ctx.lineTo(x - wpx / 2, y - hgt + 3); ctx.quadraticCurveTo(x, y - hgt - 3, x + wpx / 2, y - hgt + 3); ctx.lineTo(x + wpx / 2, y); ctx.closePath(); ctx.fill();
  ctx.fillStyle = c[1]; ctx.beginPath(); ctx.moveTo(x + wpx * .15, y - hgt + 2); ctx.quadraticCurveTo(x + wpx * .3, y - hgt * .55, x + wpx * .2, y - hgt * .45); ctx.quadraticCurveTo(x + wpx * .05, y - hgt * .6, x + wpx * .1, y - hgt + 2); ctx.fill();
  fusedCols.forEach((col, i) => { ctx.strokeStyle = col; ctx.shadowColor = col; ctx.shadowBlur = 8; ctx.lineWidth = 2.2; ctx.beginPath(); ctx.moveTo(x - wpx / 2, y - hgt * (.3 + i * .22)); ctx.lineTo(x + wpx / 2, y - hgt * (.3 + i * .22) - 2); ctx.stroke(); ctx.shadowBlur = 0; });
  ctx.strokeStyle = '#1a140e'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(x, y - hgt); ctx.lineTo(x, y - hgt - 5); ctx.stroke();
}
function drawFlame(ctx, x, y, s, seed, dark) {
  const fl = Math.sin(T * 9 + seed) * .12 + Math.sin(T * 23 + seed * 3) * .06 + (wind ? Math.sin(T * 40) * wind * .5 : 0);
  const h = 24 * s * (1 + fl), w = 7 * s;
  const g = ctx.createLinearGradient(x, y, x, y - h);
  if (dark) { g.addColorStop(0, '#2a1f40'); g.addColorStop(.5, '#7a5fb0'); g.addColorStop(1, 'rgba(200,180,255,0)'); }
  else { g.addColorStop(0, '#fff6dc'); g.addColorStop(.35, '#ffc35a'); g.addColorStop(.8, 'rgba(255,90,30,.7)'); g.addColorStop(1, 'rgba(255,60,20,0)'); }
  ctx.fillStyle = g; ctx.beginPath(); ctx.moveTo(x - w, y); ctx.quadraticCurveTo(x - w * 1.1, y - h * .5, x + fl * 8, y - h); ctx.quadraticCurveTo(x + w * 1.1, y - h * .5, x + w, y); ctx.quadraticCurveTo(x, y + w * .6, x - w, y); ctx.fill();
  ctx.fillStyle = 'rgba(80,140,255,.5)'; ctx.beginPath(); ctx.ellipse(x, y - 2, w * .45, w * .5, 0, 0, Math.PI * 2); ctx.fill();
}
function glow(ctx, x, y, rad, col, a) { const g = ctx.createRadialGradient(x, y, 0, x, y, rad); g.addColorStop(0, `rgba(${col},${a})`); g.addColorStop(1, `rgba(${col},0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2); ctx.fill(); }
let titleMode = true, lastVis = -1;
function frame(ts) {
  T = ts / 1000;
  const inFight = F && !titleMode;
  const l = inFight ? lightNow() : 5 + Math.sin(T) * .6;
  const vis = Math.min(1, l / 8);
  const sx = shake ? (Math.random() - .5) * shake : 0, sy = shake ? (Math.random() - .5) * shake : 0;
  shake *= .86; if (shake < .3) shake = 0; wind *= .96; if (wind < .02) wind = 0;
  foeAnim.hit *= .88; if (foeAnim.hit < .03) foeAnim.hit = 0; foeAnim.lunge *= .85;
  for (const p in partHit) partHit[p] *= .9;
  if (Math.abs(vis - lastVis) > .02) { lastVis = vis; $('#bgimg').style.opacity = (.28 + vis * .42).toFixed(2); $('#bgimg').style.filter = `saturate(${.6 + vis * .5}) brightness(${.7 + vis * .5})`; }
  const r = effRect();
  // bg canvas
  bx.setTransform(DPR, 0, 0, DPR, sx * DPR, sy * DPR); bx.clearRect(-30, -30, W + 60, H + 60);
  if (r.width > 10) {
    drawBody(bx, r, vis);
    bx.save(); bx.globalCompositeOperation = 'source-atop'; bx.fillStyle = `rgba(11,10,8,${.62 - vis * .5})`; bx.fillRect(0, 0, W, H); bx.restore();
    bx.save(); bx.globalCompositeOperation = 'lighter';
    const flames = inFight ? ORDER.filter(p => F.board[p] && F.board[p].card.id !== 'ash').map(p => candleTop(p)) : ORDER.map(p => { const q = sockPos(p); return { x: q.x, y: q.y - r.height * .06 }; });
    for (const q of flames) glow(bx, q.x, q.y, r.height * .3, '255,150,60', .12 + vis * .05);
    bx.restore();
  }
  if (inFight) { foeAnim.appear = Math.min(1, foeAnim.appear + .02); const fc = foeCenter(), fr = $('#foe').getBoundingClientRect(); drawFoe(bx, fc.x, fc.y + 10, Math.min(1.25, fr.height / 250, fr.width / 340) * (.9 + foeAnim.appear * .1), vis * foeAnim.appear); }
  else if (titleMode) { foeAnim.shape = 'king'; drawFoe(bx, W / 2, H * .18, Math.min(1.1, H / 700), .2 + Math.sin(T * .5) * .08); }
  const vg = bx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * .28, W / 2, H / 2, Math.max(W, H) * .78);
  vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, `rgba(0,0,0,${.82 - vis * .3})`); bx.fillStyle = vg; bx.fillRect(-30, -30, W + 60, H + 60);
  if (inFight && band(l) === 'blaze') { bx.fillStyle = `rgba(110,20,35,${.08 + Math.sin(T * 3) * .04})`; bx.fillRect(-30, -30, W + 60, H + 60); }

  // fx canvas
  fxx.setTransform(DPR, 0, 0, DPR, sx * DPR, sy * DPR); fxx.clearRect(-30, -30, W + 60, H + 60);
  const ovl = $('#overlay').classList.contains('show');
  if (inFight && !ovl && r.width > 10) {
    // wax channels: where spent wax will run under the current stance
    fxx.save(); fxx.setLineDash([3, 7]); fxx.lineDashOffset = -T * 18; fxx.lineWidth = 2; fxx.strokeStyle = 'rgba(255,179,71,.28)';
    for (const [a, ts] of Object.entries(FLOW[S.lean])) { if (!alive(a)) continue; const p = sockPos(a); for (const t of ts) { const q = sockPos(t); fxx.beginPath(); fxx.moveTo(p.x, p.y + 4); fxx.quadraticCurveTo((p.x + q.x) / 2 + (q.x === p.x ? 14 : 0), (p.y + q.y) / 2, q.x, q.y - (t === 'pool' ? 0 : 6)); fxx.stroke(); } }
    fxx.restore();
    const sc = r.height / 560;
    for (const p of ORDER) {
      const b = F.board[p]; if (!b) continue;
      const q = sockPos(p), hgt = candleH(b, r), d = CANDLES[b.card.id];
      drawCandle(fxx, q.x, q.y, hgt, 15 * sc + 4, d.wax, b.card.fused.map(s => SIG[s].c));
      if (d.junk) continue;
      const cl = cardLight(b.card, p);
      drawFlame(fxx, q.x, q.y - hgt - 4, (.75 + Math.max(0, cl) * .12) * Math.max(.7, sc), ORDER.indexOf(p) * 1.7, cl < 0);
      if (Math.random() < .05) embers.push({ x: q.x, y: q.y - hgt - 14, vx: (Math.random() - .5) * .6 + wind * 2, vy: -.5 - Math.random(), life: 1, c: cl < 0 ? '#9a86c0' : '#ffb35a' });
    }
  }
  if (titleMode && r.width > 10) { const sc = r.height / 560; ORDER.forEach((p, k) => { const q = sockPos(p); drawCandle(fxx, q.x, q.y, (30 + (k % 3) * 10) * sc, 15 * sc + 4, k === 3 ? 'red' : '', []); drawFlame(fxx, q.x, q.y - (30 + (k % 3) * 10) * sc - 4, Math.max(.7, sc) * .95, k * 2.1, false); }); }
  for (let k = bolts.length - 1; k >= 0; k--) { const b = bolts[k]; b.life -= .06; if (b.life <= 0) { bolts.splice(k, 1); continue; }
    const q = foeCenter(); fxx.strokeStyle = `rgba(255,190,110,${b.life * .75})`; fxx.lineWidth = 2.5 * b.life; fxx.shadowColor = '#ff8a3c'; fxx.shadowBlur = 12; fxx.beginPath(); fxx.moveTo(b.p.x, b.p.y);
    fxx.quadraticCurveTo((b.p.x + q.x) / 2 + (Math.random() - .5) * 40, Math.min(b.p.y, q.y) - 40, q.x, q.y); fxx.stroke(); fxx.shadowBlur = 0; }
  for (let k = drips.length - 1; k >= 0; k--) { const d = drips[k]; d.t += FAST ? 1 : .03; if (d.t > 1) { drips.splice(k, 1); continue; } if (d.t < 0) continue;
    const p = sockPos(d.a), q = sockPos(d.b), e = d.t * d.t;
    const x = p.x + (q.x - p.x) * d.t, y = p.y + (q.y - p.y) * e;
    fxx.fillStyle = d.c; fxx.shadowColor = d.c; fxx.shadowBlur = 10; fxx.beginPath(); fxx.ellipse(x, y, 3.5, 5, 0, 0, Math.PI * 2); fxx.fill(); fxx.shadowBlur = 0; }
  for (let k = embers.length - 1; k >= 0; k--) { const e = embers[k]; e.x += e.vx; e.y += e.vy; e.vy += e.g || -.01; e.life -= .014; if (e.life <= 0) { embers.splice(k, 1); continue; }
    fxx.fillStyle = e.c; fxx.globalAlpha = e.life; fxx.fillRect(e.x, e.y, 2.2, 2.2); fxx.globalAlpha = 1; }
  for (let k = smoke.length - 1; k >= 0; k--) { const e = smoke[k]; e.x += e.vx; e.y += e.vy; e.life -= .01; if (e.life <= 0) { smoke.splice(k, 1); continue; }
    fxx.fillStyle = `rgba(150,140,130,${e.life * .14})`; fxx.beginPath(); fxx.arc(e.x, e.y, 6 + (1 - e.life) * 18, 0, Math.PI * 2); fxx.fill(); }
  fxx.textAlign = 'center';
  for (let k = floaters.length - 1; k >= 0; k--) { const f = floaters[k]; f.y -= .55; f.life -= .013; if (f.life <= 0) { floaters.splice(k, 1); continue; }
    fxx.font = `700 ${16 * f.s | 0}px Cinzel,Georgia,serif`; fxx.fillStyle = f.c; fxx.globalAlpha = Math.min(1, f.life * 2); fxx.shadowColor = '#000'; fxx.shadowBlur = 6; fxx.fillText(f.t, f.x, f.y); fxx.shadowBlur = 0; fxx.globalAlpha = 1; }
  // ambience: candle crackle and a far bell
  if (AC && !muted && inFight) {
    const n = ORDER.filter(p => F.board[p]).length;
    if (T > crackleT) { crackleT = T + .08 + Math.random() * .5 / (n + .5); if (n && Math.random() < .5) noise(.02 + Math.random() * .03, .015 + n * .004, 2500 + Math.random() * 3000, 'highpass'); }
    if (T > tollT) { if (tollT) bellTone(73.4, .035); tollT = T + 18 + Math.random() * 10; }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- title ---------- */
function title() {
  titleMode = true; $('#app').style.visibility = 'hidden';
  showOverlay(`<div class="panel"><h1>TALLOWBORN</h1><p class="tag">You are the candle. Burn well.</p>
    <div class="rules">
      <div><b>Burn</b>Your wax body has six sockets. Drag candles into them. Each one fires every turn, and burns down.</div>
      <div><b>Drip</b>A spent candle runs down your body and <i>fuses its power into the candle below it</i>, forever. Lean to steer the wax.</div>
      <div><b>Be seen</b>More light, harder blows. But in Blaze it sees your heart. Lost limbs lose sockets: scoop the floor to re-cast them.</div>
    </div>
    <button class="big" id="go">Kindle</button><div class="small">7 doors · about 15 minutes · sound on ♪ · drag or tap</div></div>`);
  $('#go').onclick = () => { audioInit(); titleMode = false; $('#app').style.visibility = ''; hideOverlay(); newRun(); };
}
track('opened', { ref: document.referrer ? new URL(document.referrer).hostname : '', w: innerWidth });
buildSocketsTitle();
function buildSocketsTitle() { const body = {}; for (const p of ORDER) body[p] = { wax: PARTS[p].max, max: PARTS[p].max }; S = null; }
title();

/* test hook */
window.TB = { get S() { return S; }, get F() { return F; }, lightNow, band, CANDLES, SIG, PARTS, ORDER, FLOW, FUNNEL_KEY, endTurn, playCard, canPlay, applyMode, setLean, recast,
  setMode: m => { F.mode = m; } };
