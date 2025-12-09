// services.js - demo list with toggle full/available
let services = [
  {id:1,title:'Gel Manicure Deluxe',shop:'Polished Perfection',price:45,status:'available',img:'https://i.imgur.com/ItH6P7v.jpeg'},
  {id:2,title:'Deep Tissue Massage',shop:'Serenity Spa',price:80,status:'full',img:'https://i.imgur.com/XOqVyhi.jpeg'}
];

function renderServices(){
  const out = document.getElementById('servicesList');
  out.innerHTML='';
  services.forEach(s=>{
    const card = document.createElement('div');
    card.className='service-card card';
    card.innerHTML = `<img src="${s.img}" alt="">
      <div style="flex:1">
        <strong>${s.title}</strong><br><small>${s.shop} • $${s.price}</small>
      </div>
      <div class="service-actions" style="display:flex;gap:8px;align-items:center">
        <span class="status ${(s.status==='available')?'available':'full'}" style="padding:6px 10px;border-radius:8px;color:#fff">${s.status.toUpperCase()}</span>
        <button class="toggle" onclick="toggleStatus(${s.id})">${s.status==='available'?'Mark Full':'Mark Available'}</button>
        <button class="delete" onclick="deleteService(${s.id})">Delete</button>
      </div>`;
    out.appendChild(card);
  });
}
function toggleStatus(id){
  const s = services.find(x=>x.id===id);
  if(s) s.status = s.status==='available'?'full':'available';
  renderServices();
}
function deleteService(id){
  if(!confirm('Delete service?')) return;
  services = services.filter(x=>x.id!==id);
  renderServices();
}
renderServices();
document.getElementById('addServiceBtn').addEventListener('click', ()=>{
  const id = Date.now();
  services.unshift({id,title:'New Service',shop:'New Shop',price:0,status:'available',img:'https://i.imgur.com/GwvQwO3.jpeg'});
  renderServices();
});
