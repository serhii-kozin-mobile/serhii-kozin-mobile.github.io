(()=>{var kf=0,zh=1,zf=2;var ws=1,Hf=2,Ar=3,ci=0,en=1,an=2,li=0,Rr=1,ji=2,Hh=3,Gh=4,Gf=5;var Ts=100,Vf=101,Wf=102,qf=103,Xf=104,jf=200,Kf=201,Jf=202,Yf=203,Vh=204,Wh=205,Zf=206,$f=207,Qf=208,ep=209,tp=210,np=211,ip=212,sp=213,rp=214,Xo=0,jo=1,Ko=2,rr=3,Jo=4,Yo=5,Zo=6,$o=7,qh=0,ap=1,op=2,Kn=0,Xh=1,jh=2,Kh=3,Wa=4,Jh=5,Yh=6,Zh=7,Ah="attached",cp="detached",$h=300,Ki=301,Es=302,wc=303,Tc=304,qa=306,Bi=1e3,In=1001,ar=1002,Ut=1003,Ec=1004;var As=1005;var Ot=1006,Cr=1007;var Jn=1008;var xn=1009,Qh=1010,eu=1011,Pr=1012,Ac=1013,Yn=1014,wn=1015,Zn=1016,Rc=1017,Cc=1018,Ir=1020,tu=35902,nu=35899,iu=1021,su=1022,Tn=1023,ri=1026,Ji=1027,Pc=1028,Ic=1029,Yi=1030,Lc=1031;var Dc=1033,Xa=33776,ja=33777,Ka=33778,Ja=33779,Fc=35840,Nc=35841,Uc=35842,Oc=35843,Bc=36196,kc=37492,zc=37496,Hc=37488,Gc=37489,Ya=37490,Vc=37491,Wc=37808,qc=37809,Xc=37810,jc=37811,Kc=37812,Jc=37813,Yc=37814,Zc=37815,$c=37816,Qc=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,cl=36284,Za=36285,ll=36286,hl=2200,ul=2201,lp=2202,us=2300,ds=2301,Vo=2302,Rh=2303,os=2400,cs=2401,oa=2402,dl=2500,hp=2501,ru=0,$a=1,Lr=2,up=3200;var fl=0,dp=1,Ri="",Ft="srgb",un="srgb-linear",ca="linear",pt="srgb";var Wo=7680;var fp=519,pp=512,mp=513,gp=514,pl=515,bp=516,xp=517,ml=518,_p=519,au=35044;var ou="300 es",Wn=2e3,or=2001;function vg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vp(){let i=cr("canvas");return i.style.display="block",i}var qd={},lr=null;function la(...i){let e="THREE."+i.shift();lr?lr("log",e,...i):console.log(e,...i)}function yp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=yp(i);let e="THREE."+i.shift();if(lr)lr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function He(...i){i=yp(i);let e="THREE."+i.shift();if(lr)lr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hs(...i){let e=i.join(" ");e in qd||(qd[e]=!0,De(...i))}function Mp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Sp={[Xo]:jo,[Ko]:Zo,[Jo]:$o,[rr]:Yo,[jo]:Xo,[Zo]:Ko,[$o]:Jo,[Yo]:rr},qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,ia=Math.PI/180,fs=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function cu(i,e){return(i%e+e)%e}function Mg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Sg(i,e,t){return i!==e?(t-i)/(e-i):0}function sa(i,e,t){return(1-t)*i+t*e}function wg(i,e,t,n){return sa(i,e,1-Math.exp(-t*n))}function Tg(i,e=1){return e-Math.abs(cu(i,e*2)-e)}function Eg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Rg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cg(i,e){return i+Math.random()*(e-i)}function Pg(i){return i*(.5-Math.random())}function Ig(i){i!==void 0&&(Xd=i);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lg(i){return i*ia}function Dg(i){return i*fs}function Fg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ng(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ug(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Og(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var lu={DEG2RAD:ia,RAD2DEG:fs,generateUUID:Ln,clamp:$e,euclideanModulo:cu,mapLinear:Mg,inverseLerp:Sg,lerp:sa,damp:wg,pingpong:Tg,smoothstep:Eg,smootherstep:Ag,randInt:Rg,randFloat:Cg,randFloatSpread:Pg,seededRandom:Ig,degToRad:Lg,radToDeg:Dg,isPowerOfTwo:Fg,ceilPowerOfTwo:Ng,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Og,normalize:gt,denormalize:Vn},mu=class mu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mu.prototype.isVector2=!0;var ae=mu,Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*v;g<0&&(d=-d,f=-f,m=-m,v=-v,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),M=Math.sin(x);p=Math.sin(p*x)/M,o=Math.sin(o*x)/M,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+v*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gu=class gu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gu.prototype.isVector3=!0;var I=gu,Ql=new I,jd=new Gt,bu=class bu{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],x=s[1],M=s[4],b=s[7],S=s[2],w=s[5],A=s[8];return r[0]=a*v+o*x+c*S,r[3]=a*g+o*M+c*w,r[6]=a*p+o*b+c*A,r[1]=l*v+h*x+u*S,r[4]=l*g+h*M+u*w,r[7]=l*p+h*b+u*A,r[2]=d*v+f*x+m*S,r[5]=d*g+f*M+m*w,r[8]=d*p+f*b+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eh.makeScale(e,t)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bu.prototype.isMatrix3=!0;var Xe=bu,eh=new Xe,Kd=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bg(){let i={enabled:!0,workingColorSpace:un,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[un]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:Kd,fromXYZ:Jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Kd,fromXYZ:Jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var Ze=Bg();function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,Qo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=cr("canvas")),zs.width=e.width,zs.height=e.height;let s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kg=0,hr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(th(s[a].image)):r.push(th(s[a]))}else r=th(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function th(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var zg=0,nh=new I,qt=class i extends qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Ot,a=Jn,o=Tn,c=xn,l=i.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Ln(),this.name="",this.source=new hr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=$h;qt.DEFAULT_ANISOTROPY=1;var xu=class xu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(f+1)/2,S=(p+1)/2,w=(h+d)/4,A=(u+v)/4,_=(m+g)/4;return M>b&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xu.prototype.isVector4=!0;var bt=xu,ec=class extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new hr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ha=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var tc=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sc=class Sc{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,m,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,v,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Gg)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Li.crossVectors(n,vn),Li.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Li.crossVectors(n,vn)),Li.normalize(),fo.crossVectors(vn,Li),s[0]=Li.x,s[4]=fo.x,s[8]=vn.x,s[1]=Li.y,s[5]=fo.y,s[9]=vn.y,s[2]=Li.z,s[6]=fo.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],M=n[7],b=n[11],S=n[15],w=s[0],A=s[4],_=s[8],E=s[12],C=s[1],L=s[5],O=s[9],G=s[13],N=s[2],k=s[6],X=s[10],q=s[14],se=s[3],j=s[7],Q=s[11],ne=s[15];return r[0]=a*w+o*C+c*N+l*se,r[4]=a*A+o*L+c*k+l*j,r[8]=a*_+o*O+c*X+l*Q,r[12]=a*E+o*G+c*q+l*ne,r[1]=h*w+u*C+d*N+f*se,r[5]=h*A+u*L+d*k+f*j,r[9]=h*_+u*O+d*X+f*Q,r[13]=h*E+u*G+d*q+f*ne,r[2]=m*w+v*C+g*N+p*se,r[6]=m*A+v*L+g*k+p*j,r[10]=m*_+v*O+g*X+p*Q,r[14]=m*E+v*G+g*q+p*ne,r[3]=x*w+M*C+b*N+S*se,r[7]=x*A+M*L+b*k+S*j,r[11]=x*_+M*O+b*X+S*Q,r[15]=x*E+M*G+b*q+S*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15],x=c*f-l*d,M=o*f-l*u,b=o*d-c*u,S=a*f-l*h,w=a*d-c*h,A=a*u-o*h;return t*(v*x-g*M+p*b)-n*(m*x-g*S+p*w)+s*(m*M-v*S+p*A)-r*(m*b-v*w+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=t*o-n*a,M=t*c-s*a,b=t*l-r*a,S=n*c-s*o,w=n*l-r*o,A=s*l-r*c,_=h*v-u*m,E=h*g-d*m,C=h*p-f*m,L=u*g-d*v,O=u*p-f*v,G=d*p-f*g,N=x*G-M*O+b*L+S*C-w*E+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*G-c*O+l*L)*k,e[1]=(s*O-n*G-r*L)*k,e[2]=(v*A-g*w+p*S)*k,e[3]=(d*w-u*A-f*S)*k,e[4]=(c*C-a*G-l*E)*k,e[5]=(t*G-s*C+r*E)*k,e[6]=(g*b-m*A-p*M)*k,e[7]=(h*A-d*b+f*M)*k,e[8]=(a*O-o*C+l*_)*k,e[9]=(n*C-t*O-r*_)*k,e[10]=(m*w-v*b+p*x)*k,e[11]=(u*b-h*w-f*x)*k,e[12]=(o*E-a*L-c*_)*k,e[13]=(t*L-n*E+s*_)*k,e[14]=(v*M-m*S-g*x)*k,e[15]=(h*S-u*M+d*x)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,x=c*l,M=c*h,b=c*u,S=n.x,w=n.y,A=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+b)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(f-b)*w,s[5]=(1-(d+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+M)*A,s[9]=(g-x)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),c=Hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),zn.copy(this);let l=1/a,h=1/o,u=1/c;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Wn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,v;if(c)m=r/(a-r),v=a*r/(a-r);else if(o===Wn)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===or)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,v;if(c)m=1/(a-r),v=a/(a-r);else if(o===Wn)m=-2/(a-r),v=-(a+r)/(a-r);else if(o===or)m=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sc.prototype.isMatrix4=!0;var qe=Sc,Hs=new I,zn=new qe,Hg=new I(0,0,0),Gg=new I(1,1,1),Li=new I,fo=new I,vn=new I,Yd=new qe,Zd=new Gt,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vg=0,$d=new I,Gs=new Gt,fi=new qe,po=new I,qr=new I,Wg=new I,qg=new Gt,Qd=new I(1,0,0),ef=new I(0,1,0),tf=new I(0,0,1),nf={type:"added"},Xg={type:"removed"},Vs={type:"childadded",child:null},ih={type:"childremoved",child:null},Et=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Xn,n=new Gt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Xe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(qr,po,this.up):fi.lookAt(po,qr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(fi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ct=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},mo={h:0,s:0,l:0};function sh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=cu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sh(a,r,e+1/3),this.g=sh(a,r,e),this.b=sh(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=wp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return Ze.workingToColorSpace(sn.copy(this),e),Math.round($e(sn.r*255,0,255))*65536+Math.round($e(sn.g*255,0,255))*256+Math.round($e(sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Ft){Ze.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(mo);let n=sa(Di.h,mo.h,t),s=sa(Di.s,mo.s,t),r=sa(Di.l,mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Ae;Ae.NAMES=wp;var ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},da=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new I,pi=new I,rh=new I,mi=new I,Ws=new I,qs=new I,sf=new I,ah=new I,oh=new I,ch=new I,lh=new bt,hh=new bt,uh=new bt,_i=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),pi.subVectors(n,t),rh.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(pi),c=Hn.dot(rh),l=pi.dot(pi),h=pi.dot(rh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return lh.setScalar(0),hh.setScalar(0),uh.setScalar(0),lh.fromBufferAttribute(e,t),hh.fromBufferAttribute(e,n),uh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lh,r.x),a.addScaledVector(hh,r.y),a.addScaledVector(uh,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),pi.subVectors(e,t),Hn.cross(pi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ws.subVectors(s,n),qs.subVectors(r,n),ah.subVectors(e,n);let c=Ws.dot(ah),l=qs.dot(ah);if(c<=0&&l<=0)return t.copy(n);oh.subVectors(e,s);let h=Ws.dot(oh),u=qs.dot(oh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ws,a);ch.subVectors(e,r);let f=Ws.dot(ch),m=qs.dot(ch);if(m>=0&&f<=m)return t.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(qs,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return sf.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(sf,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ws,a).addScaledVector(qs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xr),bo.subVectors(this.max,Xr),Xs.subVectors(e.a,Xr),js.subVectors(e.b,Xr),Ks.subVectors(e.c,Xr),Fi.subVectors(js,Xs),Ni.subVectors(Ks,js),is.subVectors(Xs,Ks);let t=[0,-Fi.z,Fi.y,0,-Ni.z,Ni.y,0,-is.z,is.y,Fi.z,0,-Fi.x,Ni.z,0,-Ni.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-Ni.y,Ni.x,0,-is.y,is.x,0];return!dh(t,Xs,js,Ks,bo)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,Xs,js,Ks,bo))?!1:(xo.crossVectors(Fi,Ni),t=[xo.x,xo.y,xo.z],dh(t,Xs,js,Ks,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new I,new I,new I,new I,new I,new I,new I,new I],Gn=new I,go=new $t,Xs=new I,js=new I,Ks=new I,Fi=new I,Ni=new I,is=new I,Xr=new I,bo=new I,xo=new I,ss=new I;function dh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zt=new I,_o=new ae,Kg=0,Nt=class extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=au,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var fa=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pa=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jg=new $t,jr=new I,fh=new I,mn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(fh)),this.expandByPoint(jr.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yg=0,Pn=new qe,ph=new Et,Js=new I,yn=new $t,Kr=new $t,Zt=new I,vt=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vg(e)?pa:fa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(yn.min,Kr.min),yn.expandByPoint(Zt),Zt.addVectors(yn.max,Kr.max),yn.expandByPoint(Zt)):(yn.expandByPoint(Kr.min),yn.expandByPoint(Kr.max))}yn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(Js.fromBufferAttribute(e,l),Zt.add(Js)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new I,c[_]=new I;let l=new I,h=new I,u=new I,d=new ae,f=new ae,m=new ae,v=new I,g=new I;function p(_,E,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[_].add(v),o[E].add(v),o[C].add(v),c[_].add(g),c[E].add(g),c[C].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,E=x.length;_<E;++_){let C=x[_],L=C.start,O=C.count;for(let G=L,N=L+O;G<N;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let M=new I,b=new I,S=new I,w=new I;function A(_){S.fromBufferAttribute(s,_),w.copy(S);let E=o[_];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),b.crossVectors(w,E);let L=b.dot(c[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,L)}for(let _=0,E=x.length;_<E;++_){let C=x[_],L=C.start,O=C.count;for(let G=L,N=L+O;G<N;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Nt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new I,ki=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){la("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){la("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mh=new I,Zg=new I,$g=new Xe,Mn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mh.subVectors(n,t).cross(Zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$g.getNormalMatrix(e),s=this.coplanarPoint(mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Qg=0,dn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Rr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Wh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},zi=class extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,Jr=new I,Zs=new I,$s=new I,Qs=new ae,Yr=new ae,Tp=new qe,vo=new I,Zr=new I,yo=new I,rf=new ae,gh=new ae,af=new ae,ms=class extends Et{constructor(e=new zi){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ps(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ki(n,3,0,!1)),Ys.setAttribute("uv",new ki(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Mo(vo.set(-.5,-.5,0),$s,a,Zs,s,r),Mo(Zr.set(.5,-.5,0),$s,a,Zs,s,r),Mo(yo.set(.5,.5,0),$s,a,Zs,s,r),rf.set(0,0),gh.set(1,0),af.set(1,1);let o=e.ray.intersectTriangle(vo,Zr,yo,!1,Jr);if(o===null&&(Mo(Zr.set(-.5,.5,0),$s,a,Zs,s,r),gh.set(0,1),o=e.ray.intersectTriangle(vo,yo,Zr,!1,Jr),o===null))return;let c=e.ray.origin.distanceTo(Jr);c<e.near||c>e.far||t.push({distance:c,point:Jr.clone(),uv:_i.getInterpolation(Jr,vo,Zr,yo,rf,gh,af,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mo(i,e,t,n,s,r){Qs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*Qs.x-s*Qs.y,Yr.y=s*Qs.x+r*Qs.y):Yr.copy(Qs),i.copy(e),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(Tp)}var bi=new I,bh=new I,So=new I,wo=new I,Hi=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){bh.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),wo.copy(this.origin).sub(bh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=wo.dot(this.direction),c=-wo.dot(So),l=wo.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bh).addScaledVector(So,d),f}intersectSphere(e,t){if(e.radius<0)return null;bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,v=t.y-a.y,g=t.z-a.z,p=n.x-a.x,x=n.y-a.y,M=n.z-a.z,b=Math.abs(c),S=Math.abs(l),w=Math.abs(h),A,_,E,C,L,O,G,N,k,X,q,se;if(b>=S&&b>=w?(E=c,O=u,k=m,se=p,c>=0?(A=l,_=h,C=d,L=f,G=v,N=g,X=x,q=M):(A=h,_=l,C=f,L=d,G=g,N=v,X=M,q=x)):S>=w?(E=l,O=d,k=v,se=x,l>=0?(A=h,_=c,C=f,L=u,G=g,N=m,X=M,q=p):(A=c,_=h,C=u,L=f,G=m,N=g,X=p,q=M)):(E=h,O=f,k=g,se=M,h>=0?(A=c,_=l,C=u,L=d,G=m,N=v,X=p,q=x):(A=l,_=c,C=d,L=u,G=v,N=m,X=x,q=p)),E===0)return null;let j=A/E,Q=_/E,ne=1/E,Fe=C-j*O,Re=L-Q*O,ht=G-j*k,nt=N-Q*k,at=X-j*se,Y=q-Q*se,ee=at*nt-Y*ht,xe=Fe*Y-Re*at,Ge=ht*Re-nt*Fe;if(s){if(ee<0||xe<0||Ge<0)return null}else if((ee<0||xe<0||Ge<0)&&(ee>0||xe>0||Ge>0))return null;let Me=ee+xe+Ge;if(Me===0)return null;let Ve=ne*(ee*O+xe*k+Ge*se);return(Me>0?Ve<0:Ve>0)?null:this.at(Ve/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},of=new qe,rs=new Hi,To=new mn,cf=new I,Eo=new I,Ao=new I,Ro=new I,xh=new I,Co=new I,lf=new I,Po=new I,lt=class extends Et{constructor(e=new vt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(xh.fromBufferAttribute(u,e),a?Co.addScaledVector(xh,h):Co.addScaledVector(xh.sub(t),h))}t.add(Co)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(To.containsPoint(rs.origin)===!1&&(rs.intersectSphere(To,cf)===null||rs.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(of.copy(r).invert(),rs.copy(e.ray).applyMatrix4(of),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,S=M;b<S;b+=3){let w=o.getX(b),A=o.getX(b+1),_=o.getX(b+2);s=Io(this,p,e,n,l,h,u,w,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=o.getX(g),M=o.getX(g+1),b=o.getX(g+2);s=Io(this,a,e,n,l,h,u,x,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=x,S=M;b<S;b+=3){let w=b,A=b+1,_=b+2;s=Io(this,p,e,n,l,h,u,w,A,_),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=g,M=g+1,b=g+2;s=Io(this,a,e,n,l,h,u,x,M,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function e0(i,e,t,n,s,r,a,o){let c;if(e.side===en?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ci,o),c===null)return null;Po.copy(o),Po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:i}}function Io(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Eo),i.getVertexPosition(c,Ao),i.getVertexPosition(l,Ro);let h=e0(i,e,t,n,Eo,Ao,Ro,lf);if(h){let u=new I;_i.getBarycoord(lf,Eo,Ao,Ro,u),s&&(h.uv=_i.getInterpolatedAttribute(s,o,c,l,u,new ae)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,c,l,u,new ae)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};_i.getNormal(Eo,Ao,Ro,d.normal),h.face=d,h.barycoord=u}return h}var $r=new bt,hf=new bt,uf=new bt,t0=new bt,df=new qe,Lo=new I,_h=new mn,ff=new qe,vh=new Hi,ma=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ah,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingBox.expandByPoint(Lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lo),this.boundingSphere.expandByPoint(Lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_h.copy(this.boundingSphere),_h.applyMatrix4(s),e.ray.intersectsSphere(_h)!==!1&&(ff.copy(s).invert(),vh.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hf.fromBufferAttribute(s.attributes.skinIndex,e),uf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?($r.copy(t),t.set(0,0,0,0)):($r.set(...t,1),t.set(0,0,0)),$r.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=uf.getComponent(r);if(a!==0){let o=hf.getComponent(r);df.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(t0.copy($r).applyMatrix4(df),a)}}return t.isVector4&&(t.w=$r.w),t.applyMatrix4(this.bindMatrixInverse)}},fr=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},pr=class extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ut,h=Ut,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pf=new qe,n0=new qe,ga=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:n0;pf.multiplyMatrices(o,t[r]),pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new pr(t,e,e,Tn,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(De("Skeleton: No bone found with UUID:",r),a=new fr),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},yi=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new qe,mf=new qe,Do=[],gf=new $t,i0=new qe,Qr=new lt,ea=new mn,gs=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),gf.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),ea.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ea.copy(this.boundingSphere),ea.applyMatrix4(n),e.ray.intersectsSphere(ea)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),mf.multiplyMatrices(n,er),Qr.matrixWorld=mf,Qr.raycast(e,Do);for(let a=0,o=Do.length;a<o;a++){let c=Do[a];c.instanceId=r,c.object=this,t.push(c)}Do.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pr(new Float32Array(s*this.count),s,this.count,Pc,wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new mn,s0=new ae(.5,.5),Fo=new I,mr=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],x=r[12],M=r[13],b=r[14],S=r[15];if(s[0].setComponents(l-a,f-h,p-m,S-x).normalize(),s[1].setComponents(l+a,f+h,p+m,S+x).normalize(),s[2].setComponents(l+o,f+u,p+v,S+M).normalize(),s[3].setComponents(l-o,f-u,p-v,S-M).normalize(),n)s[4].setComponents(c,d,g,b).normalize(),s[5].setComponents(l-c,f-d,p-g,S-b).normalize();else if(s[4].setComponents(l-c,f-d,p-g,S-b).normalize(),t===Wn)s[5].setComponents(l+c,f+d,p+g,S+b).normalize();else if(t===or)s[5].setComponents(c,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=s0.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gr=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nc=new I,ic=new I,bf=new qe,ta=new Hi,No=new mn,yh=new I,xf=new I,bs=class extends Et{constructor(e=new vt,t=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nc.fromBufferAttribute(t,s-1),ic.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nc.distanceTo(ic);e.setAttribute("lineDistance",new et(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;bf.copy(s).invert(),ta.copy(e.ray).applyMatrix4(bf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=h.getX(v),x=h.getX(v+1),M=Uo(this,e,ta,c,p,x,v);M&&t.push(M)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=Uo(this,e,ta,c,v,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=Uo(this,e,ta,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Uo(this,e,ta,c,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(nc.fromBufferAttribute(o,s),ic.fromBufferAttribute(o,r),t.distanceSqToSegment(nc,ic,yh,xf)>n)return;yh.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(yh);if(!(l<e.near||l>e.far))return{distance:l,point:xf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var _f=new I,vf=new I,ba=class extends bs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_f.fromBufferAttribute(t,s),vf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_f.distanceTo(vf);e.setAttribute("lineDistance",new et(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xa=class extends bs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gi=class extends dn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yf=new qe,Ch=new Hi,Oo=new mn,Bo=new I,xs=class extends Et{constructor(e=new vt,t=new Gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;yf.copy(s).invert(),Ch.copy(e.ray).applyMatrix4(yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=l.getX(m);Bo.fromBufferAttribute(u,g),Mf(Bo,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Bo.fromBufferAttribute(u,m),Mf(Bo,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mf(i,e,t,n,s,r,a){let o=Ch.distanceSqToPoint(i);if(o<t){let c=new I;Ch.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var _a=class extends qt{constructor(e=[],t=Ki,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},br=class extends qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends qt{constructor(e,t,n=Yn,s,r,a,o=Ut,c=Ut,l,h=ri,u=1){if(h!==ri&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sc=class extends Vi{constructor(e,t=Yn,n=Ki,s,r,a=Ut,o=Ut,c,l=ri){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},va=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ct=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function m(v,g,p,x,M,b,S,w,A,_,E){let C=b/A,L=S/_,O=b/2,G=S/2,N=w/2,k=A+1,X=_+1,q=0,se=0,j=new I;for(let Q=0;Q<X;Q++){let ne=Q*L-G;for(let Fe=0;Fe<k;Fe++){let Re=Fe*C-O;j[v]=Re*x,j[g]=ne*M,j[p]=N,l.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[p]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(Fe/A),u.push(1-Q/_),q+=1}}for(let Q=0;Q<_;Q++)for(let ne=0;ne<A;ne++){let Fe=d+ne+k*Q,Re=d+ne+k*(Q+1),ht=d+(ne+1)+k*(Q+1),nt=d+(ne+1)+k*Q;c.push(Fe,Re,nt),c.push(Re,ht,nt),se+=6}o.addGroup(f,se,E),f+=se,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rn=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function x(){let b=new I,S=new I,w=0,A=(t-e)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,L=C*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,N=G*c+o,k=Math.sin(N),X=Math.cos(N);S.x=L*k,S.y=-C*n+g,S.z=L*X,u.push(S.x,S.y,S.z),b.set(k,A,X).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-C),E.push(m++)}v.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let C=v[E][_],L=v[E+1][_],O=v[E+1][_+1],G=v[E][_+1];(e>0||E!==0)&&(h.push(C,L,G),w+=3),(t>0||E!==r-1)&&(h.push(L,O,G),w+=3)}l.addGroup(p,w,0),p+=w}function M(b){let S=m,w=new ae,A=new I,_=0,E=b===!0?e:t,C=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*C,0),d.push(0,C,0),f.push(.5,.5),m++;let L=m;for(let O=0;O<=s;O++){let N=O/s*c+o,k=Math.cos(N),X=Math.sin(N);A.x=E*X,A.y=g*C,A.z=E*k,u.push(A.x,A.y,A.z),d.push(0,C,0),w.x=k*.5+.5,w.y=X*.5*C+.5,f.push(w.x,w.y),m++}for(let O=0;O<s;O++){let G=S+O,N=L+O;b===!0?h.push(N,N+1,G):h.push(N+1,N,G),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jn=class i extends rn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xr=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new I,b=new I,S=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],b),f(t[w+2],S),c(M,b,S,x)}function c(x,M,b,S){let w=S+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let E=x.clone().lerp(b,_/w),C=M.clone().lerp(b,_/w),L=w-_;for(let O=0;O<=L;O++)O===0&&_===w?A[_][O]=E:A[_][O]=E.clone().lerp(C,O/L)}for(let _=0;_<w;_++)for(let E=0;E<2*(w-_)-1;E++){let C=Math.floor(E/2);E%2===0?(d(A[_][C+1]),d(A[_+1][C]),d(A[_][C])):(d(A[_][C+1]),d(A[_+1][C+1]),d(A[_+1][C]))}}function l(x){let M=new I;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(x),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){let x=new I;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let b=g(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;a.push(b,1-S)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let M=a[x+0],b=a[x+2],S=a[x+4],w=Math.max(M,b,S),A=Math.min(M,b,S);w>.9&&A<.1&&(M<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),S<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,M){let b=x*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function m(){let x=new I,M=new I,b=new I,S=new I,w=new ae,A=new ae,_=new ae;for(let E=0,C=0;E<r.length;E+=9,C+=6){x.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),b.set(r[E+6],r[E+7],r[E+8]),w.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),S.copy(x).add(M).add(b).divideScalar(3);let L=g(S);v(w,C+0,x,L),v(A,C+2,M,L),v(_,C+4,b,L)}}function v(x,M,b,S){S<0&&x.x===1&&(a[M]=x.x-1),b.x===0&&b.z===0&&(a[M]=S/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},_r=class i extends xr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ae:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,c=new qe;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends Sn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rc=class extends vr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function hu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Sf=new I,wf=new I,Mh=new hu,Sh=new hu,wh=new hu,yr=class extends Sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(wf.subVectors(s[0],s[1]).add(s[0]),l=wf);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Mh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Sh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),wh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Sh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),wh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Mh.calc(c),Sh.calc(c),wh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function r0(i,e){let t=1-i;return t*t*e}function a0(i,e){return 2*(1-i)*i*e}function o0(i,e){return i*i*e}function ra(i,e,t,n){return r0(i,e)+a0(i,t)+o0(i,n)}function c0(i,e){let t=1-i;return t*t*t*e}function l0(i,e){let t=1-i;return 3*t*t*i*e}function h0(i,e){return 3*(1-i)*i*i*e}function u0(i,e){return i*i*i*e}function aa(i,e,t,n,s){return c0(i,e)+l0(i,t)+h0(i,n)+u0(i,s)}var ya=class extends Sn{constructor(e=new ae,t=new ae,n=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Sn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(aa(e,s.x,r.x,a.x,o.x),aa(e,s.y,r.y,a.y,o.y),aa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends Sn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Sn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends Sn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends Sn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ra(e,s.x,r.x,a.x),ra(e,s.y,r.y,a.y),ra(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Tf(o,c.x,l.x,h.x,u.x),Tf(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},cc=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:yr,CubicBezierCurve:ya,CubicBezierCurve3:ac,EllipseCurve:vr,LineCurve:Ma,LineCurve3:oc,QuadraticBezierCurve:Sa,QuadraticBezierCurve3:wa,SplineCurve:Ta}),lc=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new cc[s.type]().fromJSON(s))}return this}},Ea=class extends lc{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ma(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Sa(this.currentPoint.clone(),new ae(e,t),new ae(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ya(this.currentPoint.clone(),new ae(e,t),new ae(n,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new vr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mr=class extends Ea{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ea().fromJSON(s))}return this}};function d0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ep(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=b0(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Aa(r,a,t,o,c,l,0),a}function Ep(i,e,t,n,s){let r;if(s===R0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ef(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ef(a/n|0,i[a],i[a+1],r);return r&&Sr(r,r.next)&&(Ca(r),r=r.next),r}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Sr(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&M0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?p0(i,n,s,r):f0(i)){e.push(c.i,i.i,l.i),Ca(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=m0(_s(i),e),Aa(i,e,t,n,s,r,2)):a===2&&g0(i,e,t,n,s,r):Aa(_s(i),e,t,n,s,r,1);break}}}function f0(i){let e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&na(s,o,r,c,a,l,m.x,m.y)&&Rt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function p0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Rt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(h,u,d),v=Math.max(o,c,l),g=Math.max(h,u,d),p=Ph(f,m,e,t,n),x=Ph(v,g,e,t,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&na(o,h,c,u,l,d,M.x,M.y)&&Rt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&na(o,h,c,u,l,d,b.x,b.y)&&Rt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=v&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&na(o,h,c,u,l,d,M.x,M.y)&&Rt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==s&&b!==a&&na(o,h,c,u,l,d,b.x,b.y)&&Rt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function m0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Sr(n,s)&&Rp(n,t,t.next,s)&&Ra(n,s)&&Ra(s,n)&&(e.push(n.i,t.i,s.i),Ca(t),Ca(t.next),t=i=s),t=t.next}while(t!==i);return _s(t)}function g0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&T0(a,o)){let c=Cp(a,o);a=_s(a,a.next),c=_s(c,c.next),Aa(a,e,t,n,s,r,0),Aa(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function b0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Ep(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(w0(l))}s.sort(x0);for(let r=0;r<s.length;r++)t=_0(s[r],t);return t}function x0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _0(i,e){let t=v0(i,e);if(!t)return e;let n=Cp(t,i);return _s(n,n.next),_s(t,t.next)}function v0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Sr(i,t))return t;do{if(Sr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ap(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ra(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&y0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function y0(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function M0(i,e,t,n){let s=i;do s.z===0&&(s.z=Ph(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,S0(s)}function S0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ph(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function w0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ap(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function na(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ap(i,e,t,n,s,r,a,o)}function T0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!E0(i,e)&&(Ra(i,e)&&Ra(e,i)&&A0(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||Sr(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Sr(i,e){return i.x===e.x&&i.y===e.y}function Rp(i,e,t,n){let s=zo(Rt(i,e,t)),r=zo(Rt(i,e,n)),a=zo(Rt(t,n,i)),o=zo(Rt(t,n,e));return!!(s!==r&&a!==o||s===0&&ko(i,t,e)||r===0&&ko(i,n,e)||a===0&&ko(t,i,n)||o===0&&ko(t,e,n))}function ko(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zo(i){return i>0?1:i<0?-1:0}function E0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ra(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function A0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Cp(i,e){let t=Ih(i.i,i.x,i.y),n=Ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ef(i,e,t,n){let s=Ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ih(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Lh=class{static triangulate(e,t,n=2){return d0(e,t,n)}},ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Af(e),Rf(n,e);let a=e.length;t.forEach(Af);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Rf(n,t[c]);let o=Lh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Af(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Pa=class i extends vt{constructor(e=new Mr([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:C0,M,b=!1,S,w,A,_;if(p){M=p.getSpacedPoints(h),b=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(h,te),w=new I,A=new I,_=new I}d||(g=0,f=0,m=0,v=0);let E=o.extractPoints(l),C=E.shape,L=E.holes;if(!ls.isClockWise(C)){C=C.reverse();for(let te=0,re=L.length;te<re;te++){let oe=L[te];ls.isClockWise(oe)&&(L[te]=oe.reverse())}}function G(te){let oe=10000000000000001e-36,ce=te[0];for(let ue=1;ue<=te.length;ue++){let ke=ue%te.length,Be=te[ke],We=Be.x-ce.x,je=Be.y-ce.y,D=We*We+je*je,ut=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(ce.x),Math.abs(ce.y)),it=oe*ut*ut;if(D<=it){te.splice(ke,1),ue--;continue}ce=Be}}G(C),L.forEach(G);let N=L.length,k=C;for(let te=0;te<N;te++){let re=L[te];C=C.concat(re)}function X(te,re,oe){return re||He("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,oe)}let q=C.length;function se(te,re,oe){let ce,ue,ke,Be=te.x-re.x,We=te.y-re.y,je=oe.x-te.x,D=oe.y-te.y,ut=Be*Be+We*We,it=Be*D-We*je;if(Math.abs(it)>Number.EPSILON){let R=Math.sqrt(ut),y=Math.sqrt(je*je+D*D),B=re.x-We/R,V=re.y+Be/R,K=oe.x-D/y,le=oe.y+je/y,he=((K-B)*D-(le-V)*je)/(Be*D-We*je);ce=B+Be*he-te.x,ue=V+We*he-te.y;let J=ce*ce+ue*ue;if(J<=2)return new ae(ce,ue);ke=Math.sqrt(J/2)}else{let R=!1;Be>Number.EPSILON?je>Number.EPSILON&&(R=!0):Be<-Number.EPSILON?je<-Number.EPSILON&&(R=!0):Math.sign(We)===Math.sign(D)&&(R=!0),R?(ce=-We,ue=Be,ke=Math.sqrt(ut)):(ce=Be,ue=We,ke=Math.sqrt(ut/2))}return new ae(ce/ke,ue/ke)}let j=[];for(let te=0,re=k.length,oe=re-1,ce=te+1;te<re;te++,oe++,ce++)oe===re&&(oe=0),ce===re&&(ce=0),j[te]=se(k[te],k[oe],k[ce]);let Q=[],ne,Fe=j.concat();for(let te=0,re=N;te<re;te++){let oe=L[te];ne=[];for(let ce=0,ue=oe.length,ke=ue-1,Be=ce+1;ce<ue;ce++,ke++,Be++)ke===ue&&(ke=0),Be===ue&&(Be=0),ne[ce]=se(oe[ce],oe[ke],oe[Be]);Q.push(ne),Fe=Fe.concat(ne)}let Re;if(g===0)Re=ls.triangulateShape(k,L);else{let te=[],re=[];for(let oe=0;oe<g;oe++){let ce=oe/g,ue=f*Math.cos(ce*Math.PI/2),ke=m*Math.sin(ce*Math.PI/2)+v;for(let Be=0,We=k.length;Be<We;Be++){let je=X(k[Be],j[Be],ke);xe(je.x,je.y,-ue),ce===0&&te.push(je)}for(let Be=0,We=N;Be<We;Be++){let je=L[Be];ne=Q[Be];let D=[];for(let ut=0,it=je.length;ut<it;ut++){let R=X(je[ut],ne[ut],ke);xe(R.x,R.y,-ue),ce===0&&D.push(R)}ce===0&&re.push(D)}}Re=ls.triangulateShape(te,re)}let ht=Re.length,nt=m+v;for(let te=0;te<q;te++){let re=d?X(C[te],Fe[te],nt):C[te];b?(A.copy(S.normals[0]).multiplyScalar(re.x),w.copy(S.binormals[0]).multiplyScalar(re.y),_.copy(M[0]).add(A).add(w),xe(_.x,_.y,_.z)):xe(re.x,re.y,0)}for(let te=1;te<=h;te++)for(let re=0;re<q;re++){let oe=d?X(C[re],Fe[re],nt):C[re];b?(A.copy(S.normals[te]).multiplyScalar(oe.x),w.copy(S.binormals[te]).multiplyScalar(oe.y),_.copy(M[te]).add(A).add(w),xe(_.x,_.y,_.z)):xe(oe.x,oe.y,u/h*te)}for(let te=g-1;te>=0;te--){let re=te/g,oe=f*Math.cos(re*Math.PI/2),ce=m*Math.sin(re*Math.PI/2)+v;for(let ue=0,ke=k.length;ue<ke;ue++){let Be=X(k[ue],j[ue],ce);xe(Be.x,Be.y,u+oe)}for(let ue=0,ke=L.length;ue<ke;ue++){let Be=L[ue];ne=Q[ue];for(let We=0,je=Be.length;We<je;We++){let D=X(Be[We],ne[We],ce);b?xe(D.x,D.y+M[h-1].y,M[h-1].x+oe):xe(D.x,D.y,u+oe)}}}at(),Y();function at(){let te=s.length/3;if(d){let re=0,oe=q*re;for(let ce=0;ce<ht;ce++){let ue=Re[ce];Ge(ue[2]+oe,ue[1]+oe,ue[0]+oe)}re=h+g*2,oe=q*re;for(let ce=0;ce<ht;ce++){let ue=Re[ce];Ge(ue[0]+oe,ue[1]+oe,ue[2]+oe)}}else{for(let re=0;re<ht;re++){let oe=Re[re];Ge(oe[2],oe[1],oe[0])}for(let re=0;re<ht;re++){let oe=Re[re];Ge(oe[0]+q*h,oe[1]+q*h,oe[2]+q*h)}}n.addGroup(te,s.length/3-te,0)}function Y(){let te=s.length/3,re=0;ee(k,re),re+=k.length;for(let oe=0,ce=L.length;oe<ce;oe++){let ue=L[oe];ee(ue,re),re+=ue.length}n.addGroup(te,s.length/3-te,1)}function ee(te,re){let oe=te.length;for(;--oe>=0;){let ce=oe,ue=oe-1;ue<0&&(ue=te.length-1);for(let ke=0,Be=h+g*2;ke<Be;ke++){let We=q*ke,je=q*(ke+1),D=re+ce+We,ut=re+ue+We,it=re+ue+je,R=re+ce+je;Me(D,ut,it,R)}}}function xe(te,re,oe){c.push(te),c.push(re),c.push(oe)}function Ge(te,re,oe){Ve(te),Ve(re),Ve(oe);let ce=s.length/3,ue=x.generateTopUV(n,s,ce-3,ce-2,ce-1);mt(ue[0]),mt(ue[1]),mt(ue[2])}function Me(te,re,oe,ce){Ve(te),Ve(re),Ve(ce),Ve(re),Ve(oe),Ve(ce);let ue=s.length/3,ke=x.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);mt(ke[0]),mt(ke[1]),mt(ke[3]),mt(ke[1]),mt(ke[2]),mt(ke[3])}function Ve(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function mt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return P0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new cc[s.type]().fromJSON(s)),new i(n,e.options)}},C0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,c),new ae(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ae(a,1-c),new ae(l,1-u),new ae(d,1-m),new ae(v,1-p)]:[new ae(o,1-c),new ae(h,1-u),new ae(f,1-m),new ae(g,1-p)]}};function P0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wr=class i extends xr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ia=class i extends xr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vs=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let M=0;M<l;M++){let b=M*u-r;m.push(b,-x,0),v.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let M=x+l*p,b=x+l*(p+1),S=x+1+l*(p+1),w=x+1+l*p;f.push(M,b,w),f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},La=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new I,m=new ae;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let x=p+g,M=x,b=x+n+1,S=x+n+2,w=x+1;o.push(M,b,w),o.push(b,S,w)}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Mi=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let x=[],M=p/n,b=a+M*o,S=e*Math.cos(b),w=Math.sqrt(e*e-S*S),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let E=_/t,C=s+E*r;u.x=-w*Math.cos(C),u.y=S,u.z=w*Math.sin(C),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(E+A,1-M),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let M=h[p][x+1],b=h[p][x],S=h[p+1][x],w=h[p+1][x+1];(p!==0||a>0)&&f.push(M,b,w),(p!==n-1||c<Math.PI)&&f.push(b,S,w)}this.setIndex(f),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Da=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new I,f=new I,m=new I;for(let v=0;v<=n;v++){let g=a+v/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){let p=(s+1)*v+g-1,x=(s+1)*(v-1)+g-1,M=(s+1)*(v-1)+g,b=(s+1)*v+g;c.push(p,x,b),c.push(x,M,b)}this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Fa=class i extends vt{constructor(e=new wa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new ae,h=new I,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(f,2));function v(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),x(),p()}function g(M){h=e.getPointAt(M/t,h);let b=a.normals[M],S=a.binormals[M];for(let w=0;w<=s;w++){let A=w/s*Math.PI*2,_=Math.sin(A),E=-Math.cos(A);c.x=E*b.x+_*S.x,c.y=E*b.y+_*S.y,c.z=E*b.z+_*S.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let b=1;b<=s;b++){let S=(s+1)*(M-1)+(b-1),w=(s+1)*M+(b-1),A=(s+1)*M+b,_=(s+1)*(M-1)+b;m.push(S,w,_),m.push(w,A,_)}}function x(){for(let M=0;M<=t;M++)for(let b=0;b<=s;b++)l.x=M/t,l.y=b/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new cc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Rs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cf(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=Rs(i[t]);for(let s in n)e[s]=n[s]}return e}function Cf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function I0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Pp={clone:Rs,merge:on},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},hc=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dn=class extends dn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends Dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uc=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dc=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function F0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Pf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function N0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fc=class extends ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cs:r=e,o=2*t-n;break;case oa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cs:a=e,c=2*n-t;break;case oa:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,M=(-1-f)*g+(1.5+f)*v+.5*m,b=f*g-f*v;for(let S=0;S!==o;++S)r[S]=p*a[h+S]+x*a[l+S]+M*a[c+S]+b*a[u+S];return r}},Na=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},pc=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},mc=class extends ai{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(s-t),v=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*v+a[c+g]*m;return r}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let v=a[l+m],g=a[c+m],p=f*d+m*2,x=u[p],M=u[p+1],b=e*d+m*2,S=h[b],w=h[b+1],A=O0(n,t,x,S,s);r[m]=Ip(A,v,M,w,g)}return r}};function Ip(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function U0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function O0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ip(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=U0(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qo(e.settings)&&(n.settings={inTangents:Oi(e.settings.inTangents,Array),outTangents:Oi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break;case Rh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return Rh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qo(this.settings)&&(If(this.settings.inTangents,e),If(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&yg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function If(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ds;var Si=class extends bn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=us;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};Ua.prototype.ValueTypeName="color";var wi=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};wi.prototype.ValueTypeName="number";var gc=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ti=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends bn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=us;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends bn{constructor(e,t,n,s){super(e,t,n,s)}};Wi.prototype.ValueTypeName="vector";var ys=class{constructor(e="",t=-1,n=[],s=dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(k0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=F0(c);c=Pf(c,1,h),l=Pf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function B0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return Ua;case"quaternion":return Ti;case"bool":case"boolean":return Si;case"string":return Ei}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function k0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=B0(i.type);if(i.times===void 0){let n=[],s=[];N0(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),qo(i.settings)&&(t.settings={inTangents:Oi(i.settings.inTangents,Float32Array),outTangents:Oi(i.settings.outTangents,Float32Array)}),t}var si={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lf(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lf(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var bc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lp=new bc,oi=class{constructor(e){this.manager=e!==void 0?e:Lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Dh=class extends Error{constructor(e,t){super(e),this.response=t}},Tr=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:s});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:M,value:b})=>{if(M)p.close();else{v+=b.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,A=h.length;w<A;w++){let _=h[w];_.onProgress&&_.onProgress(S)}p.enqueue(b),x()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Dh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{si.add(`file:${e}`,l);let h=xi[e];delete xi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete xi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tr=new WeakMap,xc=class extends oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=tr.get(a);u===void 0&&(u=[],tr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=cr("img");function c(){h(),t&&t(this);let u=tr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}tr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),si.remove(`image:${e}`);let d=tr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Oa=class extends oi{constructor(e){super(e)}load(e,t,n,s){let r=new qt,a=new xc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ms=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ba=class extends Ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Th=new qe,Df=new I,Ff=new I,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Th.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Th,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===or||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Th)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ho=new I,Go=new Gt,ii=new I,ka=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ho,Go,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ho,Go,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new I,Nf=new ae,Uf=new ae,Ht=class extends ka{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Nf,Uf),t.subVectors(Uf,Nf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fh=class extends Er{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},za=class extends Ms{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Fh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nh=class extends Er{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Ss=class extends Ms{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qi=class extends ka{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uh=class extends Er{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Uh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Eh=new WeakMap,Ha=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Eh.has(a)===!0?(s&&s(Eh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Eh.set(c,l),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nr=-90,ir=1,_c=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new Ht(nr,ir,e,t);r.layers=this.layers,this.add(r);let a=new Ht(nr,ir,e,t);a.layers=this.layers,this.add(a);let o=new Ht(nr,ir,e,t);o.layers=this.layers,this.add(o);let c=new Ht(nr,ir,e,t);c.layers=this.layers,this.add(c);let l=new Ht(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},vc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Gt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Gt.multiplyQuaternionsFlat(e,a,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},du="\\[\\]\\.:\\/",z0=new RegExp("["+du+"]","g"),fu="[^"+du+"]",H0="[^"+du.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",fu),V0=/(WCOD+)?/.source.replace("WCOD",H0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),X0=new RegExp("^"+G0+V0+W0+q0+"$"),j0=["material","materials","bones","map"],Oh=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){let t=X0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);j0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Oh;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:os,endingEnd:os};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=ul,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case hp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case dl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===lp;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===hl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=cs,s.endingEnd=cs):(e?s.endingStart=this.zeroSlopeAtStart?cs:os:s.endingStart=oa,t?s.endingEnd=this.zeroSlopeAtEnd?cs:os:s.endingEnd=oa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},K0=new Float32Array(1),Ga=class extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new yc(_t.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Na(new Float32Array(2),new Float32Array(2),1,K0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?ys.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=dl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Mc(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?ys.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Of=new qe,Va=class{constructor(e,t,n=0,s=1/0){this.ray=new Hi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Of.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Of),this}intersectObject(e,t=!0,n=[]){return Bh(e,this,n,t),n.sort(Bf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Bh(e[s],this,n,t);return n.sort(Bf),n}};function Bf(i,e){return i.distance-e.distance}function Bh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Bh(r[a],e,t,!0)}}var _u=class _u{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};_u.prototype.isMatrix2=!0;var kh=_u;function pu(i,e,t,n){let s=J0(n);switch(t){case iu:return i*e;case Pc:return i*e/s.components*s.byteLength;case Ic:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case Lc:return i*e*2/s.components*s.byteLength;case su:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Dc:return i*e*4/s.components*s.byteLength;case Xa:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Oc:return Math.max(i,16)*Math.max(e,8)/4;case Fc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Bc:case kc:case Hc:case Gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zc:case Ya:case Vc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ol:case cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Za:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J0(i){switch(i){case xn:case Qh:return{byteLength:1,components:1};case Pr:case eu:case Zn:return{byteLength:2,components:1};case Rc:case Cc:return{byteLength:2,components:4};case Yn:case Ac:case wn:return{byteLength:4,components:1};case tu:case nu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function em(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Z0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,__=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,v_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:$0,alphahash_pars_fragment:Q0,alphamap_fragment:eb,alphamap_pars_fragment:tb,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:sb,aomap_pars_fragment:rb,batching_pars_vertex:ab,batching_vertex:ob,begin_vertex:cb,beginnormal_vertex:lb,bsdfs:hb,iridescence_fragment:ub,bumpmap_pars_fragment:db,clipping_planes_fragment:fb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:gb,color_fragment:bb,color_pars_fragment:xb,color_pars_vertex:_b,color_vertex:vb,common:yb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:Sb,displacementmap_pars_vertex:wb,displacementmap_vertex:Tb,emissivemap_fragment:Eb,emissivemap_pars_fragment:Ab,colorspace_fragment:Rb,colorspace_pars_fragment:Cb,envmap_fragment:Pb,envmap_common_pars_fragment:Ib,envmap_pars_fragment:Lb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Wb,envmap_vertex:Fb,fog_vertex:Nb,fog_pars_vertex:Ub,fog_fragment:Ob,fog_pars_fragment:Bb,gradientmap_pars_fragment:kb,lightmap_pars_fragment:zb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Gb,lights_pars_begin:Vb,lights_toon_fragment:qb,lights_toon_pars_fragment:Xb,lights_phong_fragment:jb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Jb,lights_physical_pars_fragment:Yb,lights_fragment_begin:Zb,lights_fragment_maps:$b,lights_fragment_end:Qb,lightprobes_pars_fragment:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:sx,map_fragment:rx,map_pars_fragment:ax,map_particle_fragment:ox,map_particle_pars_fragment:cx,metalnessmap_fragment:lx,metalnessmap_pars_fragment:hx,morphinstance_vertex:ux,morphcolor_vertex:dx,morphnormal_vertex:fx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:gx,normal_fragment_maps:bx,normal_pars_fragment:xx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:wx,iridescence_pars_fragment:Tx,opaque_fragment:Ex,packing:Ax,premultiplied_alpha_fragment:Rx,project_vertex:Cx,dithering_fragment:Px,dithering_pars_fragment:Ix,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Nx,shadowmap_vertex:Ux,shadowmask_pars_fragment:Ox,skinbase_vertex:Bx,skinning_pars_vertex:kx,skinning_vertex:zx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Vx,tonemapping_fragment:Wx,tonemapping_pars_fragment:qx,transmission_fragment:Xx,transmission_pars_fragment:jx,uv_pars_fragment:Kx,uv_pars_vertex:Jx,uv_vertex:Yx,worldpos_vertex:Zx,background_vert:$x,background_frag:Qx,backgroundCube_vert:e_,backgroundCube_frag:t_,cube_vert:n_,cube_frag:i_,depth_vert:s_,depth_frag:r_,distance_vert:a_,distance_frag:o_,equirect_vert:c_,equirect_frag:l_,linedashed_vert:h_,linedashed_frag:u_,meshbasic_vert:d_,meshbasic_frag:f_,meshlambert_vert:p_,meshlambert_frag:m_,meshmatcap_vert:g_,meshmatcap_frag:b_,meshnormal_vert:x_,meshnormal_frag:__,meshphong_vert:v_,meshphong_frag:y_,meshphysical_vert:M_,meshphysical_frag:S_,meshtoon_vert:w_,meshtoon_frag:T_,points_vert:E_,points_frag:A_,shadow_vert:R_,shadow_frag:C_,sprite_vert:P_,sprite_frag:I_},be={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ui={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var gl={r:0,b:0,g:0},L_=new qe,tm=new Xe;tm.set(-1,0,0,0,1,0,0,0,1);function D_(i,e,t,n,s,r){let a=new Ae(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let b=x.backgroundBlurriness>0;M=e.get(M,b)}return M}function m(x){let M=!1,b=f(x);b===null?g(a,o):b&&b.isColor&&(g(b,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(x,M){let b=f(M);b&&(b.isCubeTexture||b.mapping===qa)?(l===void 0&&(l=new lt(new Ct(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Rs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(L_.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(tm),l.material.toneMapped=Ze.getTransfer(b.colorSpace)!==pt,(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new lt(new vs(2,2),new fn({name:"BackgroundMaterial",uniforms:Rs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,M){x.getRGB(gl,uu(i)),t.buffers.color.setClear(gl.r,gl.g,gl.b,M,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:v,dispose:p}}function F_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(L,O,G,N,k){let X=!1,q=u(L,N,G,O);r!==q&&(r=q,l(r.object)),X=f(L,N,G,k),X&&m(L,N,G,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(L,O,G,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function u(L,O,G,N){let k=N.wireframe===!0,X=n[O.id];X===void 0&&(X={},n[O.id]=X);let q=L.isInstancedMesh===!0?L.id:0,se=X[q];se===void 0&&(se={},X[q]=se);let j=se[G.id];j===void 0&&(j={},se[G.id]=j);let Q=j[k];return Q===void 0&&(Q=d(c()),j[k]=Q),Q}function d(L){let O=[],G=[],N=[];for(let k=0;k<t;k++)O[k]=0,G[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,O,G,N){let k=r.attributes,X=O.attributes,q=0,se=G.getAttributes();for(let j in se)if(se[j].location>=0){let ne=k[j],Fe=X[j];if(Fe===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Fe=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Fe=L.instanceColor)),ne===void 0||ne.attribute!==Fe||Fe&&ne.data!==Fe.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function m(L,O,G,N){let k={},X=O.attributes,q=0,se=G.getAttributes();for(let j in se)if(se[j].location>=0){let ne=X[j];ne===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));let Fe={};Fe.attribute=ne,ne&&ne.data&&(Fe.data=ne.data),k[j]=Fe,q++}r.attributes=k,r.attributesNum=q,r.index=N}function v(){let L=r.newAttributes;for(let O=0,G=L.length;O<G;O++)L[O]=0}function g(L){p(L,0)}function p(L,O){let G=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;G[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),k[L]!==O&&(i.vertexAttribDivisor(L,O),k[L]=O)}function x(){let L=r.newAttributes,O=r.enabledAttributes;for(let G=0,N=O.length;G<N;G++)O[G]!==L[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function M(L,O,G,N,k,X,q){q===!0?i.vertexAttribIPointer(L,O,G,k,X):i.vertexAttribPointer(L,O,G,N,k,X)}function b(L,O,G,N){v();let k=N.attributes,X=G.getAttributes(),q=O.defaultAttributeValues;for(let se in X){let j=X[se];if(j.location>=0){let Q=k[se];if(Q===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let ne=Q.normalized,Fe=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;let ht=Re.buffer,nt=Re.type,at=Re.bytesPerElement,Y=nt===i.INT||nt===i.UNSIGNED_INT||Q.gpuType===Ac;if(Q.isInterleavedBufferAttribute){let ee=Q.data,xe=ee.stride,Ge=Q.offset;if(ee.isInstancedInterleavedBuffer){for(let Me=0;Me<j.locationSize;Me++)p(j.location+Me,ee.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Me=0;Me<j.locationSize;Me++)g(j.location+Me);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let Me=0;Me<j.locationSize;Me++)M(j.location+Me,Fe/j.locationSize,nt,ne,xe*at,(Ge+Fe/j.locationSize*Me)*at,Y)}else{if(Q.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ee=0;ee<j.locationSize;ee++)g(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ee=0;ee<j.locationSize;ee++)M(j.location+ee,Fe/j.locationSize,nt,ne,Fe*at,Fe/j.locationSize*ee*at,Y)}}else if(q!==void 0){let ne=q[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(j.location,ne);break;case 3:i.vertexAttrib3fv(j.location,ne);break;case 4:i.vertexAttrib4fv(j.location,ne);break;default:i.vertexAttrib1fv(j.location,ne)}}}}x()}function S(){E();for(let L in n){let O=n[L];for(let G in O){let N=O[G];for(let k in N){let X=N[k];for(let q in X)h(X[q].object),delete X[q];delete N[k]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let O=n[L.id];for(let G in O){let N=O[G];for(let k in N){let X=N[k];for(let q in X)h(X[q].object),delete X[q];delete N[k]}}delete n[L.id]}function A(L){for(let O in n){let G=n[O];for(let N in G){let k=G[N];if(k[L.id]===void 0)continue;let X=k[L.id];for(let q in X)h(X[q].object),delete X[q];delete k[L.id]}}}function _(L){for(let O in n){let G=n[O],N=L.isInstancedMesh===!0?L.id:0,k=G[N];if(k!==void 0){for(let X in k){let q=k[X];for(let se in q)h(q[se].object),delete q[se];delete k[X]}delete G[N],Object.keys(G).length===0&&delete n[O]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function N_(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function U_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xn&&A!==wn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,maxSamples:S,samples:w}}function O_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,M=x*4,b=p.clippingState||null;c.value=b,b=h(m,d,M,f);for(let S=0;S!==M;++S)b[S]=t[S];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,b=f;M!==v;++M,b+=4)a.copy(u[M]).applyMatrix4(x,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Fr=4,B_=6,k_=20,z_=256,Qa=new qi,Dp=new Ae,vu=null,yu=0,Mu=0,Su=!1,H_=new I,Cs=new I,xl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=H_}=r;vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,yu,Mu),this._renderer.xr.enabled=Su,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Zn,format:Tn,colorSpace:un,depthBuffer:!1},s=Fp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G_(r)),this._blurMaterial=W_(r,e,t),this._ggxMaterial=V_(r,e,t)}return s}_compileMaterial(e){let t=new lt(new vt,e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,s,r){let c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dp),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new lt(new Ct,new Xt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(Dp),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let S=this._cubeSize;Dr(s,b*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(v,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ki||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Np());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,v=this._sizeLods[n],g=3*v*(n>m-Fr?n-m+Fr:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Dr(r,g,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Qa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Dr(e,g,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Qa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Fr?s-this._lodMax+Fr:0),d=4*(this._cubeSize-h);Dr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Qa)}};function G_(i){let e=[],t=[],n=i,s=i-Fr+1+B_;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,M=p>2?0:-1,b=[x,M,0,x+2/3,M,0,x+2/3,M+1,0,x,M,0,x+2/3,M+1,0,x,M+1,0];m.set(b,f*d*p);for(let S=0;S<d;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Cs.set(1,A,w):p===1?Cs.set(-w,1,-A):p===2?Cs.set(-w,A,1):p===3?Cs.set(-1,A,-w):p===4?Cs.set(-w,-1,A):Cs.set(w,A,-1),Cs.toArray(v,(p*d+S)*f)}}let g=new vt;g.setAttribute("position",new Nt(m,f)),g.setAttribute("outputDirection",new Nt(v,f)),t.push(new lt(g,null)),n>Fr&&n--}return{lodMeshes:t,sizeLods:e}}function Fp(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function V_(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function W_(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:k_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Np(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Up(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _l=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new _a(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:li});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ot),new _c(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function q_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===wc||f===Tc)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let v=new _l(m.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===wc||f===Tc,v=f===Ki||f===Es;if(m||v){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new xl(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return m&&x&&x.height>0||v&&x&&c(x)?(n===null&&(n=new xl(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===wc?d.mapping=Ki:f===Tc&&(d.mapping=Es),d}function c(d){let f=0,m=6;for(let v=0;v<m;v++)d[v]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function X_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&hs("WebGLRenderer: "+n+" extension not supported."),s}}}function j_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(m===void 0)return;if(f!==null){let x=f.array;v=f.version;for(let M=0,b=x.length;M<b;M+=3){let S=x[M+0],w=x[M+1],A=x[M+2];d.push(S,w,w,A,A,S)}}else{let x=m.array;v=m.version;for(let M=0,b=x.length/3-1;M<b;M+=3){let S=M+0,w=M+1,A=M+2;d.push(S,w,w,A,A,S)}}let g=new(m.count>=65535?pa:fa)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function K_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=d[g];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function J_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,e,t){let n=new WeakMap,s=new bt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*S*4*u),A=new ha(w,b,S,u);A.type=wn,A.needsUpdate=!0;let _=M*4;for(let C=0;C<u;C++){let L=g[C],O=p[C],G=x[C],N=b*S*4*C;for(let k=0;k<L.count;k++){let X=k*_;f===!0&&(s.fromBufferAttribute(L,k),w[N+X+0]=s.x,w[N+X+1]=s.y,w[N+X+2]=s.z,w[N+X+3]=0),m===!0&&(s.fromBufferAttribute(O,k),w[N+X+4]=s.x,w[N+X+5]=s.y,w[N+X+6]=s.z,w[N+X+7]=0),v===!0&&(s.fromBufferAttribute(G,k),w[N+X+8]=s.x,w[N+X+9]=s.y,w[N+X+10]=s.z,w[N+X+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ae(b,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z_(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var $_={[Xh]:"LINEAR_TONE_MAPPING",[jh]:"REINHARD_TONE_MAPPING",[Kh]:"CINEON_TONE_MAPPING",[Wa]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[Jh]:"CUSTOM_TONE_MAPPING"};function Q_(i,e,t,n,s,r){let a=new pn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new vt;l.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new et([0,2,0,0,2,0],2));let h=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new lt(l,h),d=new qi(-1,1,1,-1,0,1),f=null,m=null,v=!1,g,p=null,x=[],M=!1;this.setSize=function(b,S){a.setSize(b,S),o!==null&&o.setSize(b,S),c!==null&&c.setSize(b,S);for(let w=0;w<x.length;w++){let A=x[w];A.setSize&&A.setSize(b,S)}},this.setEffects=function(b){x=b,M=x.length>0&&x[0].isRenderPass===!0;let S=a.width,w=a.height;x.length>0&&o===null&&(o=new pn(S,w,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),c=new pn(S,w,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(S,w)}},this.begin=function(b,S){if(v||b.toneMapping===Kn&&x.length===0)return!1;if(p=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Kn,!0},this.hasRenderPass=function(){return M},this.end=function(b,S){b.toneMapping=g,v=!0;let w=a,A=o;for(let _=0;_<x.length;_++){let E=x[_];E.enabled!==!1&&(E.render(b,A,w,S),E.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==b.outputColorSpace||m!==b.toneMapping){f=b.outputColorSpace,m=b.toneMapping,h.defines={},Ze.getTransfer(f)===pt&&(h.defines.SRGB_TRANSFER="");let _=$_[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var nm=new qt,Eu=new Vi(1,1),im=new ha,sm=new tc,rm=new _a,Op=[],Bp=[],kp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function Ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Op[s];if(r===void 0&&(r=new Float32Array(s),Op[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ev(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),Kt(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;zp.set(n),i.uniformMatrix3fv(this.addr,!1,zp),Kt(t,n)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;kp.set(n),i.uniformMatrix4fv(this.addr,!1,kp),Kt(t,n)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=t.isReversedDepthBuffer()?ml:pl,r=Eu):r=nm,t.setTexture2D(e||r,s)}function gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sm,s)}function bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rm,s)}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||im,s)}function _v(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return xv}}function vv(i,e){i.uniform1fv(this.addr,e)}function yv(i,e){let t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Mv(i,e){let t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Sv(i,e){let t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function wv(i,e){let t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tv(i,e){let t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ev(i,e){let t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Av(i,e){i.uniform1iv(this.addr,e)}function Rv(i,e){i.uniform2iv(this.addr,e)}function Cv(i,e){i.uniform3iv(this.addr,e)}function Pv(i,e){i.uniform4iv(this.addr,e)}function Iv(i,e){i.uniform1uiv(this.addr,e)}function Lv(i,e){i.uniform2uiv(this.addr,e)}function Dv(i,e){i.uniform3uiv(this.addr,e)}function Fv(i,e){i.uniform4uiv(this.addr,e)}function Nv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Eu:a=nm;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Uv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sm,r[a])}function Ov(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rm,r[a])}function Bv(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||im,r[a])}function kv(i){switch(i){case 5126:return vv;case 35664:return yv;case 35665:return Mv;case 35666:return Sv;case 35674:return wv;case 35675:return Tv;case 35676:return Ev;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Fv;case 35678:case 36198:case 36298:case 36306:case 35682:return Nv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}var Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_v(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kv(t.type)}},Cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},wu=/(\w+)(\])?(\[|\.)?/g;function Gp(i,e){i.seq.push(e),i.map[e.id]=e}function zv(i,e,t){let n=i.name,s=n.length;for(wu.lastIndex=0;;){let r=wu.exec(n),a=wu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Gp(t,l===void 0?new Au(o,i,e):new Ru(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Cu(o),Gp(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);zv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hv=37297,Gv=0;function Vv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Wp=new Xe;function Wv(i){Ze._getMatrix(Wp,Ze.workingColorSpace,i);let e=`mat3( ${Wp.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vv(i.getShaderSource(e),o)}else return r}function qv(i,e){let t=Wv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xv={[Xh]:"Linear",[jh]:"Reinhard",[Kh]:"Cineon",[Wa]:"ACESFilmic",[Yh]:"AgX",[Zh]:"Neutral",[Jh]:"Custom"};function jv(i,e){let t=Xv[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var bl=new I;function Kv(){Ze.getLuminanceCoefficients(bl);let i=bl.x.toFixed(4),e=bl.y.toFixed(4),t=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Yv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function to(i){return i!==""}function Xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace($v,ey)}var Qv=new Map;function ey(i,e){let t=Ye[e];if(t===void 0){let n=Qv.get(e);if(n!==void 0)t=Ye[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pu(t)}var ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kp(i){return i.replace(ty,ny)}function ny(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var iy={[ws]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function sy(i){return iy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ry={[Ki]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[qa]:"ENVMAP_TYPE_CUBE_UV"};function ay(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ry[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var oy={[Es]:"ENVMAP_MODE_REFRACTION"};function cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":oy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ly={[qh]:"ENVMAP_BLENDING_MULTIPLY",[ap]:"ENVMAP_BLENDING_MIX",[op]:"ENVMAP_BLENDING_ADD"};function hy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ly[i.combine]||"ENVMAP_BLENDING_NONE"}function uy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=sy(t),l=ay(t),h=cy(t),u=hy(t),d=uy(t),f=Jv(t),m=Yv(r),v=s.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),p.length>0&&(p+=`
`)):(g=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Jp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Kn?jv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=Pu(a),a=Xp(a,t),a=jp(a,t),o=Pu(o),o=Xp(o,t),o=jp(o,t),a=Kp(a),o=Kp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=x+g+a,b=x+p+o,S=Vp(s,s.VERTEX_SHADER,M),w=Vp(s,s.FRAGMENT_SHADER,b);s.attachShader(v,S),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(S)||"",N=s.getShaderInfoLog(w)||"",k=O.trim(),X=G.trim(),q=N.trim(),se=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,w);else{let Q=qp(s,S,"vertex"),ne=qp(s,w,"fragment");He("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+Q+`
`+ne)}else k!==""?De("WebGLProgram: Program Info Log:",k):(X===""||q==="")&&(j=!1);j&&(L.diagnostics={runnable:se,programLog:k,vertexShader:{log:X,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(S),s.deleteShader(w),_=new Nr(s,v),E=Zv(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,Hv)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=w,this}var fy=0,Iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lu(e),t.set(e,n)),n}},Lu=class{constructor(e){this.id=fy++,this.code=e,this.usedTimes=0}};function py(i){return i===Yi||i===Ya||i===Za}function my(i,e,t,n,s,r){let a=new ur,o=new Iu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,E,C,L,O,G){let N=L.fog,k=O.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,se=e.get(_.envMap||X,q),j=se&&se.mapping===qa?se.image.height:null,Q=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Fe=ne!==void 0?ne.length:0,Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let ht,nt,at,Y;if(Q){let Mt=ui[Q];ht=Mt.vertexShader,nt=Mt.fragmentShader}else{ht=_.vertexShader,nt=_.fragmentShader;let Mt=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,Mt,dt),at=Mt.id,Y=dt.id}let ee=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Ge=O.isInstancedMesh===!0,Me=O.isBatchedMesh===!0,Ve=!!_.map,mt=!!_.matcap,te=!!se,re=!!_.aoMap,oe=!!_.lightMap,ce=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,ke=!!_.displacementMap,Be=!!_.emissiveMap,We=!!_.metalnessMap,je=!!_.roughnessMap,D=_.anisotropy>0,ut=_.clearcoat>0,it=_.dispersion>0,R=_.retroreflectivity>0,y=_.iridescence>0,B=_.sheen>0,V=_.transmission>0,K=D&&!!_.anisotropyMap,le=ut&&!!_.clearcoatMap,he=ut&&!!_.clearcoatNormalMap,J=ut&&!!_.clearcoatRoughnessMap,$=y&&!!_.iridescenceMap,de=y&&!!_.iridescenceThicknessMap,Ne=B&&!!_.sheenColorMap,ge=B&&!!_.sheenRoughnessMap,fe=!!_.specularMap,Ue=!!_.specularColorMap,ze=!!_.specularIntensityMap,Ke=V&&!!_.transmissionMap,U=V&&!!_.thicknessMap,pe=!!_.gradientMap,Z=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,ie=!!_.extensions,Oe=Kn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Ie={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:ht,fragmentShader:nt,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Me,batchingColor:Me&&O._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&O.instanceColor!==null,instancingMorph:Ge&&O.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:mt,envMap:te,envMapMode:te&&se.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:oe,bumpMap:ce,normalMap:ue,displacementMap:ke,emissiveMap:Be,normalMapObjectSpace:ue&&_.normalMapType===dp,normalMapTangentSpace:ue&&_.normalMapType===fl,packedNormalMap:ue&&_.normalMapType===fl&&py(_.normalMap.format),metalnessMap:We,roughnessMap:je,anisotropy:D,anisotropyMap:K,clearcoat:ut,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:J,dispersion:it,retroreflection:R,iridescence:y,iridescenceMap:$,iridescenceThicknessMap:de,sheen:B,sheenColorMap:Ne,sheenRoughnessMap:ge,specularMap:fe,specularColorMap:Ue,specularIntensityMap:ze,transmission:V,transmissionMap:Ke,thicknessMap:U,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Rr&&_.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:Ve&&m(_.map.channel),aoMapUv:re&&m(_.aoMap.channel),lightMapUv:oe&&m(_.lightMap.channel),bumpMapUv:ce&&m(_.bumpMap.channel),normalMapUv:ue&&m(_.normalMap.channel),displacementMapUv:ke&&m(_.displacementMap.channel),emissiveMapUv:Be&&m(_.emissiveMap.channel),metalnessMapUv:We&&m(_.metalnessMap.channel),roughnessMapUv:je&&m(_.roughnessMap.channel),anisotropyMapUv:K&&m(_.anisotropyMap.channel),clearcoatMapUv:le&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(_.sheenRoughnessMap.channel),specularMapUv:fe&&m(_.specularMap.channel),specularColorMapUv:Ue&&m(_.specularColorMap.channel),specularIntensityMapUv:ze&&m(_.specularIntensityMap.channel),transmissionMapUv:Ke&&m(_.transmissionMap.channel),thicknessMapUv:U&&m(_.thicknessMap.channel),alphaMapUv:Z&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ue||D),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Ve||Z),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Re,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===pt,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(_.emissiveMap.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===an,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),x(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let E=f[_.type],C;if(E){let L=ui[E];C=Pp.clone(L.uniforms)}else C=_.uniforms;return C}function b(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new dy(i,E,_,s),l.push(C),h.set(E,C)),C}function S(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:A}}function gy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function by(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,v,g,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=a(d),x.groupOrder=v,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function c(d,f,m,v,g,p,x){x.reversedDepth===!0&&(g=-g);let M=o(d,f,m,v,g,p);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):t.push(M)}function l(d,f,m,v,g,p){let x=o(d,f,m,v,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||by),n.length>1&&n.sort(f||Yp),s.length>1&&s.sort(f||Yp)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function xy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zp,i.set(n,[a])):s>=r.length?(a=new Zp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _y(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function vy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var yy=0;function My(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Sy(i){let e=new _y,t=vy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new qe,a=new qe;function o(l){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,x=0,M=0,b=0,S=0,w=0,A=0,_=0,E=0,C=0;l.sort(My);for(let O=0,G=l.length;O<G;O++){let N=l[O],k=N.color,X=N.intensity,q=N.distance,se=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Yi?se=N.shadow.map.texture:se=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*X,u+=k.g*X,d+=k.b*X;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],X);C++}else if(N.isSunLight){let j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=ne,n.sunShadowMap[m]=se;let Fe=Q.getViewportCount();for(let Re=0;Re<Fe;Re++)n.sunShadowMatrix[v+Re]=Q.getMatrix(Re),n.sunShadowCascade[v+Re]=Q._cascadeData[Re];v+=Fe,m++}n.sun[f]=j,f++}else if(N.isDirectionalLight){let j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.directionalShadow[g]=ne,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=j,g++}else if(N.isSpotLight){let j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(X),j.distance=q,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[x]=j;let Q=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,N.castShadow){let ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=se,A++}x++}else if(N.isRectAreaLight){let j=e.get(N);j.color.copy(k).multiplyScalar(X),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=j,M++}else if(N.isPointLight){let j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let Q=N.shadow,ne=t.get(N);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=j,p++}else if(N.isHemisphereLight){let j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(X),j.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[b]=j,b++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==M||L.hemiLength!==b||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=x,L.rectAreaLength=M,L.hemiLength=b,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=C,n.version=yy++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=0,p=h.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let b=l[x];if(b.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(b.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let S=n.rectArea[v];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function $p(i){let e=new Sy(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function wy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new $p(i),e.set(s,[o])):r>=a.length?(o=new $p(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ay=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ry=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Qp=new qe,eo=new I,Tu=new I;function Cy(i,e,t){let n=new mr,s=new ae,r=new ae,a=new bt,o=new uc,c=new dc,l={},h=t.maxTextureSize,u={[ci]:en,[en]:ci,[an]:an},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Ty,fragmentShader:Ey}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let p=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Hf&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let E=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(li),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==this.type;G&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=w.length;N<k;N++){let X=w[N],q=X.shadow;if(q===void 0){De("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let se=q.getFrameExtents();s.multiply(se),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,q.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=j,q.map===null||G===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ar){if(X.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new pn(s.x,s.y,{format:Yi,type:Zn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new Vi(s.x,s.y,wn),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=ri,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut}else X.isPointLight?(q.map=new _l(s.x),q.map.depthTexture=new sc(s.x,Yn)):(q.map=new pn(s.x,s.y),q.map.depthTexture=new Vi(s.x,s.y,Yn)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=ri,this.type===ws?(q.map.depthTexture.compareFunction=j?ml:pl,q.map.depthTexture.minFilter=Ot,q.map.depthTexture.magFilter=Ot):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ut,q.map.depthTexture.magFilter=Ut);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Q=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,_);for(let ne=0;ne<Q;ne++){let Fe=q.getCamera(ne);if(X.isPointLight){let Re=q.camera,ht=q.matrix,nt=X.distance||Re.far;nt!==Re.far&&(Re.far=nt,Re.updateProjectionMatrix()),eo.setFromMatrixPosition(X.matrixWorld),Re.position.copy(eo),Tu.copy(Re.position),Tu.add(Ay[ne]),Re.up.copy(Ry[ne]),Re.lookAt(Tu),Re.updateMatrixWorld(),ht.makeTranslation(-eo.x,-eo.y,-eo.z),Qp.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Qp,Re.coordinateSystem,Re.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(q.map),i.clear());let Re=q.getViewport(ne);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),O.viewport(a)}n=q.getFrustum(ne),b(A,_,Fe,X,this.type)}q.isPointLightShadow!==!0&&this.type===Ar&&x(q,_),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,C,L)};function x(w,A){let _=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new pn(s.x,s.y,{format:Yi,type:Zn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,f,v,null)}function M(w,A,_,E){let C=null,L=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=C.uuid,G=A.uuid,N=l[O];N===void 0&&(N={},l[O]=N);let k=N[G];k===void 0&&(k=C.clone(),N[G]=k,A.addEventListener("dispose",S)),C=k}if(C.visible=A.visible,C.wireframe=A.wireframe,E===Ar?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=_}return C}function b(w,A,_,E,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Ar)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let G=e.update(w),N=w.material;if(Array.isArray(N)){let k=G.groups;for(let X=0,q=k.length;X<q;X++){let se=k[X],j=N[se.materialIndex];if(j&&j.visible){let Q=M(w,j,E,C);w.onBeforeShadow(i,w,A,_,G,Q,se),i.renderBufferDirect(_,null,G,Q,w,se),w.onAfterShadow(i,w,A,_,G,Q,se)}}}else if(N.visible){let k=M(w,N,E,C);w.onBeforeShadow(i,w,A,_,G,k,null),i.renderBufferDirect(_,null,G,k,w,null),w.onAfterShadow(i,w,A,_,G,k,null)}}let O=w.children;for(let G=0,N=O.length;G<N;G++)b(O[G],A,_,E,C)}function S(w){w.target.removeEventListener("dispose",S);for(let _ in l){let E=l[_],C=w.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Py(i,e){function t(){let U=!1,pe=new bt,Z=null,me=new bt(0,0,0,0);return{setMask:function(ye){Z!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ie,Oe,Ie,Mt){Mt===!0&&(ye*=Ie,ie*=Ie,Oe*=Ie),pe.set(ye,ie,Oe,Ie),me.equals(pe)===!1&&(i.clearColor(ye,ie,Oe,Ie),me.copy(pe))},reset:function(){U=!1,Z=null,me.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,Z=null,me=null,ye=null;return{setReversed:function(ie){if(pe!==ie){let Oe=e.get("EXT_clip_control");ie?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;let Ie=ye;ye=null,this.setClear(Ie)}},getReversed:function(){return pe},setTest:function(ie){ie?ee(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ie){Z!==ie&&!U&&(i.depthMask(ie),Z=ie)},setFunc:function(ie){if(pe&&(ie=Sp[ie]),me!==ie){switch(ie){case Xo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case Zo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=ie}},setLocked:function(ie){U=ie},setClear:function(ie){ye!==ie&&(ye=ie,pe&&(ie=1-ie),i.clearDepth(ie))},reset:function(){U=!1,Z=null,me=null,ye=null,pe=!1}}}function s(){let U=!1,pe=null,Z=null,me=null,ye=null,ie=null,Oe=null,Ie=null,Mt=null;return{setTest:function(dt){U||(dt?ee(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(dt){pe!==dt&&!U&&(i.stencilMask(dt),pe=dt)},setFunc:function(dt,kn,ti){(Z!==dt||me!==kn||ye!==ti)&&(i.stencilFunc(dt,kn,ti),Z=dt,me=kn,ye=ti)},setOp:function(dt,kn,ti){(ie!==dt||Oe!==kn||Ie!==ti)&&(i.stencilOp(dt,kn,ti),ie=dt,Oe=kn,Ie=ti)},setLocked:function(dt){U=dt},setClear:function(dt){Mt!==dt&&(i.clearStencil(dt),Mt=dt)},reset:function(){U=!1,pe=null,Z=null,me=null,ye=null,ie=null,Oe=null,Ie=null,Mt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,x=null,M=null,b=null,S=null,w=null,A=null,_=new Ae(0,0,0),E=0,C=!1,L=null,O=null,G=null,N=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,se=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(j)[1]),q=se>=1):j.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),q=se>=2);let Q=null,ne={},Fe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),ht=new bt().fromArray(Fe),nt=new bt().fromArray(Re);function at(U,pe,Z,me){let ye=new Uint8Array(4),ie=i.createTexture();i.bindTexture(U,ie),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<Z;Oe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(pe+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ie}let Y={};Y[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(rr),ce(!1),ue(zh),ee(i.CULL_FACE),re(li);function ee(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function xe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ge(U,pe){return d[U]!==pe?(i.bindFramebuffer(U,pe),d[U]=pe,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=pe),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Me(U,pe){let Z=m,me=!1;if(U){Z=f.get(pe),Z===void 0&&(Z=[],f.set(pe,Z));let ye=U.textures;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Oe=ye.length;ie<Oe;ie++)Z[ie]=i.COLOR_ATTACHMENT0+ie;Z.length=ye.length,me=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,me=!0);me&&i.drawBuffers(Z)}function Ve(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let mt={[Ts]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};mt[qf]=i.MIN,mt[Xf]=i.MAX;let te={[jf]:i.ZERO,[Kf]:i.ONE,[Jf]:i.SRC_COLOR,[Vh]:i.SRC_ALPHA,[tp]:i.SRC_ALPHA_SATURATE,[Qf]:i.DST_COLOR,[Zf]:i.DST_ALPHA,[Yf]:i.ONE_MINUS_SRC_COLOR,[Wh]:i.ONE_MINUS_SRC_ALPHA,[ep]:i.ONE_MINUS_DST_COLOR,[$f]:i.ONE_MINUS_DST_ALPHA,[np]:i.CONSTANT_COLOR,[ip]:i.ONE_MINUS_CONSTANT_COLOR,[sp]:i.CONSTANT_ALPHA,[rp]:i.ONE_MINUS_CONSTANT_ALPHA};function re(U,pe,Z,me,ye,ie,Oe,Ie,Mt,dt){if(U===li){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),U!==Gf){if(U!==p||dt!==C){if((x!==Ts||S!==Ts)&&(i.blendEquation(i.FUNC_ADD),x=Ts,S=Ts),dt)switch(U){case Rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case Hh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",U);break}else switch(U){case Rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hh:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",U);break}M=null,b=null,w=null,A=null,_.set(0,0,0),E=0,p=U,C=dt}return}ye=ye||pe,ie=ie||Z,Oe=Oe||me,(pe!==x||ye!==S)&&(i.blendEquationSeparate(mt[pe],mt[ye]),x=pe,S=ye),(Z!==M||me!==b||ie!==w||Oe!==A)&&(i.blendFuncSeparate(te[Z],te[me],te[ie],te[Oe]),M=Z,b=me,w=ie,A=Oe),(Ie.equals(_)===!1||Mt!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,Mt),_.copy(Ie),E=Mt),p=U,C=!1}function oe(U,pe){U.side===an?xe(i.CULL_FACE):ee(i.CULL_FACE);let Z=U.side===en;pe&&(Z=!Z),ce(Z),U.blending===Rr&&U.transparent===!1?re(li):re(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function ue(U){U!==kf?(ee(i.CULL_FACE),U!==O&&(U===zh?i.cullFace(i.BACK):U===zf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=U}function ke(U){U!==G&&(q&&i.lineWidth(U),G=U)}function Be(U,pe,Z){U?(ee(i.POLYGON_OFFSET_FILL),(N!==pe||k!==Z)&&(N=pe,k=Z,a.getReversed()&&(pe=-pe),i.polygonOffset(pe,Z))):xe(i.POLYGON_OFFSET_FILL)}function We(U){U?ee(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function je(U){U===void 0&&(U=i.TEXTURE0+X-1),Q!==U&&(i.activeTexture(U),Q=U)}function D(U,pe,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+X-1:Z=Q);let me=ne[Z];me===void 0&&(me={type:void 0,texture:void 0},ne[Z]=me),(me.type!==U||me.texture!==pe)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(U,pe||Y[U]),me.type=U,me.texture=pe)}function ut(){let U=ne[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{i.compressedTexImage2D(...arguments)}catch(U){He("WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){He("WebGLState:",U)}}function y(){try{i.texSubImage2D(...arguments)}catch(U){He("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){He("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){He("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){He("WebGLState:",U)}}function le(){try{i.texStorage2D(...arguments)}catch(U){He("WebGLState:",U)}}function he(){try{i.texStorage3D(...arguments)}catch(U){He("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){He("WebGLState:",U)}}function $(){try{i.texImage3D(...arguments)}catch(U){He("WebGLState:",U)}}function de(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Ne(U,pe){u[U]!==pe&&(i.pixelStorei(U,pe),u[U]=pe)}function ge(U){ht.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ht.copy(U))}function fe(U){nt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),nt.copy(U))}function Ue(U,pe){let Z=l.get(pe);Z===void 0&&(Z=new WeakMap,l.set(pe,Z));let me=Z.get(U);me===void 0&&(me=i.getUniformBlockIndex(pe,U.name),Z.set(U,me))}function ze(U,pe){let me=l.get(pe).get(U);c.get(pe)!==me&&(i.uniformBlockBinding(pe,me,U.__bindingPointIndex),c.set(pe,me))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},Q=null,ne={},d={},f=new WeakMap,m=[],v=null,g=!1,p=null,x=null,M=null,b=null,S=null,w=null,A=null,_=new Ae(0,0,0),E=0,C=!1,L=null,O=null,G=null,N=null,k=null,ht.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:Ge,drawBuffers:Me,useProgram:Ve,setBlending:re,setMaterial:oe,setFlipSided:ce,setCullFace:ue,setLineWidth:ke,setPolygonOffset:Be,setScissorTest:We,activeTexture:je,bindTexture:D,unbindTexture:ut,compressedTexImage2D:it,compressedTexImage3D:R,texImage2D:J,texImage3D:$,pixelStorei:Ne,getParameter:de,updateUBOMapping:Ue,uniformBlockBinding:ze,texStorage2D:le,texStorage3D:he,texSubImage2D:y,texSubImage3D:B,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ge,viewport:fe,reset:Ke}}function Iy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return m?new OffscreenCanvas(R,y):cr("canvas")}function g(R,y,B){let V=1,K=it(R);if((K.width>B||K.height>B)&&(V=B/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let le=Math.floor(V*K.width),he=Math.floor(V*K.height);d===void 0&&(d=v(le,he));let J=y?v(le,he):d;return J.width=le,J.height=he,J.getContext("2d").drawImage(R,0,0,le,he),De("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+he+")."),J}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function p(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,y,B,V,K,le=!1){if(R!==null){if(i[R]!==void 0)return i[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he;V&&(he=e.get("EXT_texture_norm16"),he||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),B===i.SHORT&&he&&(J=he.R16_SNORM_EXT)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),y===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),B===i.SHORT&&he&&(J=he.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),B===i.SHORT&&he&&(J=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let $=le?ca:Ze.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=$===pt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),B===i.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function S(R,y){let B;return R?y===null||y===Yn||y===Ir?B=i.DEPTH24_STENCIL8:y===wn?B=i.DEPTH32F_STENCIL8:y===Pr&&(B=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Yn||y===Ir?B=i.DEPTH_COMPONENT24:y===wn?B=i.DEPTH_COMPONENT32F:y===Pr&&(B=i.DEPTH_COMPONENT16),B}function w(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ut&&R.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),E(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(R){let y=R.target;y.removeEventListener("dispose",_),L(y)}function E(R){let y=n.get(R);if(y.__webglInit===void 0)return;let B=R.source,V=f.get(B);if(V){let K=V[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(B)}n.remove(R)}function C(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let B=R.source,V=f.get(B);delete V[y.__cacheKey],a.memory.textures--}function L(R){let y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(y.__webglFramebuffer[V]))for(let K=0;K<y.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(y.__webglFramebuffer[V][K]);else i.deleteFramebuffer(y.__webglFramebuffer[V]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[V])}else{if(Array.isArray(y.__webglFramebuffer))for(let V=0;V<y.__webglFramebuffer.length;V++)i.deleteFramebuffer(y.__webglFramebuffer[V]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let V=0;V<y.__webglColorRenderbuffer.length;V++)y.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[V]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=R.textures;for(let V=0,K=B.length;V<K;V++){let le=n.get(B[V]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(B[V])}n.remove(R)}let O=0;function G(){O=0}function N(){return O}function k(R){O=R}function X(){let R=O;return R>=s.maxTextures&&De("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function q(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function se(R,y){let B=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let V=R.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,R,y);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function j(R,y){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,y);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Q(R,y){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){xe(B,R,y);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function ne(R,y){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ge(B,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let Fe={[Bi]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[ar]:i.MIRRORED_REPEAT},Re={[Ut]:i.NEAREST,[Ec]:i.NEAREST_MIPMAP_NEAREST,[As]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},ht={[pp]:i.NEVER,[_p]:i.ALWAYS,[mp]:i.LESS,[pl]:i.LEQUAL,[gp]:i.EQUAL,[ml]:i.GEQUAL,[bp]:i.GREATER,[xp]:i.NOTEQUAL};function nt(R,y){if(y.type===wn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===Cr||y.magFilter===As||y.magFilter===Jn||y.minFilter===Ot||y.minFilter===Cr||y.minFilter===As||y.minFilter===Jn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Fe[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Fe[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Fe[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Re[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Re[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ht[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ut||y.minFilter!==As&&y.minFilter!==Jn||y.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function at(R,y){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let V=y.source,K=f.get(V);K===void 0&&(K={},f.set(V,K));let le=q(y);if(le!==R.__cacheKey){K[le]===void 0&&(K[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[le].usedTimes++;let he=K[R.__cacheKey];he!==void 0&&(K[R.__cacheKey].usedTimes--,he.usedTimes===0&&C(y)),R.__cacheKey=le,R.__webglTexture=K[le].texture}return B}function Y(R,y,B){return Math.floor(Math.floor(R/B)/y)}function ee(R,y,B,V){let le=R.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,V,y.data);else{le.sort((Ne,ge)=>Ne.start-ge.start);let he=0;for(let Ne=1;Ne<le.length;Ne++){let ge=le[he],fe=le[Ne],Ue=ge.start+ge.count,ze=Y(fe.start,y.width,4),Ke=Y(ge.start,y.width,4);fe.start<=Ue+1&&ze===Ke&&Y(fe.start+fe.count-1,y.width,4)===ze?ge.count=Math.max(ge.count,fe.start+fe.count-ge.start):(++he,le[he]=fe)}le.length=he+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,ge=le.length;Ne<ge;Ne++){let fe=le[Ne],Ue=Math.floor(fe.start/4),ze=Math.ceil(fe.count/4),Ke=Ue%y.width,U=Math.floor(Ue/y.width),pe=ze,Z=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ke,U,pe,Z,B,V,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function xe(R,y,B){let V=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(V=i.TEXTURE_3D);let K=at(R,y),le=y.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+B);let he=n.get(le);if(le.version!==he.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Z=Ze.getPrimaries(Ze.workingColorSpace),me=y.colorSpace===Ri?null:Ze.getPrimaries(y.colorSpace),ye=y.colorSpace===Ri||Z===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let $=g(y.image,!1,s.maxTextureSize);$=ut(y,$);let de=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),ge=b(y.internalFormat,de,Ne,y.normalized,y.colorSpace,y.isVideoTexture);nt(V,y);let fe,Ue=y.mipmaps,ze=y.isVideoTexture!==!0,Ke=he.__version===void 0||K===!0,U=le.dataReady,pe=w(y,$);if(y.isDepthTexture)ge=S(y.format===Ji,y.type),Ke&&(ze?t.texStorage2D(i.TEXTURE_2D,1,ge,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,de,Ne,null));else if(y.isDataTexture)if(Ue.length>0){ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let Z=0,me=Ue.length;Z<me;Z++)fe=Ue[Z],ze?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(i.TEXTURE_2D,Z,ge,fe.width,fe.height,0,de,Ne,fe.data);y.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,$.width,$.height),U&&ee(y,$,de,Ne)):t.texImage2D(i.TEXTURE_2D,0,ge,$.width,$.height,0,de,Ne,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Ue[0].width,Ue[0].height,$.depth);for(let Z=0,me=Ue.length;Z<me;Z++)if(fe=Ue[Z],y.format!==Tn)if(de!==null)if(ze){if(U)if(y.layerUpdates.size>0){let ye=pu(fe.width,fe.height,y.format,y.type);for(let ie of y.layerUpdates){let Oe=fe.data.subarray(ie*ye/fe.data.BYTES_PER_ELEMENT,(ie+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ie,fe.width,fe.height,1,de,Oe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,$.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ge,fe.width,fe.height,$.depth,0,fe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,fe.width,fe.height,$.depth,de,Ne,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ge,fe.width,fe.height,$.depth,0,de,Ne,fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ze&&Ke&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Ue[0].width,Ue[0].height);for(let Z=0,me=Ue.length;Z<me;Z++)fe=Ue[Z],y.format!==Tn?de!==null?ze?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ge,fe.width,fe.height,0,fe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(i.TEXTURE_2D,Z,ge,fe.width,fe.height,0,de,Ne,fe.data)}else if(y.isDataArrayTexture)if(ze){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,$.width,$.height,$.depth),U)if(y.layerUpdates.size>0){let Z=pu($.width,$.height,y.format,y.type);for(let me of y.layerUpdates){let ye=$.data.subarray(me*Z/$.data.BYTES_PER_ELEMENT,(me+1)*Z/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,$.width,$.height,1,de,Ne,ye)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,$.width,$.height,$.depth,0,de,Ne,$.data);else if(y.isData3DTexture)ze?(Ke&&t.texStorage3D(i.TEXTURE_3D,pe,ge,$.width,$.height,$.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)):t.texImage3D(i.TEXTURE_3D,0,ge,$.width,$.height,$.depth,0,de,Ne,$.data);else if(y.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(i.TEXTURE_2D,pe,ge,$.width,$.height);else{let Z=$.width,me=$.height;for(let ye=0;ye<pe;ye++)t.texImage2D(i.TEXTURE_2D,ye,ge,Z,me,0,de,Ne,null),Z>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),u.add(y),Z.onpaint=me=>{let ye=me.changedElements;for(let ie of u)ye.includes(ie.image)&&(ie.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let ye=i.RGBA,ie=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,ie,Oe,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(ze&&Ke){let Z=it(Ue[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,Z.width,Z.height)}for(let Z=0,me=Ue.length;Z<me;Z++)fe=Ue[Z],ze?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,de,Ne,fe):t.texImage2D(i.TEXTURE_2D,Z,ge,de,Ne,fe);y.generateMipmaps=!1}else if(ze){if(Ke){let Z=it($);t.texStorage2D(i.TEXTURE_2D,pe,ge,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ne,$)}else t.texImage2D(i.TEXTURE_2D,0,ge,de,Ne,$);p(y)&&x(V),he.__version=le.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ge(R,y,B){if(y.image.length!==6)return;let V=at(R,y),K=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let le=n.get(K);if(K.version!==le.__version||V===!0){t.activeTexture(i.TEXTURE0+B);let he=Ze.getPrimaries(Ze.workingColorSpace),J=y.colorSpace===Ri?null:Ze.getPrimaries(y.colorSpace),$=y.colorSpace===Ri||he===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!de&&!Ne?ge[ie]=g(y.image[ie],!0,s.maxCubemapSize):ge[ie]=Ne?y.image[ie].image:y.image[ie],ge[ie]=ut(y,ge[ie]);let fe=ge[0],Ue=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Ke=b(y.internalFormat,Ue,ze,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,pe=le.__version===void 0||V===!0,Z=K.dataReady,me=w(y,fe);nt(i.TEXTURE_CUBE_MAP,y);let ye;if(de){U&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,fe.width,fe.height);for(let ie=0;ie<6;ie++){ye=ge[ie].mipmaps;for(let Oe=0;Oe<ye.length;Oe++){let Ie=ye[Oe];y.format!==Tn?Ue!==null?U?Z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,Ke,Ie.width,Ie.height,0,Ie.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,0,0,Ie.width,Ie.height,Ue,ze,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe,Ke,Ie.width,Ie.height,0,Ue,ze,Ie.data)}}}else{if(ye=y.mipmaps,U&&pe){ye.length>0&&me++;let ie=it(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ke,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ne){U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Ue,ze,ge[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,ge[ie].width,ge[ie].height,0,Ue,ze,ge[ie].data);for(let Oe=0;Oe<ye.length;Oe++){let Mt=ye[Oe].image[ie].image;U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,Mt.width,Mt.height,Ue,ze,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,Ke,Mt.width,Mt.height,0,Ue,ze,Mt.data)}}else{U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ue,ze,ge[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ke,Ue,ze,ge[ie]);for(let Oe=0;Oe<ye.length;Oe++){let Ie=ye[Oe];U?Z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,0,0,Ue,ze,Ie.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe+1,Ke,Ue,ze,Ie.image[ie])}}}p(y)&&x(i.TEXTURE_CUBE_MAP),le.__version=K.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Me(R,y,B,V,K,le){let he=r.convert(B.format,B.colorSpace),J=r.convert(B.type),$=b(B.internalFormat,he,J,B.normalized,B.colorSpace),de=n.get(y),Ne=n.get(B);if(Ne.__renderTarget=y,!de.__hasExternalTextures){let ge=Math.max(1,y.width>>le),fe=Math.max(1,y.height>>le);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,le,$,ge,fe,y.depth,0,he,J,null):t.texImage2D(K,le,$,ge,fe,0,he,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),je(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Ne.__webglTexture,0,We(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Ne.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(R,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let V=y.depthTexture,K=V&&V.isDepthTexture?V.type:null,le=S(y.stencilBuffer,K),he=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;je(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),le,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),le,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,R)}else{let V=y.textures;for(let K=0;K<V.length;K++){let le=V[K],he=r.convert(le.format,le.colorSpace),J=r.convert(le.type),$=b(le.internalFormat,he,J,le.normalized,le.colorSpace);je(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),$,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(R,y,B){let V=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y.depthTexture);let de=r.convert(y.depthTexture.format),Ne=r.convert(y.depthTexture.type),ge;y.depthTexture.format===ri?ge=i.DEPTH_COMPONENT24:y.depthTexture.format===Ji&&(ge=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ge,y.width,y.height,0,de,Ne,null)}}else se(y.depthTexture,0);let le=K.__webglTexture,he=We(y),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,$=y.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ri)je(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,$,J,le,0);else if(y.depthTexture.format===Ji)je(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,$,J,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(R){let y=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),V){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=V}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let V=0;V<6;V++)mt(y.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?mt(y.__webglFramebuffer[0],R,0):mt(y.__webglFramebuffer,R,0)}else if(B){y.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[V]),y.__webglDepthbuffer[V]===void 0)y.__webglDepthbuffer[V]=i.createRenderbuffer(),Ve(y.__webglDepthbuffer[V],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ve(y.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,y,B){let V=n.get(R);y!==void 0&&Me(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&te(R)}function oe(R){let y=R.texture,B=n.get(R),V=n.get(y);R.addEventListener("dispose",_);let K=R.textures,le=R.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=y.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let $=0;$<y.mipmaps.length;$++)B.__webglFramebuffer[J][$]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let J=0,$=K.length;J<$;J++){let de=n.get(K[J]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&je(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let $=K[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let de=r.convert($.format,$.colorSpace),Ne=r.convert($.type),ge=b($.internalFormat,de,Ne,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),fe=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ge,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Me(B.__webglFramebuffer[J][$],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else Me(B.__webglFramebuffer[J],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(y)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let J=0,$=K.length;J<$;J++){let de=K[J],Ne=n.get(de),ge=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ne.__webglTexture),nt(ge,de),Me(B.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+J,ge,0),p(de)&&x(ge)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),nt(J,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Me(B.__webglFramebuffer[$],R,y,i.COLOR_ATTACHMENT0,J,$);else Me(B.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,J,0);p(y)&&x(J),t.unbindTexture()}R.depthBuffer&&te(R)}function ce(R){let y=R.textures;for(let B=0,V=y.length;B<V;B++){let K=y[B];if(p(K)){let le=M(R),he=n.get(K).__webglTexture;t.bindTexture(le,he),x(le),t.unbindTexture()}}}let ue=[],ke=[];function Be(R){if(R.samples>0){if(je(R)===!1){let y=R.textures,B=R.width,V=R.height,K=i.COLOR_BUFFER_BIT,le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(R),J=y.length>1;if(J)for(let de=0;de<y.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<y.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Ne=n.get(y[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,K,i.NEAREST),c===!0&&(ue.length=0,ke.length=0,ue.push(i.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ue.push(le),ke.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<y.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);let Ne=n.get(y[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function je(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function D(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ut(R,y){let B=R.colorSpace,V=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==un&&B!==Ri&&(Ze.getTransfer(B)===pt?(V!==Tn||K!==xn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",B)),y}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=se,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ly(i,e){function t(n,s=Ri){let r,a=Ze.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qh)return i.BYTE;if(n===eu)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Ac)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===iu)return i.ALPHA;if(n===su)return i.RGB;if(n===Tn)return i.RGBA;if(n===ri)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Pc)return i.RED;if(n===Ic)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===Lc)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===Xa||n===ja||n===Ka||n===Ja)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fc||n===Nc||n===Uc||n===Oc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===kc||n===zc||n===Hc||n===Gc||n===Ya||n===Vc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bc||n===kc)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Hc)return r.COMPRESSED_R11_EAC;if(n===Gc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ya)return r.COMPRESSED_RG11_EAC;if(n===Vc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wc||n===qc||n===Xc||n===jc||n===Kc||n===Jc||n===Yc||n===Zc||n===$c||n===Qc||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qc)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===cl||n===Za||n===ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new va(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:Dy,fragmentShader:Fy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding<"u",g=new Du,p={},x=t.getContextAttributes(),M=null,b=null,S=[],w=[],A=new ae,_=null,E=null,C=new Ht;C.viewport=new bt;let L=new Ht;L.viewport=new bt;let O=[C,L],G=new vc,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=S[Y];return ee===void 0&&(ee=new dr,S[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=S[Y];return ee===void 0&&(ee=new dr,S[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=S[Y];return ee===void 0&&(ee=new dr,S[Y]=ee),ee.getHandSpace()};function X(Y){let ee=w.indexOf(Y.inputSource);if(ee===-1)return;let xe=S[ee];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",se);for(let Y=0;Y<S.length;Y++){let ee=w[Y];ee!==null&&(w[Y]=null,S[Y].disconnect(ee))}N=null,k=null,g.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(M),f=null,d=null,u=null,s=null,b=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){let Y=E.camera;Y.fov=E.fov,Y.zoom=E.zoom,Y.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ge=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=x.stencil?Ji:ri,Ge=x.stencil?Ir:Yn);let Ve={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new pn(d.textureWidth,d.textureHeight,{format:Tn,type:xn,depthTexture:new Vi(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new pn(f.framebufferWidth,f.framebufferHeight,{format:Tn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(Y){for(let ee=0;ee<Y.removed.length;ee++){let xe=Y.removed[ee],Ge=w.indexOf(xe);Ge>=0&&(w[Ge]=null,S[Ge].disconnect(xe))}for(let ee=0;ee<Y.added.length;ee++){let xe=Y.added[ee],Ge=w.indexOf(xe);if(Ge===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=w.length){w.push(xe),Ge=Ve;break}else if(w[Ve]===null){w[Ve]=xe,Ge=Ve;break}if(Ge===-1)break}let Me=S[Ge];Me&&Me.connect(xe)}}let j=new I,Q=new I;function ne(Y,ee,xe){j.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let Ge=j.distanceTo(Q),Me=ee.projectionMatrix.elements,Ve=xe.projectionMatrix.elements,mt=Me[14]/(Me[10]-1),te=Me[14]/(Me[10]+1),re=(Me[9]+1)/Me[5],oe=(Me[9]-1)/Me[5],ce=(Me[8]-1)/Me[0],ue=(Ve[8]+1)/Ve[0],ke=mt*ce,Be=mt*ue,We=Ge/(-ce+ue),je=We*-ce;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(je),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let D=mt+We,ut=te+We,it=ke-je,R=Be+(Ge-je),y=re*te/ut*D,B=oe*te/ut*D;Y.projectionMatrix.makePerspective(it,R,y,B,D,ut),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Fe(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,xe=Y.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),G.near=L.near=C.near=ee,G.far=L.far=C.far=xe,(N!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,k=G.far),G.layers.mask=Y.layers.mask|6,C.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let Ge=Y.parent,Me=G.cameras;Fe(G,Ge);for(let Ve=0;Ve<Me.length;Ve++)Fe(Me[Ve],Ge);Me.length===2?ne(G,C,L):G.projectionMatrix.copy(C.projectionMatrix),E===null&&Y.isPerspectiveCamera&&(E={camera:Y,fov:Y.fov,zoom:Y.zoom}),Re(Y,G,Ge)};function Re(Y,ee,xe){xe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=fs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Y){return p[Y]};let ht=null;function nt(Y,ee){if(h=ee.getViewerPose(l||a),m=ee,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ge=!1;xe.length!==G.cameras.length&&(G.cameras.length=0,Ge=!0);for(let te=0;te<xe.length;te++){let re=xe[te],oe=null;if(f!==null)oe=f.getViewport(re);else{let ue=u.getViewSubImage(d,re);oe=ue.viewport,te===0&&(e.setRenderTargetTextures(b,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(b))}let ce=O[te];ce===void 0&&(ce=new Ht,ce.layers.enable(te),ce.viewport=new bt,O[te]=ce),ce.matrix.fromArray(re.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(re.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(oe.x,oe.y,oe.width,oe.height),te===0&&(G.matrix.copy(ce.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ge===!0&&G.cameras.push(ce)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let te=u.getDepthInformation(xe[0]);te&&te.isValid&&te.texture&&g.init(te,s.renderState)}if(Me&&Me.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let te=0;te<xe.length;te++){let re=xe[te].camera;if(re){let oe=p[re];oe||(oe=new va,p[re]=oe);let ce=u.getCameraImage(re);oe.sourceTexture=ce}}}}for(let xe=0;xe<S.length;xe++){let Ge=w[xe],Me=S[xe];Ge!==null&&Me!==void 0&&Me.update(Ge,ee,l||a)}ht&&ht(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),m=null}let at=new em;at.setAnimationLoop(nt),this.setAnimationLoop=function(Y){ht=Y},this.dispose=function(){}}},Ny=new qe,am=new Xe;am.set(-1,0,0,0,1,0,0,0,1);function Uy(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,uu(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),M=x.envMap,b=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(am),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Oy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let w=S.program;n.uniformBlockBinding(b,w)}function l(b,S){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",x));let A=S.program;n.updateUBOMapping(b,A);let _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function h(b){let S=u();b.__bindingPointIndex=S;let w=i.createBuffer(),A=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],w=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=w.length;_<E;_++){let C=w[_];if(Array.isArray(C))for(let L=0,O=C.length;L<O;L++)f(C[L],_,L,A);else f(C,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,S,w,A){if(v(b,S,w,A)===!0){let _=b.__offset,E=b.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){let O=E[L],G=p(O);m(O,b.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function m(b,S,w){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,w)}function v(b,S,w,A){let _=b.value,E=S+"_"+w;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let C=A[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(b){let S=b.uniforms,w=0,A=16;for(let E=0,C=S.length;E<C;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let O=0,G=L.length;O<G;O++){let N=L[O],k=Array.isArray(N.value)?N.value:[N.value];for(let X=0,q=k.length;X<q;X++){let se=k[X],j=p(se),Q=w%A,ne=Q%j.boundary,Fe=Q+ne;w+=ne,Fe!==0&&A-Fe<j.storage&&(w+=A-Fe),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=j.storage}}}let _=w%A;return _>0&&(w+=A-_),b.__size=w,b.__cache={},this}function p(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):De("WebGLRenderer: Unsupported uniform value type.",b),S}function x(b){let S=b.target;S.removeEventListener("dispose",x);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}var By=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function ky(){return hi===null&&(hi=new pr(By,16,16,Yi,Zn),hi.name="DFG_LUT",hi.minFilter=Ot,hi.magFilter=Ot,hi.wrapS=In,hi.wrapT=In,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var vl=class{constructor(e={}){let{canvas:t=vp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let v=f,g=new Set([Dc,Lc,Ic]),p=new Set([xn,Yn,Pr,Ir,Rc,Cc]),x=new Uint32Array(4),M=new Int32Array(4),b=new I,S=null,w=null,A=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,O=null,G=null,N=null,k=null;this._outputColorSpace=Ft;let X=0,q=0,se=null,j=-1,Q=null,ne=new bt,Fe=new bt,Re=null,ht=new Ae(0),nt=0,at=t.width,Y=t.height,ee=1,xe=null,Ge=null,Me=new bt(0,0,at,Y),Ve=new bt(0,0,at,Y),mt=!1,te=new mr,re=!1,oe=!1,ce=new qe,ue=new I,ke=new bt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function je(){return se===null?ee:1}let D=n;function ut(T,F){return t.getContext(T,F)}let it,R,y,B,V,K,le,he,J,$,de,Ne,ge,fe,Ue,ze,Ke,U,pe,Z,me,ye,ie;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",kn,!1),D===null){let F="webgl2";if(D=ut(F,T),D===null)throw ut(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(T){throw t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),He("WebGLRenderer: "+T.message),T}function Oe(){it=new X_(D),it.init(),me=new Ly(D,it),R=new U_(D,it,e,me),y=new Py(D,it),R.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),G=D.createFramebuffer(),N=D.createFramebuffer(),k=D.createFramebuffer(),B=new J_(D),V=new gy,K=new Iy(D,it,y,V,R,me,B),le=new q_(C),he=new Z0(D),ye=new F_(D,he),J=new j_(D,he,B,ye),$=new Z_(D,J,he,ye,B),U=new Y_(D,R,K),Ue=new O_(V),de=new my(C,le,it,R,ye,Ue),Ne=new Uy(C,V),ge=new xy,fe=new wy(it),Ke=new D_(C,le,y,$,m,c),ze=new Cy(C,$,R),ie=new Oy(D,B,R,y),pe=new N_(D,it,B),Z=new K_(D,it,B),B.programs=de.programs,C.capabilities=R,C.extensions=it,C.properties=V,C.renderLists=ge,C.shadowMap=ze,C.state=y,C.info=B}v!==xn&&(E=new Q_(v,t.width,t.height,o,s,r));let Ie=new Fu(C,D);this.xr=Ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(at,Y,!1))},this.getSize=function(T){return T.set(at,Y)},this.setSize=function(T,F,W=!0){if(Ie.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}at=T,Y=F,t.width=Math.floor(T*ee),t.height=Math.floor(F*ee),W===!0&&(t.style.width=T+"px",t.style.height=F+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(at*ee,Y*ee).floor()},this.setDrawingBufferSize=function(T,F,W){at=T,Y=F,ee=W,t.width=Math.floor(T*W),t.height=Math.floor(F*W),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(v===xn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(Me)},this.setViewport=function(T,F,W,z){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,F,W,z),y.viewport(ne.copy(Me).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,F,W,z){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,F,W,z),y.scissor(Fe.copy(Ve).multiplyScalar(ee).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){y.setScissorTest(mt=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,W=!0){let z=0;if(T){let H=!1;if(se!==null){let ve=se.texture.format;H=g.has(ve)}if(H){let ve=se.texture.type,Te=p.has(ve),_e=Ke.getClearColor(),Ce=Ke.getClearAlpha(),Le=_e.r,Je=_e.g,st=_e.b;Te?(x[0]=Le,x[1]=Je,x[2]=st,x[3]=Ce,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Le,M[1]=Je,M[2]=st,M[3]=Ce,D.clearBufferiv(D.COLOR,0,M))}else z|=D.COLOR_BUFFER_BIT}F&&(z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",kn,!1),Ke.dispose(),ge.dispose(),fe.dispose(),V.dispose(),le.dispose(),$.dispose(),ye.dispose(),ie.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Ud),Ie.removeEventListener("sessionend",Od),ns.stop()};function Mt(T){T.preventDefault(),la("WebGLRenderer: Context Lost."),L=!0}function dt(){la("WebGLRenderer: Context Restored."),L=!1;let T=B.autoReset,F=ze.enabled,W=ze.autoUpdate,z=ze.needsUpdate,H=ze.type;Oe(),B.autoReset=T,ze.enabled=F,ze.autoUpdate=W,ze.needsUpdate=z,ze.type=H}function kn(T){He("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ti(T){let F=T.target;F.removeEventListener("dispose",ti),fg(F)}function fg(T){pg(T),V.remove(T)}function pg(T){let F=V.get(T).programs;F!==void 0&&(F.forEach(function(W){de.releaseProgram(W)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,W,z,H,ve){F===null&&(F=Be);let Te=H.isMesh&&H.matrixWorld.determinantAffine()<0,_e=bg(T,F,W,z,H);y.setMaterial(z,Te);let Ce=W.index,Le=1;if(z.wireframe===!0){if(Ce=J.getWireframeAttribute(W),Ce===void 0)return;Le=2}let Je=W.drawRange,st=W.attributes.position,Pe=Je.start*Le,ft=(Je.start+Je.count)*Le;ve!==null&&(Pe=Math.max(Pe,ve.start*Le),ft=Math.min(ft,(ve.start+ve.count)*Le)),Ce!==null?(Pe=Math.max(Pe,0),ft=Math.min(ft,Ce.count)):st!=null&&(Pe=Math.max(Pe,0),ft=Math.min(ft,st.count));let kt=ft-Pe;if(kt<0||kt===1/0)return;ye.setup(H,z,_e,W,Ce);let Tt,yt=pe;if(Ce!==null&&(Tt=he.get(Ce),yt=Z,yt.setIndex(Tt)),H.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*je()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(H.isLine){let tn=z.linewidth;tn===void 0&&(tn=1),y.setLineWidth(tn*je()),H.isLineSegments?yt.setMode(D.LINES):H.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else H.isPoints?yt.setMode(D.POINTS):H.isSprite&&yt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(it.get("WEBGL_multi_draw"))yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let tn=H._multiDrawStarts,Se=H._multiDrawCounts,ln=H._multiDrawCount,ot=Ce?he.get(Ce).bytesPerElement:1,Cn=V.get(z).currentProgram.getUniforms();for(let ni=0;ni<ln;ni++)Cn.setValue(D,"_gl_DrawID",ni),yt.render(tn[ni]/ot,Se[ni])}else if(H.isInstancedMesh)yt.renderInstances(Pe,kt,H.count);else if(W.isInstancedBufferGeometry){let tn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,tn);yt.renderInstances(Pe,kt,Se)}else yt.render(Pe,kt)};function Nd(T,F,W,z){O!==null&&T.isNodeMaterial&&O.setObject(z,T),re===!0&&Ue.setState(T,W,!1),T.transparent===!0&&T.side===an&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,uo(T,F,z),T.side=ci,T.needsUpdate=!0,uo(T,F,z),T.side=an):uo(T,F,z)}this.compile=function(T,F,W=null){W===null&&(W=T),O!==null&&O.renderStart(T,F,W),w=fe.get(W),w.init(F),_.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,oe),re===!0&&Ue.setGlobalState(this.clippingPlanes,F),O!==null&&ze.render(w.state.shadowsArray,W,F);let z=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ve=H.material;if(ve)if(Array.isArray(ve))for(let Te=0;Te<ve.length;Te++){let _e=ve[Te];Nd(_e,W,F,H),z.add(_e)}else Nd(ve,W,F,H),z.add(ve)}),w=_.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(T,F,W=null){let z=this.compile(T,F,W);return new Promise(H=>{function ve(){if(z.forEach(function(Te){let Ce=V.get(Te).currentProgram;(Ce===void 0||Ce.isReady())&&z.delete(Te)}),z.size===0){H(T);return}setTimeout(ve,10)}it.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Zl=null;function mg(T){Zl&&Zl(T)}function Ud(){ns.stop()}function Od(){ns.start()}let ns=new em;ns.setAnimationLoop(mg),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(T){Zl=T,Ie.setAnimationLoop(T),T===null?ns.stop():ns.start()},Ie.addEventListener("sessionstart",Ud),Ie.addEventListener("sessionend",Od),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(T,F);let W=Ie.enabled===!0&&Ie.isPresenting===!0,z=E!==null&&(se===null||W)&&E.begin(C,se);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(F),F=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,F,se),w=fe.get(T,_.length),w.init(F),w.state.textureUnits=K.getTextureUnits(),_.push(w),ce.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(ce,Wn,F.reversedDepth),oe=this.localClippingEnabled,re=Ue.init(this.clippingPlanes,oe),S=ge.get(T,A.length),S.init(),A.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let Te=C.xr.getDepthSensingMesh();Te!==null&&$l(Te,F,-1/0,C.sortObjects)}$l(T,F,0,C.sortObjects),S.finish(),O!==null&&O.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(xe,Ge),We=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,We&&Ke.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ue.beginShadows();let H=w.state.shadowsArray;if(ze.render(H,T,F),re===!0&&Ue.endShadows(),(z&&E.hasRenderPass())===!1){let Te=S.opaque,_e=S.transmissive;if(w.setupLights(),F.isArrayCamera){let Ce=F.cameras;if(_e.length>0)for(let Le=0,Je=Ce.length;Le<Je;Le++){let st=Ce[Le];kd(Te,_e,T,st)}We&&Ke.render(T);for(let Le=0,Je=Ce.length;Le<Je;Le++){let st=Ce[Le];Bd(S,T,st,st.viewport)}}else _e.length>0&&kd(Te,_e,T,F),We&&Ke.render(T),Bd(S,T,F)}se!==null&&q===0&&(K.updateMultisampleRenderTarget(se),K.updateRenderTargetMipmap(se)),z&&E.end(C),T.isScene===!0&&T.onAfterRender(C,T,F),ye.resetDefaultState(),j=-1,Q=null,_.pop(),_.length>0?(w=_[_.length-1],K.setTextureUnits(w.state.textureUnits),re===!0&&Ue.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,O!==null&&O.renderEnd()};function $l(T,F,W,z){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(te)){z&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);let Te=$.update(T),_e=T.material;_e.visible&&S.push(T,Te,_e,W,ke.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(te))){let Te=$.update(T),_e=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ke.copy(Te.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(ce)),Array.isArray(_e)){let Ce=Te.groups;for(let Le=0,Je=Ce.length;Le<Je;Le++){let st=Ce[Le],Pe=_e[st.materialIndex];Pe&&Pe.visible&&S.push(T,Te,Pe,W,ke.z,st,F)}}else _e.visible&&S.push(T,Te,_e,W,ke.z,null,F)}}let ve=T.children;for(let Te=0,_e=ve.length;Te<_e;Te++)$l(ve[Te],F,W,z)}function Bd(T,F,W,z){let{opaque:H,transmissive:ve,transparent:Te}=T;w.setupLightsView(W),re===!0&&Ue.setGlobalState(C.clippingPlanes,W),z&&y.viewport(ne.copy(z)),H.length>0&&ho(H,F,W),ve.length>0&&ho(ve,F,W),Te.length>0&&ho(Te,F,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function kd(T,F,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Pe=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new pn(1,1,{generateMipmaps:!0,type:Pe?Zn:xn,minFilter:Jn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ve=w.state.transmissionRenderTarget[z.id],Te=z.viewport||ne;ve.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Le=C.getActiveMipmapLevel();C.setRenderTarget(ve),C.getClearColor(ht),nt=C.getClearAlpha(),nt<1&&C.setClearColor(16777215,.5),C.clear(),We&&Ke.render(W);let Je=C.toneMapping;C.toneMapping=Kn;let st=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),re===!0&&Ue.setGlobalState(C.clippingPlanes,z),ho(T,W,z),K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve),it.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ft=0,kt=F.length;ft<kt;ft++){let Tt=F[ft],{object:yt,geometry:tn,material:Se,group:ln}=Tt;if(Se.side===an&&yt.layers.test(z.layers)){let ot=Se.side;Se.side=en,Se.needsUpdate=!0,zd(yt,W,z,tn,Se,ln),Se.side=ot,Se.needsUpdate=!0,Pe=!0}}Pe===!0&&(K.updateMultisampleRenderTarget(ve),K.updateRenderTargetMipmap(ve))}C.setRenderTarget(_e,Ce,Le),C.setClearColor(ht,nt),st!==void 0&&(z.viewport=st),C.toneMapping=Je}function ho(T,F,W){let z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ve=T.length;H<ve;H++){let Te=T[H],{object:_e,geometry:Ce,group:Le}=Te,Je=Te.material;Je.allowOverride===!0&&z!==null&&(Je=z),_e.layers.test(W.layers)&&zd(_e,F,W,Ce,Je,Le)}}function zd(T,F,W,z,H,ve){O!==null&&H.isNodeMaterial&&O.setObject(T,H),T.onBeforeRender(C,F,W,z,H,ve),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(C,F,W,z,T,ve),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,C.renderBufferDirect(W,F,z,H,T,ve),H.side=ci,H.needsUpdate=!0,C.renderBufferDirect(W,F,z,H,T,ve),H.side=an):C.renderBufferDirect(W,F,z,H,T,ve),T.onAfterRender(C,F,W,z,H,ve)}function uo(T,F,W){F.isScene!==!0&&(F=Be);let z=V.get(T),H=w.state.lights,ve=w.state.shadowsArray,Te=H.state.version,_e=de.getParameters(T,H.state,ve,F,W,w.state.lightProbeGridArray),Ce=de.getProgramCacheKey(_e),Le=z.programs;z.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;z.envMap=le.get(T.envMap||z.environment,Je),z.envMapRotation=z.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",ti),Le=new Map,z.programs=Le);let st=Le.get(Ce);if(st!==void 0){if(z.currentProgram===st&&z.lightsStateVersion===Te)return Gd(T,_e),st}else _e.uniforms=de.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,W,_e),T.onBeforeCompile(_e,C),st=de.acquireProgram(_e,Ce),Le.set(Ce,st),z.uniforms=_e.uniforms;let Pe=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Ue.uniform),Gd(T,_e),z.needsLights=_g(T),z.lightsStateVersion=Te,z.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.sunLights.value=H.state.sun,Pe.sunLightShadows.value=H.state.sunShadow,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.sunShadowMatrix.value=H.state.sunShadowMatrix,Pe.sunShadowCascade.value=H.state.sunShadowCascade,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=st,z.uniformsList=null,st}function Hd(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Gd(T,F){let W=V.get(T);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function gg(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let W=0,z=T.length;W<z;W++){let H=T[W];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function bg(T,F,W,z,H){F.isScene!==!0&&(F=Be),K.resetTextureUnits();let ve=F.fog,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,_e=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,Ce=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Le=le.get(z.envMap||Te,Ce),Je=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,st=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!W.morphAttributes.position,ft=!!W.morphAttributes.normal,kt=!!W.morphAttributes.color,Tt=Kn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Tt=C.toneMapping);let yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tn=yt!==void 0?yt.length:0,Se=V.get(z),ln=w.state.lights;if(re===!0&&(oe===!0||T!==Q)){let St=T===Q&&z.id===j;Ue.setState(z,T,St)}let ot=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==ln.state.version||Se.outputColorSpace!==_e||H.isBatchedMesh&&Se.batching===!1||!H.isBatchedMesh&&Se.batching===!0||H.isBatchedMesh&&Se.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Se.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Se.instancing===!1||!H.isInstancedMesh&&Se.instancing===!0||H.isSkinnedMesh&&Se.skinning===!1||!H.isSkinnedMesh&&Se.skinning===!0||H.isInstancedMesh&&Se.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Se.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Se.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Se.instancingMorph===!1&&H.morphTexture!==null||Se.envMap!==Le||z.fog===!0&&Se.fog!==ve||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ue.numPlanes||Se.numIntersection!==Ue.numIntersection)||Se.vertexAlphas!==Je||Se.vertexTangents!==st||Se.morphTargets!==Pe||Se.morphNormals!==ft||Se.morphColors!==kt||Se.toneMapping!==Tt||Se.morphTargetsCount!==tn||!!Se.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ot=!0):(ot=!0,Se.__version=z.version);let Cn=Se.currentProgram;ot===!0&&(Cn=uo(z,F,H),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Cn,Se));let ni=!1,Ci=!1,Bs=!1,xt=Cn.getUniforms(),Dt=Se.uniforms;if(y.useProgram(Cn.program)&&(ni=!0,Ci=!0,Bs=!0),z.id!==j&&(j=z.id,Ci=!0),Se.needsLights){let St=gg(w.state.lightProbeGridArray,H);Se.lightProbeGrid!==St&&(Se.lightProbeGrid=St,Ci=!0)}if(ni||Q!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",T.projectionMatrix),xt.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ii=xt.map.cameraPosition;Ii!==void 0&&Ii.setValue(D,ue.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,Ci=!0,Bs=!0)}if(Se.needsLights&&(ln.state.sunShadowMap.length>0&&xt.setValue(D,"sunShadowMap",ln.state.sunShadowMap,K),ln.state.directionalShadowMap.length>0&&xt.setValue(D,"directionalShadowMap",ln.state.directionalShadowMap,K),ln.state.spotShadowMap.length>0&&xt.setValue(D,"spotShadowMap",ln.state.spotShadowMap,K),ln.state.pointShadowMap.length>0&&xt.setValue(D,"pointShadowMap",ln.state.pointShadowMap,K)),H.isSkinnedMesh){xt.setOptional(D,H,"bindMatrix"),xt.setOptional(D,H,"bindMatrixInverse");let St=H.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),xt.setValue(D,"boneTexture",St.boneTexture,K))}H.isBatchedMesh&&(xt.setOptional(D,H,"batchingTexture"),xt.setValue(D,"batchingTexture",H._matricesTexture,K),xt.setOptional(D,H,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",H._indirectTexture,K),xt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",H._colorsTexture,K));let Pi=W.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&U.update(H,W,Cn),(Ci||Se.receiveShadow!==H.receiveShadow)&&(Se.receiveShadow=H.receiveShadow,xt.setValue(D,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Dt.envMapIntensity.value=F.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=ky()),Ci){if(xt.setValue(D,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&xg(Dt,Bs),ve&&z.fog===!0&&Ne.refreshFogUniforms(Dt,ve),Ne.refreshMaterialUniforms(Dt,z,ee,Y,w.state.transmissionRenderTarget[T.id]),Se.needsLights&&Se.lightProbeGrid){let St=Se.lightProbeGrid;Dt.probesSH.value=St.texture,Dt.probesMin.value.copy(St.boundingBox.min),Dt.probesMax.value.copy(St.boundingBox.max),Dt.probesResolution.value.copy(St.resolution)}Nr.upload(D,Hd(Se),Dt,K)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nr.upload(D,Hd(Se),Dt,K),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xt.setValue(D,"center",H.center),xt.setValue(D,"modelViewMatrix",H.modelViewMatrix),xt.setValue(D,"normalMatrix",H.normalMatrix),xt.setValue(D,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let St=z.uniformsGroups;for(let Ii=0,ks=St.length;Ii<ks;Ii++){let Wd=St[Ii];ie.update(Wd,Cn),ie.bind(Wd,Cn)}}return Cn}function xg(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function _g(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(T,F,W){let z=V.get(T);z.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=F,V.get(T.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let W=V.get(T);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,W=0){se=T,X=F,q=W;let z=null,H=!1,ve=!1;if(T){let _e=V.get(T);if(_e.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),ne.copy(T.viewport),Fe.copy(T.scissor),Re=T.scissorTest,y.viewport(ne),y.scissor(Fe),y.setScissorTest(Re),j=-1;return}else if(_e.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(_e.__hasExternalTextures)K.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(_e.__boundDepthTexture!==Je){if(Je!==null&&V.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}let Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ve=!0);let Le=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?z=Le[F][W]:z=Le[F],H=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?z=V.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?z=Le[W]:z=Le,ne.copy(T.viewport),Fe.copy(T.scissor),Re=T.scissorTest}else ne.copy(Me).multiplyScalar(ee).floor(),Fe.copy(Ve).multiplyScalar(ee).floor(),Re=mt;if(W!==0&&(z=G),y.bindFramebuffer(D.FRAMEBUFFER,z)&&y.drawBuffers(T,z),y.viewport(ne),y.scissor(Fe),y.setScissorTest(Re),H){let _e=V.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,W)}else if(ve){let _e=F;for(let Ce=0;Ce<T.textures.length;Ce++){let Le=V.get(T.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,W,_e)}}else if(T!==null&&W!==0){let _e=V.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,W)}j=-1};function Vd(T){let F=V.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=R.textureFormatReadable(T.format),F.__typeReadable=R.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,W,z,H,ve,Te,_e=0){if(!(T&&T.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){y.bindFramebuffer(D.FRAMEBUFFER,Ce);try{let Le=T.textures[_e],Je=Le.format,st=Le.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Pe=Vd(Le);if(Pe.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-z&&W>=0&&W<=T.height-H&&D.readPixels(F,W,z,H,me.convert(Je),me.convert(st),ve)}finally{let Le=se!==null?V.get(se).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,F,W,z,H,ve,Te,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce)if(F>=0&&F<=T.width-z&&W>=0&&W<=T.height-H){y.bindFramebuffer(D.FRAMEBUFFER,Ce);let Le=T.textures[_e],Je=Le.format,st=Le.type;T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e);let Pe=Vd(Le);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.bufferData(D.PIXEL_PACK_BUFFER,ve.byteLength,D.STREAM_READ),D.readPixels(F,W,z,H,me.convert(Je),me.convert(st),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let kt=se!==null?V.get(se).__webglFramebuffer:null;y.bindFramebuffer(D.FRAMEBUFFER,kt);let Tt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mp(D,Tt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ve),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ft),D.deleteSync(Tt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,W=0){let z=Math.pow(2,-W),H=Math.floor(T.image.width*z),ve=Math.floor(T.image.height*z),Te=F!==null?F.x:0,_e=F!==null?F.y:0;K.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Te,_e,H,ve),y.unbindTexture()},this.copyTextureToTexture=function(T,F,W=null,z=null,H=0,ve=0){let Te,_e,Ce,Le,Je,st,Pe,ft,kt,Tt=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(W!==null)Te=W.max.x-W.min.x,_e=W.max.y-W.min.y,Ce=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Je=W.min.y,st=W.isBox3?W.min.z:0;else{let Dt=Math.pow(2,-H);Te=Math.floor(Tt.width*Dt),_e=Math.floor(Tt.height*Dt),T.isDataArrayTexture?Ce=Tt.depth:T.isData3DTexture?Ce=Math.floor(Tt.depth*Dt):Ce=1,Le=0,Je=0,st=0}z!==null?(Pe=z.x,ft=z.y,kt=z.z):(Pe=0,ft=0,kt=0);let yt=me.convert(F.format),tn=me.convert(F.type),Se;F.isData3DTexture?(K.setTexture3D(F,0),Se=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),Se=D.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),Se=D.TEXTURE_2D),y.activeTexture(D.TEXTURE0),y.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let ln=y.getParameter(D.UNPACK_ROW_LENGTH),ot=y.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=y.getParameter(D.UNPACK_SKIP_PIXELS),ni=y.getParameter(D.UNPACK_SKIP_ROWS),Ci=y.getParameter(D.UNPACK_SKIP_IMAGES);y.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),y.pixelStorei(D.UNPACK_SKIP_ROWS,Je),y.pixelStorei(D.UNPACK_SKIP_IMAGES,st);let Bs=T.isDataArrayTexture||T.isData3DTexture,xt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let Dt=V.get(T),Pi=V.get(F),St=V.get(Dt.__renderTarget),Ii=V.get(Pi.__renderTarget);y.bindFramebuffer(D.READ_FRAMEBUFFER,St.__webglFramebuffer),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let ks=0;ks<Ce;ks++)Bs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(T).__webglTexture,H,st+ks),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(F).__webglTexture,ve,kt+ks)),D.blitFramebuffer(Le,Je,Te,_e,Pe,ft,Te,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||V.has(T)){let Dt=V.get(T),Pi=V.get(F);y.bindFramebuffer(D.READ_FRAMEBUFFER,N),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let St=0;St<Ce;St++)Bs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,H,st+St):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,H),xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pi.__webglTexture,ve,kt+St):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pi.__webglTexture,ve),H!==0?D.blitFramebuffer(Le,Je,Te,_e,Pe,ft,Te,_e,D.COLOR_BUFFER_BIT,D.NEAREST):xt?D.copyTexSubImage3D(Se,ve,Pe,ft,kt+St,Le,Je,Te,_e):D.copyTexSubImage2D(Se,ve,Pe,ft,Le,Je,Te,_e);y.bindFramebuffer(D.READ_FRAMEBUFFER,null),y.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xt?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Se,ve,Pe,ft,kt,Te,_e,Ce,yt,tn,Tt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,ve,Pe,ft,kt,Te,_e,Ce,yt,Tt.data):D.texSubImage3D(Se,ve,Pe,ft,kt,Te,_e,Ce,yt,tn,Tt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ve,Pe,ft,Te,_e,yt,tn,Tt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ve,Pe,ft,Tt.width,Tt.height,yt,Tt.data):D.texSubImage2D(D.TEXTURE_2D,ve,Pe,ft,Te,_e,yt,tn,Tt);y.pixelStorei(D.UNPACK_ROW_LENGTH,ln),y.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ot),y.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),y.pixelStorei(D.UNPACK_SKIP_ROWS,ni),y.pixelStorei(D.UNPACK_SKIP_IMAGES,Ci),ve===0&&F.generateMipmaps&&D.generateMipmap(Se),y.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){X=0,q=0,se=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Vt={hut:{mass:1,residents:1,capacity:1,foot:.45,label:"Hut"},cottage:{mass:2,residents:2,capacity:2,foot:.6,label:"Cottage"},tower:{mass:4,residents:3,capacity:3,foot:.55,label:"Tower"},mill:{mass:3,residents:0,capacity:3,foot:.6,label:"Mill"},inn:{mass:3,residents:4,capacity:4,foot:.75,label:"Inn"},stone:{mass:2.5,residents:0,capacity:0,foot:.4,label:"Ballast stone",extra:!0},balloon:{mass:-2,residents:0,capacity:0,foot:.35,label:"Sky balloon",extra:!0}},om=.25,Ou=4.2,zy=.4,cm=5.5,Uu=2.4,Sl=Math.PI/180;function no(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $n(i,e){let t=i.radius,n=i.stretch||1,s=i.rotation||0,r=Math.sqrt(n),a=1/Math.sqrt(n),o=e-s,c=1/Math.sqrt((Math.cos(o)/r)**2+(Math.sin(o)/a)**2),l=1+(i.wobble||0)*Math.cos((i.lobes||0)*o);return t*c*l}function wl(i,e,t){return $n(i,Math.atan2(t,e))-Math.hypot(e,t)}var Tl=class i{constructor(e,t=1,n=null){this.level=e,this.pool=n||[],this.s={t:0,tilt:[0,0],vel:[0,0],houses:[],residents:[],placed:0,nextId:1,hazards:(e.hazards||[]).map((r,a)=>({...r,i:a,fired:!1,start:-1,sched:-1})),quakeUntil:-1,quakeStrength:0,nextKick:0,flipped:!1,flipT:-1,extras:{stone:e.extras&&e.extras.stone||0,balloon:e.extras&&e.extras.balloon||0},rng:t>>>0,maxTilt:0,settledFor:0,events:[],poolIdx:0,undoUsed:!1,rescued:0,dangled:0};let s=e.startResidents||0;for(let r=0;r<s;r++){let a=r/s*Math.PI*2+.3,o=$n(e.shape,a)*.35;this._spawn(Math.cos(a)*o,Math.sin(a)*o,null)}}clone(){let e=Object.create(i.prototype);return e.level=this.level,e.pool=this.pool,e.s=structuredClone(this.s),e}rand(){let t=no(this.s.rng)();return this.s.rng=this.s.rng+1831565813>>>0,t}_spawn(e,t,n){let s=this.s,r=this.pool[s.poolIdx%Math.max(1,this.pool.length)]||{name:"Sky-folk",bio:""};s.poolIdx++;let a={id:s.nextId++,name:r.name,bio:r.bio,x:e,z:t,vx:0,vz:0,state:n?"shelter":"wander",shelter:n,calm:n?.8:0,tx:e,tz:t,wait:this.rand()*2,from:n,walk:0,fellAt:-1,grip:0,safe:0};return s.residents.push(a),a}get queueLeft(){return this.level.queue.length-this.s.placed}nextType(){return this.level.queue[this.s.placed]}canPlace(e,t,n){let s=Vt[e];if(!s||this.s.flipped||wl(this.level.shape,t,n)<s.foot*.7)return!1;for(let r of this.s.houses){let a=Vt[r.type];if(Math.hypot(r.x-t,r.z-n)<(a.foot+s.foot)*.92)return!1}return!0}place(e,t,n=null,s=0){let r=this.s,a;if(n){if(!(r.extras[n]>0))return null;a=n}else{if(this.queueLeft<=0)return null;a=this.nextType()}if(!this.canPlace(a,e,t))return null;let o={id:r.nextId++,type:a,x:e,z:t,yaw:s,extra:!!n,idx:n?-1:r.placed,occ:0,t:r.t};if(r.houses.push(o),n)r.extras[n]--;else{for(let l of r.hazards)!l.fired&&l.afterHouse===r.placed&&(l.sched=r.t+1.6);r.placed++;let c=Vt[a].residents;for(let l=0;l<c;l++){let h=this.rand()*Math.PI*2;this._spawn(e+Math.cos(h)*.2,t+Math.sin(h)*.2,o.id)}o.occ=c}return r.events.push({t:r.t,e:"place",type:a}),r.settledFor=0,o}undo(){let e=this.s;if(e.undoUsed||!e.houses.length||e.flipped)return!1;let t=e.houses.pop();if(e.undoUsed=!0,t.extra)e.extras[t.type]++;else{e.placed--;for(let n of e.hazards)!n.fired&&n.afterHouse===e.placed&&(n.sched=-1);e.residents=e.residents.filter(n=>!(n.from===t.id&&n.state!=="fallen"))}for(let n of e.residents)n.shelter===t.id&&(n.shelter=null,n.state="wander");return!0}moment(){let e=0,t=0;for(let n of this.s.houses){let s=Vt[n.type].mass;e+=s*n.x,t+=s*n.z}for(let n of this.s.residents)if(n.state!=="fallen"){let s=n.state==="dangle"?zy:om;e+=s*n.x,t+=s*n.z}return[e,t]}dangling(){return this.s.residents.filter(e=>e.state==="dangle")}rescue(e){let t=this.s,n=t.residents.find(c=>c.id===e);if(!n||n.state!=="dangle"||t.flipped)return!1;let s=Math.hypot(n.x,n.z)||1,r=n.x/s,a=n.z/s;t.vel[0]+=r*cm,t.vel[1]+=a*cm;let o=.75;return n.x-=r*o,n.z-=a*o,n.vx=-r*.6,n.vz=-a*.6,n.state="flee",n.safe=2.2,n.grip=0,t.rescued++,t.events.push({t:t.t,e:"rescue",id:e}),t.settledFor=0,!0}windMoment(){let e=this.s,t=0,n=0;for(let s of e.hazards)if(s.type==="wind"&&s.start>=0){let r=(e.t-s.start)/s.duration;if(r>=0&&r<=1){let a=Math.sin(Math.PI*r)*s.strength*2.2;t+=Math.cos(s.dir*Sl)*a,n+=Math.sin(s.dir*Sl)*a}}return[t,n]}targetTilt(){let[e,t]=this.moment(),[n,s]=this.windMoment(),r=this.level.sensitivity;return[(e+n)*r,(t+s)*r]}predictTilt(e,t,n){let[s,r]=this.moment(),a=Vt[e].mass,o=Vt[e].residents*om;return Math.hypot(s+(a+o)*t,r+(a+o)*n)*this.level.sensitivity}tiltDeg(){return Math.hypot(this.s.tilt[0],this.s.tilt[1])}hazardActive(){let e=this.s;for(let t of e.hazards)if(t.sched>=0&&!t.fired||t.start>=0&&e.t-t.start<t.duration+.3)return!0;return!1}counts(){let e=0,t=0,n=0;for(let s of this.s.residents)s.state==="fallen"?t++:e++,s.state==="dangle"&&n++;return{alive:e,fallen:t,dangling:n,total:e+t}}isDone(){let e=this.s;return e.flipped?e.t-e.flipT>2.2:this.queueLeft<=0&&e.settledFor>1.6&&!e.residents.some(t=>t.state==="dangle")}step(e){let t=this.s,n=this.level;t.t+=e;for(let x of t.hazards)!x.fired&&x.sched>=0&&t.t>=x.sched&&(x.fired=!0,x.start=t.t,t.events.push({t:t.t,e:x.type,i:x.i}),x.type==="quake"&&(t.quakeUntil=t.t+x.duration,t.quakeStrength=x.strength));let s=t.t<t.quakeUntil;if(s&&t.t>=t.nextKick){t.nextKick=t.t+.22;let x=this.rand()*Math.PI*2,M=t.quakeStrength*3.2;t.vel[0]+=Math.cos(x)*M,t.vel[1]+=Math.sin(x)*M}let r=t.flipped?t.tilt:this.targetTilt(),a=n.damping;for(let x=0;x<2;x++){let M=Uu*Uu*(r[x]-t.tilt[x])-2*a*Uu*t.vel[x];t.vel[x]+=M*e,t.tilt[x]+=t.vel[x]*e}let o=this.tiltDeg();if(t.flipped||(t.maxTilt=Math.max(t.maxTilt,o)),!t.flipped&&o>n.flipDeg){t.flipped=!0,t.flipT=t.t,t.events.push({t:t.t,e:"flip"});for(let x of t.residents)x.state!=="fallen"&&(x.state="fallen",x.fellAt=t.t,x.vx=t.tilt[0]/o*3,x.vz=t.tilt[1]/o*3)}if(t.flipped)return;let c=o>1e-6?t.tilt[0]/o:0,l=o>1e-6?t.tilt[1]/o:0,h=n.slideDeg*(s?.75:1),u=n.slideDeg*.5,d={};for(let x of t.residents)x.state==="shelter"&&(d[x.shelter]=(d[x.shelter]||0)+1);let f={};for(let x of t.houses)f[x.id]=x;let m=(x,M)=>{let b=null,S=M;for(let w of t.houses){let A=Vt[w.type].capacity;if((d[w.id]||0)>=A)continue;let _=Math.hypot(w.x-x.x,w.z-x.z)-Vt[w.type].foot;_<S&&(S=_,b=w)}return b},v=!1;for(let x of t.residents)if(x.state!=="fallen"){if(x.state==="dangle"){v=!0;let M=Math.hypot(x.x,x.z)||1,b=(x.x*c+x.z*l)/M*o;x.grip-=e*(1+Math.max(0,b-h*.5)/Math.max(1,h)*1.5+(s?.6:0)),x.grip<=0&&(x.state="fallen",x.fellAt=t.t,x.vx=x.x/M*1.2,x.vz=x.z/M*1.2,t.events.push({t:t.t,e:"fall",id:x.id}));continue}if(x.safe>0&&(x.safe-=e),x.state==="shelter"){let M=f[x.shelter];if(!M){x.state="wander",x.shelter=null;continue}if(x.x=M.x,x.z=M.z,x.vx=x.vz=0,o<u*.8&&!s){if(x.calm+=e,x.calm>1.5+x.id%5*.4){x.state="wander",x.shelter=null;let b=this.rand()*6.283,S=Vt[M.type].foot+.25;x.x=M.x+Math.cos(b)*S,x.z=M.z+Math.sin(b)*S,x.wait=.5}}else x.calm=0;continue}if(x.walk=0,o>h&&!(x.safe>0)){x.state="slide",v=!0;let M=9.8*(Math.sin(o*Sl)-Math.sin(h*Sl))*2;x.vx+=c*M*e,x.vz+=l*M*e;let b=m(x,.45);if(b){x.state="shelter",x.shelter=b.id,d[b.id]=(d[b.id]||0)+1,x.calm=0;continue}}else{let M=Math.exp(-6*e);x.vx*=M,x.vz*=M,Math.hypot(x.vx,x.vz)>.15&&(v=!0);let b=0,S=0,w=0;if(o>u||s){x.state="flee";let _=m(x,4.5);if(_){if(b=_.x-x.x,S=_.z-x.z,w=1.5,Math.hypot(b,S)<Vt[_.type].foot+.3){x.state="shelter",x.shelter=_.id,d[_.id]=(d[_.id]||0)+1,x.calm=0;continue}}else b=-c,S=-l,w=1.1}else if(x.state="wander",x.wait-=e,Math.hypot(x.tx-x.x,x.tz-x.z)<.1){if(x.wait<=0){let E=this.rand()*6.283,C=Math.sqrt(this.rand())*$n(n.shape,E)*.6;x.tx=Math.cos(E)*C,x.tz=Math.sin(E)*C,x.wait=1+this.rand()*3}}else b=x.tx-x.x,S=x.tz-x.z,w=.55;let A=Math.hypot(b,S);A>1e-4&&w>0&&(x.x+=b/A*w*e,x.z+=S/A*w*e,x.walk=w)}x.x+=x.vx*e,x.z+=x.vz*e;for(let M of t.houses){let b=Vt[M.type].foot+.12,S=x.x-M.x,w=x.z-M.z,A=Math.hypot(S,w);A<b&&A>1e-5&&(x.x=M.x+S/A*b,x.z=M.z+w/A*b)}if(wl(n.shape,x.x,x.z)<0){let M=Math.atan2(x.z,x.x),b=$n(n.shape,M)-.02;x.x=Math.cos(M)*b,x.z=Math.sin(M)*b,x.vx=x.vz=0,x.slips=(x.slips||0)+1,x.state="dangle",x.grip=x.gripMax=Ou*Math.pow(.5,x.slips-1),t.dangled++,t.events.push({t:t.t,e:"dangle",id:x.id})}}let g=this.targetTilt(),p=Math.hypot(t.vel[0],t.vel[1])<.4&&Math.hypot(g[0]-t.tilt[0],g[1]-t.tilt[1])<.6&&!v&&!this.hazardActive();t.settledFor=p?t.settledFor+e:0}};function lm(i,e){let t=0;for(let n of i.stars)e>=n-1e-9&&t++;return t}var Pt={world:{name:"Teeter Isles",tagline:"Build gently, balance bravely, and keep everyone above the clouds.",intro:"High above a sea of clouds, tiny islands drift on single Heartstones, tipping with every home you place. Build each village with care, keep your sky-folk steady, and do not let the horizon turn upside down."},levels:[{id:1,name:"Pillowrock",flavor:"A round, sleepy isle where the Heartstone hums softly and nobody has ever needed a handrail.",shape:{radius:5,lobes:0,wobble:0,stretch:1,rotation:0},sensitivity:.9,damping:.5,slideDeg:16,flipDeg:32,startResidents:3,queue:["hut","cottage","hut","cottage","hut"],extras:{stone:0,balloon:0},hazards:[],stars:[.5,.75,1],k:1,dFlip:0,solver:{ratio:1,stars:3,tweaks:0,moves:[["hut",0,0],["cottage",1.3,.75],["hut",-2.6,-1.5],["cottage",0,-1.5],["hut",0,2.25]]},human:{flip:0,avg:.994}},{id:2,name:"Kettle Hollow",flavor:"The folk here dream big and build tall. Heavy roofs will need a thoughtful counterweight.",shape:{radius:5.2,lobes:1,wobble:.04,stretch:1.05,rotation:.7},sensitivity:1.875,damping:.336,slideDeg:15,flipDeg:27,startResidents:3,queue:["hut","cottage","tower","tower","hut","cottage"],extras:{stone:0,balloon:0},hazards:[],stars:[.5,.75,1],k:1.875,dFlip:4,solver:{ratio:1,stars:3,tweaks:0,moves:[["hut",0,0],["cottage",.39,-1.46],["tower",-.4,1.51],["tower",1.34,-.78],["hut",-3.64,0],["cottage",-1.46,.39]]},human:{flip:.046,avg:.938}},{id:3,name:"Bramble Brae",flavor:"Old ballast stones sleep in the bracken. Wake them when one side of the isle grows too ambitious.",shape:{radius:5.4,lobes:2,wobble:.06,stretch:1.1,rotation:1.4},sensitivity:1.991,damping:.327,slideDeg:15,flipDeg:30,startResidents:4,queue:["cottage","tower","hut","inn","cottage","hut","mill"],extras:{stone:2,balloon:0},hazards:[],stars:[.5,.7,.95],k:1.81,dFlip:0,solver:{ratio:.941,stars:2,tweaks:0,moves:[["cottage",0,0],["stone",-1.1,1.1],["stone",1.29,-.74],["tower",-1.46,0],["hut",3.93,-1.05],["inn",1.46,.39],["cottage",-1.18,-1.18],["hut",-.45,1.67],["mill",0,-1.79]]},human:{flip:.075,avg:.861}},{id:4,name:"Gullwind Cay",flavor:"Gulls ride a restless breeze off the cloud-sea. It will shove the isle, just to see if you are ready.",shape:{radius:5.5,lobes:2,wobble:.08,stretch:1.12,rotation:2.1},sensitivity:1.536,damping:.371,slideDeg:14,flipDeg:30,startResidents:4,queue:["hut","cottage","mill","tower","hut","cottage","inn"],extras:{stone:1,balloon:0},hazards:[{type:"wind",afterHouse:2,dir:80,strength:2.56,duration:2},{type:"wind",afterHouse:5,dir:260,strength:3.84,duration:2.5}],stars:[.5,.7,.9],k:1.28,dFlip:0,solver:{ratio:1,stars:3,tweaks:0,moves:[["hut",0,0],["stone",.8,-.21],["cottage",-1.59,.43],["mill",1.24,.72],["tower",-1.24,-.72],["hut",3.39,.91],["cottage",.43,1.59],["inn",0,-1.76]]},human:{flip:.1,avg:.873}},{id:5,name:"Crescent Lopsided",flavor:"No one agrees on this isle's shape, least of all the isle. Its long arms reward patient, spread-out building.",shape:{radius:5.8,lobes:4,wobble:.12,stretch:1.4,rotation:.9},sensitivity:1.539,damping:.356,slideDeg:14,flipDeg:29,startResidents:5,queue:["cottage","hut","tower","inn","hut","mill","cottage","tower"],extras:{stone:2,balloon:0},hazards:[{type:"wind",afterHouse:3,dir:140,strength:3.42,duration:2.5}],stars:[.45,.7,.9],k:1.14,dFlip:0,solver:{ratio:.905,stars:3,tweaks:0,moves:[["stone",0,0],["cottage",-.25,-.92],["hut",.25,.92],["stone",.77,.21],["tower",-1.46,0],["inn",1.69,.98],["hut",-1.12,-1.94],["mill",1.16,-1.16],["cottage",-1.73,1.73],["tower",.57,-2.11]]},human:{flip:.129,avg:.807}},{id:6,name:"Lantern Lift",flavor:"Balloons from the old festival still tug at the rooftops. Anchor a heavy side, and let the sky lend a hand.",shape:{radius:6,lobes:3,wobble:.1,stretch:1.25,rotation:3.14},sensitivity:1.56,damping:.343,slideDeg:13,flipDeg:28,startResidents:5,queue:["tower","tower","hut","inn","cottage","mill","inn","hut","cottage"],extras:{stone:2,balloon:2},hazards:[{type:"wind",afterHouse:2,dir:20,strength:3.12,duration:3},{type:"wind",afterHouse:6,dir:200,strength:4.16,duration:3}],stars:[.45,.65,.85],k:1.04,dFlip:0,solver:{ratio:.84,stars:2,tweaks:0,moves:[["tower",0,0],["stone",.46,.8],["stone",-.82,-.47],["balloon",.23,-.84],["balloon",-.39,1.46],["tower",-1.17,1.17],["hut",0,3.22],["inn",.93,-1.61],["cottage",1.77,-.48],["mill",-.39,-1.46],["inn",1.63,.94],["hut",-5.72,-1.53],["cottage",-2.04,.55]]},human:{flip:.15,avg:.806}},{id:7,name:"Thundermoss",flavor:"The Heartstone here grumbles in its sleep. When the moss trembles, hold on to everything you love.",shape:{radius:6.2,lobes:5,wobble:.15,stretch:1.35,rotation:4.2},sensitivity:1.309,damping:.342,slideDeg:12,flipDeg:26,startResidents:6,queue:["cottage","inn","inn","hut","tower","mill","cottage","hut","tower","cottage"],extras:{stone:3,balloon:1},hazards:[{type:"quake",afterHouse:3,strength:2.31,duration:2},{type:"quake",afterHouse:7,strength:3.08,duration:2.5},{type:"wind",afterHouse:5,dir:310,strength:2.31,duration:2.5}],stars:[.4,.6,.85],k:.77,dFlip:0,solver:{ratio:.893,stars:3,tweaks:0,moves:[["cottage",0,0],["stone",-.9,.24],["stone",.66,-.66],["stone",.26,.97],["balloon",.96,.56],["inn",-.79,1.38],["inn",0,-1.73],["hut",3.77,-1.01],["tower",-.76,-.76],["mill",1.93,.52],["cottage",-1.79,.48],["hut",1.44,1.44],["tower",1.32,-1.32],["cottage",-1.96,1.96]]},human:{flip:.154,avg:.796}},{id:8,name:"The Last Teeter",flavor:"Every wind, tremor and lopsided shore at once, and everyone watching. Build the village this sky deserves.",shape:{radius:6.5,lobes:6,wobble:.18,stretch:1.5,rotation:5.5},sensitivity:1.07,damping:.301,slideDeg:10,flipDeg:24,startResidents:8,queue:["hut","tower","inn","inn","cottage","mill","tower","hut","inn","cottage","mill","tower","hut","cottage"],extras:{stone:3,balloon:2},hazards:[{type:"wind",afterHouse:4,dir:60,strength:2.14,duration:3},{type:"quake",afterHouse:8,strength:2.68,duration:3},{type:"wind",afterHouse:11,dir:240,strength:2.68,duration:3.5}],stars:[.4,.6,.8],k:.535,dFlip:0,solver:{ratio:.921,stars:3,tweaks:0,moves:[["hut",.92,.92],["tower",0,0],["stone",0,-.94],["stone",-.94,0],["stone",.94,0],["balloon",1,-1],["balloon",-.22,.82],["inn",-1.96,-.52],["inn",1.96,.52],["cottage",0,1.88],["mill",0,-1.88],["tower",-1.14,1.98],["hut",5.58,-5.58],["inn",.79,2.93],["cottage",-1.26,-4.69],["mill",-1.99,1.15],["tower",2.48,-.66],["hut",-4.63,1.24],["cottage",-1.21,-2.1]]},human:{flip:.167,avg:.783}}],residents:[{name:"Maren Solberg",bio:"Knits scarves for the wind; loses every one, gladly."},{name:"Tomas Ibarra",bio:"Talks to cabbages until they agree to grow."},{name:"Aiko Tanaka",bio:"Maps clouds, then apologises when they move."},{name:"Priya Nair",bio:"Keeps festival lanterns lit through every storm."},{name:"Kwame Mensah",bio:"Drums softly so the island can keep its rhythm."},{name:"Ingrid Johansson",bio:"Bakes rye loaves shaped like small, safe islands."},{name:"Mateo Alvarez",bio:"Mends sails, nets, and occasionally arguments."},{name:"Hana Kim",bio:"Collects raindrops in labelled, hopeful jars."},{name:"Fatima Al-Sayed",bio:"Reads the stars aloud for neighbours who worry."},{name:"Oskar Lindqvist",bio:"Carves wooden gulls; insists they migrate at night."},{name:"Lucia Rossi",bio:"Sings soup into being. The soup rarely objects."},{name:"Dmitri Volkov",bio:"Waters the moss and names each patch after a poet."},{name:"Amara Okafor",bio:"Trades bright beads for other people's stories."},{name:"Elif Yilmaz",bio:"Brews tea strong enough to steady a wobbling table."},{name:"Kenji Nakamura",bio:"Folds paper boats for every new arrival."},{name:"Sofia Petrova",bio:"Keeps a diary for the island, in case it forgets."},{name:"Lars Henriksen",bio:"Fishes in clouds; catches mostly good intentions."},{name:"Isabela Ferreira",bio:"Dances the laundry dry on the breeziest days."},{name:"Yuki Mori",bio:"Listens to the Heartstone like a beloved drum."},{name:"Omar Haddad",bio:"Builds tiny bridges between neighbouring gardens."},{name:"Greta Nilsson",bio:"Counts her jumpers before every gust of wind."},{name:"Rafael Ortiz",bio:"Paints doors blue so the sky feels at home."},{name:"Mei Chen",bio:"Grows herbs that lean toward laughter."},{name:"Ibrahim Diallo",bio:"Tells tall tales, then apologises to their height."},{name:"Anna Kowalska",bio:"Polishes the pivot shrine every quiet morning."},{name:"Hiroshi Sato",bio:"Repairs clocks that prefer island time anyway."},{name:"Nadia Rahman",bio:"Writes letters to friends on islands not yet met."},{name:"Elias Bergstrom",bio:"Hum repairs into fences; they hold, mostly."},{name:"Carmen Vega",bio:"Keeps bees who have strong opinions on tilt."},{name:"Jae Park",bio:"Juggles plums whenever the ground feels unsure."},{name:"Zara Ahmed",bio:"Braids ribbons to mark the safest walking paths."},{name:"Mikhail Sokolov",bio:"Shares his umbrella before the rain even starts."},{name:"Linh Nguyen",bio:"Plants flowers along the edge, for courage."},{name:"Freya Andersen",bio:"Names each gust and thanks it for visiting."},{name:"Diego Morales",bio:"Cooks stews that bring the whole lane to one table."},{name:"Sakura Ito",bio:"Leaves tiny poems under doorsteps at dawn."},{name:"Thandiwe Nkosi",bio:"Weaves baskets tight enough to carry moonlight."},{name:"Henrik Dahl",bio:"Sharpens tools and softens bad news, daily."},{name:"Valentina Cruz",bio:"Teaches children to bow to the horizon."},{name:"Ken Watanabe",bio:"Trims bonsai clouds. They never stay trimmed."},{name:"Anya Ivanova",bio:"Keeps an extra chair for whoever is homesick."},{name:"Marco Bianchi",bio:"Plays accordion for houses that need cheering."},{name:"Seo-Yeon Lee",bio:"Charts safe routes in chalk after every tremor."},{name:"Yusuf Aydin",bio:"Mends kites and the hopes attached to them."},{name:"Clara Moreau",bio:"Saves the last slice of pie for the night watch."},{name:"Nia Williams",bio:"Sings low notes the Heartstone seems to like."},{name:"Piotr Nowak",bio:"Stacks stones neatly, just to practise balance."},{name:"Signe Haaland",bio:"Keeps warm soup ready for anyone who slides home."}],endless:{name:"Endless Drift",flavor:"No last island, no final shore. Build until the clouds run out of patience, and see how long your folk can stay."},tips:["Place heavy houses opposite each other to cancel their pull.","Watch the tilt needle: sliding starts long before flipping.","Save a ballast stone for the house you fear most.","Balloons lift a heavy side without adding new weight.","Spread houses wide; distance makes every weight stronger.","After a hazard, let the island settle before building again.","A mill adds weight but no residents. Use it as a counterweight.","Check the queue ahead. Two heavies in a row need a plan."]};var hm="teeter.analytics.v1",Bu="teeter.flags.v1";function ku(){try{return JSON.parse(localStorage.getItem(hm))||[]}catch{return[]}}function um(i){try{localStorage.setItem(hm,JSON.stringify(i.slice(-3e3)))}catch{}}function Hy(){try{return JSON.parse(localStorage.getItem(Bu))||{}}catch{return{}}}var Gy=Math.random().toString(36).slice(2,10);function Fn(i,e={}){let t=ku();t.push({e:i,t:Date.now(),s:Gy,...e}),um(t)}function El(i,e={}){let t=Hy();if(!t[i]){t[i]=Date.now();try{localStorage.setItem(Bu,JSON.stringify(t))}catch{}Fn(i,e)}}function Al(){let i=ku(),e={},t=new Set,n={};for(let s of i){e[s.e]=(e[s.e]||0)+1,t.add(s.s);let r=/^level_(\w+)_(start|win|fail)$/.exec(s.e);if(r){let a=n[r[1]]=n[r[1]]||{start:0,win:0,fail:0,fell:0,flipped:0,quit:0,bestRatio:0};a[r[2]]++,r[2]==="fail"&&(a[s.reason||"fell"]=(a[s.reason||"fell"]||0)+1),s.ratio!=null&&(a.bestRatio=Math.max(a.bestRatio,s.ratio))}}return{generated:new Date().toISOString(),events:i.length,sessions:t.size,funnel:{opened:e.opened||0,first_house:e.first_house||0,level_1_start:e.level_1_start||0,level_1_win:e.level_1_win||0,first_dangle:e.first_dangle||0,first_rescue:e.first_rescue||0,rescues:e.rescue||0},levels:n,counts:e}}function dm(){let i=new Blob([JSON.stringify({summary:Al(),raw:ku()},null,2)],{type:"application/json"}),e=document.createElement("a");e.href=URL.createObjectURL(i),e.download="teeter-analytics.json",document.body.appendChild(e),e.click(),e.remove()}function fm(){um([]);try{localStorage.removeItem(Bu)}catch{}}function zu(i,e){if(e===ru)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Lr||e===$a){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Lr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function io(i){let e=new Map,t=new Map,n=i.clone();return pm(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function pm(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)pm(i.children[n],e.children[n],t)}var Rl=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ju(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Cl(t,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cl(t,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ad(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ai.extractUrlBase(e);a=Ai.resolveURL(l,this.path)}else a=Ai.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Tr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_m){try{a[tt.KHR_BINARY_GLTF]=new od(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new pd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new qu;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new cd(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new ld;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new hd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Vy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Bt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wu=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],un);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Xi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ss(h),l.distance=u;break;case"spot":l=new za(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},qu=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let s=[];e.color=new Ae(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],un),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}},Xu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(r,r)}return Promise.all(s)}},Ku=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Ju=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Yu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],un)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},$u=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(r[0],r[1],r[2],un),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ed=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(r[0],r[1],r[2],un),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},nd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},sd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},rd=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Cl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ad=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let v=new qe,g=new I,p=new Gt,x=new I(1,1,1),M=new gs(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&x.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,v.compose(g,p,x));let b=null;for(let S in c)if(S==="_COLOR_0"){let w=c[S];M.instanceColor=new yi(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(b===null){let A=M.geometry;b=new vt,b.name=A.name;for(let _ in A.attributes)b.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)b.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&b.setIndex(A.index),b.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)b.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(b.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(b.boundingSphere=A.boundingSphere.clone()),b.drawRange.start=A.drawRange.start,b.drawRange.count=A.drawRange.count,b.userData=Object.assign({},A.userData),M.geometry=b}let w=c[S];b.setAttribute(S,new yi(w.array,w.itemSize,w.normalized))}Et.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},_m="glTF",so=12,mm={JSON:1313821514,BIN:5130562},od=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-so,r=new DataView(e,so),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===mm.JSON){let l=new Uint8Array(e,so+a,o);this.content=n.decode(l)}else if(c===mm.BIN){let l=so+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},cd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=dd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=dd[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Or[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},o,l,un,d)})})}},ld=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},hd=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Pl=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,v=m-l,g=-2*f+3*d,p=f-d,x=1-g,M=p-d+u;for(let b=0;b!==o;b++){let S=a[v+b+o],w=a[v+b+c]*h,A=a[m+b+o],_=a[m+b]*h;r[b]=x*S+M*w+g*A+p*_}return r}},Wy=new Gt,ud=class extends Pl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Wy.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gm={9728:Ut,9729:Ot,9984:Ec,9985:Cr,9986:As,9987:Jn},bm={33071:In,33648:ar,10497:Bi},Hu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:ds,STEP:us},Gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Ps(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ky(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Jy(i){let e,t=i.extensions&&i.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vu(t.attributes):e=i.indices+":"+Vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Vu(i.targets[n]);return e}function Vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Yy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Zy=new qe,pd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Oa(this.options.manager):this.textureLoader=new Ha(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ps(r,o,s),di(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ai.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Hu[s.type],o=Or[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Nt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Hu[s.type],l=Or[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,M=t.cache.get(x);M||(v=new l(o,p*f,s.count*f/h),M=new ps(v,f/h),t.cache.add(x,M)),g=new ki(M,c,d%f/h,m)}else o===null?v=new l(s.count*c):v=new l(o,d,s.count*c),g=new Nt(v,c,m);if(s.sparse!==void 0){let p=Hu.SCALAR,x=Or[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,S=new x(a[1],M,s.sparse.count*p),w=new l(a[2],b,s.sparse.count*c);o!==null&&(g=new Nt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,_=S.length;A<_;A++){let E=S[A];if(g.setX(E,w[A*c]),c>=2&&g.setY(E,w[A*c+1]),c>=3&&g.setZ(E,w[A*c+2]),c>=4&&g.setW(E,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=gm[d.magFilter]||Ot,h.minFilter=gm[d.minFilter]||Jn,h.wrapS=bm[d.wrapS]||Bi,h.wrapT=bm[d.wrapT]||Bi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Ot,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let g=new qt(v);g.needsUpdate=!0,d(g)}),t.load(Ai.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),di(u,a),u.userData.mimeType=a.mimeType||Yy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gi,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new gr,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Dn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],un),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Ft)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=an);let h=r.alphaMode||Gu.OPAQUE;if(h===Gu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Gu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Xt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Xt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Xt){let u=r.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],un)}return r.emissiveTexture!==void 0&&a!==Xt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(s,u,r),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return xm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Jy(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xm(new vt,l,t),l.mode===Nn.TRIANGLE_STRIP?d=d.then(f=>zu(f,$a)):l.mode===Nn.TRIANGLE_FAN&&(d=d.then(f=>zu(f,Lr))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Xy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=a[f],p,x=l[f];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&b?new ma(v,x):new lt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Nn.LINES)p=new ba(v,x);else if(g.mode===Nn.LINE_STRIP)p=new bs(v,x);else if(g.mode===Nn.LINE_LOOP)p=new xa(v,x);else if(g.mode===Nn.POINTS)p=new xs(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ky(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),g.extensions&&Ps(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];let d=new ct;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(lu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ga(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],v=f.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let M=0,b=d.length;M<b;M++){let S=d[M],w=f[M],A=m[M],_=v[M],E=g[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let C=n._createAnimationTracks(S,w,A,_,E);if(C)for(let L=0;L<C.length;L++)p.push(C[L])}let x=new ys(r,void 0,p);return di(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Zy)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new fr:l.length>1?h=new ct:l.length===1?h=l[0]:h=new Et,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),di(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){let u=new qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&Ps(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(io(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof dn||d instanceof qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Zi[r.path]===Zi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Zi[r.path]){case Zi.weights:h=wi;break;case Zi.rotation:h=Ti;break;case Zi.translation:case Zi.scale:h=Wi;break;default:n.itemSize===1?h=wi:h=Wi;break}let u=s.interpolation!==void 0?qy[s.interpolation]:ds,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let v=new h(c[f]+"."+Zi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fd(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?ud:Pl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function $y(i,e,t){let n=e.attributes,s=new $t;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=fd(Or[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=fd(Or[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new mn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function xm(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=dd[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==un&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),di(i,e),$y(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?jy(i,e.targets,t):i})}var vm=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),M=0;M<p.length;++M){var b=p.charCodeAt(M);x[M]=b>96?b-97:b>64?b-39:b+4}for(var S=0,M=0;M<p.length;++M)x[S++]=x[M]<60?n[x[M]]:(x[M]-60)*64+x[++M];return x.buffer.slice(0,S)}function c(p,x,M,b,S,w,A){var _=p.exports.sbrk,E=b+3&-4,C=_(E*S),L=_(w.length),O=new Uint8Array(p.exports.memory.buffer);O.set(w,L);var G=x(C,b,S,L,w.length);if(G==0&&A&&A(C,E,S),M.set(O.subarray(C,C+b*S)),_(C-_(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(M){var b=M.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),M=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(M),S=u.length;S<p;++S)u[S]=f(b);for(var S=p;S<u.length;++S)u[S].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function v(p,x,M,b,S){for(var w=u[0],A=1;A<u.length;++A)u[A].pending<w.pending&&(w=u[A]);return new Promise(function(_,E){var C=new Uint8Array(M),L=++d;w.pending+=p,w.requests[L]={resolve:_,reject:E},w.object.postMessage({id:L,count:p,size:x,source:C,mode:b,filter:S},[C.buffer])})}function g(p){var x=p.data;self.ready.then(function(M){if(!x.id)return self.close();try{var b=new Uint8Array(x.count*x.size);c(M,M.exports[x.mode],b,x.count,x.size,x.source,M.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:b},[b.buffer])}catch(S){self.postMessage({id:x.id,count:x.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,M,b,S){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,M,b,r.exports[l[S]])},decodeIndexBuffer:function(p,x,M,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,M,b)},decodeIndexSequence:function(p,x,M,b){c(r,r.exports.meshopt_decodeIndexSequence,p,x,M,b)},decodeGltfBuffer:function(p,x,M,b,S,w){c(r,r.exports[h[S]],p,x,M,b,r.exports[l[w]])},decodeGltfBufferAsync:function(p,x,M,b,S){return u.length>0?v(p,x,M,h[b],l[S]):a.then(function(){var w=new Uint8Array(p*x);return c(r,r.exports[h[b]],w,p,x,M,r.exports[l[S]]),w})}}})();var _n={},gd={},bd=new Set,Br=null,md=null,ym={},Mm="assets/models/";async function Qy(){if(Br||(Br={},!/^https?:/.test(location.protocol)))return Br;try{let i=await fetch(Mm+"manifest.json",{cache:"no-cache"});i.ok&&(Br=await i.json())}catch{}return Br}async function xd(i=null,e=0){let t=await Qy();md=md||new Rl().setMeshoptDecoder(vm);let n=Object.entries(t).filter(([r])=>!r.startsWith("_")&&(!i||i.includes(r))),s=Promise.all(n.map(([r,a])=>ym[r]||(ym[r]=md.loadAsync(Mm+a).then(o=>{let c=o.scene;c.traverse(l=>{l.isMesh&&(l.castShadow=!0,l.receiveShadow=!0,l.material&&(l.material.metalness=0,l.material.roughness=Math.max(.75,l.material.roughness??.85)))}),_n[r]=c,gd[r]=o.animations||[]}).catch(()=>console.warn("[models] could not load",a)))));return e?await Promise.race([s,new Promise(r=>setTimeout(r,e))]):await s,_n}function Sm(i,e,t){let n=new $t().setFromObject(i),s=n.getSize(new I),r=e*2/Math.max(s.x,s.z,.001);t&&(r=Math.min(r,t/Math.max(s.y,.001))),i.scale.setScalar(r),i.updateMatrixWorld(!0);let a=new $t().setFromObject(i),o=a.getCenter(new I);return i.position.set(-o.x,-a.min.y,-o.z),a.max.y-a.min.y}function Un(i,e,t=null){let n=_n[i];if(!n)return null;let s=!1;n.traverse(o=>{o.isSkinnedMesh&&(s=!0)});let r=s?io(n):n.clone(!0);Sm(r,e,t);let a=new ct;return a.add(r),a.userData.model=i,a}function Il(i,e,t=null){let n=_n[i];if(!n||!(gd[i]||[]).length)return null;let s=io(n),r=new Ga(s),a={};for(let h of gd[i])a[h.name.split(":").pop()]=r.clipAction(h);!a.idle&&a.walk&&(a.idle=r.clipAction(a.walk.getClip().clone()),a.idle.timeScale=.25),!a.fall&&a.walk&&(a.fall=r.clipAction(a.walk.getClip().clone()),a.fall.timeScale=2.2),!a.cheer&&a.idle&&(a.cheer=a.idle);let o=a.idle||Object.values(a)[0];o.play(),r.update(.01),s.updateMatrixWorld(!0),Sm(s,e,t),s.traverse(h=>{h.isSkinnedMesh&&(h.frustumCulled=!1)});let c=new ct;c.add(s);let l={mixer:r,actions:a,cur:o,root:c,play(h,u=.25,d=!1){let f=a[h];!f||f===this.cur||(f.reset(),f.setLoop(d?hl:ul),f.clampWhenFinished=d,f.play(),this.cur&&f.crossFadeFrom(this.cur,u,!1),this.cur=f)}};return bd.add(l),c.userData.anim=l,{group:c,mixer:r,actions:a,anim:l}}function wm(i){for(let e of bd){let t=e.root,n=!1;for(;t;){if(t.isScene){n=!0;break}t=t.parent}if(!n){e.detachedFor>2&&bd.delete(e),e.detachedFor=(e.detachedFor||0)+i;continue}e.detachedFor=0,e.mixer.update(i)}}var Wt=.25,Tm={};function Nl(i,e={}){let t=i+JSON.stringify(e);return Tm[t]||(Tm[t]=new Dn({color:i,flatShading:!0,roughness:.85,metalness:0,...e}))}function rt(i,e,t){let n=new lt(i,Nl(e,t));return n.castShadow=!0,n.receiveShadow=!0,n}function Pm(i,e=72,t=1){let n=[];for(let s=0;s<e;s++){let r=s/e*Math.PI*2,a=$n(i,r)*t;n.push([Math.cos(r)*a,Math.sin(r)*a,r])}return n}function _d(i,e,t,n,s,r=.08){let a=new Mr;Pm(i,72,e).forEach(([c,l],h)=>h?a.lineTo(c,-l):a.moveTo(c,-l));let o=new Pa(a,{depth:n,bevelEnabled:r>0,bevelThickness:r,bevelSize:r,bevelSegments:1,curveSegments:4});return o.rotateX(-Math.PI/2),o.translate(0,t,0),rt(o,s)}function Md(i,e=3){let t=no(e*977+13),n=new ct;n.add(_d(i,1,Wt-.3,.22,"#7FB069",.08)),n.add(_d(i,1.012,Wt-.36,.1,"#5f9150",.03)),n.add(_d(i,.985,Wt-.75,.42,"#b07a4f",.04));let s=[[.97,-.55],[.82,-1.6],[.6,-2.7],[.36,-3.9],[.16,-5]],r=36,a=[],o=[],c=s.map(([b,S],w)=>Pm(i,r,b).map(([A,_])=>{let E=w===0?0:.25+t()*.35;return[A*(1+(t()-.5)*.12*w/2),S-E*w*.3,_*(1+(t()-.5)*.12*w/2)]})),l=[0,-6.1,0],h=[new Ae("#8b7d6b"),new Ae("#77695a"),new Ae("#9a8a74"),new Ae("#6b5e50")],u=(b,S,w)=>{a.push(...b,...S,...w);let A=h[t()*h.length|0];for(let _=0;_<3;_++)o.push(A.r,A.g,A.b)};for(let b=0;b<c.length;b++)for(let S=0;S<r;S++){let w=c[b][S],A=c[b][(S+1)%r];if(b<c.length-1){let _=c[b+1][S],E=c[b+1][(S+1)%r];u(w,_,A),u(A,_,E)}else u(w,l,A)}let d=new vt;d.setAttribute("position",new et(a,3)),d.setAttribute("color",new et(o,3)),d.computeVertexNormals();let f=new lt(d,new Dn({vertexColors:!0,flatShading:!0,roughness:1,side:an}));f.castShadow=!0,n.add(f);let m=new lt(new Ia(.55,0),new Dn({color:"#FF8FB1",emissive:"#FF5D8F",emissiveIntensity:1.6,flatShading:!0}));m.position.set(0,-6.3,0),m.scale.set(1,1.6,1),m.name="heart",n.add(m);let v=Un("heartstone",.62,1.9);v&&(v.traverse(b=>{b.isMesh&&(b.material=b.material.clone(),b.material.emissive=new Ae("#ff7aa5"),b.material.emissiveMap=b.material.map,b.material.emissiveIntensity=1.1,b.castShadow=!1)}),v.position.y=-.95,m.material=new Xt({visible:!1}),m.scale.set(1,1,1),m.add(v));let g=new ms(new zi({map:kl(),color:"#ff7aa5",transparent:!0,depthWrite:!1,blending:ji,opacity:.85}));g.scale.set(4.2,2.6,1),m.add(g),g.name="halo";let p=new Ss("#ff6f9c",6,9,1.6);p.position.set(0,-5.6,0),n.add(p);for(let b=0;b<10;b++){let S=t()*Math.PI*2,w=$n(i,S)*(.5+t()*.35),A=.8+t()*1.6,_=rt(new rn(.03,.01,A,4),"#5d4a36");_.position.set(Math.cos(S)*w,-2.2-t()*1.5-A/2,Math.sin(S)*w),n.add(_)}let x=[],M=Math.round(i.radius*4);for(let b=0;b<M;b++){let S=t()*Math.PI*2,w=$n(i,S)*(.8+t()*.14),A=Math.cos(S)*w,_=Math.sin(S)*w,E=t(),C;E<.4?C=nM(t):E<.65?C=rt(new _r(.12+t()*.12,0),"#9aa1a8"):C=iM(t);let L=new ct;L.add(C),C=L,C.userData.kind=E<.4?"tree":E<.65?"rock":"flowers",C.userData.seed=(e*131+b*977)%1e3,C.position.set(A,Wt,_),C.rotation.y=t()*6.28,C.userData.x=A,C.userData.z=_,n.add(C),x.push(C)}return Ul(x),{group:n,decor:x,heart:m}}var Em=[["lantern_post",.16,.75],["well",.32,.6],["fence",.3,.32],["haystack",.26,.4],["beehive",.18,.32],["garden_bed",.32,.22],["signpost",.2,.6],["market_stall",.36,.6],["bridge",.34,.24],["flower_cart",.28,.4],["bench",.26,.3],["lamp_lanterns_string",.3,.75],["mailbox",.12,.4],["barrel_crates",.24,.36],["resident_cat",.1,.16],["dock_pier",.36,.22],["mushroom_cluster",.18,.24],["rock_arch",.34,.5],["hot_spring",.34,.2],["pumpkin_patch",.3,.2],["scarecrow",.16,.55],["picnic_blanket",.3,.12]],vd={};function eM(i){if(vd[i]==null){let e=0;_n[i]?.traverse(t=>{t.isMesh&&(e+=(t.geometry.index?t.geometry.index.count:t.geometry.attributes.position.count)/3)}),vd[i]=e}return vd[i]}var tM=7e3;function Ul(i){let e=0,t=new Set;for(let n of i)n.userData.dressed&&(e+=n.userData.tris||0,t.add(n.userData.modelKey));for(let n of i){if(n.userData.dressed)continue;let s=n.userData.kind,r=n.userData.seed||0,a=null,o=0,c=0;if(s==="tree")a=["tree_round","tree_pine","orchard_tree"][r%3],_n[a]||(a=r%2?"tree_round":"tree_pine"),o=.3+r%7*.012,c=.75+r%5*.08;else if(s==="flowers"){let u=Em[r%Em.length];r%3===0||t.has(u[0])?(a="flowers",o=.18,c=.22):[a,o,c]=u}if(!a||!_n[a])continue;let l=eM(a);if(e+l>tM)continue;let h=Un(a,o,c);if(h){for(e+=l,t.add(a),h.traverse(u=>{u.isMesh&&(u.castShadow=!1,u.receiveShadow=!1)});n.children.length;)n.remove(n.children[0]);n.add(h),n.userData.dressed=!0,n.userData.tris=l,n.userData.modelKey=a}}}var ro=new Set;function Ol(i){if(i.critters)return;let e=i.decor.filter(s=>s.userData.kind!=="tree");if(!e.length||!_n.sheep&&!_n.chicken)return;i.critters=[];let t=(s,r,a)=>{let o=e[(a*5+(e[0].userData.seed||0))%e.length],c=new ct;c.add(s);let l=Fl();l.scale.setScalar(r==="sheep"?.8:.4),c.add(l),s.traverse(v=>{v.isMesh&&(v.castShadow=!1,v.receiveShadow=!1)});let h=Math.hypot(o.userData.x,o.userData.z)||1,u=Math.max(0,1-.6/h),d=o.userData.x*u,f=o.userData.z*u;c.position.set(d,Wt,f),i.group.add(c);let m={g:c,obj:s,kind:r,spot:o,ax:d,az:f,tx:d,tz:f,wait:a*.7,t:a,anim:s.userData.anim};ro.add(m),i.critters.push(m)},n=Il("sheep",.2,.32);n&&t(n.group,"sheep",0);for(let s of[1]){let r=Un("chicken",.09,.18);r&&t(r,"chicken",s)}}function Im(i){for(let e of ro){let t=e.g,n=!1;for(;t;){if(t.isScene){n=!0;break}t=t.parent}if(!n){(e.gone=(e.gone||0)+i)>2&&ro.delete(e);continue}if(e.gone=0,e.g.visible=e.spot.visible,!e.g.visible)continue;e.t+=i;let s=e.g.position,r=e.tx-s.x,a=e.tz-s.z,o=Math.hypot(r,a),c=e.kind==="sheep"?.18:.3;if(e.wait>0&&(e.wait-=i,e.wait<=0)){let h=Math.random()*6.283,u=.15+Math.random()*.3;e.tx=e.ax+Math.cos(h)*u,e.tz=e.az+Math.sin(h)*u}let l=e.wait<=0&&o>.02;if(l){let h=Math.min(1,c*i/o);s.x+=r*h,s.z+=a*h;let u=Math.atan2(r,a);e.g.rotation.y+=((u-e.g.rotation.y+9.42)%6.283-3.14)*Math.min(1,i*6)}else e.wait<=0&&(e.wait=1+Math.random()*3);e.anim&&e.anim.play(l?"walk":"idle",.3),e.kind==="chicken"&&(e.obj.position.y=l?Math.abs(Math.sin(e.t*14))*.035:0,e.obj.rotation.x=l?0:Math.max(0,Math.sin(e.t*5))*.5)}}function nM(i){let e=new ct,t=.5+i()*.4,n=rt(new rn(.05,.07,t*.5,5),"#7a5233");n.position.y=t*.25,e.add(n);let s=rt(new jn(.28,t*.7,6),i()<.5?"#3f8f4f":"#4fa35a");s.position.y=t*.6,e.add(s);let r=rt(new jn(.2,t*.5,6),"#5bb767");return r.position.y=t*.9,e.add(r),e}function iM(i){let e=new ct,t=["#ffd166","#ef8fb1","#ffffff","#b39ddb"];for(let n=0;n<4;n++){let s=rt(new wr(.05,0),t[i()*4|0]);s.position.set((i()-.5)*.3,.06,(i()-.5)*.3),e.add(s)}return e}var sM={hut:"#d9a441",cottage:"#c8553d",tower:"#4f6d9a",mill:"#b08968",inn:"#5b8c5a",stone:"#8a8f98",balloon:"#e85d75"};function yd(i,e,t,n,s,r=2){for(let a=0;a<r;a++){let o=new lt(new Ct(.12,.12,.02),Nl("#ffe9a8",{emissive:"#ffcf6b",emissiveIntensity:.35}));o.position.set(-e/4+a*e/2/Math.max(1,r-1)*(r>1?1:0),s,n/2+.011),i.add(o)}}var Am=new Xt({colorWrite:!1,depthWrite:!1});function rM(i){let e=new $t().setFromObject(i),t=e.getSize(new I),n=e.getCenter(new I);i.traverse(a=>{a.isMesh&&(a.castShadow=!1)});let s=new lt(new Ct(t.x*.8,t.y*.62,t.z*.8),Am);s.position.set(n.x,e.min.y+t.y*.31,n.z);let r=new lt(new jn(Math.max(t.x,t.z)*.5,t.y*.38,4),Am);r.position.set(n.x,e.min.y+t.y*.81,n.z),r.rotation.y=Math.PI/4;for(let a of[s,r])a.castShadow=!0,a.receiveShadow=!1,a.name="shadowProxy",i.add(a)}var aM={hut:["house_mushroom"],cottage:["house_blue","house_lighthouse_cottage"],mill:["house_windmill_small"],tower:["house_treehouse","clocktower"],inn:["bakery_2","tavern_small"]};function Bl(i,e=0){let t=Vt[i],n=aM[i]||[],s=n.length&&e>=0?n[e%(n.length+1)-1]:null,r=s&&_n[s]?s:i,a=i==="balloon"?Un(i,.9,2.3):Un(r,t.foot*1.08,i==="tower"?1.9:null);if(a){if(a.traverse(l=>l.isMesh&&(l.castShadow=l.receiveShadow=!0)),i!=="balloon"&&rM(a),i==="balloon"){let l=a.children[0];l.name="balloon",l.userData.baseY=l.position.y}return a}let o=new ct,c=sM[i];if(i==="hut"){let l=rt(new Ct(.6,.42,.6),"#ead6ad");l.position.y=.21,o.add(l);let h=rt(new jn(.56,.5,4),c);h.position.y=.67,h.rotation.y=Math.PI/4,o.add(h);let u=rt(new Ct(.16,.24,.02),"#7a5233");u.position.set(0,.12,.31),o.add(u)}else if(i==="cottage"){let l=rt(new Ct(.95,.55,.75),"#f3ead8");l.position.y=.275,o.add(l);let h=rt(new rn(.5,.5,1.05,3),c);h.rotation.z=Math.PI/2,h.rotation.x=Math.PI/2,h.position.y=.78,h.scale.set(1,1,.9),o.add(h);let u=rt(new Ct(.12,.3,.12),"#8d6e63");u.position.set(.25,1,-.12),o.add(u);let d=rt(new Ct(.16,.28,.02),"#6d4c41");d.position.set(0,.14,.38),o.add(d),yd(o,.95,.55,.75,.33,2)}else if(i==="tower"){let l=rt(new rn(.42,.48,1.4,8),"#d8cfc0");l.position.y=.7,o.add(l);let h=rt(new rn(.5,.5,.1,8),"#a1887f");h.position.y=1.4,o.add(h);let u=rt(new jn(.58,.75,8),c);u.position.y=1.82,o.add(u);let d=rt(new Ct(.02,.3,.02),"#5d4037");d.position.y=2.3,o.add(d);let f=rt(new Ct(.2,.1,.02),"#ffd166");f.position.set(.1,2.38,0),o.add(f);for(let m of[.5,1.05]){let v=new lt(new Ct(.12,.16,.02),Nl("#ffe9a8",{emissive:"#ffcf6b",emissiveIntensity:.35}));v.position.set(0,m,.46),o.add(v)}}else if(i==="mill"){let l=rt(new rn(.35,.55,1.1,6),"#e8dcc6");l.position.y=.55,o.add(l);let h=rt(new jn(.45,.45,6),c);h.position.y=1.32,o.add(h);let u=new ct;u.name="blades",u.position.set(0,1.05,.42);for(let d=0;d<4;d++){let f=rt(new Ct(.1,.75,.02),"#f5f0e6");f.position.y=.38;let m=new ct;m.rotation.z=d*Math.PI/2,m.add(f),u.add(m)}o.add(u)}else if(i==="inn"){let l=rt(new Ct(1.3,.85,.95),"#f1e3c8");l.position.y=.425,o.add(l);let h=rt(new Ct(1.34,.08,.99),"#8d6e63");h.position.y=.45,o.add(h);let u=rt(new rn(.62,.62,1.4,3),c);u.rotation.z=Math.PI/2,u.rotation.x=Math.PI/2,u.position.y=1.12,o.add(u),yd(o,1.3,.85,.95,.65,3),yd(o,1.3,.85,.95,.22,2);let d=rt(new Ct(.3,.16,.03),"#ffd166");d.position.set(.5,.3,.52),o.add(d)}else if(i==="stone"){let l=rt(new _r(.42,0),c);l.position.y=.3,l.scale.set(1,.75,1),o.add(l);let h=new lt(new Da(.16,.025,4,12),Nl("#7fe7ff",{emissive:"#38c6ff",emissiveIntensity:.9}));h.position.set(0,.36,.33),o.add(h)}else if(i==="balloon"){let l=rt(new rn(.06,.08,.25,6),"#6d4c41");l.position.y=.12,o.add(l);let h=rt(new rn(.012,.012,1.7,4),"#d7ccc8");h.position.y=1.05,o.add(h);let u=new ct;u.name="balloon",u.position.y=2.2;let d=rt(new Mi(.42,8,6),c);d.scale.y=1.15,u.add(d);let f=rt(new Mi(.425,8,6,0,Math.PI*2,Math.PI*.4,Math.PI*.2),"#ffd166");f.scale.y=1.15,u.add(f),o.add(u)}return o}var Ll=null;function kl(){if(Ll)return Ll;let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ll=new br(i),Ll}var Rm=["#f1c27d","#e0ac69","#c68642","#8d5524","#ffdbac"],$i=["#e76f51","#2a9d8f","#e9c46a","#8ab17d","#6d597a","#457b9d","#f4a261","#b5838d"],oM=["resident_baker","resident_fisher","resident_child","resident_elder","resident_cat"],Cm=["resident",...oM],cM={resident_child:[.8,.8],resident_cat:[.55,.42]},Dl=null;function Fl(){if(!Dl){let e=document.createElement("canvas");e.width=e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,"rgba(40,40,60,0.55)"),n.addColorStop(1,"rgba(40,40,60,0)"),t.fillStyle=n,t.fillRect(0,0,64,64),Dl={geo:new vs(.5,.5).rotateX(-Math.PI/2),mat:new Xt({map:new br(e),transparent:!0,depthWrite:!1})}}let i=new lt(Dl.geo,Dl.mat);return i.name="blob",i.position.y=.015,i.renderOrder=1,i}function zl(i,e={}){let t=Cm[i%Cm.length],[n,s]=cM[t]||[1,1],r=t!=="resident"&&Il(t,.26*n,.6*s);if(!r&&t!=="resident"&&e.menu&&_n[t]){let u=new ct,d=Un(t,.26*n,.6*s);return d.name="body",u.add(d),u.add(Fl()),u}if(r){let u=new ct,d=r.group;d.name="body",u.add(d),u.add(Fl()),r.anim.mixer.setTime(i*.37%2),u.userData.anim=r.anim,d.traverse(m=>{m.isMesh&&(m.castShadow=!1)});let f=Un("resident_dangle",.22,.62);return f&&(f.name="dangle",f.visible=!1,f.position.y=.42-.62,u.add(f)),u}let a=Il("resident",.26,.6);if(a){let u=new ct,d=a.group;d.name="body",u.add(d);let f=new Ae("#ffffff").lerp(new Ae($i[i%$i.length]),.5);d.traverse(v=>{v.isMesh&&(v.material=v.material.clone(),v.material.color.copy(f),v.castShadow=!1)}),u.add(Fl()),a.anim.mixer.setTime(i*.37%2);let m=Un("resident_dangle",.22,.62);return m&&(m.name="dangle",m.visible=!1,m.position.y=.42-.62,m.traverse(v=>{v.isMesh&&(v.material=v.material.clone(),v.material.color.copy(f))}),u.add(m)),u.userData.anim=a.anim,u}let o=new ct;o.scale.setScalar(1.55);let c=new ct;c.name="body",o.add(c);let l=rt(new rn(.075,.11,.24,6),$i[i%$i.length]);l.position.y=.14,c.add(l);let h=rt(new Mi(.085,7,5),Rm[i*7%Rm.length]);h.position.y=.33,c.add(h);for(let u of[-1,1]){let d=new ct;d.name=u<0?"armL":"armR",d.position.set(u*.085,.22,0);let f=rt(new rn(.022,.022,.15,4),$i[i%$i.length]);f.position.y=-.07,d.add(f),d.rotation.z=u*.25,c.add(d)}if(i%3===0){let u=rt(new jn(.09,.12,6),$i[(i+3)%$i.length]);u.position.y=.44,c.add(u)}return o}function Lm(i){let e=new wr(1,1),t=220,n=new gs(e,new Dn({color:"#ffffff",flatShading:!0,roughness:1,emissive:"#ffe6d6",emissiveIntensity:.45}),t),s=new qe,r=new Gt,a=new Xn;for(let o=0;o<t;o++){let c=i()*Math.PI*2,l=15+Math.pow(i(),.8)*70,h=1.2+i()*2.4;a.set(i()*3,i()*3,i()*3),r.setFromEuler(a),a.set(0,i()*6.28,0),r.setFromEuler(a),s.compose(new I(Math.cos(c)*l,-21-i()*6,Math.sin(c)*l),r,new I(h*1.9,h*.55,h*1.3)),n.setMatrixAt(o,s)}return n.receiveShadow=!1,n}var Nm="teeter.audio.v1",Qe=null,Ls=null,Ds=null,oo=null,Hl=null,Dm=!1,Fs=(()=>{try{return JSON.parse(localStorage.getItem(Nm))||{muted:!1}}catch{return{muted:!1}}})(),lM=()=>{try{localStorage.setItem(Nm,JSON.stringify(Fs))}catch{}};function hM(){if(Qe)return Qe;let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;Qe=new i,Ls=Qe.createGain(),Ls.gain.value=Fs.muted?0:.9;let e=Qe.createDynamicsCompressor();e.threshold.value=-16,e.ratio.value=4,Ls.connect(e),e.connect(Qe.destination),Ds=Qe.createGain(),Ds.gain.value=.32,Ds.connect(Ls),oo=Qe.createGain(),oo.gain.value=.8,oo.connect(Ls),Hl=Qe.createBuffer(1,Qe.sampleRate*2,Qe.sampleRate);let t=Hl.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1;return Qe}function kr(){hM()&&(Qe.state==="suspended"&&Qe.resume(),Dm||(Dm=!0,uM()))}function Vl(){return Fs.muted}function Um(i){Fs.muted=i,lM(),Ls&&Ls.gain.setTargetAtTime(i?0:.9,Qe.currentTime,.05)}function Gl(i,e,t,n,s){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(n,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+t+s)}function It(i,{type:e="sine",t=0,a:n=.005,dur:s=.3,vol:r=.3,bus:a=oo,slide:o=0,filter:c=0}={}){if(!Qe||Fs.muted)return;let l=Qe.currentTime+t,h=Qe.createOscillator(),u=Qe.createGain();h.type=e,h.frequency.setValueAtTime(i,l),o&&h.frequency.exponentialRampToValueAtTime(Math.max(20,i*o),l+s),Gl(u,l,n,r,s);let d=h;if(c){let f=Qe.createBiquadFilter();f.type="lowpass",f.frequency.value=c,h.connect(f),d=f}d.connect(u),u.connect(a),h.start(l),h.stop(l+n+s+.05)}function Is({t:i=0,dur:e=.3,vol:t=.2,f0:n=800,f1:s=800,q:r=1,type:a="bandpass",a:o=.01,bus:c=oo}={}){if(!Qe||Fs.muted)return;let l=Qe.currentTime+i,h=Qe.createBufferSource(),u=Qe.createBiquadFilter(),d=Qe.createGain();h.buffer=Hl,h.loop=!0,u.type=a,u.Q.value=r,u.frequency.setValueAtTime(n,l),u.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+e),Gl(d,l,o,t,e),h.connect(u),u.connect(d),d.connect(c),h.start(l,Math.random()),h.stop(l+o+e+.05)}var Om=[0,2,4,7,9],Qi=i=>440*Math.pow(2,(i-69)/12),Lt={click(){It(880,{type:"triangle",dur:.06,vol:.12})},hover(){It(1320,{type:"sine",dur:.04,vol:.05})},pick(){It(523,{type:"triangle",dur:.08,vol:.15,slide:1.5})},place(i=2){let e=Math.max(.5,Math.abs(i));It(140/Math.sqrt(e),{type:"sine",dur:.25,vol:.5,slide:.5}),Is({dur:.12,vol:.18,f0:1800,f1:400,q:.7}),It(Qi(72+Om[Math.random()*5|0]),{type:"triangle",t:.05,dur:.35,vol:.12})},pop(){It(660+Math.random()*200,{type:"sine",dur:.08,vol:.1,slide:1.8})},bad(){It(220,{type:"square",dur:.12,vol:.07,filter:900}),It(196,{type:"square",t:.09,dur:.15,vol:.07,filter:900})},creak(i=1){let e=90+Math.random()*60;It(e,{type:"sawtooth",dur:.5+Math.random()*.4,vol:.05*i,slide:1.25+Math.random()*.3,filter:700,a:.08})},dangle(){let i=700+Math.random()*250;It(i,{type:"triangle",dur:.12,vol:.16,slide:1.35}),It(i*1.3,{type:"triangle",t:.14,dur:.18,vol:.14,slide:.8})},tick(i){It(i?1500:1100,{type:"sine",dur:.03,vol:i?.09:.05})},rescue(){[0,4,7,12].forEach((i,e)=>It(Qi(76+i),{type:"triangle",t:e*.06,dur:.3,vol:.14})),Is({dur:.25,vol:.08,f0:600,f1:3e3,q:2})},fall(){It(900,{type:"sine",dur:1.1,vol:.12,slide:.25}),Is({t:.05,dur:.9,vol:.06,f0:2500,f1:300,q:3})},flip(){It(70,{type:"sine",dur:1.6,vol:.6,slide:.4}),Is({dur:1.8,vol:.3,f0:300,f1:2400,q:.8,type:"lowpass",a:.2})},gust(i=2.5){Is({dur:i,vol:.22,f0:300,f1:1400,q:1.5,a:i*.4}),Is({dur:i*.8,vol:.12,f0:2e3,f1:600,q:6,a:i*.3})},quake(i=2.5){Is({dur:i,vol:.5,f0:120,f1:60,q:.7,type:"lowpass",a:.1}),It(45,{type:"sine",dur:i,vol:.35,a:.1})},warn(){It(988,{type:"triangle",dur:.12,vol:.1}),It(784,{type:"triangle",t:.15,dur:.18,vol:.1})},star(i=0){It(Qi(79+[0,4,7][i%3]),{type:"triangle",dur:.6,vol:.16}),It(Qi(91+[0,4,7][i%3]),{type:"sine",dur:.8,vol:.06})},win(){[0,4,7,12,16].forEach((i,e)=>It(Qi(67+i),{type:"triangle",t:e*.09,dur:.5,vol:.14}))},lose(){[7,4,0,-5].forEach((i,e)=>It(Qi(64+i),{type:"triangle",t:e*.16,dur:.5,vol:.12,filter:1800}))}},Fm=[[53,57,60,64],[50,53,57,60],[46,50,53,57],[48,52,55,60]],ao=0;function Bm(i){ao=Math.max(0,Math.min(1,i))}function uM(){let i=Qe.createBufferSource();i.buffer=Hl,i.loop=!0;let e=Qe.createBiquadFilter();e.type="bandpass",e.frequency.value=500,e.Q.value=.6;let t=Qe.createGain();t.gain.value=.05,i.connect(e),e.connect(t),t.connect(Ds),i.start();let n=Qe.createOscillator(),s=Qe.createGain();n.frequency.value=.07,s.gain.value=250,n.connect(s),s.connect(e.frequency),n.start();let r=0,a=()=>{if(!Qe)return;let o=Fm[r%Fm.length],c=Qe.currentTime+.05,l=4.2;if(!Fs.muted){for(let u of o)for(let d of[-6,6]){let f=Qe.createOscillator(),m=Qe.createGain(),v=Qe.createBiquadFilter();f.type="triangle",f.frequency.value=Qi(u),f.detune.value=d,v.type="lowpass",v.frequency.value=900-ao*400,m.gain.setValueAtTime(1e-4,c),m.gain.linearRampToValueAtTime(.03,c+1.4),m.gain.linearRampToValueAtTime(1e-4,c+l+.8),f.connect(v),v.connect(m),m.connect(Ds),f.start(c),f.stop(c+l+1)}let h=ao>.6?2:5;for(let u=0;u<h;u++)if(Math.random()<.8){let d=77+Om[Math.random()*5|0]+(Math.random()<.3?12:0),f=c+u*(l/h)+Math.random()*.2,m=Qe.createOscillator(),v=Qe.createGain();m.type="sine",m.frequency.value=Qi(d),Gl(v,f,.004,.05,1.4),m.connect(v),v.connect(Ds),m.start(f),m.stop(f+1.5)}if(ao>.5)for(let u=0;u<4;u++){let d=c+u*1.05,f=Qe.createOscillator(),m=Qe.createGain();f.frequency.value=55,Gl(m,d,.01,.12*ao,.25),f.connect(m),m.connect(Ds),f.start(d),f.stop(d+.3)}}r++,setTimeout(a,l*1e3)};a()}var Ee=i=>document.getElementById(i),Gr=Math.PI/180,qm="teeter.progress.v1",ei=(()=>{try{return JSON.parse(localStorage.getItem(qm))||{stars:{},endlessBest:0}}catch{return{stars:{},endlessBest:0}}})(),km=()=>{try{localStorage.setItem(qm,JSON.stringify(ei))}catch{}},ts=Ee("scene"),Xm=Math.min(innerWidth,innerHeight)<700,Rn=new vl({canvas:ts,antialias:!Xm,alpha:!1,powerPreference:"high-performance"}),es=Math.min(window.devicePixelRatio||1,Xm?1.5:2);Rn.setPixelRatio(es);Rn.shadowMap.enabled=!0;Rn.shadowMap.type=ws;Rn.shadowMap.autoUpdate=!1;Rn.outputColorSpace=Ft;Rn.toneMapping=Wa;Rn.toneMappingExposure=1.08;var Jt=new da;Jt.fog=new ua("#f9dcc0",34,90);var On=new Ht(40,1,.1,400),jm=new I(.75,.32,.45).normalize(),Td=new lt(new Mi(300,32,16),new fn({side:en,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{top:{value:new Ae("#5aaedb")},mid:{value:new Ae("#7EC8E3")},hor:{value:new Ae("#FDE8C9")},low:{value:new Ae("#b7c4ee")},sun:{value:jm},danger:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform vec3 top,mid,hor,low,sun; uniform float danger; varying vec3 vP;
    void main(){ float h=vP.y; vec3 c = h>0.0 ? mix(hor, mix(mid, top, smoothstep(0.25,0.9,h)), smoothstep(0.0,0.3,h)) : mix(hor, low, smoothstep(-0.05,-0.85,h));
      float s = max(dot(vP, sun), 0.0); c += vec3(1.0,0.85,0.6)*pow(s, 24.0)*0.55 + vec3(1.0,0.75,0.5)*pow(s,4.0)*0.18;
      c = mix(c, c*vec3(1.08,0.82,0.8), danger*0.6);
      gl_FragColor = vec4(c,1.0); }`}));Jt.add(Td);Jt.add(new Ba("#cfe9ff","#f5c08f",1.15));var Us=new Xi("#ffd9a8",2.7);Us.position.copy(jm).multiplyScalar(16);Us.castShadow=!0;Us.shadow.mapSize.setScalar(Math.min(innerWidth,innerHeight)<700?1024:2048);Object.assign(Us.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50});Us.shadow.bias=-8e-4;Jt.add(Us);var Km=new Xi("#9fc8ff",.6);Km.position.set(-8,4,-6);Jt.add(Km);var Id=Lm(no(42));Jt.add(Id);var wt=new ct;Jt.add(wt);var Hr=new ct;Jt.add(Hr);for(let i=0;i<40;i++){let e=new lt(new Ct(1.1,.025,.025),new Xt({color:"#ffffff",transparent:!0,opacity:.55}));e.userData.o=[Math.random()*20-10,Math.random()*2.5+.3,Math.random()*16-8],Hr.add(e)}Hr.visible=!1;var zr=[],dM=(()=>{let e=new vt,t=new Float32Array(420);for(let s=0;s<140;s++)t[s*3]=(Math.random()-.5)*30,t[s*3+1]=Math.random()*10-3,t[s*3+2]=(Math.random()-.5)*30;e.setAttribute("position",new Nt(t,3));let n=new xs(e,new Gi({size:.12,map:kl(),color:"#fff3d6",transparent:!0,opacity:.8,depthWrite:!1,blending:ji}));return Jt.add(n),n})(),ql=[],fM=i=>new zi({map:kl(),color:i,transparent:!0,depthWrite:!1});function Ld(i,e,t=14,n=2.2,s=1.5,r=.28,a=.9,o=!1){for(let c=0;c<t;c++){let l=fM(e);o&&(l.blending=ji);let h=new ms(l);h.position.copy(i);let u=r*(.6+Math.random()*.8);h.scale.set(u,u,1);let d=Math.random()*Math.PI*2,f=n*(.4+Math.random()*.6);ql.push({s:h,v:new I(Math.cos(d)*f,s*(.4+Math.random()),Math.sin(d)*f),life:a,t:0,sz:u}),Jt.add(h)}}function pM(i){for(let e=ql.length-1;e>=0;e--){let t=ql[e];t.t+=i,t.v.y-=2.5*i,t.v.multiplyScalar(Math.exp(-2.2*i)),t.s.position.addScaledVector(t.v,i);let n=t.t/t.life;t.s.material.opacity=Math.max(0,1-n);let s=t.sz*(1+n*.8);t.s.scale.set(s,s,1),n>=1&&(Jt.remove(t.s),t.s.material.dispose(),ql.splice(e,1))}}var Qt=null;function mM(i){Qt&&Jt.remove(Qt);let e=[];for(let n=0;n<=96;n++){let s=n/96*Math.PI*2,r=$n(i,s)*1.01;e.push(new I(Math.cos(s)*r,Wt+.02,Math.sin(s)*r))}Qt=new lt(new Fa(new yr(e,!0),160,.05,5,!0),new Xt({color:"#ffffff",transparent:!0,opacity:.85,depthWrite:!1,fog:!1})),Qt.visible=!1,Jt.add(Qt)}var At={az:-.6,el:.6,shake:0,zoom:1,zoomT:1};function lo(i){At.shake=Math.min(.6,At.shake+i)}function Jm(){let i=window.innerWidth,e=window.innerHeight;Rn.setSize(i,e,!1),On.aspect=i/e,On.updateProjectionMatrix()}window.addEventListener("resize",Jm);Jm();function zm(i,e){let t=On.fov*Gr/2,n=Math.atan(Math.tan(t)*On.aspect);At.zoom+=(At.zoomT-At.zoom)*Math.min(1,e*3);let s=(Math.max(i*1.2/Math.tan(n),i*1.2/Math.tan(t))+1)*At.zoom,r=At.shake,a=(Math.random()-.5)*r,o=(Math.random()-.5)*r;At.shake*=Math.exp(-e*7),On.position.set(Math.cos(At.az)*Math.cos(At.el)*s+a,Math.sin(At.el)*s+o,Math.sin(At.az)*Math.cos(At.el)*s),On.lookAt(0,-.9,0)}var P=null,Wl=Pt.residents;function gM(){return{id:"endless",name:Pt.endless.name,flavor:Pt.endless.flavor,shape:{radius:5.8,lobes:3,wobble:.08,stretch:1.15,rotation:.4},sensitivity:1.25,damping:.36,slideDeg:13,flipDeg:27,startResidents:5,queue:[],extras:{stone:1,balloon:1},hazards:[],stars:[.5,.75,1]}}function Ym(){let i=P.sim,e=i.level,t=e.queue.length,n=t<8?["hut","hut","cottage","cottage","mill"]:t<20?["hut","cottage","cottage","tower","mill","inn"]:["cottage","tower","tower","inn","inn","mill"];for(let s=0;s<6;s++){let r=t+s;if(e.queue.push(n[i.rand()*n.length|0]),r>0&&r%5===0){let a=Math.floor(r/5),o=a%2?"wind":"quake";i.s.hazards.push({type:o,afterHouse:r,dir:i.rand()*360|0,strength:Math.min(6,1.5+a*.6),duration:2.5,i:i.s.hazards.length,fired:!1,start:-1,sched:-1})}r>0&&r%6===0&&i.s.extras.stone++,r>0&&r%9===0&&i.s.extras.balloon++}}function bM(){for(;wt.children.length;)wt.remove(wt.children[0]);for(let i of zr)Jt.remove(i.mesh);zr.length=0,Ee("tags").innerHTML=""}function Os(i){bM();let e=i==="endless",t=e?gM():structuredClone(Pt.levels[i]),n=e?Date.now()&65535:1e3+t.id*17,s=e?n%Wl.length:t.id*7%Wl.length,r=Wl.slice(s).concat(Wl.slice(0,s)),a=new Tl(t,n,r),o=Md(t.shape,typeof t.id=="number"?t.id:99);wt.add(o.group),mM(t.shape),Ol(o),P={level:t,sim:a,endless:e,index:i,isl:o,houses:new Map,residents:new Map,tags:new Map,extra:null,yaw:0,ghost:null,ghostType:null,aim:null,acc:0,running:!1,ended:!1,flipAnim:0,tut:t.id===1?0:-1,startedAt:0,warned:new Set,pendingTouch:!1,fallenSeen:new Set,evi:0,slow:0,creakT:0},e&&Ym(),Ee("lvlname").innerHTML=e?`<small>Endless</small>${Pt.endless.name}`:`<small>Island ${t.id}</small>${t.name}`,vM(),Wr()}function Zm(){Vr(),Ee("hud").classList.remove("hidden"),P.running=!0,P.startedAt=performance.now(),Fn(P.endless?"endless_start":`level_${P.level.id}_start`,{level:P.level.id}),P.tut===0?Dd(0):Bn(Pt.tips[(P.level.id||0)%Pt.tips.length]||"",4e3)}function Vr(){for(let i of["menu","intro","result","pause","levels","stats"])Ee(i).classList.add("hidden")}function Kl(){P&&P.running&&!P.ended&&Fn(P.endless?"endless_quit":`level_${P.level.id}_fail`,{reason:"quit",level:P.level.id}),P&&(P.running=!1),Vr(),Ee("hud").classList.add("hidden"),Ee("menu").classList.remove("hidden"),Ee("tags").innerHTML="",P&&P.tags.clear(),Qt&&(Qt.visible=!1);let i=Object.values(ei.stars).reduce((t,n)=>t+n,0),e=$m();Ee("btnplay").innerHTML=`\u25B6 Play <small>${i?"Island "+Pt.levels[e].id+" \xB7 "+Pt.levels[e].name:"Island 1 \xB7 "+Pt.levels[0].name}</small>`,Ee("menustars").innerHTML=(i?`<b>${i}</b> of ${Pt.levels.length*3} \u2605 collected`:`${Pt.levels.length*3} \u2605 to collect across ${Pt.levels.length} islands`)+(ei.endlessBest?` &nbsp;\xB7&nbsp; Endless best <b>${ei.endlessBest}</b>`:"")}function $m(){for(let i=0;i<Pt.levels.length;i++)if(!ei.stars[Pt.levels[i].id])return i;return Pt.levels.length-1}function Hm(i){return i===0||(ei.stars[Pt.levels[i-1].id]||0)>0}function xM(){Vr(),Ee("levels").classList.remove("hidden");let i=Ee("levelgrid");i.innerHTML="",Pt.levels.forEach((e,t)=>{let n=document.createElement("button"),s=ei.stars[e.id]||0;n.className="lvl"+(Hm(t)?"":" locked");let r=[...new Set((e.hazards||[]).map(a=>a.type==="wind"?"\u{1F32C}":"\u26A1"))].join("");n.innerHTML=`<b>${e.id}</b><span>${e.name}</span><i>${"\u2605".repeat(s)}<em>${"\u2605".repeat(3-s)}</em></i>${r?`<s>${r}</s>`:""}`,n.onclick=()=>{Hm(t)?(Lt.click(),Os(t)):Lt.bad()},i.appendChild(n)})}function Qm(){Vr(),Ee("stats").classList.remove("hidden"),Ee("statsbody").textContent=JSON.stringify(Al(),null,1)}var _M={hut:'<path d="M4 13 L12 5 L20 13Z" fill="#d9a441"/><rect x="6.5" y="13" width="11" height="7" fill="#f3e2bf"/><rect x="10.5" y="15" width="3" height="5" fill="#7a5233"/>',cottage:'<path d="M2 12 L8 5 H17 L22 12Z" fill="#c8553d"/><rect x="4" y="12" width="16" height="8" fill="#f3ead8"/><rect x="15" y="3" width="2.5" height="5" fill="#8d6e63"/><rect x="6.5" y="14" width="3" height="3" fill="#ffcf6b"/><rect x="14.5" y="14" width="3" height="3" fill="#ffcf6b"/>',tower:'<path d="M6 9 L12 1 L18 9Z" fill="#4f6d9a"/><rect x="7.5" y="9" width="9" height="13" fill="#e1d8ca"/><rect x="10.8" y="12" width="2.4" height="3" fill="#ffcf6b"/><rect x="10.8" y="17" width="2.4" height="3" fill="#ffcf6b"/>',mill:'<path d="M8 22 L9.5 9 H14.5 L16 22Z" fill="#e8dcc6"/><path d="M8.5 9 L12 5 L15.5 9Z" fill="#b08968"/><g stroke="#fff8ec" stroke-width="2.2" stroke-linecap="round"><path d="M12 8 L5 2"/><path d="M12 8 L19 2"/><path d="M12 8 L5 14"/><path d="M12 8 L19 14"/></g><circle cx="12" cy="8" r="1.5" fill="#6d4c41"/>',inn:'<path d="M1 11 L5 5 H19 L23 11Z" fill="#5b8c5a"/><rect x="2" y="11" width="20" height="10" fill="#f1e3c8"/><rect x="2" y="15" width="20" height="1.2" fill="#8d6e63"/><rect x="4.5" y="12.4" width="3" height="2" fill="#ffcf6b"/><rect x="10.5" y="12.4" width="3" height="2" fill="#ffcf6b"/><rect x="16.5" y="12.4" width="3" height="2" fill="#ffcf6b"/><rect x="10.5" y="17" width="3" height="4" fill="#6d4c41"/>',stone:'<path d="M3 19 L5 10 L11 5 L18 7 L21 14 L18 20Z" fill="#8a8f98"/><circle cx="12" cy="13" r="3" fill="none" stroke="#7fe7ff" stroke-width="1.6"/>',balloon:'<ellipse cx="12" cy="9" rx="7" ry="8" fill="#e85d75"/><path d="M5.3 10 H18.7" stroke="#ffd166" stroke-width="2.5"/><path d="M12 17 V22" stroke="#d7ccc8" stroke-width="1.2"/><rect x="10" y="20" width="4" height="3" fill="#6d4c41"/>'},eg=i=>`<svg viewBox="0 0 24 24" class="ico">${_M[i]||""}</svg>`;function jl(i,e){let t=Vt[i],n=Math.abs(t.mass),s=`<span class="wt">${t.mass>0?"":"\u2212"}${"<i></i>".repeat(Math.round(n))}</span>`;return`<span class="chip${e?" sm":""}">${eg(i)}<span class="nm">${t.label}</span>${e?"":s+(t.residents?`<u>+${t.residents}</u>`:"")}</span>`}function vM(){Vr(),Ee("hud").classList.add("hidden"),Ee("intro").classList.remove("hidden");let i=P.level;Ee("introtitle").innerHTML=P.endless?Pt.endless.name:`<small>Island ${i.id}</small>${i.name}`,Ee("introflavor").textContent=i.flavor;let e=P.endless?'<span class="chip">Endless queue</span>':i.queue.map(r=>jl(r,!0)).join(""),t=["stone","balloon"].filter(r=>P.sim.s.extras[r]>0).map(r=>`${jl(r,!0)}\xD7${P.sim.s.extras[r]}`).join(" "),n=(i.hazards||[]).map(r=>r.type==="wind"?"\u{1F32C} gusts":"\u26A1 quakes");Ee("introqueue").innerHTML=`<div class="lbl">Build queue</div><div class="chips">${e}</div>${t?`<div class="lbl">Counterweights</div><div class="chips">${t}</div>`:""}${n.length?`<div class="lbl">Weather</div><div class="chips"><span class="chip">${[...new Set(n)].join(" \xB7 ")}</span></div>`:""}`;let s=P.sim.s.residents.slice(0,3).map(r=>`<span class="folk" title="${r.bio.replace(/"/g,"&quot;")}">${r.name}</span>`).join("");Ee("introfolk").innerHTML=s?`<div class="lbl">Already living here</div><div class="chips">${s}</div>`:"",Ee("introgoal").innerHTML=P.endless?"Keep at least half of your sky-folk aboard for as long as you can.":`<p class="goal">Place all ${i.queue.length} houses. Keep the needle out of the red.</p><span>\u2605 ${Xl(i.stars[0])}</span><span>\u2605\u2605 ${Xl(i.stars[1])}</span><span>\u2605\u2605\u2605 ${Xl(i.stars[2])}</span><em>of sky-folk still aboard</em>`}var Xl=i=>Math.round(i*100)+"%";function Ed(){P.ended=!0,P.running=!1,Ee("tags").innerHTML="",P.tags.clear(),Qt&&(Qt.visible=!1);let i=P.sim.counts(),e=i.total?i.alive/i.total:0,t=P.level,n=P.sim.s.flipped,s=P.sim.s.rescued;P.cheer=!n&&P.endReason!=="fell"&&e>=(t.stars&&t.stars[0]||.5),Vr(),Ee("result").classList.remove("hidden"),Ee("hud").classList.add("hidden");let r=P.sim.s.residents.filter(c=>c.state==="fallen").map(c=>c.name),a=0;if(P.endless){let c=P.sim.s.placed;ei.endlessBest=Math.max(ei.endlessBest||0,c),km(),Fn("endless_end",{built:c,ratio:+e.toFixed(3),rescued:s,reason:n?"flipped":P.endReason||"fell"}),Ee("restitle").textContent=n?"The island flipped!":"The drift is over",Ee("resstars").innerHTML=`<span class="big">${c}</span> houses built`,Lt.lose()}else if(a=n?0:lm(t,e),a>0?(Fn(`level_${t.id}_win`,{level:t.id,stars:a,ratio:+e.toFixed(3),rescued:s}),ei.stars[t.id]=Math.max(ei.stars[t.id]||0,a),km()):Fn(`level_${t.id}_fail`,{level:t.id,reason:n?"flipped":"fell",ratio:+e.toFixed(3),rescued:s}),Ee("restitle").textContent=n?"The island flipped!":a===3?"Everyone is safe!":a?"The village holds":"Too many fell",Ee("resstars").innerHTML=[0,1,2].map(c=>`<span class="st ${c<a?"on":"off"}" style="animation-delay:${.25+c*.28}s">\u2605</span>`).join(""),a){Lt.win();for(let c=0;c<a;c++)setTimeout(()=>Lt.star(c),300+c*280)}else Lt.lose();Ee("resscore").innerHTML=`<b>${i.alive}</b> of ${i.total} sky-folk aboard <em>${Xl(e)}</em>`,Ee("resrescue").innerHTML=s?`\u{1FAA2} You hauled <b>${s}</b> ${s===1?"resident":"residents"} back from the rim`:P.sim.s.dangled?"Tip: tap a dangling resident\u2019s name tag to haul them up.":"",Ee("resfallen").textContent=r.length?`Lost to the clouds: ${r.slice(0,6).join(", ")}${r.length>6?` and ${r.length-6} more`:""}`:"Nobody fell. The Heartstone hums happily.";let o=!P.endless&&a>0&&P.index<Pt.levels.length-1;Ee("btnnext").classList.toggle("hidden",!o)}var Ad=Ee("gauge"),we=Ad.getContext("2d");function Bn(i,e=3500){let t=Ee("hint");t.textContent=i,t.classList.toggle("hidden",!i),t.classList.remove("pop"),t.offsetWidth,t.classList.add("pop"),clearTimeout(Bn._t),e&&(Bn._t=setTimeout(()=>t.classList.add("hidden"),e))}var Rd=["Drag the glowing card onto the grass, or just tap a spot.","Houses tip the island toward them. Keep the needle in the green.","Past the yellow ring residents slide. If one goes over the edge they hang on to the rim for a few seconds.","Tap a dangling resident\u2019s name tag to haul them up. Careful: the haul jerks the island toward that edge."];function Dd(i){if(P.tut=i,i>=Rd.length){P.tut=-1,Bn("",1);return}Bn(Rd[i],0)}function Cd(i,e="bad"){let t=Ee("feed"),n=document.createElement("div");for(n.className=e,n.textContent=i,t.prepend(n),setTimeout(()=>n.classList.add("fade"),2600),setTimeout(()=>n.remove(),3400);t.children.length>4;)t.lastChild.remove()}function Wr(){if(!P)return;let i=P.sim,e=i.counts();Ee("alive").textContent=e.alive,Ee("total").textContent=e.total,Ee("fallen").textContent=e.fallen,Ee("people").classList.toggle("alarm",e.dangling>0);let t=i.level.queue.slice(i.s.placed,i.s.placed+5),n=t.join(",")+"|"+P.extra+"|"+i.queueLeft;Ee("queue").dataset.k!==n&&(Ee("queue").dataset.k=n,Ee("queue").innerHTML=t.map((s,r)=>r===0?`<div class="q cur${P.extra?" dim":""}" id="qcur" title="Drag onto the island">${jl(s,!1)}<span class="grab">drag</span></div>`:`<div class="q">${jl(s,!0)}</div>`).join("")+(P.endless?"":`<div class="qleft"><b>${i.queueLeft}</b> left</div>`));for(let s of["stone","balloon"]){let r=Ee("ex_"+s),a=i.s.extras[s];r.classList.toggle("hidden",!(a>0)&&P.extra!==s),r.querySelector("b").textContent=a,r.classList.toggle("on",P.extra===s)}Ee("btnundo").disabled=i.s.undoUsed||!i.s.houses.length,Ee("btnundo").innerHTML=i.s.undoUsed?"\u21B6 <span>used</span>":"\u21B6 <span>Undo</span>",P.endless&&(Ee("lvlname").innerHTML=`<small>Endless</small>${i.s.placed} built`)}function yM(){let i=new I;return On.getWorldDirection(i),i.y=0,i.normalize(),{f:i,r:new I(-i.z,0,i.x)}}function MM(i){let e=Ad.width,t=Ad.height,n=e/2,s=t/2,r=e/2-10,a=P.sim,o=a.level;we.clearRect(0,0,e,t);let c=r/o.flipDeg;we.save(),we.shadowColor="rgba(80,40,30,.25)",we.shadowBlur=12,we.fillStyle="#fff8ef",we.beginPath(),we.arc(n,s,r+7,0,7),we.fill(),we.restore();let l=(g,p)=>{we.fillStyle=p,we.beginPath(),we.arc(n,s,g,0,7),we.fill()};l(r,"#f7b7ae"),l(o.slideDeg*c,"#ffe3a1"),l(o.slideDeg*.5*c,"#c7e8b6"),we.strokeStyle="#E63946",we.lineWidth=4,we.beginPath(),we.arc(n,s,r,0,7),we.stroke(),we.strokeStyle="rgba(43,45,66,.15)",we.lineWidth=1.5;for(let g of[.5,1])we.beginPath(),we.arc(n,s,o.slideDeg*g*c,0,7),we.stroke();let{f:h,r:u}=yM(),d=(g,p)=>{let x=g*u.x+p*u.z,M=g*h.x+p*h.z,b=Math.hypot(x,M),S=b*c>r?r/(b*c):1;return[n+x*c*S,s-M*c*S]};for(let g of a.dangling()){let p=Math.atan2(g.z,g.x),[x,M]=d(Math.cos(p)*o.flipDeg,Math.sin(p)*o.flipDeg);we.fillStyle="#E63946",we.beginPath(),we.arc(x,M,6,0,7),we.fill(),we.fillStyle="#fff",we.beginPath(),we.arc(x,M,2.4,0,7),we.fill()}if(i){let[g,p]=d(i[0],i[1]);we.strokeStyle="#FF5D8F",we.setLineDash([5,4]),we.lineWidth=3,we.beginPath(),we.moveTo(n,s),we.lineTo(g,p),we.stroke(),we.setLineDash([]),we.beginPath(),we.arc(g,p,9,0,7),we.stroke()}let[f,m]=d(a.s.tilt[0],a.s.tilt[1]);we.strokeStyle="#2b2d42",we.lineWidth=4,we.lineCap="round",we.beginPath(),we.moveTo(n,s),we.lineTo(f,m),we.stroke(),we.fillStyle="#2b2d42",we.beginPath(),we.arc(f,m,8,0,7),we.fill(),we.fillStyle="#FF5D8F",we.beginPath(),we.arc(n,s,5,0,7),we.fill();for(let g of a.s.hazards)if(g.type==="wind"&&(g.sched>=0&&!g.fired||g.start>=0&&a.s.t-g.start<g.duration)){let[p,x]=d(Math.cos(g.dir*Gr)*o.flipDeg*.8,Math.sin(g.dir*Gr)*o.flipDeg*.8);we.strokeStyle="#3a86ff",we.lineWidth=5,we.beginPath(),we.moveTo(n-(p-n),s-(x-s)),we.lineTo(p,x),we.stroke(),we.fillStyle="#3a86ff",we.beginPath(),we.arc(p,x,6,0,7),we.fill()}let v=a.tiltDeg();Ee("tiltdeg").innerHTML=`${v.toFixed(0)}\xB0<i>${v>o.flipDeg*.8?"danger":v>o.slideDeg?"sliding":v>o.slideDeg*.5?"leaning":"steady"}</i>`,Ee("tiltdeg").className=v>o.flipDeg*.8?"crit":v>o.slideDeg?"hot":v>o.slideDeg*.5?"warm":""}var tg=new I;function ng(i,e){let t=Math.hypot(i[0],i[1]),n=new Gt;return t>1e-4&&n.setFromAxisAngle(new I(i[1]/t,0,-i[0]/t),t*Gr+e),n}function ig(i,e,t){return wt.localToWorld(new I(i,e,t))}function SM(i){let e=P.sim,t=e.s;wt.quaternion.copy(ng(t.tilt,P.flipAnim));let n=new Set(t.houses.map(a=>a.id));for(let[a,o]of P.houses)n.has(a)||(wt.remove(o),P.houses.delete(a));for(let a of t.houses){let o=P.houses.get(a.id);if(!o){o=Bl(a.type,a.idx),o.position.set(a.x,Wt+2.4,a.z),o.rotation.y=a.yaw,o.userData={drop:2.4,vy:0,sq:0},wt.add(o),P.houses.set(a.id,o);for(let d of P.isl.decor)Math.hypot(d.userData.x-a.x,d.userData.z-a.z)<Vt[a.type].foot+.25&&(d.visible=!1)}let c=o.userData;c.drop>0&&(c.vy+=30*i,c.drop-=c.vy*i,c.drop<=0&&(c.drop=0,c.sq=1,wM(a))),c.sq>0&&(c.sq=Math.max(0,c.sq-i*3.2));let l=Math.sin(c.sq*Math.PI*2.2)*c.sq*.28;o.position.set(a.x,Wt+c.drop,a.z),o.scale.set(1+l,1-l,1+l);let h=o.getObjectByName("blades");h&&(h.rotation.z+=i*1.5);let u=o.getObjectByName("balloon");u&&(u.position.y=(u.userData.baseY??2.2)+Math.sin(t.t*2+a.id)*.08)}let s=new Set;for(let a of t.residents){s.add(a.id);let o=P.residents.get(a.id);if(o||(o=zl(a.id),wt.add(o),P.residents.set(a.id,o),o.position.set(a.x,Wt,a.z)),a.state==="fallen"){if(P.fallenSeen.has(a.id))continue;P.fallenSeen.add(a.id),o.visible=!0,Jt.attach(o);let p=new I(a.vx,0,a.vz).applyQuaternion(wt.quaternion);if(o.userData.anim){o.userData.anim.play("fall",.1);let M=o.getObjectByName("dangle");M&&(M.visible=!1),o.getObjectByName("body").visible=!0}let x=o.getObjectByName("blob");x&&(x.visible=!1),zr.push({mesh:o,v:new I(p.x*1.2,1.6,p.z*1.2),spin:(Math.random()-.5)*12,t:0}),P.residents.delete(a.id);continue}o.visible=a.state!=="shelter";let c=o.getObjectByName("body"),l=o.getObjectByName("armL"),h=o.getObjectByName("armR"),u=o.userData.anim,d=u&&o.getObjectByName("dangle");if(u){d&&(d.visible=a.state==="dangle",c.visible=!d.visible);let p=o.getObjectByName("blob");p&&(p.visible=a.state!=="dangle"),u.play(a.state==="dangle"||a.state==="slide"?"fall":a.state==="flee"||a.walk>0?"walk":P.cheer?"cheer":"idle")}if(a.state==="dangle"){let p=Math.hypot(a.x,a.z)||1,x=a.x/p,M=a.z/p,b=Math.sin(t.t*7+a.id)*.25;o.position.set(a.x+x*.2,Wt-.4+Math.sin(t.t*5+a.id)*.02,a.z+M*.2),o.rotation.set(0,Math.atan2(-x,-M),0),c&&(c.rotation.x=.15,c.rotation.z=b,c.position.y=0),d&&(d.rotation.z=b),l&&(l.rotation.z=-2.9+b*.3),h&&(h.rotation.z=2.9+b*.3);continue}let f=o.position.x,m=o.position.z;o.position.set(a.x,Wt,a.z);let v=Math.hypot(a.x-f,a.z-m);v>1e-4&&v<.5&&o.rotation.set(0,Math.atan2(a.x-f,a.z-m),0),c&&(c.position.y=a.walk>0&&!u?Math.abs(Math.sin(t.t*12+a.id))*.05:0,c.rotation.x=a.state==="slide"?-.6:a.state==="flee"?.25:0,c.rotation.z=0);let g=a.state==="slide"||a.state==="flee"?Math.sin(t.t*18+a.id)*.9:0;l&&(l.rotation.z=-.25-Math.abs(g)),h&&(h.rotation.z=.25+Math.abs(g))}for(let[a,o]of P.residents)s.has(a)||(wt.remove(o),P.residents.delete(a));for(let a=zr.length-1;a>=0;a--){let o=zr[a];o.t+=i,o.v.y-=9*i,o.mesh.position.addScaledVector(o.v,i),o.mesh.rotation.x+=o.spin*i,o.mesh.rotation.z+=o.spin*.7*i,o.mesh.position.y<-18&&(Ld(o.mesh.position,"#ffffff",8,2,.5,.9,1.2),Jt.remove(o.mesh),zr.splice(a,1))}P.isl.heart.rotation.y+=i*.8;let r=P.isl.heart.getObjectByName("halo");r&&(r.material.opacity=.6+Math.sin(t.t*3)*.2+Math.min(.4,e.tiltDeg()/e.level.flipDeg*.4))}function wM(i){let e=Vt[i.type];Lt.place(e.mass),lo(.05+Math.abs(e.mass)*.04),Ld(ig(i.x,Wt+.05,i.z),"#f3e6cf",16,2.4+e.foot,.6,.35,.8)}var Sd={at:-1,rects:[]};function TM(){let i=performance.now();if(i-Sd.at<500)return Sd.rects;let e=[];for(let t of["btnpause","topbar","gaugebox","bottombar","tools","btnplace","hint"]){let n=Ee(t);if(!n||n.classList.contains("hidden"))continue;let s=n.getBoundingClientRect();s.width&&s.height&&e.push({l:s.left,r:s.right,t:s.top,b:s.bottom})}return Sd={at:i,rects:e},e}function EM(){let i=Ee("tags"),e=P.sim,t=new Set,n=window.innerWidth,s=window.innerHeight,r=[];for(let a of e.dangling()){t.add(a.id);let o=P.tags.get(a.id);if(!o){o=document.createElement("button"),o.className="tag",o.dataset.id=a.id;let M=(a.bio||"").split(/[.,;]/)[0].slice(0,40);o.innerHTML=`<svg viewBox="0 0 36 36"><circle cx="18" cy="18" r="15" class="bg"/><circle cx="18" cy="18" r="15" class="fg" pathLength="100"/></svg><span class="who"><b>${a.name.split(" ")[0].toUpperCase()}</b><i>${M}</i></span><span class="cta">HAUL UP!</span>`,o.addEventListener("pointerdown",b=>{b.stopPropagation(),b.preventDefault(),Fd(a.id)}),i.appendChild(o),P.tags.set(a.id,o)}let c=P.residents.get(a.id);if(!c)continue;let l=c.getWorldPosition(tg).project(On),h=o.offsetWidth||160,u=o.offsetHeight||46,d=h/2+6,f=Math.max(d,Math.min(n-d,(l.x*.5+.5)*n)),m=(-l.y*.5+.5)*s,v=(M,b)=>({l:M-h/2-4,r:M+h/2+4,t:b-u*1.3-4,b:b-u*.3+4}),g=(M,b)=>M.l<b.r&&M.r>b.l&&M.t<b.b&&M.b>b.t,p=TM().concat(r);for(let M=0;M<8;M++){let b=v(f,m),S=p.find(w=>g(b,w));if(!S)break;(S.t+S.b)/2<s*.45?m=S.b+u*1.3+6:m=S.t+u*.3-6}m=Math.max(u*1.3+8,Math.min(s-8,m)),r.push(v(f,m)),o.style.transform=`translate(${f}px, ${m}px)`;let x=Math.max(0,a.grip/Ou);a.slips>1&&!o.dataset.weak&&(o.dataset.weak=1,o.querySelector(".cta").textContent="WEAKER GRIP!"),o.querySelector(".fg").style.strokeDashoffset=String(100-x*100),o.classList.toggle("urgent",x<.35)}for(let[a,o]of P.tags)t.has(a)||(o.classList.add("gone"),setTimeout(()=>o.remove(),250),P.tags.delete(a))}function Fd(i){if(!P||!P.running)return!1;let e=P.sim.s.residents.find(n=>n.id===i);if(!P.sim.rescue(i))return!1;Lt.rescue(),lo(.18);let t=P.residents.get(i);return t&&Ld(t.getWorldPosition(new I),"#ffd166",18,2.6,2.2,.3,.9,!0),Cd(`${e.name.split(" ")[0]} hauled back up!`,"good"),Fn("rescue",{level:P.level.id}),El("first_rescue",{level:P.level.id}),P.tut===3&&Dd(4),!0}function AM(){let i=P.sim.s.events;for(;P.evi<i.length;){let e=i[P.evi++];if(e.e==="dangle"){let t=P.sim.s.residents.find(n=>n.id===e.id);Lt.dangle(),lo(.12),El("first_dangle",{level:P.level.id}),t&&Cd(`${t.name} is hanging off the rim!`,"warn"),performance.now()-(P.lastSlow||0)>3e3&&(P.slow=.7,P.lastSlow=performance.now()),P.dangleHinted||(P.dangleHinted=!0,(P.tut<0||P.tut<3)&&(P.tut>=0&&(P.tut=3),Bn(Rd[3],4500)))}else if(e.e==="fall"){let t=P.sim.s.residents.find(n=>n.id===e.id);Lt.fall(),t&&!P.sim.s.flipped&&Cd(`${t.name} fell into the clouds`,"bad")}else e.e==="wind"?Lt.gust(2.6):e.e==="quake"?Lt.quake(2.5):e.e==="flip"&&(Lt.flip(),lo(.6),P.slow=1.2)}}function Jl(){return P.extra||P.sim.nextType()}function RM(){let i=Jl();if(!i)return P.ghost&&(wt.remove(P.ghost),P.ghost=null),null;let e=P.extra?-1:P.sim.s.placed;if(P.ghostType!==i||P.ghostVar!==e||!P.ghost){P.ghost&&wt.remove(P.ghost);let t=Bl(i,e);P.ghostVar=e,t.traverse(s=>{s.isMesh&&(s.material=s.material.clone(),s.material.transparent=!0,s.material.opacity=.6,s.castShadow=!1)});let n=new lt(new La(Vt[i].foot*.95,Vt[i].foot*1.3,32),new Xt({color:"#6bd36b",transparent:!0,opacity:.9,side:an,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.03,n.name="ring",t.add(n),P.ghost=t,P.ghostType=i,wt.add(t)}return P.ghost}var Gm=new Va,Vm=new ae;function sg(i,e){let t=ts.getBoundingClientRect();Vm.set((i-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Gm.setFromCamera(Vm,On);let n=new I(0,1,0).applyQuaternion(wt.quaternion),s=new I(0,Wt,0).applyQuaternion(wt.quaternion),r=Gm.ray.intersectPlane(new Mn().setFromNormalAndCoplanarPoint(n,s),tg);if(!r)return null;let a=wt.worldToLocal(r.clone());return wl(P.sim.level.shape,a.x,a.z)<-.4?null:[a.x,a.z]}var rg=i=>sg(i.clientX,i.clientY),En=null;ts.addEventListener("pointerdown",i=>{if(kr(),!P||!P.running)return;ts.setPointerCapture(i.pointerId);let e=rg(i);e&&!P.sim.s.flipped&&Jl()?(En={mode:"aim",x:i.clientX,y:i.clientY,type:i.pointerType},P.aim=e):En={mode:"rot",x:i.clientX,y:i.clientY,az:At.az}});ts.addEventListener("pointermove",i=>{if(!(!P||!P.running||An)){if(En&&En.mode==="rot"){At.az=En.az+(i.clientX-En.x)*.008;return}if(i.pointerType==="mouse"||En){let e=rg(i);e?P.aim=e:i.pointerType==="mouse"&&!En&&(P.aim=null)}}});ts.addEventListener("pointerup",i=>{if(!P||!P.running||!En){En=null;return}let e=En;En=null,e.mode==="aim"&&(e.type==="mouse"?Yl():(P.pendingTouch=!0,Ee("btnplace").classList.remove("hidden")))});ts.addEventListener("pointerleave",i=>{i.pointerType==="mouse"&&!En&&!An&&P&&(P.aim=null)});ts.addEventListener("wheel",i=>{At.userZoom=Math.max(.7,Math.min(1.35,(At.userZoom||1)*(1+Math.sign(i.deltaY)*.08)))},{passive:!0});var An=null;function ag(i,e){if(!P||!P.running||P.sim.s.flipped)return;kr(),i.preventDefault();let t=P.extra;e!==void 0&&(P.extra=e);let n=Jl();if(!n)return;let s=document.createElement("div");s.className="dragchip",s.innerHTML=eg(n),document.body.appendChild(s),An={el:s,id:i.pointerId,moved:!1,x0:i.clientX,y0:i.clientY,prev:t,extra:e},og(i),Lt.pick(),Ee("hud").classList.add("dragging")}function og(i){if(!An)return;Math.hypot(i.clientX-An.x0,i.clientY-An.y0)>8&&(An.moved=!0),An.el.style.transform=`translate(${i.clientX}px, ${i.clientY-(i.pointerType==="mouse"?0:60)}px)`;let e=sg(i.clientX,i.clientY-(i.pointerType==="mouse"?0:60));P.aim=e,An.el.classList.toggle("over",!!e)}function cg(i){if(!An)return;let e=An;An=null,e.el.remove(),Ee("hud").classList.remove("dragging"),P.aim&&e.moved?Yl()||Lt.bad():e.moved||(e.extra&&e.prev===e.extra?(P.extra=null,Wr()):e.extra?CM(e.extra):Bn("Drag the card onto the island (or tap the island directly).",2200)),i.pointerType!=="mouse"&&(P.aim=null)}Ee("queue").addEventListener("pointerdown",i=>{i.target.closest("#qcur")&&ag(i,null)});window.addEventListener("pointermove",i=>{An&&og(i)});window.addEventListener("pointerup",i=>cg(i));window.addEventListener("pointercancel",i=>cg(i));function Yl(){if(!P||!P.aim||P.sim.s.flipped)return!1;let[i,e]=P.aim,t=P.extra,n=P.sim.place(i,e,t,P.yaw);if(!n)return Bn("No room there: too close to a house or the edge.",1800),Lt.bad(),!1;El("first_house",{level:P.level.id}),Fn("place",{level:P.level.id,type:n.type,r:+Math.hypot(i,e).toFixed(2)}),P.extra=null,P.pendingTouch=!1,P.aim=null,Ee("btnplace").classList.add("hidden"),P.tut>=0&&P.tut<3&&!t&&Dd(P.tut+1);for(let s of P.sim.s.hazards)s.sched>=0&&!s.fired&&!P.warned.has(s.i)&&(P.warned.add(s.i),Lt.warn(),Bn(s.type==="wind"?"A gust is coming! (blue arrow on the gauge)":"The Heartstone rumbles\u2026 a quake is coming!",2600));return P.endless&&P.sim.queueLeft<4&&Ym(),Wr(),!0}var Yt=(i,e)=>{Ee(i).addEventListener("click",t=>{kr(),Lt.click(),e(t)})};Yt("btnplace",()=>Yl());Yt("btnundo",()=>{P&&P.sim.undo()&&(Fn("undo",{level:P.level.id}),Bn("Undone. That was your one undo for this island.",2200),Wr())});Yt("btnturn",()=>{P&&(P.yaw+=Math.PI/4)});Yt("btnrotl",()=>{At.az-=Math.PI/6});Yt("btnrotr",()=>{At.az+=Math.PI/6});for(let i of["stone","balloon"])Ee("ex_"+i).addEventListener("pointerdown",t=>{P&&P.sim.s.extras[i]>0&&ag(t,i)});function CM(i){Bn(i==="stone"?"Ballast stone: heavy, no residents. Drag it opposite the heavy side.":"Sky balloon: lifts its side of the island like negative weight.",2600),Wr()}window.addEventListener("keydown",i=>{if(!(!P||!P.running)){if((i.key==="r"||i.key==="R")&&(P.yaw+=Math.PI/4),(i.key==="q"||i.key==="Q")&&(At.az-=Math.PI/12),(i.key==="e"||i.key==="E")&&(At.az+=Math.PI/12),i.key===" "){let e=P.sim.dangling().sort((t,n)=>t.grip-n.grip)[0];e&&(i.preventDefault(),Fd(e.id))}(i.key==="z"||i.key==="Z")&&(i.ctrlKey||i.metaKey)&&Ee("btnundo").click(),i.key==="Escape"&&lg()}});function lg(){!P||!P.running||(P.running=!1,Ee("pause").classList.remove("hidden"))}Yt("btnpause",lg);Yt("btnresume",()=>{Ee("pause").classList.add("hidden"),P.running=!0});Yt("btnrestart",()=>{Fn(P.endless?"endless_quit":`level_${P.level.id}_fail`,{reason:"quit",level:P.level.id}),Os(P.index)});Yt("btnquit",()=>{P.running=!0,Kl()});Yt("btnstart",Zm);Yt("btnplay",()=>Os($m()));Yt("btnislands",xM);Yt("btnendless",()=>Os("endless"));Yt("btnstats",Qm);Yt("btnexport",dm);Yt("btnclear",()=>{fm(),Qm()});for(let i of document.querySelectorAll(".back"))i.addEventListener("click",()=>{Lt.click(),Kl()});Yt("btnretry",()=>Os(P.index));Yt("btnnext",()=>Os(P.index+1));Yt("btnmenu",()=>{P.ended=!0,Kl()});function hg(){for(let i of document.querySelectorAll(".mute"))i.textContent=Vl()?"\u{1F507}":"\u{1F50A}",i.setAttribute("aria-label",Vl()?"Unmute":"Mute")}for(let i of document.querySelectorAll(".mute"))i.addEventListener("click",()=>{kr(),Um(!Vl()),hg()});hg();window.addEventListener("pointerdown",()=>kr(),{once:!0});var Wm=performance.now(),wd=0,ug=1;function dg(i){let e=Math.min(.05,(i-Wm)/1e3);Wm=i,wm(e),Im(e),DM(e),Id.rotation.y+=e*.01,dM.rotation.y+=e*.02,pM(e);let t=0;if(P){let n=1;P.slow>0&&(P.slow-=e,n=.35);let s=e*n;if(P.running){P.acc+=s*ug;let o=1/60;for(;P.acc>=o;)P.sim.step(o),P.acc-=o;AM();let c=P.sim.s,l=P.sim.level,h=P.sim.tiltDeg();if(c.flipped&&(P.flipAnim=Math.min(Math.PI*.9,P.flipAnim+s*2.2)),c.t<c.quakeUntil&&lo(.025),t=c.flipped?1:Math.max(0,Math.min(1,(h-l.slideDeg*.5)/(l.flipDeg-l.slideDeg*.5))),Bm(t+P.sim.counts().dangling*.2),P.creakT-=s,h>l.slideDeg*.6&&P.creakT<=0&&!c.flipped&&(Lt.creak(.6+t),P.creakT=.9+Math.random()*1.3-t*.5),P.tickT=(P.tickT||0)-e,P.sim.counts().dangling&&P.tickT<=0){let u=Math.min(...P.sim.dangling().map(d=>d.grip));Lt.tick(u<1.5),P.tickT=u<1.5?.25:.5}if(At.zoomT=P.sim.counts().dangling&&!c.flipped?.86:At.userZoom||1,P.endless&&!P.ended&&!c.flipped){let u=P.sim.counts();u.total&&u.alive/u.total<.5&&c.settledFor>.5&&(P.endReason="fell",Ed())}!P.ended&&P.sim.isDone()&&Ed(),P.sim.queueLeft<=0&&!P.ended&&!c.flipped&&!P.extra&&!P.sim.counts().dangling&&Bn("Queue empty. Let the island settle\u2026",0)}SM(P.running?s:0),P.running&&EM();let r=P.running?RM():null,a=null;if(r)if(r.visible=!!P.aim,P.aim){let[o,c]=P.aim,l=Jl();r.position.set(o,Wt+.05+Math.sin(i/200)*.04,c),r.rotation.y=P.yaw;let h=P.sim.canPlace(l,o,c),u=P.sim.predictTilt(l,o,c),d=P.sim.level,f=`${l}:${o.toFixed(1)}:${c.toFixed(1)}`;if(h&&(!P.peak||P.peak.key!==f||i-P.peak.at>140)){let _=P.sim.clone();_.place(o,c,P.extra,P.yaw);let E=0,C=!1;for(let L=0;L<210;L++)if(_.step(1/60),E=Math.max(E,_.tiltDeg()),_.s.flipped){C=!0;break}P.peak={key:f,at:i,pk:E,fl:C}}let m=h&&P.peak?P.peak.pk:u,v=Math.max(u,m),g=h&&P.peak&&(P.peak.fl||m-u>3.5)&&u<d.flipDeg*.85,[p,x]=P.sim.moment(),M=Vt[l],b=M.mass+M.residents*.25;a=[(p+b*o)*d.sensitivity,(x+b*c)*d.sensitivity];let S=h?v<d.slideDeg*.5?"#5ccf5c":v<d.slideDeg?"#f4c430":v<d.flipDeg*.85?"#f08a24":"#E63946":"#9a9a9a";r.getObjectByName("ring").material.color.set(S),Qt&&(Qt.visible=h,Qt.quaternion.copy(ng(a,0)),Qt.material.color.set(S==="#5ccf5c"?"#FF5D8F":S),Qt.material.opacity=.55+Math.sin(i/150)*.25);let w=Ee("aimlabel"),A=ig(o,Wt+1.5,c).project(On);w.classList.remove("hidden"),w.style.transform=`translate(${(A.x*.5+.5)*window.innerWidth}px, ${(-A.y*.5+.5)*window.innerHeight}px)`,w.className=h?"":"no",w.innerHTML=h?`<b>${Math.min(v,d.flipDeg+9).toFixed(0)}\xB0</b> ${v<d.slideDeg*.5?"steady":v<d.slideDeg?"wobbly":v<d.flipDeg*.85?"folk will slide!":"IT WILL FLIP"}${g?"<small>still swaying \xB7 wait</small>":""}`:"no room",w.style.setProperty("--c",S)}else Qt&&(Qt.visible=!1),Ee("aimlabel").classList.add("hidden");else Qt&&(Qt.visible=!1),Ee("aimlabel").classList.add("hidden");if(Hr.visible=!1,P.running){for(let o of P.sim.s.hazards)if(o.type==="wind"&&o.start>=0&&P.sim.s.t-o.start<o.duration){Hr.visible=!0;let c=Math.cos(o.dir*Gr),l=Math.sin(o.dir*Gr),h=P.sim.s.t;Hr.children.forEach((u,d)=>{let f=u.userData.o,m=(h*9+d*1.7)%20-10;u.position.set(f[0]*Math.abs(l)+c*m,f[1],f[2]*Math.abs(c)+l*m),u.rotation.y=-Math.atan2(l,c)})}}zm(P.sim.level.shape.radius*Math.max(1,Math.sqrt(P.sim.level.shape.stretch||1)),e),wd+=e,wd>.12&&(wd=0,Wr()),P.running&&MM(a)}else At.az+=e*.05,LM(e),zm(5,e);Td.material.uniforms.danger.value+=(t-Td.material.uniforms.danger.value)*Math.min(1,e*3),Ee("vignette").style.opacity=String(Math.min(.9,t*1.1)),IM(),(PM++%Pd===0||!Us.shadow.map)&&(Rn.shadowMap.needsUpdate=!0),Rn.render(Jt,On),requestAnimationFrame(dg)}var PM=0,Pd=2,Qn={t:0,n:0,warm:0};function IM(){let i=performance.now(),e=Qn.last?(i-Qn.last)/1e3:0;if(Qn.last=i,(Qn.warm+=e)<3||(Qn.t+=e,Qn.n++,Qn.t<2))return;let t=Qn.n/Qn.t;Qn.t=0,Qn.n=0,!(t>45)&&(es>1?(es=Math.max(1,es-.25),Rn.setPixelRatio(es)):Pd<4&&t<30?Pd++:t<18&&es>.85&&(es=.85,Rn.setPixelRatio(es)))}var cn={t:0,gust:-4,dir:0,dr:null};function LM(i){cn.t+=i;let e=cn.t;e-cn.gust>7&&(cn.gust=e,cn.dir=Math.random()*Math.PI*2);let t=e-cn.gust,n=t<.6?.12*Math.sin(t/.6*Math.PI/2):.12*Math.exp(-(t-.6)*1.9)*Math.cos((t-.6)*5.2);if(wt.rotation.set(.05+Math.sin(e*.7)*.025+n*Math.cos(cn.dir),0,-.1+Math.cos(e*.53)*.03+n*Math.sin(cn.dir)),t<1.4&&(Id.rotation.y+=i*.05*(1.4-t)),cn.dg&&(cn.dg.rotation.z=Math.sin(e*2.1)*.12+n*.8),cn.dr){let r=Math.max(0,n)*6;cn.dr.getObjectByName("armL").rotation.z=-2.9+Math.sin(e*9)*.15*r,cn.dr.getObjectByName("armR").rotation.z=2.9-Math.cos(e*9)*.15*r,cn.dr.rotation.z=Math.sin(e*2.1)*.12+n*.8}let s=Ee("title");s&&(s.style.transform=`rotate(${(n*18+Math.sin(e*.7)*.6).toFixed(2)}deg)`)}var co=null,Ns=0;function DM(i){if(!co){if(!_n.tiny_boat)return;co=Un("tiny_boat",.9,1),Jt.add(co)}Ns+=i*.045;let e=13;co.position.set(Math.cos(Ns)*e,-2.6+Math.sin(Ns*7)*.25,Math.sin(Ns)*e),co.rotation.set(Math.sin(Ns*9)*.05,-Ns+Math.PI,Math.cos(Ns*8)*.06)}async function FM(){Ee("tagline").textContent=Pt.world.tagline,Fn("opened",{ua:navigator.userAgent.includes("Mobi")?"mobile":"desktop"}),await xd(["hut","cottage","tower","mill","inn","stone","balloon","resident","resident_dangle","heartstone"],4500);let i=Md({radius:5,lobes:3,wobble:.1,stretch:1.1,rotation:0},5);wt.add(i.group);let e=[["cottage",1.2,.8],["tower",-1.6,-.6],["hut",.2,-1.9],["mill",-.4,2],["inn",2.2,-1.2]],t=[],n=[],s=()=>{for(let c of[...t,...n])wt.remove(c);t.length=n.length=0,e.forEach(([c,l,h],u)=>{let d=Bl(c,u);d.position.set(l,Wt,h),d.rotation.y=l,wt.add(d),t.push(d)});for(let c=0;c<7;c++){let l=zl(c,{menu:!0}),h=c*.9;l.position.set(Math.cos(h)*2.8,Wt,Math.sin(h)*2.8),l.rotation.y=-h,wt.add(l),n.push(l)}};s();let r=zl(11),a=.4,o=$n({radius:5,lobes:3,wobble:.1,stretch:1.1,rotation:0},a);if(r.position.set(Math.cos(a)*(o+.2),Wt-.4,Math.sin(a)*(o+.2)),r.rotation.y=Math.atan2(-Math.cos(a),-Math.sin(a)),r.getObjectByName("armL"))r.getObjectByName("armL").rotation.z=-2.9,r.getObjectByName("armR").rotation.z=2.9,cn.dr=r;else{let c=r.getObjectByName("dangle");c&&(c.visible=!0,r.getObjectByName("body").visible=!1),cn.dg=c}wt.add(r),wt.rotation.set(.05,0,-.1),Kl(),requestAnimationFrame(dg),xd().then(()=>{s(),Ul(i.decor),P&&Ul(P.isl.decor),Ol(i),P&&Ol(P.isl);for(let[c,l,h,u,d]of[["lighthouse",-3.1,1.6,.5,1.6],["chapel",1.4,2.9,.55,1.1],["bakery",3.3,.9,.45,.9],["greenhouse",-2.3,-2.6,.5,.7]]){let f=Un(c,u,d);f&&(f.position.set(l,Wt,h),f.rotation.y=Math.atan2(-l,-h)+Math.PI,wt.add(f))}})}window.__teeter={get G(){return P},get scene(){return Jt},renderer:Rn,camera:On,get critters(){return[...ro]},startLevel:Os,beginPlay:Zm,tryPlace:Yl,endLevel:Ed,summary:Al,rescue:Fd,aimAt(i,e){P&&(P.aim=[i,e])},setCam(i){At.az=i},setSpeed(i){ug=i}};FM();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
