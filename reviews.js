// reviews.js - demo reviews with star rendering
let reviews = [
  {id:1,shop:'Polished Perfection',user:'Jane',rating:5,text:'Amazing service!',date:'2025-12-01'},
  {id:2,shop:'Crown Glory',user:'Mary',rating:3,text:'Okay, expected more.',date:'2025-11-20'}
];

function starHTML(n){
  let out='';
  for(let i=1;i<=5;i++){ out += (i<=n)?'★':'☆' }
  return out;
}

function renderReviews(filter='all'){
  const el = document.getElementById('reviewsList'); el.innerHTML='';
  reviews.filter(r=>{
    if(filter==='all') return true;
    if(filter==='5') return r.rating===5;
    if(filter==='4') return r.rating>=4;
    if(filter==='3') return r.rating>=3;
  }).forEach(r=>{
    const d = document.createElement('div'); d.className='review-card card';
    d.innerHTML = `<div style="display:flex;justify-content:space-between"><div><strong>${r.shop}</strong> • <small>${r.user}</small></div><div class="stars">${starHTML(r.rating)}</div></div>
      <div style="margin-top:6px">${r.text}</div>
      <div style="margin-top:6px;font-size:12px;color:#666">${r.date}</div>
      <div class="review-actions"><button class="resolve-btn" onclick="resolve(${r.id})">Mark Resolved</button><button class="flag-btn" onclick="flag(${r.id})">Flag</button></div>`;
    el.appendChild(d);
  });
}
function resolve(id){ alert('Marked resolved: '+id); }
function flag(id){ alert('Flagged for review: '+id); }
document.getElementById('filterRating').addEventListener('change',(e)=>renderReviews(e.target.value));
renderReviews();
