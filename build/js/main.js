!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){var d=document.querySelector(".parallax-background"),o=document.querySelector(".faq"),n=o.querySelectorAll(".faq-list"),i=o.querySelector(".faq-navigation"),f=document.querySelector(".navigation-wrapper"),r=document.querySelector(".order-site"),c=r.querySelector(".order-site__title"),l=r.querySelector(".order-site__form"),a=document.querySelector(".stages"),s=document.querySelectorAll(".more-navigation__item"),u=document.querySelectorAll(".more-list__item");(new TimelineMax).fromTo(f,1,{y:-100,opacity:0},{y:0,opacity:1}).fromTo(a,.5,{x:-window.innerWidth,opacity:0},{x:0,opacity:1}).fromTo(o,.5,{x:window.innerWidth},{x:0}).fromTo(i,1,{opacity:0},{opacity:1}).fromTo(n,1,{x:-window.innerWidth,opacity:0},{x:0,opacity:1}).fromTo(r,.25,{x:window.innerWidth/2,opacity:0},{x:0,opacity:1}).fromTo(c,.5,{y:-500,opacity:0},{y:0,opacity:1}).fromTo(l,1,{x:500,opacity:0},{x:0,opacity:1});var m=document.querySelector(".navigation"),r=document.querySelector(".menu"),v=r.querySelector(".menu-global"),c=document.querySelectorAll(".navigation .navigation__link");r.addEventListener("click",function(e){m.classList.toggle("menu-open"),f.classList.toggle("navigation_open"),v.classList.toggle("menu-global--active"),document.body.classList.toggle("scroll--hidden")}),c.forEach(function(e){return e.addEventListener("click",function(e){document.body.classList.remove("scroll--hidden"),m.classList.toggle("menu-open"),f.classList.toggle("navigation_open"),v.classList.toggle("menu-global--active")})});var y=document.querySelectorAll(".hero__slides"),g=0;slideInterval=setInterval(function(){y[g].className="hero__slides",g=(g+1)%y.length,y[g].className="hero__slides hero__slides--active"},5e3),window.addEventListener("scroll",function(e){var t=window.pageYOffset,o=window.innerHeight;d.style.top=-t/5+"px",0===t&&(d.style.top="0px");var n=document.querySelector(".services-group"),i=n.querySelectorAll(".services"),r=n.getBoundingClientRect().top,c=n.querySelector(".services-shop"),l=c.getBoundingClientRect().top,n=n.querySelector(".video-wrapper");if(r<o)for(var a=0;a<i.length;a++)!function(e){setTimeout(function(){i[e].classList.add("show")},400*(e+1))}(a);var r=document.querySelector(".works"),s=r.querySelectorAll(".works__item");if(o>r.getBoundingClientRect().top)for(var u=0;u<s.length;u++)!function(e){setTimeout(function(){s[e].classList.add("show")},350*(e+1))}(u);l<o&&(c.style.overflow="visible",n.style.animation="show 1s ease forwards"),t>=f.clientHeight?f.classList.add("navigation_fixed"):f.classList.remove("navigation_fixed")});for(var p=0;p<s.length;p++)!function(t){s[t].addEventListener("click",function(e){Array.from(u).forEach(function(e){e.classList.remove("active")}),u[t].classList.add("active")})}(p);document.querySelector(".stages-navigation");for(var _=document.querySelectorAll(".stages-navigation__link"),q=document.querySelectorAll(".hero-stages"),S=document.querySelectorAll(".hero-stages__video-item"),h=document.querySelectorAll(".stages-list__item"),L=0;L<_.length;L++)!function(t){_[t].addEventListener("click",function(e){Array.from(q).forEach(function(e){e.classList.remove("stages_active")}),q[t].classList.add("stages_active"),S[0].classList.add("video-item--active")})}(L);for(var w=0;w<h.length;w++)!function(t){h[t].addEventListener("click",function(e){Array.from(S).forEach(function(e){e.classList.remove("video-item--active")}),S[t].classList.add("video-item--active")})}(w);for(var b=document.querySelectorAll(".faq-navigation__item"),x=document.querySelectorAll(".faq-list__item"),A=0;A<b.length;A++)!function(t){b[t].addEventListener("click",function(e){e.target,Array.from(x).forEach(function(e){e.classList.remove("faq_active")}),x[t].classList.add("faq_active")})}(A);var E=document.querySelectorAll(".modal"),k=document.querySelector(".modal--order"),T=document.querySelector(".modal--consultation"),l=document.querySelectorAll(".services__link"),r=document.querySelectorAll(".btn--consultation"),c=document.querySelectorAll(".btn--close");l.forEach(function(e){e.addEventListener("click",function(){k.classList.toggle("modal--active"),document.body.classList.add("scroll--hidden")})}),r.forEach(function(e){e.addEventListener("click",function(){T.classList.toggle("modal--active"),document.body.classList.add("scroll--hidden")})}),window.onclick=function(t){E.forEach(function(e){t.target===e&&(e.classList.remove("modal--active"),document.body.classList.remove("scroll--hidden"))})},c.addEventListener("click",function(t){t.preventDefault(),E.forEach(function(e){t.target===e&&(e.classList.remove("modal--active"),document.body.classList.remove("scroll--hidden"))})})}]);
//# sourceMappingURL=main.js.map
