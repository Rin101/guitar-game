(this["webpackJsonpguitar-game"]=this["webpackJsonpguitar-game"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),r=n(4),a=n(7),s=n(6),o=n(1),i=n.n(o),u=n(5),l=n.n(u),d=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],j=["1st","2nd","3rd","4th","5th","6th"],m=(n(12),n(0)),b=function(){return Object(m.jsx)("div",{className:"main",children:Object(m.jsx)("div",{className:"countdown-game-container",children:Object(m.jsx)(h,{})})})},h=function(){var t=Object(o.useRef)(),e=Object(o.useRef)(),n=Object(o.useRef)(),c=function(t,e){e.textContent=t;var n,c=--t,r=setInterval((function(){n=c,c>=1&&(e.textContent=n),--c<0&&clearInterval(r)}),1e3)},r=function(){e.current.textContent=d[Math.floor(Math.random()*d.length)]+" on "+j[Math.floor(Math.random()*j.length)]+" string",c(5,t.current)},a=function(){n.current.classList.contains("playing")?(window.location.reload(),n.current.classList.remove("playing"),n.current.querySelector("p").textContent="Start"):(c(3,t.current),setTimeout((function(){r(),setInterval((function(){r()}),5e3)}),3e3),n.current.classList.add("playing"),n.current.querySelector("p").textContent="Stop")};return Object(m.jsxs)("div",{className:"countdown-game",children:[Object(m.jsx)("div",{className:"countdown",children:Object(m.jsx)("p",{className:"countdown-number",ref:t})}),Object(m.jsx)("div",{className:"mondai-container",children:Object(m.jsx)("p",{className:"mondai",ref:e})}),Object(m.jsx)("div",{className:"game-button-container",children:Object(m.jsx)("div",{className:"game-button",onClick:function(){return a()},ref:n,children:Object(m.jsx)("p",{className:"game-button-text",children:"Start"})})})]})},f=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"app",children:Object(m.jsx)(b,{})})}}]),n}(i.a.Component);l.a.render(Object(m.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8bc9bb07.chunk.js.map