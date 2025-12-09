// layout/layout.js - sidebar toggle and active link highlight
(function(){
  const sidebar = document.querySelector(".sidebar");
  const toggle = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  // open/close for mobile
  if(toggle){
    toggle.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    });
  }
  if(overlay){ overlay.addEventListener("click", ()=>{ sidebar.classList.remove("open"); overlay.classList.remove("show"); })}

  // highlight active link by file name
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu-item").forEach(a=>{
    if(a.getAttribute("href") === current) a.classList.add("active");
  });
})();
