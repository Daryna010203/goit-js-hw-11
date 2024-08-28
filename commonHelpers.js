import{i as c}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=r=>`
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
  `,m="https://pixabay.com",p=r=>{const o=new URLSearchParams({key:"45521287-1fb3911845814b73b6d184262",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`${m}/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),d=r=>{r.preventDefault();const o=l.elements.user_query.value.trim();o===""?c.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432}):p(o).then(t=>{if(t.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",l.reset();return}console.log(t);const a=t.results.map(e=>u(e)).join("");n.innerHTML=a}).catch(t=>{console.log(t)})};l.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers.js.map
