

const telegram = document.getElementById("telegram")
telegram.addEventListener("click",function(){
    alert("This is my User name on Telegram : @reemosalah ,search it!!")
})


const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('active');
});
