(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/minus.4f28c0eb.svg"},function(e,t,n){e.exports=n.p+"static/media/plus.e744f4ba.svg"},function(e,t,n){e.exports=n.p+"static/media/heart.b5e5a96a.svg"},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),i=n(1),u=n(2),s=n.n(u),l=n(5),f=n.n(l),d=n(6),m=n.n(d),w=function(e){var t=e.scale,n=e.setScale,c=Object(a.useState)(null),r=Object(i.a)(c,2),u=r[0],l=r[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:s()("PushButton",{ActivePushButton:"up"===u}),onMouseDown:function(){l("up")},onMouseUp:function(){l()},onClick:function(){return n(t+1)}},o.a.createElement("img",{src:m.a,alt:"plus"})),o.a.createElement("span",{className:"OctaveControl"},t),o.a.createElement("span",{className:s()("PushButton",{ActivePushButton:"down"===u}),onMouseDown:function(){l("down")},onMouseUp:function(){l()},onClick:function(){return n(t-1)}},o.a.createElement("img",{src:f.a,alt:"minus"})))},p="awsedftgyhujkolp;'".split(""),v=["triangle","square","sine","sawtooth"],E=[261.6,277.2,293.7,311.1,329.6,349.2,370,392,415.3,440,466.2,493.9,523.3,554.4,587.3,622.3,659.3,698.5],k=function(e){var t=e.type,n=e.active,a=e.onClick;return o.a.createElement("div",{className:s()("PushButton",{ActivePushButton:t===n}),onClick:function(){return a(t)}},t)},y=function(e){var t=e.active,n=e.onClick;return o.a.createElement(o.a.Fragment,null,v.map(function(e){return o.a.createElement(k,{key:e,type:e,active:t,onClick:n})}))},b=new AudioContext,O=function(e,t){var n=b.createOscillator(),a=b.createGain();n.type=t,n.connect(a),n.frequency.value=e,a.connect(b.destination),n.start(0),a.gain.exponentialRampToValueAtTime(1e-5,b.currentTime+2)},h="wetyuop".split(""),g=function(e){var t=e.keyboardCode,n=e.index,c=e.scale,r=e.type,u=h.indexOf(t)>=0,l=Object(a.useState)(!1),f=Object(i.a)(l,2),d=f[0],m=f[1],w=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],c=n[1],r=function(t){var n=t.key;e===n&&c(!0)},u=function(t){var n=t.key;e===n&&c(!1)};return Object(a.useEffect)(function(){return window.addEventListener("keydown",r),window.addEventListener("keyup",u),function(){window.removeEventListener("keydown",r),window.removeEventListener("keyup",u)}},[]),o}(t);return Object(a.useEffect)(function(){w&&O(E[n]*Math.pow(2,c),r)},[w,n,c,r]),o.a.createElement("div",{className:s()("Button",{Black:u,Pressed:w,MousePressed:d}),onMouseDown:function(){m(!0),O(E[n]*Math.pow(2,c),r)},onMouseUp:function(){return m(!1)}})},j=function(e){var t=e.scale,n=e.type;return o.a.createElement("div",{className:"ButtonBox"},p.map(function(e,a){return o.a.createElement(g,{key:e,keyboardCode:e,index:a,scale:t,type:n})}))},x=n(7),B=n.n(x),S=function(){return o.a.createElement("footer",null,"crafted with ",o.a.createElement("img",{className:"heartIcon",src:B.a,alt:"Logo"})," by"," ",o.a.createElement("a",{href:"http://borzeckid.com"},"borzecki"))},C=(n(13),function(){return o.a.createElement("div",{className:"Separator"})}),L=function(){var e=function(){var e,t=Object(a.useState)(),n=Object(i.a)(t,2),o=n[0],c=n[1],r=Object(a.useState)(new Set([])),u=Object(i.a)(r,2),s=u[0],l=u[1],f=function(e){c(e.key),l(s.add(e.key))},d=function(t){c(null),(e=new Set(s)).delete(t.key),l(e)};return Object(a.useEffect)(function(){return window.addEventListener("keydown",f),window.addEventListener("keyup",d),function(){window.removeEventListener("keydown",f),window.removeEventListener("keyup",d)}},[]),[o,s]}(),t=Object(i.a)(e,1)[0],n=o.a.useState("triangle"),c=Object(i.a)(n,2),r=c[0],u=c[1],s=o.a.useState(0),l=Object(i.a)(s,2),f=l[0],d=l[1];return o.a.useEffect(function(){"1234".indexOf(t)>=0?u(v["1234".indexOf(t)]):"-z".indexOf(t)>=0?d(f-1):"=x".indexOf(t)>=0&&d(f+1)},[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{active:r,onClick:u}),o.a.createElement(C,null),o.a.createElement(w,{scale:f,setScale:d}),o.a.createElement(j,{scale:f,type:r}),o.a.createElement(S,null))};n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.fc9c394e.chunk.js.map