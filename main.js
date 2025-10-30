window.onload = function (){
    document.querySelector('.loading').style.opacity = '0';
    setTimeout(()=>{
        document.querySelector('.loading').style.display = 'none';
        document.querySelector('.page').style.display = 'block';
}, 500);
};

