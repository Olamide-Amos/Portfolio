const hamburger = document.querySelector(".hamburger")
const nav_bar = document.querySelector(".nav_bar")
const icon = document.querySelector(".fa-bars")

hamburger.addEventListener('click', function(){
    nav_bar.classList.toggle('active')
    if(nav_bar.classList.contains('active')){
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-times')
    }
    else{
        icon.classList.add('fa-bars')
        icon.classList.remove('fa-times')
    }
})