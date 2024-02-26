"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[16],{2726:(ve,R,T)=>{T.d(R,{Uw:()=>L,fo:()=>$});var b=T(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var B=function(l){return l.Unimplemented="UNIMPLEMENTED",l.Unavailable="UNAVAILABLE",l}(B||{});class G extends Error{constructor(i,a,p){super(i),this.message=i,this.code=a,this.data=p}}const W=l=>{var i,a,p,h,d;const v=l.CapacitorCustomPlatform||null,f=l.Capacitor||{},P=f.Plugins=f.Plugins||{},C=l.CapacitorPlatforms,H=(null===(i=null==C?void 0:C.currentPlatform)||void 0===i?void 0:i.getPlatform)||(()=>null!==v?v.name:(l=>{var i,a;return null!=l&&l.androidBridge?"android":null!==(a=null===(i=null==l?void 0:l.webkit)||void 0===i?void 0:i.messageHandlers)&&void 0!==a&&a.bridge?"ios":"web"})(l)),se=(null===(a=null==C?void 0:C.currentPlatform)||void 0===a?void 0:a.isNativePlatform)||(()=>"web"!==H()),le=(null===(p=null==C?void 0:C.currentPlatform)||void 0===p?void 0:p.isPluginAvailable)||(u=>{const _=n.get(u);return!!(null!=_&&_.platforms.has(H())||c(u))}),c=(null===(h=null==C?void 0:C.currentPlatform)||void 0===h?void 0:h.getPluginHeader)||(u=>{var _;return null===(_=f.PluginHeaders)||void 0===_?void 0:_.find(w=>w.name===u)}),n=new Map,g=(null===(d=null==C?void 0:C.currentPlatform)||void 0===d?void 0:d.registerPlugin)||((u,_={})=>{const w=n.get(u);if(w)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),w.proxy;const x=H(),O=c(u);let y;const j=function(){var A=(0,b.Z)(function*(){return!y&&x in _?y=y="function"==typeof _[x]?yield _[x]():_[x]:null!==v&&!y&&"web"in _&&(y=y="function"==typeof _.web?yield _.web():_.web),y});return function(){return A.apply(this,arguments)}}(),I=A=>{let Z;const S=(...U)=>{const D=j().then(q=>{const E=((A,Z)=>{var S,U;if(!O){if(A)return null===(U=A[Z])||void 0===U?void 0:U.bind(A);throw new G(`"${u}" plugin is not implemented on ${x}`,B.Unimplemented)}{const D=null==O?void 0:O.methods.find(q=>Z===q.name);if(D)return"promise"===D.rtype?q=>f.nativePromise(u,Z.toString(),q):(q,E)=>f.nativeCallback(u,Z.toString(),q,E);if(A)return null===(S=A[Z])||void 0===S?void 0:S.bind(A)}})(q,A);if(E){const X=E(...U);return Z=null==X?void 0:X.remove,X}throw new G(`"${u}.${A}()" is not implemented on ${x}`,B.Unimplemented)});return"addListener"===A&&(D.remove=(0,b.Z)(function*(){return Z()})),D};return S.toString=()=>`${A.toString()}() { [capacitor code] }`,Object.defineProperty(S,"name",{value:A,writable:!1,configurable:!1}),S},_e=I("addListener"),be=I("removeListener"),Ce=(A,Z)=>{const S=_e({eventName:A},Z),U=function(){var q=(0,b.Z)(function*(){const E=yield S;be({eventName:A,callbackId:E},Z)});return function(){return q.apply(this,arguments)}}(),D=new Promise(q=>S.then(()=>q({remove:U})));return D.remove=(0,b.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),D},ce=new Proxy({},{get(A,Z){switch(Z){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return O?Ce:_e;case"removeListener":return be;default:return I(Z)}}});return P[u]=ce,n.set(u,{name:u,proxy:ce,platforms:new Set([...Object.keys(_),...O?[x]:[]])}),ce});return f.convertFileSrc||(f.convertFileSrc=u=>u),f.getPlatform=H,f.handleError=u=>l.console.error(u),f.isNativePlatform=se,f.isPluginAvailable=le,f.pluginMethodNoop=(u,_,w)=>Promise.reject(`${w} does not have an implementation of "${_}".`),f.registerPlugin=g,f.Exception=G,f.DEBUG=!!f.DEBUG,f.isLoggingEnabled=!!f.isLoggingEnabled,f.platform=f.getPlatform(),f.isNative=f.isNativePlatform(),f},F=(l=>l.Capacitor=W(l))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),$=F.registerPlugin;class L{constructor(i){this.listeners={},this.windowListeners={},i&&(console.warn(`Capacitor WebPlugin "${i.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=i)}addListener(i,a){var p=this;this.listeners[i]||(this.listeners[i]=[]),this.listeners[i].push(a);const d=this.windowListeners[i];d&&!d.registered&&this.addWindowListener(d);const v=function(){var P=(0,b.Z)(function*(){return p.removeListener(i,a)});return function(){return P.apply(this,arguments)}}(),f=Promise.resolve({remove:v});return Object.defineProperty(f,"remove",{value:(P=(0,b.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield v()}),function(){return P.apply(this,arguments)})}),f;var P}removeAllListeners(){var i=this;return(0,b.Z)(function*(){i.listeners={};for(const a in i.windowListeners)i.removeWindowListener(i.windowListeners[a]);i.windowListeners={}})()}notifyListeners(i,a){const p=this.listeners[i];p&&p.forEach(h=>h(a))}hasListeners(i){return!!this.listeners[i].length}registerWindowListener(i,a){this.windowListeners[a]={registered:!1,windowEventName:i,pluginEventName:a,handler:p=>{this.notifyListeners(a,p)}}}unimplemented(i="not implemented"){return new F.Exception(i,B.Unimplemented)}unavailable(i="not available"){return new F.Exception(i,B.Unavailable)}removeListener(i,a){var p=this;return(0,b.Z)(function*(){const h=p.listeners[i];if(!h)return;const d=h.indexOf(a);p.listeners[i].splice(d,1),p.listeners[i].length||p.removeWindowListener(p.windowListeners[i])})()}addWindowListener(i){window.addEventListener(i.windowEventName,i.handler),i.registered=!0}removeWindowListener(i){i&&(window.removeEventListener(i.windowEventName,i.handler),i.registered=!1)}}const K=l=>encodeURIComponent(l).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Y=l=>l.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class ee extends L{getCookies(){return(0,b.Z)(function*(){const i=document.cookie,a={};return i.split(";").forEach(p=>{if(p.length<=0)return;let[h,d]=p.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");h=Y(h).trim(),d=Y(d).trim(),a[h]=d}),a})()}setCookie(i){return(0,b.Z)(function*(){try{const a=K(i.key),p=K(i.value),h=`; expires=${(i.expires||"").replace("expires=","")}`,d=(i.path||"/").replace("path=",""),v=null!=i.url&&i.url.length>0?`domain=${i.url}`:"";document.cookie=`${a}=${p||""}${h}; path=${d}; ${v};`}catch(a){return Promise.reject(a)}})()}deleteCookie(i){return(0,b.Z)(function*(){try{document.cookie=`${i.key}=; Max-Age=0`}catch(a){return Promise.reject(a)}})()}clearCookies(){return(0,b.Z)(function*(){try{const i=document.cookie.split(";")||[];for(const a of i)document.cookie=a.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(i){return Promise.reject(i)}})()}clearAllCookies(){var i=this;return(0,b.Z)(function*(){try{yield i.clearCookies()}catch(a){return Promise.reject(a)}})()}}$("CapacitorCookies",{web:()=>new ee});const te=function(){var l=(0,b.Z)(function*(i){return new Promise((a,p)=>{const h=new FileReader;h.onload=()=>{const d=h.result;a(d.indexOf(",")>=0?d.split(",")[1]:d)},h.onerror=d=>p(d),h.readAsDataURL(i)})});return function(a){return l.apply(this,arguments)}}();class re extends L{request(i){return(0,b.Z)(function*(){const a=((l,i={})=>{const a=Object.assign({method:l.method||"GET",headers:l.headers},i),h=((l={})=>{const i=Object.keys(l);return Object.keys(l).map(h=>h.toLocaleLowerCase()).reduce((h,d,v)=>(h[d]=l[i[v]],h),{})})(l.headers)["content-type"]||"";if("string"==typeof l.data)a.body=l.data;else if(h.includes("application/x-www-form-urlencoded")){const d=new URLSearchParams;for(const[v,f]of Object.entries(l.data||{}))d.set(v,f);a.body=d.toString()}else if(h.includes("multipart/form-data")||l.data instanceof FormData){const d=new FormData;if(l.data instanceof FormData)l.data.forEach((f,P)=>{d.append(P,f)});else for(const f of Object.keys(l.data))d.append(f,l.data[f]);a.body=d;const v=new Headers(a.headers);v.delete("content-type"),a.headers=v}else(h.includes("application/json")||"object"==typeof l.data)&&(a.body=JSON.stringify(l.data));return a})(i,i.webFetchExtra),p=((l,i=!0)=>l?Object.entries(l).reduce((p,h)=>{const[d,v]=h;let f,P;return Array.isArray(v)?(P="",v.forEach(C=>{f=i?encodeURIComponent(C):C,P+=`${d}=${f}&`}),P.slice(0,-1)):(f=i?encodeURIComponent(v):v,P=`${d}=${f}`),`${p}&${P}`},"").substr(1):null)(i.params,i.shouldEncodeUrlParams),h=p?`${i.url}?${p}`:i.url,d=yield fetch(h,a),v=d.headers.get("content-type")||"";let P,C,{responseType:f="text"}=d.ok?i:{};switch(v.includes("application/json")&&(f="json"),f){case"arraybuffer":case"blob":C=yield d.blob(),P=yield te(C);break;case"json":P=yield d.json();break;default:P=yield d.text()}const z={};return d.headers.forEach((H,V)=>{z[V]=H}),{data:P,headers:z,status:d.status,url:d.url}})()}get(i){var a=this;return(0,b.Z)(function*(){return a.request(Object.assign(Object.assign({},i),{method:"GET"}))})()}post(i){var a=this;return(0,b.Z)(function*(){return a.request(Object.assign(Object.assign({},i),{method:"POST"}))})()}put(i){var a=this;return(0,b.Z)(function*(){return a.request(Object.assign(Object.assign({},i),{method:"PUT"}))})()}patch(i){var a=this;return(0,b.Z)(function*(){return a.request(Object.assign(Object.assign({},i),{method:"PATCH"}))})()}delete(i){var a=this;return(0,b.Z)(function*(){return a.request(Object.assign(Object.assign({},i),{method:"DELETE"}))})()}}$("CapacitorHttp",{web:()=>new re})},3016:(ve,R,T)=>{T.r(R),T.d(R,{HomePage:()=>le});var b=T(5861),m=T(5422),e=T(9212),M=T(6814);function J(s){function c(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var t=r.done;return Promise.resolve(r.value).then(function(n){return{value:n,done:t}})}return(J=function(t){this.s=t,this.n=t.next}).prototype={s:null,n:null,next:function(){return c(this.n.apply(this.s,arguments))},return:function(t){var n=this.s.return;return void 0===n?Promise.resolve({value:t,done:!0}):c(n.apply(this.s,arguments))},throw:function(t){var n=this.s.return;return void 0===n?Promise.reject(t):c(n.apply(this.s,arguments))}},new J(s)}class N{static comparador(c,r){let t=c.from,n=r.from;return t||n?n?t?t<n?-1:t>n?1:0:1:-1:0}static validarRelacion(c){return c&&c.mal_id&&c.mal_id>0}}class B{static getBaseDeDatos(){return(0,b.Z)(function*(){return new Promise((c,r)=>{try{let t=indexedDB.open("magallanes",2);t.onsuccess=()=>{c(t.result)},t.onerror=n=>{r(n)},t.onupgradeneeded=()=>{let n=t.result;n.objectStoreNames.contains("animes")?c(n):n.createObjectStore("animes",{keyPath:"id"})}}catch(t){r(t)}})})()}}var G=T(9862);const Q="https://api.jikan.moe/v4";let W=(()=>{var s;class c{constructor(t){this.http=t,this.obtenidos=new Map}buscarAnime(t){return this.http.get(`${Q}/anime`,{params:t})}obtenerAnimeCompleto(t){return this.http.get(`${Q}/anime/${t}/full`)}mapearAnime(t){var n,o,g,u,_,w;return{id:t.mal_id,title:t.title,image:null===(n=t.images)||void 0===n||null===(n=n.jpg)||void 0===n?void 0:n.image_url,type:t.type,episodes:t.episodes,status:t.status,airing:t.airing,score:t.score,from:null!==(o=t.aired)&&void 0!==o&&o.from?new Date(null===(g=t.aired)||void 0===g?void 0:g.from):null,to:null!==(u=t.aired)&&void 0!==u&&u.to?new Date(null===(_=t.aired)||void 0===_?void 0:_.to):null,relations:null!==(w=t.relations)&&void 0!==w?w:[],url:t.url}}anadirRelaciones(t,n){let o=[];if(t){let g=["Adaptation"];g.push(...n),t.filter(u=>!g.includes(u.relation)).forEach(u=>{for(let w of null!==(_=null==u?void 0:u.entry)&&void 0!==_?_:[]){var _;N.validarRelacion(w)&&"anime"===w.type&&!this.obtenidos.has(w.mal_id)&&(this.obtenidos.set(w.mal_id,w),o.push(w))}})}return o}consulta(t){var n=this;return(0,b.Z)(function*(){return new Promise((o,g)=>{try{n.baseDeDatos&&t?n.baseDeDatos.transaction("animes").objectStore("animes").get(t).onsuccess=u=>{var _;let w=null==u||null===(_=u.target)||void 0===_?void 0:_.result;o(w)}:g()}catch(u){g(u)}})})()}guardar(t){var n=this;return(0,b.Z)(function*(){return new Promise((o,g)=>{try{n.baseDeDatos?(n.baseDeDatos.transaction(["animes"],"readwrite").objectStore("animes").put(t),o()):g()}catch{g()}})})()}sagase(t,n,o,g){var u=this;return(0,b.Z)(function*(){let _=t.mal_id;u.baseDeDatos||(u.baseDeDatos=yield B.getBaseDeDatos());let w=yield u.consulta(_);return new Promise(w?function(){var x=(0,b.Z)(function*(O,y){try{yield u.manejarAnime(w,n,o,g),O()}catch(j){y(j)}});return function(O,y){return x.apply(this,arguments)}}():(x,O)=>setTimeout((0,b.Z)(function*(){var y;u.obtenerAnimeCompleto(_).subscribe({next:(y=(0,b.Z)(function*(j){if(g&&g.cancelar)O("B\xfasqueda cancelada");else{let k=u.mapearAnime(null==j?void 0:j.data);if(k){k.to&&k.to<new Date&&u.guardar(k);try{yield u.manejarAnime(k,n,o,g),x()}catch(I){O(I)}}else O()}}),function(k){return y.apply(this,arguments)}),error:y=>{O(y)}})}),1e3))})()}manejarAnime(t,n,o,g){var u=this;return(0,b.Z)(function*(){o.push(t),g.alAnadir(t),o.sort(N.comparador);let w=u.anadirRelaciones(t.relations,n);var y,x=!1,O=!1;try{for(var k,j=function ue(s){var c,r,t,n=2;for(typeof Symbol<"u"&&(r=Symbol.asyncIterator,t=Symbol.iterator);n--;){if(r&&null!=(c=s[r]))return c.call(s);if(t&&null!=(c=s[t]))return new J(c.call(s));r="@@asyncIterator",t="@@iterator"}throw new TypeError("Object is not async iterable")}(w);x=!(k=yield j.next()).done;x=!1){let I=k.value;yield u.sagase(I,n,o,g)}}catch(I){O=!0,y=I}finally{try{x&&null!=j.return&&(yield j.return())}finally{if(O)throw y}}})()}}return(s=c).\u0275fac=function(t){return new(t||s)(e.LFG(G.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),c})();const de=["barraBusqueda"];function F(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-item",16),e.NdJ("click",function(){const o=e.CHM(r).$implicit,g=e.oxw(2);return e.KtG(g.seleccionarAnime(o))}),e.TgZ(1,"ion-avatar",17),e._UZ(2,"img",18),e.qZA(),e.TgZ(3,"ion-label"),e._uU(4),e.qZA()()}if(2&s){const r=c.$implicit;e.Q6J("button",!0),e.xp6(2),e.Q6J("src",r.image,e.LSH),e.xp6(2),e.Oqu(r.title)}}function $(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-row",0)(1,"ion-col",11)(2,"div",12)(3,"ion-content",13)(4,"ion-list",0),e.YNc(5,F,5,3,"ion-item",14),e.qZA(),e.TgZ(6,"ion-infinite-scroll",15),e.NdJ("ionInfinite",function(n){e.CHM(r);const o=e.oxw();return e.KtG(o.onIonInfinite(n))}),e._UZ(7,"ion-infinite-scroll-content"),e.qZA()()()()()}if(2&s){const r=e.oxw();e.xp6(5),e.Q6J("ngForOf",r.items)}}let me=(()=>{var s;class c{constructor(t){this.animeService=t,this.alSeleccionar=new e.vpe,this.alAbrirFiltro=new e.vpe,this.alAbrirAjustes=new e.vpe,this.items=[],this.pagina=1,this.busqueda="",this.timeoutInput=null,this.seleccionado=null}ngOnInit(){}generateItems(){this.animeService.buscarAnime({q:this.busqueda,limit:25,page:this.pagina++}).subscribe(t=>{t.data.forEach(n=>{let o=this.animeService.mapearAnime(n);this.items.push(o)})})}onIonInfinite(t){this.generateItems(),setTimeout(()=>{t.target.complete()},1e3)}buscar(t){var n;this.pagina=1,this.busqueda=null==t||null===(n=t.detail)||void 0===n?void 0:n.value,this.timeoutInput&&clearTimeout(this.timeoutInput),this.timeoutInput=setTimeout(()=>{this.items=[],this.busqueda&&this.generateItems()},333)}seleccionarAnime(t){this.limpiar();let n=t.id;n&&this.animeService.obtenerAnimeCompleto(n).subscribe(o=>{let g=null==o?void 0:o.data;g&&(this.seleccionado=this.animeService.mapearAnime(g),this.alSeleccionar.emit(this.seleccionado))})}mostrarFiltro(){this.alAbrirFiltro.emit()}mostrarAjustes(){this.alAbrirAjustes.emit()}limpiar(){this.barraBusqueda.value="",this.busqueda="",this.items=[],this.pagina=1,this.timeoutInput=null}}return(s=c).\u0275fac=function(t){return new(t||s)(e.Y36(W))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-buscador"]],viewQuery:function(t,n){if(1&t&&e.Gf(de,5),2&t){let o;e.iGM(o=e.CRH())&&(n.barraBusqueda=o.first)}},outputs:{alSeleccionar:"alSeleccionar",alAbrirFiltro:"alAbrirFiltro",alAbrirAjustes:"alAbrirAjustes"},standalone:!0,features:[e.jDz],decls:12,vars:1,consts:[[1,"ion-no-padding","ion-no-margin"],[1,"ion-no-padding","ion-no-margin","barra"],["size-xs","8","size-sm","10"],["placeholder","Buscar anime",3,"ionInput"],["barraBusqueda",""],["size","2"],["fill","clear","shape","circle",3,"click"],["slot","icon-only","src","assets/icon/filter_alt.svg"],["size-xs","2","size-sm","0",1,"ion-hide-sm-up"],["slot","icon-only","src","assets/icon/settings.svg"],["class","ion-no-padding ion-no-margin",4,"ngIf"],["size","12"],[1,"contenedorscroll"],[1,"contenidoscroll",2,"height","100%"],[3,"button","click",4,"ngFor","ngForOf"],[3,"ionInfinite"],[3,"button","click"],["slot","start"],["alt","avatar",3,"src"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-grid",0)(1,"ion-row",1)(2,"ion-col",2)(3,"ion-searchbar",3,4),e.NdJ("ionInput",function(g){return n.buscar(g)}),e.qZA()(),e.TgZ(5,"ion-col",5)(6,"ion-button",6),e.NdJ("click",function(){return n.mostrarFiltro()}),e._UZ(7,"ion-icon",7),e.qZA()(),e.TgZ(8,"ion-col",8)(9,"ion-button",6),e.NdJ("click",function(){return n.mostrarAjustes()}),e._UZ(10,"ion-icon",9),e.qZA()()(),e.YNc(11,$,8,1,"ion-row",10),e.qZA()),2&t&&(e.xp6(11),e.Q6J("ngIf",n.busqueda))},dependencies:[m.VI,m.W2,m.ju,m.q_,m.BJ,m.Q$,m.Ie,m.MB,m.YG,m.gu,m.jY,m.Nd,m.wI,M.ez,M.sg,M.O5],styles:[".contenedorscroll[_ngcontent-%COMP%]{height:60vh;width:100%;z-index:997;position:absolute}@media screen and (max-width: 600px){.barra[_ngcontent-%COMP%]{height:75px}.contenedorscroll[_ngcontent-%COMP%]{height:calc(100vh - 75px)}.contenedorscroll[_ngcontent-%COMP%]   ion-infinite-scroll[_ngcontent-%COMP%]{margin-bottom:10vh}}.contenidoscroll[_ngcontent-%COMP%]{height:100%}ion-button[shape=circle][_ngcontent-%COMP%]{--border-radius: 50%;width:56px;height:56px}.colBotones[_ngcontent-%COMP%]{display:flex;flex-direction:row}"]}),c})(),pe=(()=>{var s;class c{constructor(){this.alClicar=new e.vpe,this.openCapacitorSite=t=>{t&&this.alClicar.emit(t)}}ngOnInit(){}}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-anime"]],inputs:{anime:"anime",indice:"indice"},outputs:{alClicar:"alClicar"},standalone:!0,features:[e.jDz],decls:51,vars:16,consts:[[1,"itemPadre",3,"button","click"],[1,"contenedorIndice","negrita","col-centrada"],[1,"ion-no-padding"],[2,"min-height","100px"],["size-xs","3","size-xl","1",1,"colImagen"],["alt","avatar",1,"imganime",3,"src"],["size-xs","9","size-xl","11"],["size","12"],[1,"contenedorTitulo"],["size","3"],[1,"contenedorDatos","ion-text-end"],[1,"contenedorDatos","negrita"],["size","6"],[1,"contenedorDatos"],[1,"negrita"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-item",0),e.NdJ("click",function(){return n.openCapacitorSite(null==n.anime?null:n.anime.url)}),e.TgZ(1,"div",1),e._uU(2),e.qZA(),e.TgZ(3,"ion-grid",2)(4,"ion-row",3)(5,"ion-col",4),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"ion-col",6)(8,"ion-grid",2)(9,"ion-row")(10,"ion-col",7)(11,"div",8),e._uU(12),e.qZA()()(),e.TgZ(13,"ion-row")(14,"ion-col",9)(15,"div",10),e._uU(16,"Tipo: "),e.qZA()(),e.TgZ(17,"ion-col",9)(18,"div",11),e._uU(19),e.qZA()(),e.TgZ(20,"ion-col",12)(21,"div",13),e._uU(22,"F.inicio: "),e.TgZ(23,"span",14),e._uU(24),e.ALo(25,"date"),e.qZA()()()(),e.TgZ(26,"ion-row")(27,"ion-col",9)(28,"div",10),e._uU(29,"Ep.: "),e.qZA()(),e.TgZ(30,"ion-col",9)(31,"div",11),e._uU(32),e.qZA()(),e.TgZ(33,"ion-col",12)(34,"div",13),e._uU(35,"F.fin: "),e.TgZ(36,"span",14),e._uU(37),e.ALo(38,"date"),e.qZA()()()(),e.TgZ(39,"ion-row")(40,"ion-col",9)(41,"div",10),e._uU(42,"Nota: "),e.qZA()(),e.TgZ(43,"ion-col",9)(44,"div",11),e._uU(45),e.qZA()(),e.TgZ(46,"ion-col",12)(47,"div",13),e._uU(48,"Estado: "),e.TgZ(49,"span",14),e._uU(50),e.qZA()()()()()()()()()),2&t&&(e.Q6J("button",!0),e.xp6(2),e.Oqu(n.indice),e.xp6(4),e.Q6J("src",null==n.anime?null:n.anime.image,e.LSH),e.xp6(6),e.Oqu(null==n.anime?null:n.anime.title),e.xp6(7),e.Oqu(null==n.anime?null:n.anime.type),e.xp6(5),e.Oqu(e.xi3(25,10,null==n.anime?null:n.anime.from,"dd/MM/yyyy")),e.xp6(8),e.Oqu(null==n.anime?null:n.anime.episodes),e.xp6(5),e.Oqu(e.xi3(38,13,null==n.anime?null:n.anime.to,"dd/MM/yyyy")),e.xp6(8),e.Oqu(null==n.anime?null:n.anime.score),e.xp6(5),e.Oqu(null==n.anime?null:n.anime.status))},dependencies:[m.Ie,m.jY,m.Nd,m.wI,M.uU],styles:["ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}.col-centrada[_ngcontent-%COMP%]{text-align:center;display:flex;justify-content:center;align-items:center}ion-badge[_ngcontent-%COMP%]{font-size:1.5em}ion-avatar[_ngcontent-%COMP%]{height:100%;width:100%}.imganime[_ngcontent-%COMP%]{height:100%;object-fit:cover}.contenedorTitulo[_ngcontent-%COMP%]{text-align:center;font-weight:700;margin-top:.5em;margin-bottom:.5em}.contenedorIndice[_ngcontent-%COMP%]{width:7.5%}.negrita[_ngcontent-%COMP%]{font-weight:700}.contenedorDatos[_ngcontent-%COMP%]{margin-left:5px;margin-bottom:5px}@media screen and (max-width: 450px){.colImagen[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{height:55%!important}}.itemPadre[_ngcontent-%COMP%]{--padding-start: 0}"]}),c})();var L=T(95);const K=(0,T(2726).fo)("Browser",{web:()=>T.e(671).then(T.bind(T,3671)).then(s=>new s.BrowserWeb)}),Y=["tarjetaOpciones"];function ee(s,c){if(1&s&&(e.TgZ(0,"ion-card",2,3)(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6),e.qZA()(),e.TgZ(7,"ion-card-content"),e.Hsn(8),e.qZA()()),2&s){const r=e.oxw();e.xp6(4),e.Oqu(r.titulo),e.xp6(2),e.Oqu(r.subtitulo)}}const ge=s=>({fondoOpciones:s}),te=["*"];let ne=(()=>{var s;class c{constructor(){this.filtroVisible=!1}ngOnInit(){}onGlobalClick(t){this.filtroVisible&&(this.tarjetaOpciones.nativeElement.contains(t.target)||(this.filtroVisible=!1))}}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-tarjeta-opciones"]],viewQuery:function(t,n){if(1&t&&e.Gf(Y,5,e.SBq),2&t){let o;e.iGM(o=e.CRH())&&(n.tarjetaOpciones=o.first)}},hostBindings:function(t,n){1&t&&e.NdJ("mousedown",function(g){return n.onGlobalClick(g)},!1,e.evT)},inputs:{filtroVisible:"filtroVisible",titulo:"titulo",subtitulo:"subtitulo"},standalone:!0,features:[e.jDz],ngContentSelectors:te,decls:2,vars:4,consts:[[3,"ngClass"],["class","cardOpciones ion-no-margin",4,"ngIf"],[1,"cardOpciones","ion-no-margin"],["tarjetaOpciones",""]],template:function(t,n){1&t&&(e.F$t(),e._UZ(0,"div",0),e.YNc(1,ee,9,2,"ion-card",1)),2&t&&(e.Q6J("ngClass",e.VKq(2,ge,n.filtroVisible)),e.xp6(),e.Q6J("ngIf",n.filtroVisible))},dependencies:[m.PM,m.FN,m.Zi,m.Dq,m.tO,M.ez,M.mk,M.O5],styles:[".cardOpciones[_ngcontent-%COMP%]{z-index:999;position:absolute;right:0;width:300px}@media screen and (max-width: 600px){.cardOpciones[_ngcontent-%COMP%]{position:fixed;width:80vw;top:calc((100% - 210px)/2);left:10vw;right:10vw}.fondoOpciones[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:998;background:#d3d3d3;opacity:.5}}"]}),c})();class ie{constructor(){this.cancelar=!1,this.alAnadir=c=>{}}}const oe=["botonAuto"],re=["toggleModo"];function he(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"AJUSTES"),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.setModalOpen(!1))}),e._uU(6,"Cerrar"),e.qZA()()()(),e.TgZ(7,"ion-content",3)(8,"ion-list",4)(9,"ion-item")(10,"ion-toggle",5,6),e.NdJ("ionChange",function(n){e.CHM(r);const o=e.oxw();return e.KtG(o.alternarModo(n))}),e._uU(12,"Modo oscuro"),e.qZA(),e.TgZ(13,"ion-button",7,8),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.cambiarAuto())}),e._uU(15,"Auto"),e.qZA()()()()}if(2&s){const r=e.oxw();e.xp6(10),e.Q6J("checked",r.esModoOscuro)("disabled",r.toggleDisabled()),e.xp6(3),e.Q6J("fill",r.fillBotonAuto())}}let l=(()=>{var s;class c{constructor(){this.themeToggle=!1,this.abrirModal=!1}get isDarkTheme(){return document.body.classList.contains("dark")}setModalOpen(t){this.abrirModal=t}ngOnInit(){this.initializeDarkTheme(this.esModoOscuro)}fillBotonAuto(){return null!=window.localStorage.getItem("modo")?"outline":"solid"}toggleDisabled(){return null==window.localStorage.getItem("modo")}initializeDarkTheme(t){this.themeToggle=t,this.toggleDarkTheme(t)}toggleDarkTheme(t){document.body.classList.toggle("dark",t)}abrir(){this.abrirModal=!0}guardarPreferenciaModo(t){window.localStorage.setItem("modo",t?"true":"false")}borrarPreferenciaModo(){window.localStorage.removeItem("modo")}cambiarAuto(){null!=window.localStorage.getItem("modo")?(this.borrarPreferenciaModo(),this.botonAuto.fill="solid",this.toggleModo.disabled=!0,this.toggleDarkTheme(this.esModoOscuro)):(this.guardarPreferenciaModo(this.esModoOscuro),this.botonAuto.fill="outline",this.toggleModo.disabled=!1)}get esModoOscuro(){return null==window.localStorage.getItem("modo")?window.matchMedia("(prefers-color-scheme: dark)").matches:"true"==window.localStorage.getItem("modo")}alternarModo(t){let n=t.detail.checked;window.localStorage.setItem("modo",n?"true":"false"),this.toggleDarkTheme(n)}}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-ajustes"]],viewQuery:function(t,n){if(1&t&&(e.Gf(oe,5),e.Gf(re,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.botonAuto=o.first),e.iGM(o=e.CRH())&&(n.toggleModo=o.first)}},standalone:!0,features:[e.jDz],decls:2,vars:2,consts:[[3,"isOpen","backdropDismiss"],["slot","end"],[3,"click"],[1,"ion-padding"],[1,"ion-no-padding","ion-no-margin"],[3,"checked","disabled","ionChange"],["toggleModo",""],[3,"fill","click"],["botonAuto",""]],template:function(t,n){1&t&&(e.TgZ(0,"ion-modal",0),e.YNc(1,he,16,3,"ng-template"),e.qZA()),2&t&&e.Q6J("isOpen",n.abrirModal)("backdropDismiss",!1)},dependencies:[m.ki,m.Gu,m.sr,m.wd,m.Sm,m.YG,m.W2,m.q_,m.Ie,m.ho]}),c})();const i=["filtroBusqueda"],a=["filtroVisibilidad"],p=["modalAjustes"],h=["checkResumenes"],d=["checkOtros"],v=["checkCharacter"],f=["toastAviso"],P=["alerta"];function C(s,c){1&s&&(e.TgZ(0,"ion-row")(1,"ion-col",20),e._UZ(2,"ion-progress-bar",21),e.qZA()())}function z(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-button",37),e.NdJ("click",function(){e.CHM(r);const n=e.oxw(2);return e.KtG(n.cancelarBusqueda())}),e._uU(1,"Cancelar"),e.qZA()}}function H(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-button",37),e.NdJ("click",function(){e.CHM(r);const n=e.oxw(2);return e.KtG(n.solicitarLimpiar())}),e._uU(1,"Limpiar"),e.qZA()}}function V(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"div",38)(1,"ion-checkbox",39),e.NdJ("ionChange",function(){const o=e.CHM(r).$implicit,g=e.oxw(2);return e.KtG(g.cambiarVisualizacion(o))}),e._uU(2),e.qZA()()}if(2&s){const r=c.$implicit,t=e.oxw(2);e.xp6(),e.Q6J("checked",t.tipos.get(r)),e.xp6(),e.Oqu(r)}}function se(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"app-anime",40),e.NdJ("alClicar",function(n){e.CHM(r);const o=e.oxw(2);return e.KtG(o.abrirNavegador(n))}),e.qZA()}if(2&s){const r=c.$implicit;e.Q6J("indice",c.index+1)("anime",r)}}function ae(s,c){if(1&s){const r=e.EpF();e.TgZ(0,"ion-row")(1,"ion-col",22)(2,"ion-item",23)(3,"ion-grid")(4,"ion-row")(5,"ion-col",24),e._uU(6),e.qZA(),e.TgZ(7,"ion-col",25),e.YNc(8,z,2,0,"ion-button",26)(9,H,2,0,"ion-button",26),e.TgZ(10,"ion-button",27,28),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.mostrarVisibilidad())}),e._UZ(12,"ion-icon",29),e.qZA()()()()(),e.TgZ(13,"app-tarjeta-opciones",30,31)(15,"div",32),e.YNc(16,V,3,2,"div",33),e.qZA()(),e.TgZ(17,"ion-content",34)(18,"ion-list",35),e.YNc(19,se,1,2,"app-anime",36),e.qZA()()()()}if(2&s){const r=e.oxw();e.xp6(6),e.hij("Cap\xedtulos: ",r.getCapitulosTotales(),""),e.xp6(2),e.Q6J("ngIf",r.barraProgreso),e.xp6(),e.Q6J("ngIf",!r.barraProgreso&&r.animes),e.xp6(7),e.Q6J("ngForOf",r.clavesDeTipos),e.xp6(),e.Q6J("scrollEvents",!0),e.xp6(2),e.Q6J("ngForOf",r.animesVisibles)}}let le=(()=>{var s;class c{get clavesDeTipos(){var t;return null===(t=[...this.tipos.keys()])||void 0===t?void 0:t.sort()}get animesVisibles(){var t;return null===(t=this.animes)||void 0===t?void 0:t.filter(n=>!this.tipos.has(n.type)||this.tipos.get(n.type))}setOpen(t){this.isToastOpen=t}setAlertOpen(t){this.isAlertOpen=t}get filtros(){let t=[];return this.summary&&t.push("Summary"),this.other&&t.push("Other"),this.character&&t.push("Character"),t}constructor(t){var o,n=this;this.animeService=t,this.animes=[],this.barraProgreso=!1,this.isToastOpen=!1,this.isAlertOpen=!1,this.alertButtons=[{text:"No",role:"cancel",handler:()=>{}},{text:"S\xed",role:"confirm",handler:(o=(0,b.Z)(function*(){n.urlParaAbrir?(yield K.open({url:n.urlParaAbrir}),n.urlParaAbrir=void 0):n.limpiarTodo()}),function(){return o.apply(this,arguments)})}],this.summary=!1,this.other=!1,this.character=!1,this.tipos=new Map,this.controladorBusqueda=new ie,this.controladorBusqueda.alAnadir=o=>{null!=o&&o.type&&(this.tipos.has(o.type)?this.tipos.set(o.type,!0===this.tipos.get(o.type)):this.tipos.set(o.type,!0))}}ver(t){let n={mal_id:t.id,url:t.url,type:"",name:""};this.animes=[],this.animeService.obtenidos.clear(),this.animeService.obtenidos.set(n.mal_id,n),this.barraProgreso=!0,this.controladorBusqueda.cancelar=!1,this.tipos.clear(),this.animeService.sagase(n,this.filtros,this.animes,this.controladorBusqueda).then(()=>{this.barraProgreso=!1,this.isToastOpen=!0,this.toastAviso.message="Se han encontrado "+this.animes.length+" resultados"}).catch(o=>{console.error(o),this.barraProgreso=!1,this.isToastOpen=!0,this.toastAviso.message=null!=o?o:"Ha ocurrido un error; int\xe9ntelo de nuevo m\xe1s adelante."})}mostrarFiltro(){this.filtroBusqueda.filtroVisible=!0}abrirAjustes(){this.modalAjustes.abrir()}mostrarVisibilidad(){this.filtroVisibilidad.filtroVisible=!0}abrirNavegador(t){var n=this;return(0,b.Z)(function*(){n.urlParaAbrir=t,n.cambiarMensajeAlerta("Abrir enlace","Se va a abrir un enlace externo; \xbfdesea continuar?"),n.isAlertOpen=!0})()}getCapitulosTotales(){return this.animesVisibles?this.animesVisibles.map(t=>t.episodes).reduce((t,n)=>t+n,0):0}cancelarBusqueda(){this.controladorBusqueda.cancelar=!0}limpiarTodo(){this.animes=[]}solicitarLimpiar(){this.cambiarMensajeAlerta("Limpiar b\xfasqueda","\xbfDesea eliminar los resultados de su b\xfasqueda?"),this.isAlertOpen=!0}cambiarVisualizacion(t){this.tipos.set(t,!this.tipos.get(t)),console.log(this.tipos)}cambiarMensajeAlerta(t,n){this.alerta.header=t,this.alerta.message=n}}return(s=c).\u0275fac=function(t){return new(t||s)(e.Y36(W))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-home"]],viewQuery:function(t,n){if(1&t&&(e.Gf(i,5),e.Gf(a,5),e.Gf(p,5),e.Gf(h,5),e.Gf(d,5),e.Gf(v,5),e.Gf(f,5),e.Gf(P,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.filtroBusqueda=o.first),e.iGM(o=e.CRH())&&(n.filtroVisibilidad=o.first),e.iGM(o=e.CRH())&&(n.modalAjustes=o.first),e.iGM(o=e.CRH())&&(n.checkResumenes=o.first),e.iGM(o=e.CRH())&&(n.checkOtros=o.first),e.iGM(o=e.CRH())&&(n.checkCharacter=o.first),e.iGM(o=e.CRH())&&(n.toastAviso=o.first),e.iGM(o=e.CRH())&&(n.alerta=o.first)}},standalone:!0,features:[e.jDz],decls:34,vars:9,consts:[[1,"ion-no-margin"],[1,"barraSuperior"],["size-xs","12","size-sm","10"],[3,"alSeleccionar","alAbrirFiltro","alAbrirAjustes"],["titulo","Filtro de b\xfasqueda","subtitulo","Omitir:"],["filtroBusqueda",""],["size","6","offset","1"],["labelPlacement","end",3,"ngModel","ngModelChange"],["checkResumenes",""],["checkOtros",""],["checkCharacter",""],["size-sm","2",1,"ion-hide-sm-down","flexCenterRight"],["fill","clear","shape","circle",3,"click"],["slot","start","src","assets/icon/settings.svg"],[4,"ngIf"],[3,"isOpen","duration","didDismiss"],["toastAviso",""],[3,"isOpen","buttons","didDismiss"],["alerta",""],["modalAjustes",""],["size","12"],["type","indeterminate"],["size-xs","12","size-sm","8","offset-sm","2",1,"contentScroll"],[1,"overflowVisible"],["size","6",1,"flexTextoCentradoVerticalmente"],["size","6",2,"z-index","3"],["class","ion-float-right","shape","round",3,"click",4,"ngIf"],["fill","clear","shape","circle","id","botonVisibilidad",1,"ion-float-right",3,"click"],["botonVisibilidad",""],["slot","icon-only","src","assets/icon/visibility.svg"],["titulo","Mostrar","subtitulo","",1,"filtroVisibilidad"],["filtroVisibilidad",""],[1,"contenedorFiltroVisualizacion"],["class","itemFiltroVisualizacion",4,"ngFor","ngForOf"],[3,"scrollEvents"],[1,"ion-no-padding"],[3,"indice","anime","alClicar",4,"ngFor","ngForOf"],["shape","round",1,"ion-float-right",3,"click"],[1,"itemFiltroVisualizacion"],["justify","start","labelPlacement","end",3,"checked","ionChange"],[3,"indice","anime","alClicar"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-grid",0)(1,"ion-row",1)(2,"ion-col",2)(3,"app-buscador",3),e.NdJ("alSeleccionar",function(g){return n.ver(g)})("alAbrirFiltro",function(){return n.mostrarFiltro()})("alAbrirAjustes",function(){return n.abrirAjustes()}),e.qZA(),e.TgZ(4,"app-tarjeta-opciones",4,5)(6,"ion-grid")(7,"ion-row")(8,"ion-col",6)(9,"ion-checkbox",7,8),e.NdJ("ngModelChange",function(g){return n.summary=g}),e._uU(11,"Res\xfamenes"),e.qZA()()(),e.TgZ(12,"ion-row")(13,"ion-col",6)(14,"ion-checkbox",7,9),e.NdJ("ngModelChange",function(g){return n.other=g}),e._uU(16,"Otros"),e.qZA()()(),e.TgZ(17,"ion-row")(18,"ion-col",6)(19,"ion-checkbox",7,10),e.NdJ("ngModelChange",function(g){return n.character=g}),e._uU(21,"Character"),e.qZA()()()()()(),e.TgZ(22,"ion-col",11)(23,"ion-button",12),e.NdJ("click",function(){return n.abrirAjustes()}),e._UZ(24,"ion-icon",13),e._uU(25," Ajustes "),e.qZA()()(),e.YNc(26,C,3,0,"ion-row",14)(27,ae,20,6,"ion-row",14),e.qZA(),e.TgZ(28,"ion-toast",15,16),e.NdJ("didDismiss",function(){return n.setOpen(!1)}),e.qZA(),e.TgZ(30,"ion-alert",17,18),e.NdJ("didDismiss",function(){return n.setAlertOpen(!1)}),e.qZA(),e._UZ(32,"app-ajustes",null,19)),2&t&&(e.xp6(9),e.Q6J("ngModel",n.summary),e.xp6(5),e.Q6J("ngModel",n.other),e.xp6(5),e.Q6J("ngModel",n.character),e.xp6(7),e.Q6J("ngIf",n.barraProgreso),e.xp6(),e.Q6J("ngIf",null!=n.animes&&n.animes.length>0),e.xp6(),e.Q6J("isOpen",n.isToastOpen)("duration",5e3),e.xp6(2),e.Q6J("isOpen",n.isAlertOpen)("buttons",n.alertButtons))},dependencies:[l,ne,m.Ge,m.Px,m.X7,m.W2,me,pe,m.jY,m.Nd,m.wI,m.q_,m.Ie,m.YG,m.gu,m.nz,M.ez,M.sg,M.O5,L.u5,L.JJ,L.On],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.barraSuperior[_ngcontent-%COMP%]{height:75px}.contentScroll[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 90px)}.contentScroll[_ngcontent-%COMP%] > ion-item[_ngcontent-%COMP%]{height:50px}.contentScroll[_ngcontent-%COMP%] > ion-content[_ngcontent-%COMP%]{height:calc(100% - 50px)}.flexTextoCentradoVerticalmente[_ngcontent-%COMP%]{display:flex;align-items:center}ion-list[_ngcontent-%COMP%]:last-child{margin-bottom:100px}#botonVisibilidad[_ngcontent-%COMP%]{position:relative}.filtroVisibilidad[_ngcontent-%COMP%]{right:0;position:absolute}.overflowVisible[_ngcontent-%COMP%]{position:relative;overflow:visible}.contenedorFiltroVisualizacion[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-wrap:wrap;row-gap:2em}.itemFiltroVisualizacion[_ngcontent-%COMP%]{width:50%;display:flex;align-items:center}.flexCenterRight[_ngcontent-%COMP%]{display:flex;justify-content:right;align-items:center}.botonSuperior[shape=circle][_ngcontent-%COMP%]{--border-radius: 50%;width:56px;height:56px}@media screen and (max-width: 600px){app-tarjeta-opciones[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:1.1em}app-tarjeta-opciones[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--size: 32px}}"]}),c})()}}]);