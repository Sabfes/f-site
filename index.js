window.addEventListener('scroll', function() {
    var posY = window.pageYOffset;
    if (posY >= 100) {
        let a = document.getElementById('port-box-example1').style.transform = "translateX(132%)";  
        let b = document.getElementById('port-box-example2').style.transform = "translatex(-132%)";
        let c = document.getElementById('port-box-example3').style.transform = "translateX(132%)"; 
    }
});
