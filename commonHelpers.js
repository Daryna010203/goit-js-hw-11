import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u=t=>`
  <li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
			class="gallery-image" 
			src="${t.webformatURL}" 
			alt="${t.tags}" 
			/>
	</a>
  <div class='js-wraper'>
    <div>
      <h4 class='wraper-title'>Likes</h4>
      <p class='wraper-text'>${t.likes}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Views</h4>
      <p class='wraper-text'>${t.views}</p>
    </div>
    <div>
     <h4 class='wraper-title'>Comments</h4>
      <p class='wraper-text'>${t.comments}</p>
    </div>
    <div>
      <h4 class='wraper-title'>Downloads</h4>
      <p class='wraper-text'>${t.downloads}</p>
    </div>
  </div>
</li>
  `,p="https://pixabay.com",d="45521287-1fb3911845814b73b6d184262",h=t=>{const o=new URLSearchParams({q:t,image_type:"photo",orientation:"portrait",safesearch:!0});return fetch(`${p}/api/?key=${d}&${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),m=t=>{t.preventDefault();const o=l.elements.user_query.value;o===""&&c.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}),h(o).then(r=>{if(console.log(r),r.hits.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",l.reset();return}const a=r.hits.map(e=>u(e)).join("");n.innerHTML=a}).catch(r=>{console.log(r)})};l.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
