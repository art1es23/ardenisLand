!function(o){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){var d=document.querySelector(".parallax-background"),o=document.querySelector(".faq"),n=o.querySelectorAll(".faq-list"),r=o.querySelector(".faq-navigation"),f=document.querySelector(".navigation-wrapper"),i=document.querySelector(".order-site"),c=i.querySelector(".order-site__title"),a=i.querySelector(".order-site__form"),l=document.querySelector(".stages"),s=document.querySelectorAll(".more-navigation__item"),u=document.querySelectorAll(".more-list__item");(new TimelineMax).fromTo(f,1,{y:-100,opacity:0},{y:0,opacity:1}).fromTo(l,.5,{x:-window.innerWidth,opacity:0},{x:0,opacity:1}).fromTo(o,.5,{x:window.innerWidth},{x:0}).fromTo(r,1,{opacity:0},{opacity:1}).fromTo(n,1,{x:-window.innerWidth,opacity:0},{x:0,opacity:1}).fromTo(i,.25,{x:window.innerWidth,opacity:0},{x:0,opacity:1}).fromTo(c,.5,{y:-500,opacity:0},{y:0,opacity:1}).fromTo(a,1,{x:500,opacity:0},{x:0,opacity:1});var m=document.querySelector(".navigation");document.querySelector(".menu").addEventListener("click",function(e){m.classList.toggle("menu-open"),f.classList.toggle("navigation_open")}),window.addEventListener("scroll",function(e){var t=window.pageYOffset,o=window.innerHeight;d.style.top=-t/5+"px",0===t&&(d.style.top="0px");var n=document.querySelector(".services-group"),r=n.querySelectorAll(".services"),i=n.getBoundingClientRect().top,c=n.querySelector(".services-shop"),a=c.getBoundingClientRect().top,n=n.querySelector(".video-wrapper");if(i<o)for(var l=0;l<r.length;l++)!function(e){setTimeout(function(){r[e].classList.add("show")},400*(e+1))}(l);var i=document.querySelector(".works"),s=i.querySelectorAll(".works__item");if(o>i.getBoundingClientRect().top)for(var u=0;u<s.length;u++)!function(e){setTimeout(function(){s[e].classList.add("show")},350*(e+1))}(u);a<o&&(c.style.overflow="visible",n.style.animation="show 1s ease forwards"),t>=f.clientHeight?f.classList.add("navigation_fixed"):f.classList.remove("navigation_fixed")});for(var v=0;v<s.length;v++)!function(t){s[t].addEventListener("click",function(e){Array.from(u).forEach(function(e){e.classList.remove("active")}),u[t].classList.add("active")})}(v);document.querySelector(".stages-navigation");for(var y=document.querySelectorAll(".stages-navigation__link"),g=document.querySelectorAll(".hero-stages"),p=document.querySelectorAll(".hero-stages__video-item"),q=document.querySelectorAll(".stages-list__item"),S=0;S<y.length;S++)!function(t){y[t].addEventListener("click",function(e){Array.from(g).forEach(function(e){e.classList.remove("stages_active")}),g[t].classList.add("stages_active"),p[0].classList.add("video-item--active")})}(S);for(var _=0;_<q.length;_++)!function(t){q[t].addEventListener("click",function(e){Array.from(p).forEach(function(e){e.classList.remove("video-item--active")}),p[t].classList.add("video-item--active")})}(_);for(var L=document.querySelectorAll(".faq-navigation__item"),w=document.querySelectorAll(".faq-list__item"),h=0;h<L.length;h++)!function(t){L[t].addEventListener("click",function(e){e.target,Array.from(w).forEach(function(e){e.classList.remove("faq_active")}),w[t].classList.add("faq_active")})}(h);var x=document.querySelectorAll(".modal"),b=document.querySelector(".modal--order"),E=document.querySelector(".modal--consultation"),i=document.querySelectorAll(".services__link"),c=document.querySelectorAll(".btn--consultation"),a=document.querySelectorAll(".btn--close");i.forEach(function(e){e.addEventListener("click",function(){b.classList.toggle("modal--active"),document.body.classList.add("scroll--hidden")})}),c.forEach(function(e){e.addEventListener("click",function(){E.classList.toggle("modal--active"),document.body.classList.add("scroll--hidden")})}),window.onclick=function(t){x.forEach(function(e){t.target===e&&(e.classList.remove("modal--active"),document.body.classList.remove("scroll--hidden"))})},a.addEventListener("click",function(t){x.forEach(function(e){t.target===e&&(e.classList.remove("modal--active"),document.body.classList.remove("scroll--hidden"))})});var A=document.querySelector(".cursor__ball-big"),T=document.querySelector(".cursor__ball-small"),k=document.querySelectorAll(".hoverable");document.body.addEventListener("mousemove",function(e){TweenMax.to(A,.25,{x:e.pageX-15,y:e.pageY-15}),TweenMax.to(T,.05,{x:e.pageX-5,y:e.pageY-7})});for(var M=0;M<k.length&&!window.CP.shouldStopExecution(0);M++)k[M].addEventListener("mouseenter",O),k[M].addEventListener("mouseleave",j);function O(){TweenMax.to(A,.3,{scale:4})}function j(){TweenMax.to(A,.3,{scale:1})}window.CP.exitedLoop(0)}]);
//# sourceMappingURL=main.js.map
