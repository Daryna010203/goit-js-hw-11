import{i as h,S as p}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=r=>`
  <li class="gallery-item">
	<a class="gallery-link" href="${r.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${r.webformatURL}" 
			alt="${r.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${r.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${r.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${r.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${r.downloads}</p>
    </div>
  </div>
</li>
  `,m="https://pixabay.com",f="45521287-1fb3911845814b73b6d184262",g=r=>{const a=new URLSearchParams({q:r,image_type:"photo",orientation:"horizontal",per_page:15,page:1,safesearch:!0});return fetch(`${m}/api/?key=${f}&${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},o=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),i=document.querySelector(".loader-box"),n=document.querySelector(".loader-btn");i.classList.add("hidden");n.classList.add("hidden");const y=r=>{r.preventDefault(),i.classList.remove("hidden"),n.classList.add("hidden");const a=o.elements.user_query.value.trim();if(a===""){h.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),i.classList.add("hidden"),o.reset(),d.innerHTML="";return}g(a).then(s=>{if(console.log(s),s.total===0){h.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),d.innerHTML="",i.classList.add("hidden"),n.classList.add("hidden"),o.reset();return}const l=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.7}),e=s.hits.map(t=>u(t)).join("");d.innerHTML=e,l.refresh(),i.classList.add("hidden"),n.classList.remove("hidden"),o.reset()}).catch(s=>{console.log(s)})};o.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
