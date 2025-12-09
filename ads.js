// ads.js - simple create/edit UI using prompt/modal-lite
let ads = [
  {id:1,title:'Summer Glow',desc:'20% off facials',img:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',revenue:100,status:'active'}
];

function renderAds(){
  const c = document.getElementById('adsContainer'); c.innerHTML='';
  ads.forEach(a=>{
    const card = document.createElement('div'); card.className='ad-card card';
    card.innerHTML = `<img src="${a.img}">
      <div style="padding-top:8px">
        <strong>${a.title}</strong><div style="color:#555">${a.desc}</div>
      </div>
      <div class="ad-footer">
        <div><small>${a.status==='active'?'Active on site':'Disabled'}</small><div style="font-weight:700;color:var(--primary)">$${a.revenue}</div></div>
        <div class="ad-actions">
          <button class="edit-btn" onclick="editAd(${a.id})">Edit</button>
          <button class="toggle-btn" onclick="toggleAd(${a.id})">${a.status==='active'?'Disable':'Enable'}</button>
        </div>
      </div>`;
    c.appendChild(card);
  });
}
function editAd(id){
  const ad = ads.find(x=>x.id===id);
  const title = prompt('Title', ad.title);
  if(title===null) return;
  ad.title = title;
  ad.desc = prompt('Description', ad.desc) || ad.desc;
  ad.img = prompt('Image URL', ad.img) || ad.img;
  ad.revenue = parseFloat(prompt('Revenue', ad.revenue)||ad.revenue);
  renderAds();
}
function toggleAd(id){
  const ad = ads.find(x=>x.id===id);
  ad.status = ad.status==='active'?'disabled':'active';
  renderAds();
}
document.getElementById('createAdBtn').addEventListener('click', ()=>{
  const id = Date.now();
  const title = prompt('Ad title','New Ad'); if(!title) return;
  const desc = prompt('Description',''); const img = prompt('Image URL','https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800');
  const revenue = parseFloat(prompt('Revenue',50)||50);
  ads.unshift({id,title,desc,img,revenue,status:'active'}); renderAds();
});
renderAds();
