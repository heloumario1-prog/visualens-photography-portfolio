'use strict';
const photoData=[['01','The quiet between','Nature','Sunlight across a peaceful alpine landscape'],['02','Under a thousand stars','Nature','Snowy mountain beneath a starry sky'],['03','A moment, unposed','Portraits','Street fashion portrait'],['04','Lines of the city','Architecture','Modern glass skyscrapers'],['05','Above the ordinary','Nature','Dramatic mountain peaks'],['06','After hours','Urban','City skyline at night'],['07','Somewhere slower','Nature','Misty rolling hills'],['08','In her own light','Portraits','Outdoor portrait in natural light'],['09','Form follows feeling','Architecture','Architectural lines and geometric forms'],['10','A different kind of blue','Travel','Lake and mountains in Europe'],['11','City in motion','Urban','New York skyline'],['12','The long way home','Travel','Travel still life']].map(([id,title,category,alt])=>({id,title,category,alt}));
const gallery=document.querySelector('#gallery'),lightbox=document.querySelector('#lightbox');
let visiblePhotos=[...photoData],currentIndex=0,lastPhotoButton=null;
function renderGallery(category='All'){
 visiblePhotos=photoData.filter(photo=>category==='All'||photo.category===category);
 gallery.replaceChildren();
 visiblePhotos.forEach((photo,index)=>{
  const article=document.createElement('article');article.className='photo-card';
  const button=document.createElement('button');button.className='photo-button';button.setAttribute('aria-label',`View ${photo.title}, ${photo.category}`);
  const wrapper=document.createElement('div');wrapper.className='image-wrap';
  const img=document.createElement('img');img.src=`assets/${photo.id}.jpg`;img.alt=photo.alt;img.loading=index<3?'eager':'lazy';img.decoding='async';
  const expand=document.createElement('span');expand.className='view-photo';expand.textContent='→';expand.setAttribute('aria-hidden','true');wrapper.append(img,expand);
  const info=document.createElement('div');info.className='photo-info';const text=document.createElement('div');const title=document.createElement('h3');title.textContent=photo.title;const cat=document.createElement('p');cat.textContent=photo.category;text.append(title,cat);const number=document.createElement('span');number.className='photo-number';number.textContent=photo.id;info.append(text,number);button.append(wrapper,info);article.append(button);gallery.append(article);
  button.addEventListener('click',()=>{lastPhotoButton=button;currentIndex=index;updateLightbox();lightbox.showModal();document.body.style.overflow='hidden';});
 });
 document.querySelector('#photo-count').textContent=`${visiblePhotos.length} PHOTOGRAPHS`;
 document.querySelector('#gallery-status').textContent=`Showing ${visiblePhotos.length} photographs${category==='All'?'':` in ${category}`}.`;
}
function updateLightbox(){const photo=visiblePhotos[currentIndex];const img=document.querySelector('#lightbox-image');img.src=`assets/${photo.id}.jpg`;img.alt=photo.alt;document.querySelector('#lightbox-title').textContent=photo.title;document.querySelector('#lightbox-category').textContent=photo.category;document.querySelector('#lightbox-count').textContent=`${String(currentIndex+1).padStart(2,'0')} / ${String(visiblePhotos.length).padStart(2,'0')}`;}
function movePhoto(direction){currentIndex=(currentIndex+direction+visiblePhotos.length)%visiblePhotos.length;updateLightbox();}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderGallery(button.dataset.filter);}));
document.querySelector('#previous').addEventListener('click',()=>movePhoto(-1));document.querySelector('#next').addEventListener('click',()=>movePhoto(1));document.querySelector('#lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();movePhoto(-1);}if(e.key==='ArrowRight'){e.preventDefault();movePhoto(1);}});
lightbox.addEventListener('close',()=>{document.body.style.overflow='';lastPhotoButton?.focus();});
const menu=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('#mobile-nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));menu.setAttribute('aria-label',open?'Open navigation':'Close navigation');mobileNav.hidden=open;menu.textContent=open?'☰':'✕';});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');menu.textContent='☰';}));
const contactDialog=document.querySelector('#contact-dialog');document.querySelector('#contact-open').addEventListener('click',()=>{contactDialog.showModal();document.body.style.overflow='hidden';});document.querySelector('#contact-close').addEventListener('click',()=>contactDialog.close());contactDialog.addEventListener('close',()=>{document.body.style.overflow='';});
document.querySelector('#inquiry').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const output=document.querySelector('#brief-output');output.value=`Photography project inquiry\n\nName: ${data.get('name').trim()}\nProject: ${data.get('type')}\n\n${data.get('message').trim()}`;output.hidden=false;document.querySelector('#copy-brief').hidden=false;document.querySelector('#inquiry-status').textContent='Your brief is ready. Copy it and share it with your photographer. No message has been sent.';});
document.querySelector('#copy-brief').addEventListener('click',async()=>{const output=document.querySelector('#brief-output');try{await navigator.clipboard.writeText(output.value);document.querySelector('#inquiry-status').textContent='Project brief copied. Ready to share.';}catch{output.focus();output.select();document.querySelector('#inquiry-status').textContent='Select and copy the brief below using Ctrl+C or your device’s copy menu.';}});
document.querySelector('#year').textContent=new Date().getFullYear();renderGallery();
