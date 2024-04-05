import{i as l,S as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function u(o){return o=encodeURIComponent(o),fetch(`https://pixabay.com/api/?key=43032370-bcf3e6db34194155efa6e28b4&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const c=document.querySelector("ul.gallery");function h(o){c.innerHTML="";const r=o.hits;if(r.length===0)l.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});else{const i=r.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              width="1280"
              height="152"
              src="${e.webformatURL}"
              data-source="${e.largeImageURL}"
              alt="${e.tags}"
            />
            <ul class="gallery-description">
              <li><h3>Likes</h3><p>${e.likes}</p></li>
              <li><h3>Views</h3><p>${e.views}</p></li>
              <li><h3>Comments</h3><p>${e.comments}</p></li>
              <li><h3>Downloads</h3><p>${e.downloads}</p></li>
            </ul>
          </a>
        </li>`).join("");c.insertAdjacentHTML("beforeend",i);const s={captionsData:"alt"};let t=new a(".gallery a",s);t.on("show.simplelightbox",function(){}),t.refresh()}}const f=document.getElementById("search-form"),p=document.getElementById("search-input");f.addEventListener("submit",o=>{o.preventDefault();const r=p.value.trim();r&&u(r).then(i=>{i.hits.length===0?l.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}):h(i)}).catch(i=>{console.error(i),l.error({title:"Error",message:"An error occurred while loading images. Please try again later.",position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
