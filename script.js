 const hammer=document.querySelector('.hammer')
const nav_menu=document.querySelector('.nav-menu')
hammer.addEventListener('click',() =>{
	hammer.classList.toggle("active")
	nav_menu.classList.toggle("active")
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}