// shops.js - demo shops listing + remove action
const shops = [
  {id:1,name:'Polished Perfection',addr:'123 Main St',tel:'555-0101',workers:8,premium:true},
  {id:2,name:'Crown Glory',addr:'7 High Rd',tel:'555-0111',workers:5,premium:false}
];

function renderShops(){
  const container = document.getElementById('shopsContainer');
  container.innerHTML='';
  shops.forEach(s=>{
    const el = document.createElement('div');
    el.className='shop-card card';
    el.innerHTML = `<img src="https://i.imgur.com/ItH6P7v.jpeg" alt="">
      <div>
        <strong>${s.name}</strong><br><small>${s.addr} • ${s.tel}</small>
        <div style="margin-top:6px"><small>Workers: ${s.workers}</small></div>
      </div>
      <div class="shop-actions">
        ${s.premium?'<span class="badge-premium">PREMIUM</span>':''}
        <button class="remove-shop" onclick="removeShop(${s.id})">Remove</button>
      </div>`;
    container.appendChild(el);
  });
}
function removeShop(id){
  if(!confirm('Remove shop?')) return;
  const idx = shops.findIndex(s=>s.id===id);
  if(idx>-1) shops.splice(idx,1);
  renderShops();
}
renderShops();
