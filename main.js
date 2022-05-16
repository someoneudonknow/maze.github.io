window.onscroll = function() {scroll()};

let header = document.getElementById("header");

function scroll(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        header.style.height = "70px";
        header.classList.add('have-background');
        header.classList.remove('have-no-background');
    }else{
        header.style.height = "100px";
        header.classList.remove('have-background');
        header.classList.add('have-no-background');
    }
}
