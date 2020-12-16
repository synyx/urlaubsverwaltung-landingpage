const main=document.querySelector("#main-content"),overlay=document.querySelector("#overlay"),nav=document.querySelector("nav"),footer=document.querySelector("footer"),featureCardElements=document.querySelectorAll(".feature-card");let{height:navHeight}=nav.getBoundingClientRect(),{height:overlayHeight}=overlay.getBoundingClientRect();for(const e of featureCardElements){const t=document.querySelector(e.dataset.cardFor);t&&(e.style.transform="translateY(100vh)")}main.style.transform="",footer.style.marginBottom=`${overlayHeight}px`;let userHasInteracted=!1;window.addEventListener("scroll",()=>userHasInteracted=!0,{once:!0}),window.addEventListener("pageshow",()=>{if(userHasInteracted)return;let e=0;const t=sessionStorage.getItem("lastscroll_y");Number(t)&&(e=-1*t);const{hash:n}=window.location;if(n){const r=document.querySelector(n);r&&(e=r.getBoundingClientRect().top+overlayHeight-navHeight)}scrollTo(e),sessionStorage.removeItem("lastscroll_y")}),document.addEventListener("scroll",function(){repositionCardElements(),sessionStorage.setItem("lastscroll_y",top)},{passive:!0}),window.addEventListener("resize",function(){overlayHeight=overlay.getBoundingClientRect().height,repositionCardElements()},{passive:!0});function repositionCardElements(){const{top:e}=overlay.getBoundingClientRect();if(Math.abs(e)<=overlayHeight){main.style.transform=`translateY(${-1*e}px)`,e==0?footer.style.marginBottom=`${overlayHeight}px`:footer.style.marginBottom=`${e}px`;for(let t of featureCardElements)t.style.transform=`translateY(${overlayHeight+e}px)`}else{main.style.transform=`translateY(${overlayHeight}px)`;for(let t of featureCardElements)t.style.transform="translateY(0)"}Math.abs(e)>=overlayHeight-navHeight?(nav.classList.add("fixed","top-0"),nav.classList.remove("absolute","bottom-0")):(nav.classList.remove("fixed","top-0"),nav.classList.add("absolute","bottom-0"))}nav.addEventListener("click",function(t){t.target.tagName==="A"&&(t.target.hash&&t.target.hash!=="#"&&(t.preventDefault(),navigateToElement(t.target)))}),document.querySelector("#overlay-arrow-link").addEventListener("click",e=>{e.preventDefault();let t=e.target;for(;t.tagName!=="A";)t=t.parentNode;navigateToElement(t)});function navigateToElement(e){window.history.replaceState(null,null,e.hash);const t=document.querySelector(e.hash);if(t){const n=t.getBoundingClientRect().top+overlayHeight-navHeight;scrollTo(n)}}function nativeSmoothScrollTo(e){window.scroll({behavior:"smooth",top:e})}function smoothScrollTo(e,t){const n=document.scrollingElement||document.documentElement,r=n.scrollTop,c=e-r,i=+new Date;function u(o,l,a,m){return o/=m/2,o<1?a/2*o*o+l:(o--,-a/2*(o*(o-2)-1)+l)}function s(){const o=+new Date,l=o-i;n.scrollTop=parseInt(u(l,r,c,t)),l<t?requestAnimationFrame(s):n.scrollTop=e}s()}const supportsNativeSmoothScroll="scrollBehavior"in document.documentElement.style;function scrollTo(e){supportsNativeSmoothScroll?nativeSmoothScrollTo(e):smoothScrollTo(e,600)}
