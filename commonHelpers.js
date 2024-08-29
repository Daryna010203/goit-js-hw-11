import{S as p,i as c}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>`
  <li class="gallery-item>
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
  `,u="https://pixabay.com",d="45521287-1fb3911845814b73b6d184262",h=r=>{const a=new URLSearchParams({q:r,image_type:"photo",orientation:"portrait",safesearch:!0});return fetch(`${u}/api/?key=${d}&${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},l=document.querySelector(".js-search-form"),n=document.querySelector(".js-gallery"),f=r=>{r.preventDefault();const a=l.elements.user_query.value.trim();if(a===""){c.show({message:"Please enter something to search",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#59a10d",position:"topRight",maxWidth:432});return}h(a).then(s=>{if(console.log(s),s.total===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"150%",backgroundColor:"#ef4040",position:"topRight",maxWidth:432}),n.innerHTML="",l.reset();return}const o=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9,className:"modal-container"}),e=s.hits.map(t=>m(t)).join("");n.innerHTML=e,o.refresh()}).catch(s=>{console.log(s)})};l.addEventListener("submit",f);new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.9,className:"modal-container"});
//# sourceMappingURL=commonHelpers.js.map
