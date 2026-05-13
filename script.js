function openForm(){
  document.getElementById("form").style.display="block";
}

function closeForm(){
  document.getElementById("form").style.display="none";
}

function success(){
  document.getElementById("form").style.display="none";
  let msg=document.getElementById("msg");
  msg.style.display="block";
  setTimeout(()=>msg.style.display="none",3000);
}

/* DETAILS */
function openDetails(){
  document.getElementById("detailsPanel").style.display="block";
}

function closeDetails(){
  document.getElementById("detailsPanel").style.display="none";
}

/* إغلاق عند الضغط خارج */
window.onclick = function(e){
  let d = document.getElementById("detailsPanel");
  let f = document.getElementById("form");

  if(e.target === d) d.style.display="none";
  if(e.target === f) f.style.display="none";
}