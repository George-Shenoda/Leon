let to = document.querySelector(".top");
window.onscroll = function (){
    if(this.pageYOffset >= 700){
        to.classList.add("show");
    }
    else{
        to.classList.remove("show");
    }
};