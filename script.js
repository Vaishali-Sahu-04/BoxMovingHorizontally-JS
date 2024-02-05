window.addEventListener("mousemove",function(details){

    var box = document.querySelector(".box");

    var xval = gsap.utils.mapRange(0, window.innerWidth, 
        100+box.getBoundingClientRect().width/2, window.innerWidth-(100+box.getBoundingClientRect().width/2),
        details.clientX );

    gsap.to('.box',{
        left: xval,
        ease : Power3,
    })
})