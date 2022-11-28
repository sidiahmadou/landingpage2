const menuBtn = document.getElementById("menu")

var mobileNav = document.querySelector(".nav-list");

menuBtn.addEventListener("click",function(){
  if (mobileNav.style.right === "200%") {
    mobileNav.style.right = "0";
  } else {
    mobileNav.style.right = "200%";
  }
})

const navItems = document.querySelectorAll('.nav-item')
navItems.forEach(element => {
  element.addEventListener('click', function(){
    mobileNav.style.right = "200%"
  })
});