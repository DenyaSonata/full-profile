const abt = document.getElementById("abt");
const art = document.getElementById("art");

const fb = document.getElementById("facebook");
const ig = document.getElementById("instagram");

function adaptiveSection() {
    if (window.matchMedia("(max-width: 600px").matches) {
        art.innerHTML = '<i class="fa fa-photo"></i>';
        abt.style.display = 'none';
        art.style.padding = '0';
        art.style.margin = '0';
    } else {
        art.innerHTML = 'Artworks';
        abt.style.display = 'inline-block'
        art.style.padding = '30px 20px';
    }
}

function adaptiveSocials() {
    if (window.matchMedia("(max-width: 800px)").matches) {
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

adaptiveSection();
window.addEventListener("resize", adaptiveSection);

adaptiveSocials();
window.addEventListener("resize", adaptiveSocials);