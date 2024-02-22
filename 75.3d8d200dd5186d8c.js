"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[75],{2726:(fe,$,b)=>{b.d($,{Uw:()=>B,fo:()=>F});var m=b(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var I=function(c){return c.Unimplemented="UNIMPLEMENTED",c.Unavailable="UNAVAILABLE",c}(I||{});class D extends Error{constructor(i,l,r){super(i),this.message=i,this.code=l,this.data=r}}const z=c=>{var i,l,r,s,o;const n=c.CapacitorCustomPlatform||null,t=c.Capacitor||{},a=t.Plugins=t.Plugins||{},u=c.CapacitorPlatforms,p=(null===(i=null==u?void 0:u.currentPlatform)||void 0===i?void 0:i.getPlatform)||(()=>null!==n?n.name:(c=>{var i,l;return null!=c&&c.androidBridge?"android":null!==(l=null===(i=null==c?void 0:c.webkit)||void 0===i?void 0:i.messageHandlers)&&void 0!==l&&l.bridge?"ios":"web"})(c)),Z=(null===(l=null==u?void 0:u.currentPlatform)||void 0===l?void 0:l.isNativePlatform)||(()=>"web"!==p()),w=(null===(r=null==u?void 0:u.currentPlatform)||void 0===r?void 0:r.isPluginAvailable)||(h=>{const _=ne.get(h);return!!(null!=_&&_.platforms.has(p())||q(h))}),q=(null===(s=null==u?void 0:u.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(h=>{var _;return null===(_=t.PluginHeaders)||void 0===_?void 0:_.find(j=>j.name===h)}),ne=new Map,_e=(null===(o=null==u?void 0:u.currentPlatform)||void 0===o?void 0:o.registerPlugin)||((h,_={})=>{const j=ne.get(h);if(j)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),j.proxy;const U=p(),L=q(h);let x;const ve=function(){var v=(0,m.Z)(function*(){return!x&&U in _?x=x="function"==typeof _[U]?yield _[U]():_[U]:null!==n&&!x&&"web"in _&&(x=x="function"==typeof _.web?yield _.web():_.web),x});return function(){return v.apply(this,arguments)}}(),ie=v=>{let P;const A=(...M)=>{const S=ve().then(O=>{const H=((v,P)=>{var A,M;if(!L){if(v)return null===(M=v[P])||void 0===M?void 0:M.bind(v);throw new D(`"${h}" plugin is not implemented on ${U}`,I.Unimplemented)}{const S=null==L?void 0:L.methods.find(O=>P===O.name);if(S)return"promise"===S.rtype?O=>t.nativePromise(h,P.toString(),O):(O,H)=>t.nativeCallback(h,P.toString(),O,H);if(v)return null===(A=v[P])||void 0===A?void 0:A.bind(v)}})(O,v);if(H){const W=H(...M);return P=null==W?void 0:W.remove,W}throw new D(`"${h}.${v}()" is not implemented on ${U}`,I.Unimplemented)});return"addListener"===v&&(S.remove=(0,m.Z)(function*(){return P()})),S};return A.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(A,"name",{value:v,writable:!1,configurable:!1}),A},de=ie("addListener"),me=ie("removeListener"),Pe=(v,P)=>{const A=de({eventName:v},P),M=function(){var O=(0,m.Z)(function*(){const H=yield A;me({eventName:v,callbackId:H},P)});return function(){return O.apply(this,arguments)}}(),S=new Promise(O=>A.then(()=>O({remove:M})));return S.remove=(0,m.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield M()}),S},oe=new Proxy({},{get(v,P){switch(P){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return L?Pe:de;case"removeListener":return me;default:return ie(P)}}});return a[h]=oe,ne.set(h,{name:h,proxy:oe,platforms:new Set([...Object.keys(_),...L?[U]:[]])}),oe});return t.convertFileSrc||(t.convertFileSrc=h=>h),t.getPlatform=p,t.handleError=h=>c.console.error(h),t.isNativePlatform=Z,t.isPluginAvailable=w,t.pluginMethodNoop=(h,_,j)=>Promise.reject(`${j} does not have an implementation of "${_}".`),t.registerPlugin=_e,t.Exception=D,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t.platform=t.getPlatform(),t.isNative=t.isNativePlatform(),t},k=(c=>c.Capacitor=z(c))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),F=k.registerPlugin;class B{constructor(i){this.listeners={},this.windowListeners={},i&&(console.warn(`Capacitor WebPlugin "${i.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=i)}addListener(i,l){var r=this;this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push(l);const o=this.windowListeners[i];o&&!o.registered&&this.addWindowListener(o);const n=function(){var a=(0,m.Z)(function*(){return r.removeListener(i,l)});return function(){return a.apply(this,arguments)}}(),t=Promise.resolve({remove:n});return Object.defineProperty(t,"remove",{value:(a=(0,m.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield n()}),function(){return a.apply(this,arguments)})}),t;var a}removeAllListeners(){var i=this;return(0,m.Z)(function*(){i.listeners={};for(const l in i.windowListeners)i.removeWindowListener(i.windowListeners[l]);i.windowListeners={}})()}notifyListeners(i,l){const r=this.listeners[i];r&&r.forEach(s=>s(l))}hasListeners(i){return!!this.listeners[i].length}registerWindowListener(i,l){this.windowListeners[l]={registered:!1,windowEventName:i,pluginEventName:l,handler:r=>{this.notifyListeners(l,r)}}}unimplemented(i="not implemented"){return new k.Exception(i,I.Unimplemented)}unavailable(i="not available"){return new k.Exception(i,I.Unavailable)}removeListener(i,l){var r=this;return(0,m.Z)(function*(){const s=r.listeners[i];if(!s)return;const o=s.indexOf(l);r.listeners[i].splice(o,1),r.listeners[i].length||r.removeWindowListener(r.windowListeners[i])})()}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}}const N=c=>encodeURIComponent(c).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Q=c=>c.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class K extends B{getCookies(){return(0,m.Z)(function*(){const i=document.cookie,l={};return i.split(";").forEach(r=>{if(r.length<=0)return;let[s,o]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Q(s).trim(),o=Q(o).trim(),l[s]=o}),l})()}setCookie(i){return(0,m.Z)(function*(){try{const l=N(i.key),r=N(i.value),s=`; expires=${(i.expires||"").replace("expires=","")}`,o=(i.path||"/").replace("path=",""),n=null!=i.url&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${l}=${r||""}${s}; path=${o}; ${n};`}catch(l){return Promise.reject(l)}})()}deleteCookie(i){return(0,m.Z)(function*(){try{document.cookie=`${i.key}=; Max-Age=0`}catch(l){return Promise.reject(l)}})()}clearCookies(){return(0,m.Z)(function*(){try{const i=document.cookie.split(";")||[];for(const l of i)document.cookie=l.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(i){return Promise.reject(i)}})()}clearAllCookies(){var i=this;return(0,m.Z)(function*(){try{yield i.clearCookies()}catch(l){return Promise.reject(l)}})()}}F("CapacitorCookies",{web:()=>new K});const V=function(){var c=(0,m.Z)(function*(i){return new Promise((l,r)=>{const s=new FileReader;s.onload=()=>{const o=s.result;l(o.indexOf(",")>=0?o.split(",")[1]:o)},s.onerror=o=>r(o),s.readAsDataURL(i)})});return function(l){return c.apply(this,arguments)}}();class te extends B{request(i){return(0,m.Z)(function*(){const l=((c,i={})=>{const l=Object.assign({method:c.method||"GET",headers:c.headers},i),s=((c={})=>{const i=Object.keys(c);return Object.keys(c).map(s=>s.toLocaleLowerCase()).reduce((s,o,n)=>(s[o]=c[i[n]],s),{})})(c.headers)["content-type"]||"";if("string"==typeof c.data)l.body=c.data;else if(s.includes("application/x-www-form-urlencoded")){const o=new URLSearchParams;for(const[n,t]of Object.entries(c.data||{}))o.set(n,t);l.body=o.toString()}else if(s.includes("multipart/form-data")||c.data instanceof FormData){const o=new FormData;if(c.data instanceof FormData)c.data.forEach((t,a)=>{o.append(a,t)});else for(const t of Object.keys(c.data))o.append(t,c.data[t]);l.body=o;const n=new Headers(l.headers);n.delete("content-type"),l.headers=n}else(s.includes("application/json")||"object"==typeof c.data)&&(l.body=JSON.stringify(c.data));return l})(i,i.webFetchExtra),r=((c,i=!0)=>c?Object.entries(c).reduce((r,s)=>{const[o,n]=s;let t,a;return Array.isArray(n)?(a="",n.forEach(u=>{t=i?encodeURIComponent(u):u,a+=`${o}=${t}&`}),a.slice(0,-1)):(t=i?encodeURIComponent(n):n,a=`${o}=${t}`),`${r}&${a}`},"").substr(1):null)(i.params,i.shouldEncodeUrlParams),s=r?`${i.url}?${r}`:i.url,o=yield fetch(s,l),n=o.headers.get("content-type")||"";let a,u,{responseType:t="text"}=o.ok?i:{};switch(n.includes("application/json")&&(t="json"),t){case"arraybuffer":case"blob":u=yield o.blob(),a=yield V(u);break;case"json":a=yield o.json();break;default:a=yield o.text()}const f={};return o.headers.forEach((p,g)=>{f[g]=p}),{data:a,headers:f,status:o.status,url:o.url}})()}get(i){var l=this;return(0,m.Z)(function*(){return l.request(Object.assign(Object.assign({},i),{method:"GET"}))})()}post(i){var l=this;return(0,m.Z)(function*(){return l.request(Object.assign(Object.assign({},i),{method:"POST"}))})()}put(i){var l=this;return(0,m.Z)(function*(){return l.request(Object.assign(Object.assign({},i),{method:"PUT"}))})()}patch(i){var l=this;return(0,m.Z)(function*(){return l.request(Object.assign(Object.assign({},i),{method:"PATCH"}))})()}delete(i){var l=this;return(0,m.Z)(function*(){return l.request(Object.assign(Object.assign({},i),{method:"DELETE"}))})()}}F("CapacitorHttp",{web:()=>new te})},75:(fe,$,b)=>{b.r($),b.d($,{HomePage:()=>l});var m=b(5861),e=b(9212),d=b(7897),y=b(6814);function E(r){function s(o){if(Object(o)!==o)return Promise.reject(new TypeError(o+" is not an object."));var n=o.done;return Promise.resolve(o.value).then(function(t){return{value:t,done:n}})}return(E=function(n){this.s=n,this.n=n.next}).prototype={s:null,n:null,next:function(){return s(this.n.apply(this.s,arguments))},return:function(n){var t=this.s.return;return void 0===t?Promise.resolve({value:n,done:!0}):s(t.apply(this.s,arguments))},throw:function(n){var t=this.s.return;return void 0===t?Promise.reject(n):s(t.apply(this.s,arguments))}},new E(r)}class J{static comparador(s,o){let n=s.from,t=o.from;return n||t?t?n?n<t?-1:n>t?1:0:1:-1:0}static validarRelacion(s){return s&&s.mal_id&&s.mal_id>0}}class I{static getBaseDeDatos(){return(0,m.Z)(function*(){return new Promise((s,o)=>{try{let n=indexedDB.open("magallanes",2);n.onsuccess=()=>{s(n.result)},n.onerror=t=>{o(t)},n.onupgradeneeded=()=>{let t=n.result;t.objectStoreNames.contains("animes")?s(t):t.createObjectStore("animes",{keyPath:"id"})}}catch(n){o(n)}})})()}}var D=b(9862);const G="https://api.jikan.moe/v4";let z=(()=>{var r;class s{constructor(n){this.http=n,this.obtenidos=new Map}buscarAnime(n){return this.http.get(`${G}/anime`,{params:n})}obtenerAnimeCompleto(n){return this.http.get(`${G}/anime/${n}/full`)}mapearAnime(n){var t,a,u,f,p,g;return{id:n.mal_id,title:n.title,image:null===(t=n.images)||void 0===t||null===(t=t.jpg)||void 0===t?void 0:t.image_url,type:n.type,episodes:n.episodes,status:n.status,airing:n.airing,score:n.score,from:null!==(a=n.aired)&&void 0!==a&&a.from?new Date(null===(u=n.aired)||void 0===u?void 0:u.from):null,to:null!==(f=n.aired)&&void 0!==f&&f.to?new Date(null===(p=n.aired)||void 0===p?void 0:p.to):null,relations:null!==(g=n.relations)&&void 0!==g?g:[],url:n.url}}anadirRelaciones(n,t){let a=[];if(n){let u=["Adaptation"];u.push(...t),n.filter(f=>!u.includes(f.relation)).forEach(f=>{for(let g of null!==(p=null==f?void 0:f.entry)&&void 0!==p?p:[]){var p;J.validarRelacion(g)&&"anime"===g.type&&!this.obtenidos.has(g.mal_id)&&(this.obtenidos.set(g.mal_id,g),a.push(g))}})}return a}consulta(n){var t=this;return(0,m.Z)(function*(){return new Promise((a,u)=>{try{t.baseDeDatos&&n?t.baseDeDatos.transaction("animes").objectStore("animes").get(n).onsuccess=f=>{var p;let g=null==f||null===(p=f.target)||void 0===p?void 0:p.result;a(g)}:u()}catch(f){u(f)}})})()}guardar(n){var t=this;return(0,m.Z)(function*(){return new Promise((a,u)=>{try{t.baseDeDatos?(t.baseDeDatos.transaction(["animes"],"readwrite").objectStore("animes").put(n),a()):u()}catch{u()}})})()}sagase(n,t,a){var u=this;return(0,m.Z)(function*(){let f=n.mal_id;u.baseDeDatos||(u.baseDeDatos=yield I.getBaseDeDatos());let p=yield u.consulta(f);return new Promise(p?function(){var g=(0,m.Z)(function*(Z,C){try{yield u.manejarAnime(p,t,a),Z()}catch(w){C(w)}});return function(Z,C){return g.apply(this,arguments)}}():(g,Z)=>setTimeout((0,m.Z)(function*(){try{u.obtenerAnimeCompleto(f).subscribe(function(){var C=(0,m.Z)(function*(w){let T=u.mapearAnime(null==w?void 0:w.data);T&&(u.guardar(T),yield u.manejarAnime(T,t,a),g())});return function(w){return C.apply(this,arguments)}}())}catch(C){Z(C)}}),1e3))})()}manejarAnime(n,t,a){var u=this;return(0,m.Z)(function*(){a.push(n),a.sort(J.comparador);let p=u.anadirRelaciones(n.relations,t);var C,g=!1,Z=!1;try{for(var T,w=function re(r){var s,o,n,t=2;for(typeof Symbol<"u"&&(o=Symbol.asyncIterator,n=Symbol.iterator);t--;){if(o&&null!=(s=r[o]))return s.call(r);if(n&&null!=(s=r[n]))return new E(s.call(r));o="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}(p);g=!(T=yield w.next()).done;g=!1){let q=T.value;yield u.sagase(q,t,a)}}catch(q){Z=!0,C=q}finally{try{g&&null!=w.return&&(yield w.return())}finally{if(Z)throw C}}})()}}return(r=s).\u0275fac=function(n){return new(n||r)(e.LFG(D.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),s})();const ae=["barraBusqueda"],k=["botonFiltro"];function F(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"ion-item",14),e.NdJ("click",function(){const a=e.CHM(o).$implicit,u=e.oxw(2);return e.KtG(u.seleccionarAnime(a))}),e.TgZ(1,"ion-avatar",15),e._UZ(2,"img",16),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA()()}if(2&r){const o=s.$implicit;e.Q6J("button",!0),e.xp6(2),e.Q6J("src",o.image,e.LSH),e.xp6(2),e.Oqu(o.title)}}function se(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"ion-row",0)(1,"ion-col",9)(2,"div",10)(3,"ion-content",11)(4,"ion-list",0),e.YNc(5,F,5,3,"ion-item",12),e.qZA(),e.TgZ(6,"ion-infinite-scroll",13),e.NdJ("ionInfinite",function(t){e.CHM(o);const a=e.oxw();return e.KtG(a.onIonInfinite(t))}),e._UZ(7,"ion-infinite-scroll-content"),e.qZA()()()()()}if(2&r){const o=e.oxw();e.xp6(5),e.Q6J("ngForOf",o.items)}}let le=(()=>{var r;class s{constructor(n){this.animeService=n,this.alSeleccionar=new e.vpe,this.alAbrirFiltro=new e.vpe,this.items=[],this.pagina=1,this.busqueda="",this.timeoutInput=null,this.seleccionado=null}ngOnInit(){}generateItems(){this.animeService.buscarAnime({q:this.busqueda,limit:25,page:this.pagina++}).subscribe(n=>{n.data.forEach(t=>{let a=this.animeService.mapearAnime(t);this.items.push(a)})})}onIonInfinite(n){this.generateItems(),setTimeout(()=>{n.target.complete()},1e3)}buscar(n){var t;this.pagina=1,this.busqueda=null==n||null===(t=n.detail)||void 0===t?void 0:t.value,this.timeoutInput&&clearTimeout(this.timeoutInput),this.timeoutInput=setTimeout(()=>{this.items=[],this.busqueda&&this.generateItems()},333)}seleccionarAnime(n){this.limpiar();let t=n.id;t&&this.animeService.obtenerAnimeCompleto(t).subscribe(a=>{let u=null==a?void 0:a.data;u&&(this.seleccionado=this.animeService.mapearAnime(u),this.alSeleccionar.emit(this.seleccionado))})}mostrarFiltro(){this.alAbrirFiltro.emit()}limpiar(){this.barraBusqueda.value="",this.busqueda="",this.items=[],this.pagina=1,this.timeoutInput=null}}return(r=s).\u0275fac=function(n){return new(n||r)(e.Y36(z))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-buscador"]],viewQuery:function(n,t){if(1&n&&(e.Gf(ae,5),e.Gf(k,7)),2&n){let a;e.iGM(a=e.CRH())&&(t.barraBusqueda=a.first),e.iGM(a=e.CRH())&&(t.botonFiltro=a.first)}},outputs:{alSeleccionar:"alSeleccionar",alAbrirFiltro:"alAbrirFiltro"},standalone:!0,features:[e.jDz],decls:10,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],["size","10"],["placeholder","Buscar anime",3,"ionInput"],["barraBusqueda",""],["size","2"],["fill","clear","shape","circle",3,"click"],["botonFiltro",""],["slot","icon-only","src","assets/icon/filter.svg"],["class","ion-no-padding ion-no-margin",4,"ngIf"],["size","12"],[1,"contenedorscroll"],[1,"contenidoscroll",2,"height","100%"],[3,"button","click",4,"ngFor","ngForOf"],[3,"ionInfinite"],[3,"button","click"],["slot","start"],["alt","avatar",3,"src"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-grid",0)(1,"ion-row",0)(2,"ion-col",1)(3,"ion-searchbar",2,3),e.NdJ("ionInput",function(u){return t.buscar(u)}),e.qZA()(),e.TgZ(5,"ion-col",4)(6,"ion-button",5,6),e.NdJ("click",function(){return t.mostrarFiltro()}),e._UZ(8,"ion-icon",7),e.qZA()()(),e.YNc(9,se,8,1,"ion-row",8),e.qZA()),2&n&&(e.xp6(9),e.Q6J("ngIf",t.busqueda))},dependencies:[d.VI,d.W2,d.ju,d.q_,d.BJ,d.Q$,d.Ie,d.MB,d.YG,d.gu,d.jY,d.Nd,d.wI,y.ez,y.sg,y.O5],styles:[".contenedorscroll[_ngcontent-%COMP%]{min-height:250px;max-height:500px;height:60vh;width:100%;z-index:997;position:absolute}.contenidoscroll[_ngcontent-%COMP%]{height:100%}ion-button[shape=circle][_ngcontent-%COMP%]{--border-radius: 50%;width:56px;height:56px}"]}),s})(),B=(()=>{var r;class s{constructor(){this.alClicar=new e.vpe,this.openCapacitorSite=n=>{n&&this.alClicar.emit(n)}}ngOnInit(){}}return(r=s).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-anime"]],inputs:{anime:"anime",indice:"indice"},outputs:{alClicar:"alClicar"},standalone:!0,features:[e.jDz],decls:51,vars:16,consts:[[1,"itemPadre",3,"button","click"],[1,"contenedorIndice","negrita","col-centrada"],[1,"ion-no-padding"],[2,"min-height","100px"],["size-xs","3","size-xl","1",1,"colImagen"],["alt","avatar",1,"imganime",3,"src"],["size-xs","9","size-xl","11"],["size","12"],[1,"contenedorTitulo"],["size","3"],[1,"contenedorDatos","ion-text-end"],[1,"contenedorDatos","negrita"],["size","6"],[1,"contenedorDatos"],[1,"negrita"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-item",0),e.NdJ("click",function(){return t.openCapacitorSite(null==t.anime?null:t.anime.url)}),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"ion-grid",2)(4,"ion-row",3)(5,"ion-col",4),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"ion-col",6)(8,"ion-grid",2)(9,"ion-row")(10,"ion-col",7)(11,"div",8),e._uU(12),e.qZA()()(),e.TgZ(13,"ion-row")(14,"ion-col",9)(15,"div",10),e._uU(16,"Tipo: "),e.qZA()(),e.TgZ(17,"ion-col",9)(18,"div",11),e._uU(19),e.qZA()(),e.TgZ(20,"ion-col",12)(21,"div",13),e._uU(22,"F.inicio: "),e.TgZ(23,"span",14),e._uU(24),e.ALo(25,"date"),e.qZA()()()(),e.TgZ(26,"ion-row")(27,"ion-col",9)(28,"div",10),e._uU(29,"Ep.: "),e.qZA()(),e.TgZ(30,"ion-col",9)(31,"div",11),e._uU(32),e.qZA()(),e.TgZ(33,"ion-col",12)(34,"div",13),e._uU(35,"F.fin: "),e.TgZ(36,"span",14),e._uU(37),e.ALo(38,"date"),e.qZA()()()(),e.TgZ(39,"ion-row")(40,"ion-col",9)(41,"div",10),e._uU(42,"Nota: "),e.qZA()(),e.TgZ(43,"ion-col",9)(44,"div",11),e._uU(45),e.qZA()(),e.TgZ(46,"ion-col",12)(47,"div",13),e._uU(48,"Estado: "),e.TgZ(49,"span",14),e._uU(50),e.qZA()()()()()()()()()),2&n&&(e.Q6J("button",!0),e.xp6(2),e.Oqu(t.indice),e.xp6(4),e.Q6J("src",null==t.anime?null:t.anime.image,e.LSH),e.xp6(6),e.Oqu(null==t.anime?null:t.anime.title),e.xp6(7),e.Oqu(null==t.anime?null:t.anime.type),e.xp6(5),e.Oqu(e.xi3(25,10,null==t.anime?null:t.anime.from,"dd/MM/yyyy")),e.xp6(8),e.Oqu(null==t.anime?null:t.anime.episodes),e.xp6(5),e.Oqu(e.xi3(38,13,null==t.anime?null:t.anime.to,"dd/MM/yyyy")),e.xp6(8),e.Oqu(null==t.anime?null:t.anime.score),e.xp6(5),e.Oqu(null==t.anime?null:t.anime.status))},dependencies:[d.Ie,d.jY,d.Nd,d.wI,y.uU],styles:["ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}.col-centrada[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center}ion-badge[_ngcontent-%COMP%]{font-size:1.5em}ion-avatar[_ngcontent-%COMP%]{height:100%;width:100%}.imganime[_ngcontent-%COMP%]{height:100%;object-fit:cover}.contenedorTitulo[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-top:.5em;margin-bottom:.5em}.contenedorIndice[_ngcontent-%COMP%]{width:7.5%}.negrita[_ngcontent-%COMP%]{font-weight:700}.contenedorDatos[_ngcontent-%COMP%]{margin-left:5px;margin-bottom:5px}@media screen and (max-width: 450px){.colImagen[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{height:55%!important}}.itemPadre[_ngcontent-%COMP%]{--padding-start: 0}"]}),s})();var R=b(95);const Q=(0,b(2726).fo)("Browser",{web:()=>b.e(671).then(b.bind(b,3671)).then(r=>new r.BrowserWeb)}),K=["tarjetaOpciones"],ce=["checkResumenes"],V=["checkOtros"],Y=["checkCharacter"],X=["toastAviso"];function ee(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"ion-card",10,11)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4,"Filtro"),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6,"OMITIR:"),e.qZA()(),e.TgZ(7,"ion-card-content")(8,"ion-grid")(9,"ion-row")(10,"ion-col",12)(11,"ion-checkbox",13,14),e.NdJ("ngModelChange",function(t){e.CHM(o);const a=e.oxw();return e.KtG(a.summary=t)}),e._uU(13,"Res\xfamenes"),e.qZA()()(),e.TgZ(14,"ion-row")(15,"ion-col",12)(16,"ion-checkbox",13,15),e.NdJ("ngModelChange",function(t){e.CHM(o);const a=e.oxw();return e.KtG(a.other=t)}),e._uU(18,"Otros"),e.qZA()()(),e.TgZ(19,"ion-row")(20,"ion-col",12)(21,"ion-checkbox",13,16),e.NdJ("ngModelChange",function(t){e.CHM(o);const a=e.oxw();return e.KtG(a.character=t)}),e._uU(23,"Character"),e.qZA()()()()()()}if(2&r){const o=e.oxw();e.xp6(11),e.Q6J("ngModel",o.summary),e.xp6(5),e.Q6J("ngModel",o.other),e.xp6(5),e.Q6J("ngModel",o.character)}}function te(r,s){1&r&&(e.TgZ(0,"ion-row")(1,"ion-col",17),e._UZ(2,"ion-progress-bar",18),e.qZA()())}function ue(r,s){if(1&r){const o=e.EpF();e.TgZ(0,"app-anime",23),e.NdJ("alClicar",function(t){e.CHM(o);const a=e.oxw(2);return e.KtG(a.abrirNavegador(t))}),e.qZA()}if(2&r){const o=s.$implicit;e.Q6J("indice",s.index+1)("anime",o)}}function c(r,s){if(1&r&&(e.TgZ(0,"ion-row")(1,"ion-col",19)(2,"ion-content",20)(3,"ion-list",21),e.YNc(4,ue,1,2,"app-anime",22),e.qZA()()()()),2&r){const o=e.oxw();e.xp6(2),e.Q6J("scrollEvents",!0),e.xp6(2),e.Q6J("ngForOf",o.animes)}}const i=r=>({fondoOpciones:r});let l=(()=>{var r;class s{setOpen(n){this.isToastOpen=n}setAlertOpen(n){this.isAlertOpen=n}get filtros(){let n=[];return this.summary&&n.push("Summary"),this.other&&n.push("Other"),this.character&&n.push("Character"),n}constructor(n){var a,t=this;this.animeService=n,this.animes=[],this.filtroVisible=!1,this.barraProgreso=!1,this.isToastOpen=!1,this.isAlertOpen=!1,this.alertButtons=[{text:"No",role:"cancel",handler:()=>{}},{text:"S\xed",role:"confirm",handler:(a=(0,m.Z)(function*(){yield Q.open({url:t.urlParaAbrir}),t.urlParaAbrir=void 0}),function(){return a.apply(this,arguments)})}],this.summary=!1,this.other=!1,this.character=!1}ver(n){let t={mal_id:n.id,url:n.url,type:"",name:""};this.animes=[],this.animeService.obtenidos.clear(),this.animeService.obtenidos.set(t.mal_id,t),this.barraProgreso=!0,this.animeService.sagase(t,this.filtros,this.animes).then(()=>{this.barraProgreso=!1,this.isToastOpen=!0,this.toastAviso.message="Se han encontrado "+this.animes.length+" resultados"}).catch(a=>{console.error(a),this.barraProgreso=!1,this.isToastOpen=!0,this.toastAviso.message="Ha ocurrido un error; int\xe9ntelo de nuevo m\xe1s adelante."})}mostrarFiltro(){this.filtroVisible=!this.filtroVisible}abrirNavegador(n){var t=this;return(0,m.Z)(function*(){t.urlParaAbrir=n,t.isAlertOpen=!0})()}onGlobalClick(n){this.filtroVisible&&(this.tarjetaOpciones.nativeElement.contains(n.target)||(this.filtroVisible=!1))}}return(r=s).\u0275fac=function(n){return new(n||r)(e.Y36(z))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-home"]],viewQuery:function(n,t){if(1&n&&(e.Gf(K,5,e.SBq),e.Gf(ce,5),e.Gf(V,5),e.Gf(Y,5),e.Gf(X,5)),2&n){let a;e.iGM(a=e.CRH())&&(t.tarjetaOpciones=a.first),e.iGM(a=e.CRH())&&(t.checkResumenes=a.first),e.iGM(a=e.CRH())&&(t.checkOtros=a.first),e.iGM(a=e.CRH())&&(t.checkCharacter=a.first),e.iGM(a=e.CRH())&&(t.toastAviso=a.first)}},hostBindings:function(n,t){1&n&&e.NdJ("mousedown",function(u){return t.onGlobalClick(u)},!1,e.evT)},standalone:!0,features:[e.jDz],decls:11,vars:10,consts:[[1,"ion-no-margin"],[1,"barraSuperior"],["size-xs","12","size-sm","10"],[3,"alSeleccionar","alAbrirFiltro"],[3,"ngClass"],["class","cardOpciones ion-no-margin",4,"ngIf"],[4,"ngIf"],[3,"isOpen","duration","didDismiss"],["toastAviso",""],["header","Abrir enlace","message","Se va a abrir un enlace externo; \xbfdesea continuar?",3,"isOpen","buttons","didDismiss"],[1,"cardOpciones","ion-no-margin"],["tarjetaOpciones",""],["size","6","offset","1"],["labelPlacement","end",3,"ngModel","ngModelChange"],["checkResumenes",""],["checkOtros",""],["checkCharacter",""],["size","12"],["type","indeterminate"],["size-xs","12","size-sm","8","offset-sm","2"],[1,"contentScroll",3,"scrollEvents"],[1,"ion-no-padding"],[3,"indice","anime","alClicar",4,"ngFor","ngForOf"],[3,"indice","anime","alClicar"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-grid",0)(1,"ion-row",1)(2,"ion-col",2)(3,"app-buscador",3),e.NdJ("alSeleccionar",function(u){return t.ver(u)})("alAbrirFiltro",function(){return t.mostrarFiltro()}),e.qZA(),e._UZ(4,"div",4),e.YNc(5,ee,24,3,"ion-card",5),e.qZA()(),e.YNc(6,te,3,0,"ion-row",6)(7,c,5,2,"ion-row",6),e.qZA(),e.TgZ(8,"ion-toast",7,8),e.NdJ("didDismiss",function(){return t.setOpen(!1)}),e.qZA(),e.TgZ(10,"ion-alert",9),e.NdJ("didDismiss",function(){return t.setAlertOpen(!1)}),e.qZA()),2&n&&(e.xp6(4),e.Q6J("ngClass",e.VKq(8,i,t.filtroVisible)),e.xp6(),e.Q6J("ngIf",t.filtroVisible),e.xp6(),e.Q6J("ngIf",t.barraProgreso),e.xp6(),e.Q6J("ngIf",null!=t.animes&&t.animes.length>0),e.xp6(),e.Q6J("isOpen",t.isToastOpen)("duration",5e3),e.xp6(2),e.Q6J("isOpen",t.isAlertOpen)("buttons",t.alertButtons))},dependencies:[d.Ge,d.Px,d.X7,d.W2,le,B,d.jY,d.Nd,d.wI,d.q_,d.PM,d.FN,d.Zi,d.Dq,d.tO,d.nz,y.ez,y.mk,y.sg,y.O5,R.u5,R.JJ,R.On],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.cardOpciones[_ngcontent-%COMP%]{z-index:999;position:absolute;right:0;width:300px}@media screen and (max-width: 600px){.cardOpciones[_ngcontent-%COMP%]{position:fixed;width:80vw;height:210px;top:calc((100% - 210px)/2);left:10vw;right:10vw}.fondoOpciones[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:998;background:#d3d3d3;opacity:.5}}.barraSuperior[_ngcontent-%COMP%]{height:75px}.contentScroll[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 90px)}"]}),s})()}}]);