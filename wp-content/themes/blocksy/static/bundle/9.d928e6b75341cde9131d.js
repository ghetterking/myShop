(window.blocksyJsonP=window.blocksyJsonP||[]).push([[9],{25:function(t,e,n){"use strict";n.r(e),n.d(e,"mount",(function(){return a}));var i=n(3);let o=null;const s=(t,e)=>{t.dataset.sticky=e,e?t.style.width=Math.round(t.parentNode.getBoundingClientRect().width)+"px":t.removeAttribute("style")},a=t=>{window.IntersectionObserver&&(o||(o=new IntersectionObserver(t=>{t.map(t=>{"top"===t.target.dataset.sentinel&&(t=>{let{boundingClientRect:e,target:n,isIntersecting:o}=t;n.parentNode.querySelector('[data-sentinel="bottom"]').getBoundingClientRect().top<e.top||("desktop"===Object(i.a)()?s(n.nextElementSibling,o?"":"top"):n.nextElementSibling.dataset.sticky="")})(t),"bottom"===t.target.dataset.sentinel&&(t=>{let{boundingClientRect:e,target:n,isIntersecting:o}=t;const a=n.parentNode.querySelector('[data-sentinel="top"]').getBoundingClientRect();Math.abs(a.top)<Math.abs(e.top)||("desktop"===Object(i.a)()?s(n.previousElementSibling,e.top<0&&o||!o&&e.top<0?"bottom":"top"):n.previousElementSibling.dataset.sticky="")})(t)})})),t.hasIoListener||t.getBoundingClientRect().height>=t.parentNode.getBoundingClientRect().height||(t.hasIoListener=!0,t.parentNode.insertAdjacentHTML("afterbegin",'<div data-sentinel="top"></div>'),t.parentNode.insertAdjacentHTML("beforeend",'<div data-sentinel="bottom"></div>'),t.parentNode.lastElementChild.style.setProperty("--sidebar-height",t.getBoundingClientRect().height+"px"),o.observe(t.parentNode.firstElementChild),o.observe(t.parentNode.lastElementChild)))}}}]);