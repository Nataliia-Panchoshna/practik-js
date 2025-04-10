import{A as S,S as h,N as E,K as y,a as C,i as q}from"./assets/vendor-BAf7YG4r.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&m(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const I=document.querySelector(".menu"),a=document.querySelector(".nav");I.addEventListener("click",e=>{e.preventDefault(),a.classList.toggle("is-open"),a.classList.contains("is-open")?(document.addEventListener("click",l),a.addEventListener("click",l)):(document.removeEventListener("click",l),a.removeEventListener("click",l))});function l(e){I.contains(e.target)||(a.classList.remove("is-open"),document.removeEventListener("click",l),a.removeEventListener("click",l))}const c={modalBurger:document.querySelector(".burger-btn"),modalMenu:document.querySelector(".modal-menu"),modalClose:document.querySelector(".modal-close-btn"),closeElements:document.querySelectorAll(".nav-item, .order-project-btn-modal")};c.modalBurger.addEventListener("click",b);function b(e){e.preventDefault(),c.modalMenu.classList.add("is-open"),document.body.classList.add("no-scroll"),c.closeElements.forEach(t=>{t.addEventListener("click",v)}),c.modalClose.addEventListener("click",v),c.modalBurger.removeEventListener("click",b)}function v(){c.modalMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll"),c.closeElements.forEach(e=>{e.removeEventListener("click",v)}),c.modalClose.removeEventListener("click",v),c.modalBurger.addEventListener("click",b)}const i={themeToggle:document.querySelector(".themes-toggle"),themesMenu:document.querySelector(".overlay-themes-menu"),themesOptions:[...document.querySelectorAll(".themes-option")],heroSection:document.querySelector(".hero-section")},B="theme-color";document.addEventListener("DOMContentLoaded",V);i.themeToggle.addEventListener("click",()=>{i.themesMenu.classList.toggle("is-active"),i.themesMenu.classList.contains("is-active")?(i.themesMenu.addEventListener("click",k),i.heroSection.addEventListener("click",u),window.addEventListener("keydown",u)):(i.themesMenu.removeEventListener("click",k),i.heroSection.removeEventListener("click",u),window.removeEventListener("keydown",u))});function u(e){(e.key==="Escape"||e.currentTarget===i.heroSection)&&i.themesMenu.classList.remove("is-active")}function V(){const e=localStorage.getItem(B)??i.themesOptions[1].dataset.theme;document.documentElement.dataset.theme=e,i.themesOptions.find(t=>t.dataset.theme===e).classList.add("is-active")}function k(e){i.themesOptions.includes(e.target)&&(i.themesOptions.forEach(t=>{t.classList.remove("is-active")}),localStorage.setItem(B,e.target.dataset.theme),e.target.classList.add("is-active"),document.documentElement.dataset.theme=e.target.dataset.theme)}document.addEventListener("DOMContentLoaded",()=>{new S(".about-me-accordion-wrapper",{elementClass:"acc",triggerClass:"acc-btn",panelClass:"acc-content",duration:300,showMultiple:!0}).open(0)});const P=new h(".about-me-swiper",{modules:[E,y],direction:"horizontal",slidesPerView:2,loop:!0,loopedSlides:9,speed:400,navigation:{nextEl:".swiper-button-next"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});window.addEventListener("resize",()=>{P.update()});const g=new h(".projects-swiper-container",{modules:[E,y],speed:400,slidesPerView:1,spaceBetween:0,navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!0}});function O(){const e=document.querySelector(".projects-prev-btn"),t=document.querySelector(".projects-next-btn");g.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),g.isEnd?(t.disabled=!0,t.classList.add("disabled")):(t.disabled=!1,t.classList.remove("disabled"))}g.on("slideChange",O);O();new S(".faq-list",{elementClass:"faq-item",triggerClass:"faq-item-toggle",panelClass:"faq-item-description",showMultiple:!0,duration:300});const w={coverList:document.querySelector(".covers-list")};window.addEventListener("scroll",R);function R(){const{top:e,bottom:t}=w.coverList.getBoundingClientRect(),{innerHeight:n}=window;e>0&&(e<n||t<=0)||t>0&&(t<n||e<=0)?w.coverList.classList.add("active"):w.coverList.classList.remove("active")}async function T(){try{return(await C.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch(e){return e}}const p={list:document.querySelector(".reviews-list"),swiperContainer:document.querySelector(".reviews-swiper")};let L=!0,M=!1;window.addEventListener("scroll",N);function j({avatar_url:e,author:t,review:n}){return`<li class="reviews-item swiper-slide">
              <div class="swiper-slide-transform">
                <img class="reviews-item-img" src="${e}" alt="${t} photo" width="48" height="48" loading="lazy" />
                <h3 class="reviews-item-title">${t}</h3>
                <p class="reviews-item-text">
                  ${n}
                </p>
              </div>
          </li>`}function D(e){return e.map(j).join("")}function A(){const e=document.createElement("li"),t=document.createElement("span");e.classList.add("reviews-item-error"),t.textContent="Not found",t.classList.add("reviews-text-error"),e.appendChild(t),p.list.appendChild(e)}document.addEventListener("DOMContentLoaded",z);async function z(){try{const e=await T(),t=D(e);p.list.insertAdjacentHTML("beforeend",t),L=!0}catch{A(),L=!1}}function N(){if(!L&&!M){const{top:e,bottom:t}=p.swiperContainer.getBoundingClientRect(),{innerHeight:n}=window;(e>0&&(e<n||t<=0)||t>0&&(t<n||e<=0))&&(M=!0,q.error({class:"work-message error",title:"Error",theme:"dark",message:"Failed to load images.",position:"topCenter",timeout:6e3}))}}new h(p.swiperContainer,{modules:[E,y],direction:"horizontal",slidesPerView:1,speed:400,spaceBetween:16,navigation:{nextEl:".reviews-next-btn",prevEl:".reviews-prev-btn"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const s={form:document.getElementById("cooperationForm"),modal:document.getElementById("work-modalBackdrop"),closeBtn:document.querySelector(".work-modal-close-btn"),successMsg:document.querySelector(".success-msg"),errorMsg:document.querySelector(".error-msg"),emailInput:document.querySelector('[name="emailInput"]')};function x(){const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s.emailInput.value);return s.emailInput.classList.remove("valid","invalid"),t?s.emailInput.classList.add("valid"):s.emailInput.value!==""&&s.emailInput.classList.add("invalid"),s.successMsg.classList.toggle("visible",t),s.errorMsg.classList.toggle("visible",!t),t}document.addEventListener("DOMContentLoaded",()=>{s.emailInput.value="",s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible")});s.emailInput.addEventListener("input",()=>{s.emailInput.value===""?(s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible")):x()});function $(){s.modal.classList.remove("hidden"),document.body.style.overflow="hidden",s.closeBtn.addEventListener("click",d),s.modal.addEventListener("click",d),window.addEventListener("keydown",d)}function d(e){(e.key==="Escape"||e.target===s.modal||e.currentTarget==s.closeBtn)&&(s.modal.classList.add("hidden"),document.body.style.overflow="",s.closeBtn.removeEventListener("click",d),s.modal.removeEventListener("click",d),window.removeEventListener("keydown",d))}function F(e){q.error({class:"work-message error",title:"Error",theme:"dark",message:e,position:"topCenter",timeout:6e3})}s.form.addEventListener("submit",async e=>{e.preventDefault();const t=x();if(!s.form.checkValidity()||!t){s.errorMsg.classList.add("visible");return}const n=new FormData(s.form),m=Object.fromEntries(n.entries());try{await C.post("https://jsonplaceholder.typicode.com/posts",m),s.emailInput.classList.remove("valid","invalid"),s.successMsg.classList.remove("visible"),s.errorMsg.classList.remove("visible"),s.form.reset(),$()}catch{F("Failed to send the form. Please check your input.")}});
//# sourceMappingURL=index.js.map
