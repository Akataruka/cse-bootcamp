const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".table");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
{
    let width = window.innerWidth;
    let body_width = document.getElementsByTagName("body");
    body_width[0].style.width = width;
}


{
    let width=window.innerWidth;
    let cseimg2=document.getElementById("cseimg2");
    if (width>=1500){
        cseimg2.style.left="20em";
    }
    else if(width<1500 && width>=1330){
        
        cseimg2.style.left="14em";
    }
    else if(width<1330 && width>=1280){
        
        cseimg2.style.left="11em";
    }
    else if(width<1232 && width>600){
        let cseimg=document.getElementById("cseimg");
        cseimg.style.top="41em";
        let cseimg2=document.getElementById("cseimg2");
        cseimg2.style.top="47em";
        cseimg2.style.left="29em";
    }
    let height=window.innerHeight;
    if(height<890 && width<380){
        let left=document.getElementsByClassName("left")[0];
        left.style.padding="2em 2em 5em 4em";
        let ham=document.getElementsByClassName("hamburger")[0];
        ham.style.right="15%";

    }
}

