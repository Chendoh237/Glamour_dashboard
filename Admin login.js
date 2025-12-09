// login.js - demo client-only
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const email = document.getElementById('email').value.trim();
  const pwd = document.getElementById('password').value;
  if(!email||!pwd){ document.getElementById('loginMsg').textContent='Enter email & password'; return; }
  // demo successful: redirect to dashboard
  window.location.href = 'index.html';
});
