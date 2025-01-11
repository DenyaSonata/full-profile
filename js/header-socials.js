const fb = document.getElementById("facebook");
const ig = document.getElementById("instagram");

function adaptiveSocials() {
    if (window.matchMedia("(max-width: 600px)").matches) {
        fb.innerHTML = '<i class="fa fa-facebook"></i>';
        ig.innerHTML = '<i class="fa fa-instagram"></i>';
        fb.style.padding = '0';
        ig.style.padding = '0';
        fb.style.margin = '0';
        ig.style.margin = '0';
    } else {
        fb.innerHTML = 'Facebook';
        ig.innerHTML = 'Instagram';
        fb.style.padding = '30px 20px';
        ig.style.padding = '30px 20px';
    }
}

adaptiveSocials();
window.addEventListener("resize", adaptiveSocials);