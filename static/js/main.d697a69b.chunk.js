(this["webpackJsonpreact-nasa-api"]=this["webpackJsonpreact-nasa-api"]||[]).push([[0],{46:function(n,e,t){n.exports=t.p+"static/media/logo.49c0087c.svg"},48:function(n,e,t){n.exports=t.p+"static/media/icon-checkbox.25b19568.svg"},49:function(n,e,t){n.exports=t.p+"static/media/icon-checkbox-empty.dff75d5d.svg"},50:function(n,e,t){n.exports=t.p+"static/media/icon-video.ca95b66e.svg"},51:function(n,e,t){n.exports=t.p+"static/media/icon-audio.efaa42d4.svg"},52:function(n,e,t){n.exports=t.p+"static/media/icon-image.b177de2f.svg"},54:function(n,e,t){n.exports=t.p+"static/media/icon-search.2f4f7873.svg"},56:function(n,e,t){n.exports=t(83)},83:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(17),c=t(13),o=t(4),u=t(16),s=t(41),l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"QUERY_CHANGED":return e.query;default:return n}};var d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REQUEST_RESULTS":return Object.assign({},n,{isFetching:!0});case"RECEIVE_RESULTS":return Object.assign({},n,{isFetching:!1,items:e.items,lastUpdated:e.receivedAt});default:return n}},f=t(11),p=t(42);var m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,items:{}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REQUEST_ASSET":return Object.assign({},n,{isFetching:!0});case"RECEIVE_ASSET":return Object.assign({},n,{isFetching:!1,items:Object(p.a)({},n.items,Object(f.a)({},e.item.nasaid,e.item)),lastUpdated:e.receivedAt});default:return n}},g=t(22),b=["image"],h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FILTER_CHANGED":var t=e.name,r=Object(g.a)(n);return r.includes(t)?r=r.filter((function(n){return n!==e.name})):r.push(t),r;default:return n}},v=Object(u.c)({query:l,results:d,assets:m,activeFilters:h}),j=Object(u.d)(v,Object(u.a)(s.a)),E=t(15),O=t(1),x=t(90),k=Object(x.a)({color:{red:{regular:"#df1b33",transparent:"rgba(217, 47, 47, 0.2)"},light:{regular:"#eef5d9",transparent:"rgba(255, 255, 255, 0.2)"},dark:{regular:"#1d2a39",transparent:"rgb(30, 44, 61, 0.4)"},darker:{regular:"#1c2529",transparent:"rgba(0, 0, 0, 0.4)"}},height:{input:"48px"},elevation:function(n){return["0 2px 6px rgba(0, 0, 0, 0.1)","0 4px 8px rgba(0, 0, 0, 0.15)","0 6px 10px rgba(0, 0, 0, 0.2)"][n]},radius:function(n){return[0,4,8,16][n]+"px"},spacing:function(n){return[0,4,8,12,16,24,32,48,64][n]+"px"}}),y=t(3);function w(){var n=Object(y.a)(["\n    * {\n      border: 0;\n      box-sizing: border-box;\n      color: inherit;\n      margin: 0;\n      padding: 0;\n    }\n\n    html {\n      font-size: 14px;\n    }\n\n    body {\n      background-color: ",";\n      color: ",";\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,\n        sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n      line-height: 1.6;\n    }\n\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p {\n      &:not(:last-child) {\n        margin-bottom: ",";\n      }\n    }\n\n    img,\n    video {\n      width: 100%;\n    }\n  "]);return w=function(){return n},n}function A(){var n=Object(y.a)(["\n  ","\n"]);return A=function(){return n},n}var S=Object(O.b)(A(),(function(n){var e=n.theme,t=e.color,r=e.spacing;return Object(O.c)(w(),t.red.regular,t.dark.regular,r(4))})),T=t(46),F=t.n(T);function R(){var n=Object(y.a)(["\n    width: 100px;\n\n    "," {\n      width: 200px;\n    }\n  "]);return R=function(){return n},n}function U(){var n=Object(y.a)(["\n  ","\n"]);return U=function(){return n},n}var I=O.d.img(U(),(function(n){var e=n.theme.breakpoints;return Object(O.c)(R(),e.up("md"))}));I.defaultProps={src:F.a,alt:"NASA Logo"};var C=I;function L(){var n=Object(y.a)(["\n    display: block;\n    margin: 0 auto;\n    max-width: 100%;\n    padding: ",";\n    width: 1200px;\n\n    "," {\n      padding: ",";\n    }\n  "]);return L=function(){return n},n}function _(){var n=Object(y.a)(["\n  ","\n"]);return _=function(){return n},n}var V=O.d.div(_(),(function(n){var e=n.theme,t=e.breakpoints,r=e.spacing;return Object(O.c)(L(),r(5),t.up("md"),r(8))}));function z(){var n=Object(y.a)(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    margin: -",";\n  "]);return z=function(){return n},n}function N(){var n=Object(y.a)(["\n  ","\n"]);return N=function(){return n},n}var W=O.d.div(N(),(function(n){var e=n.theme.spacing;return Object(O.c)(z(),e(2))})),q=t(91);function B(){var n=Object(y.a)(["\n    background-color: ",";\n    display: inline-flex;\n    height: 3px;\n    width: 100%;\n  "]);return B=function(){return n},n}function D(){var n=Object(y.a)(["\n  ","\n\n  ","\n"]);return D=function(){return n},n}var P=O.d.hr(D(),(function(n){var e=n.theme.color;return Object(O.c)(B(),e.dark.regular)}),q.a),Q=t(19),H=t.n(Q);function G(n,e){return function(t){return t(function(n,e){return{type:"REQUEST_RESULTS",query:n,activeFilters:e}}(n,e)),H.a.get("https://images-api.nasa.gov/search?q=".concat(n,"&media_type=").concat(e.toString())).then((function(n){return t({type:"RECEIVE_RESULTS",items:n.data.collection.items,receivedAt:Date.now()})}))}}var M=t(26),J=t.n(M),Y=t(47);var Z=t(48),$=t.n(Z),K=t(49),X=t.n(K);function nn(){var n=Object(y.a)(["\n    display: inline-block;\n    margin: ",";\n\n    label {\n      align-items: center;\n      background-image: url(",");\n      background-position: center left 8px;\n      background-repeat: no-repeat;\n      background-size: ",";\n      border-radius: ",";\n      border: 3px solid transparent;\n      color: ",";\n      cursor: pointer;\n      display: inline-flex;\n      font-weight: 600;\n      height: ",";\n      padding-left: ",";\n      padding-right: ",";\n      position: relative;\n      transition-duration: 200ms;\n      transition-property: color, background-color;\n      transition-timing-function: linear;\n      width: 100%;\n    }\n\n    input {\n      opacity: 0;\n      position: absolute;\n      pointer-events: none;\n    }\n\n    input:focus-visible ~ label {\n      box-shadow: 0 0 0 2px ",",\n        0 0 0 6px ",";\n    }\n\n    input:checked ~ label {\n      background-color: ",";\n      background-image: url(",");\n      color: ",";\n    }\n\n    input:checked:focus-visible ~ label {\n      box-shadow: 0 0 0 2px ",",\n        0 0 0 6px ",";\n    }\n  "]);return nn=function(){return n},n}function en(){var n=Object(y.a)(["\n  ","\n"]);return en=function(){return n},n}var tn=O.d.div(en(),(function(n){var e=n.theme,t=e.color,r=e.height,a=e.radius,i=e.spacing;return Object(O.c)(nn(),i(2),X.a,i(6),a(1),t.dark.regular,r.input,i(7),i(3),t.dark.regular,t.dark.transparent,t.dark.regular,$.a,t.light.regular,t.light.regular,t.light.transparent)}));var rn=function(){var n=Object(o.b)(),e=Object(o.c)((function(n){return n.activeFilters})),t=function(e){return n({type:"FILTER_CHANGED",name:e.target.name})};return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,null,a.a.createElement("input",{id:"image",type:"checkbox",name:"image",checked:e.includes("image"),onChange:t}),a.a.createElement("label",{htmlFor:"image"},"Images")),a.a.createElement(tn,null,a.a.createElement("input",{id:"audio",type:"checkbox",name:"audio",checked:e.includes("audio"),onChange:t}),a.a.createElement("label",{htmlFor:"audio"},"Audio")),a.a.createElement(tn,null,a.a.createElement("input",{id:"video",type:"checkbox",name:"video",checked:e.includes("video"),onChange:t}),a.a.createElement("label",{htmlFor:"video"},"Video")))};var an=function(){var n=Object(o.b)(),e=Object(o.c)((function(n){return n.query})),t=Object(o.c)((function(n){return n.activeFilters}));Object(r.useEffect)((function(){n(G(e,t))}),[e,t,n])};function cn(){var n=Object(y.a)(["\n    column-count: 1;\n    column-gap: ",";\n\n    "," {\n      column-count: 2;\n    }\n\n    "," {\n      column-count: 3;\n    }\n  "]);return cn=function(){return n},n}function on(){var n=Object(y.a)(["\n  ","\n"]);return on=function(){return n},n}var un=O.d.div(on(),(function(n){var e=n.theme,t=e.breakpoints,r=e.spacing;return Object(O.c)(cn(),r(2),t.up("sm"),t.up("lg"))}));function sn(){var n=Object(y.a)(["\n    color: ",";\n    font-size: 1rem;\n    padding: ",";\n  "]);return sn=function(){return n},n}function ln(){var n=Object(y.a)(["\n  ","\n"]);return ln=function(){return n},n}function dn(){var n=Object(y.a)(["\n    position: absolute;\n    right: ",";\n    top: ",";\n    width: ",";\n    z-index: 1;\n  "]);return dn=function(){return n},n}function fn(){var n=Object(y.a)(["\n  ","\n"]);return fn=function(){return n},n}function pn(){var n=Object(y.a)(["\n    border-radius: ",";\n    filter: sepia(20%) contrast(100%);\n    opacity: 0.5;\n    transition-duration: 200ms;\n    transition-property: opacity, filter;\n    transition-timing-function: linear;\n    width: 100%;\n\n    &:hover {\n      filter: sepia(20%) contrast(80%);\n      opacity: 1;\n    }\n  "]);return pn=function(){return n},n}function mn(){var n=Object(y.a)(["\n  ","\n"]);return mn=function(){return n},n}function gn(){var n=Object(y.a)(["\n    background-color: ",";\n    border-radius: ",";\n    display: inline-flex;\n    margin-bottom: ",";\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n  "]);return gn=function(){return n},n}function bn(){var n=Object(y.a)(["\n  ","\n"]);return bn=function(){return n},n}var hn=O.d.div(bn(),(function(n){var e=n.theme,t=e.color,r=e.radius,a=e.spacing;return Object(O.c)(gn(),t.dark.regular,r(2),a(2))}));hn.Preview=O.d.img(mn(),(function(n){var e=n.theme.radius;return Object(O.c)(pn(),e(2))})),hn.Type=O.d.img(fn(),(function(n){var e=n.theme.spacing;return Object(O.c)(dn(),e(2),e(2),e(6))})),hn.Title=O.d.p(ln(),(function(n){var e=n.theme,t=e.color,r=e.spacing;return Object(O.c)(sn(),t.light.regular,r(6))}));var vn=hn,jn=t(50),En=t.n(jn),On=t(51),xn=t.n(On),kn=t(52),yn=t.n(kn),wn={video:En.a,image:yn.a,audio:xn.a};var An=function(){var n=Object(o.c)((function(n){return n.results}));return an(),a.a.createElement(un,null,n.items&&n.items.map((function(n){var e=n.data[0],t=e.title,r=e.media_type,i=e.nasa_id;return a.a.createElement(vn,{as:c.b,to:"asset/".concat(i),key:i,"data-testid":"result-item"},a.a.createElement(vn.Type,{src:wn[r],alt:r}),("image"===r||"video"===r)&&a.a.createElement(vn.Preview,{src:n.links[0].href,alt:t}),"audio"===r&&a.a.createElement(vn.Title,null,t))})))},Sn=t(20),Tn=t(54),Fn=t.n(Tn);function Rn(){var n=Object(y.a)(["\n    background-color: ",";\n    background-image: url(",");\n    background-position: center right 12px;\n    background-repeat: no-repeat;\n    background-size: ",";\n    border-radius: ",";\n    border: "," solid transparent;\n    flex: 1 0 calc(100% - 16px);\n    font-size: 1.2rem;\n    font-weight: 700;\n    height: ",";\n    margin: ",";\n    min-width: 0;\n    outline: none;\n    padding-left: ",";\n    padding-right: ",";\n    transition: border 100ms linear;\n\n    &:focus {\n      box-shadow: 0 0 0 2px ",",\n        0 0 0 6px ",";\n    }\n\n    &::placeholder {\n      color: ",";\n      transition: opacity 100ms linear;\n    }\n\n    &:focus::placeholder {\n      opacity: 0;\n    }\n\n    "," {\n      flex: 3;\n    }\n  "]);return Rn=function(){return n},n}function Un(){var n=Object(y.a)(["\n  ","\n"]);return Un=function(){return n},n}var In=O.d.input(Un(),(function(n){var e=n.theme,t=e.breakpoints,r=e.color,a=e.height,i=e.radius,c=e.spacing;return Object(O.c)(Rn(),r.light.regular,Fn.a,c(6),i(1),c(1),a.input,c(2),c(3),c(6),r.dark.regular,r.dark.transparent,r.dark.regular,t.up("lg"))}));var Cn=function(){var n=Object(o.c)((function(n){return n.query})),e=Object(r.useState)(n),t=Object(Sn.a)(e,2),i=t[0],c=t[1],u=Object(r.useState)(),s=Object(Sn.a)(u,2),l=s[0],d=s[1],f=Object(o.b)();return a.a.createElement(In,{placeholder:"Search NASA's media API\u2026",value:i,onChange:function(n){var e=n.target.value;c(e),clearTimeout(l);var t=setTimeout((function(){f(function(n){return{type:"QUERY_CHANGED",query:n}}(e))}),500);d(t)}})},Ln=t(8),_n=t(92);function Vn(){var n=Object(y.a)(["\n    align-items: center;\n    background-color: ",";\n    border-radius: ",";\n    bottom: 0;\n    box-shadow: ",";\n    color: ",";\n    display: flex;\n    justify-content: center;\n    left: 50%;\n    padding-bottom: ",";\n    padding-left: ",";\n    padding-right: ",";\n    padding-top: ",";\n    position: fixed;\n    transition: transform ","ms;\n    z-index: 2;\n\n    ","\n  "]);return Vn=function(){return n},n}function zn(){var n=Object(y.a)(["\n  ","\n"]);return zn=function(){return n},n}function Nn(){var n=Object(y.a)(["\n    transform: translate3d(-50%, 100%, 0);\n  "]);return Nn=function(){return n},n}function Wn(){var n=Object(y.a)(["\n    transform: translate3d(-50%, 100%, 0);\n    transition-delay: 1s;\n  "]);return Wn=function(){return n},n}function qn(){var n=Object(y.a)(["\n    transform: translate3d(-50%, -24px, 0);\n  "]);return qn=function(){return n},n}function Bn(){var n=Object(y.a)(["\n    transform: translate3d(-50%, -24px, 0);\n  "]);return Bn=function(){return n},n}var Dn={entering:Object(O.c)(Bn()),entered:Object(O.c)(qn()),exiting:Object(O.c)(Wn()),exited:Object(O.c)(Nn())},Pn=O.d.div(zn(),(function(n){var e=n.theme,t=e.color,r=e.elevation,a=e.radius,i=e.spacing,c=n.state;return Object(O.c)(Vn(),t.dark.regular,a(1),r(1),t.light.regular,i(4),i(5),i(5),i(4),(function(n){return n.duration}),c&&Dn[c])}));function Qn(){var n=Object(y.a)(["\n    animation: "," 1.1s infinite linear;\n    border-radius: 50%;\n    border: "," solid ",";\n    border-left-color: ",";\n    height: ",";\n    margin-right: ",";\n    position: relative;\n    transform: translateZ(0);\n    width: ",";\n  "]);return Qn=function(){return n},n}function Hn(){var n=Object(y.a)(["\n  ","\n"]);return Hn=function(){return n},n}function Gn(){var n=Object(y.a)(["\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n"]);return Gn=function(){return n},n}var Mn=Object(O.e)(Gn()),Jn=O.d.div(Hn(),(function(n){var e=n.theme,t=e.color,r=e.spacing;return Object(O.c)(Qn(),Mn,r(1),t.light.transparent,t.light.regular,r(5),r(3),r(5))}));var Yn=function(n){var e=n.children,t=n.show,r=Object(Ln.a)(n,["children","show"]);return a.a.createElement(_n.a,{in:t,timeout:600},(function(n){return a.a.createElement(Pn,Object.assign({state:n,duration:600},r),a.a.createElement(Jn,null),e)}))};var Zn=function(){var n=Object(o.c)((function(n){return n.results.isFetching}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{marginTop:{xs:4,md:6},marginBottom:{xs:2,md:4}}),a.a.createElement(W,null,a.a.createElement(Cn,null),a.a.createElement(rn,null)),a.a.createElement(P,{marginTop:{xs:3,md:5},marginBottom:{xs:4,md:6}}),a.a.createElement(An,null),a.a.createElement(Yn,{show:n},"Updating Results\u2026"))};var $n=function(n){var e=Object(o.c)((function(e){return e.assets.items[n]})),t=Object(o.b)();Object(r.useEffect)((function(){e||t(function(n){return function(){var e=Object(Y.a)(J.a.mark((function e(t){var r,a;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_ASSET"}),e.next=3,H.a.get("https://images-api.nasa.gov/asset/".concat(n)).then((function(n){return n.data.collection.items}));case 3:return r=e.sent,e.next=6,H.a.get("https://images-api.nasa.gov/metadata/".concat(n)).then((function(n){return H.a.get(n.data.location).then((function(n){return n.data}))}));case 6:return a=e.sent,e.abrupt("return",t({type:"RECEIVE_ASSET",item:{nasaid:n,links:r,metadata:a}}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(n))}),[n,e,t])};var Kn=function(n){var e=n.match.params.nasaid,t=Object(o.c)((function(n){return n.assets.isFetching})),r=Object(o.c)((function(n){return n.assets.items[e]}));return $n(e),a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{marginTop:{xs:4,md:6},marginBottom:{xs:4,md:6}}),r&&a.a.createElement("div",null,a.a.createElement("h1",null,r.metadata["AVAIL:Title"]),a.a.createElement("p",null,r.metadata["AVAIL:Description"]),"image"===r.metadata["AVAIL:MediaType"]&&a.a.createElement("img",{src:r.links[1].href,alt:r.metadata["AVAIL:Title"]}),"audio"===r.metadata["AVAIL:MediaType"]&&a.a.createElement("audio",{src:r.links[0].href,controls:!0}),"video"===r.metadata["AVAIL:MediaType"]&&a.a.createElement("video",{src:r.links.filter((function(n){return n.href.includes(".mp4")}))[1].href,controls:!0})),a.a.createElement(Yn,{show:t},"Loading Asset\u2026"))};var Xn=function(){return a.a.createElement(o.a,{store:j},a.a.createElement(c.a,{basename:"/github-api-react-app"},a.a.createElement(O.a,{theme:k},a.a.createElement(S,null),a.a.createElement(V,null,a.a.createElement(c.b,{to:"/"},a.a.createElement(C,null)),a.a.createElement(E.d,null,a.a.createElement(E.b,{exact:!0,path:"/",component:Zn}),a.a.createElement(E.b,{exact:!0,path:"/asset/:nasaid",component:Kn}),a.a.createElement(E.a,{to:"/"}))))))},ne=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}Object(i.render)(a.a.createElement(o.a,{store:j},a.a.createElement(c.a,{basename:"/github-api-react-app"},a.a.createElement(Xn,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/github-api-react-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/github-api-react-app","/service-worker.js");ne?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):ee(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(e,n)}))}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.d697a69b.chunk.js.map