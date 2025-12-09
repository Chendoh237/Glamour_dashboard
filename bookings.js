// bookings.js - demo search
document.getElementById('findBtn').addEventListener('click', ()=>{
  const email = document.getElementById('emailInput').value.trim();
  const results = document.getElementById('results');
  results.innerHTML = '';
  if(!email){ alert('Enter an email'); return; }
  // Demo static result - replace with fetch to backend
  const sample = [
    {id:1,service:'Gel Manicure',date:'2025-12-05',shop:'Polished Perfection',status:'Completed'},
    {id:2,service:'Silk Press',date:'2025-12-10',shop:'Crown Glory',status:'Scheduled'}
  ];
  sample.forEach(b=>{
    const d = document.createElement('div');
    d.className='result-card';
    d.innerHTML = `<strong>${b.service}</strong> — ${b.shop} • ${b.date} • <em>${b.status}</em>`;
    results.appendChild(d);
  });
});
