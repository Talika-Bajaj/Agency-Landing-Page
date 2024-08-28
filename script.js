const headerSection = document.querySelector('.header-sec');
const milkbottles = document.getElementById('milkbottles');
const orange = document.getElementById('orange');
const cone = document.getElementById('cone');
const sugarcubes = document.getElementById('sugarcubes');
const transform = document.querySelector('.transform');
const standout = document.querySelector('.stand-out');
const graphicDesign = document.querySelector('.graphic-design');
const photgraphy = document.querySelector('.photography');
const headerImage = document.getElementById('header-image');

function setImage () {
    if (window.innerWidth < 768) {
        headerImage.src = 'images/mobile/image-header.jpg'
    } else {    
        headerImage.src = 'images/desktop/image-header.jpg'
        // headerImage.src = 'images/desktop/header-image.jpg'
    }


    if (window.innerWidth < 800) {
        transform.src = 'images/mobile/image-transform.jpg'
        standout.src = 'images/mobile/image-stand-out.jpg'
        graphicDesign.src = 'images/mobile/image-graphic-design.jpg'
        photgraphy.src = 'images/mobile/image-photography.jpg'

        milkbottles.src = 'images/mobile/image-gallery-milkbottles.jpg'
        orange.src = 'images/mobile/image-gallery-orange.jpg'
        cone.src = 'images/mobile/image-gallery-cone.jpg'
        sugarcubes.src = 'images/mobile/image-gallery-sugar-cubes.jpg'
        // headerSection.style.background = 'url(/images/mobile/image-header.jpg) no-repeat'
    } else {
        transform.src = 'images/desktop/image-transform.jpg'
        standout.src = 'images/desktop/image-stand-out.jpg'
        graphicDesign.src = 'images/desktop/image-graphic-design.jpg'
        photgraphy.src = 'images/desktop/image-photography.jpg'

        milkbottles.src = 'images/desktop/image-gallery-milkbottles.jpg';
        orange.src = 'images/desktop/image-gallery-orange.jpg'
        cone.src = 'images/desktop/image-gallery-cone.jpg'
        sugarcubes.src = 'images/desktop/image-gallery-sugarcubes.jpg'
        // headerSection.style.background = 'url(/images/desktop/image-header.jpg) no-repeat'

    }
}

setImage();

window.addEventListener('resize', setImage)

const hamMenu = document.getElementById('ham-menu');
const navList = document.querySelector('.nav-list');

hamMenu.addEventListener('click', ()=> {    
    navList.classList.toggle('flex');
    navList.classList.toggle('absolute');
    
})

function checkNav(params) {
    if (window.innerWidth >=800 && navList.classList.contains('absolute')) {
        navList.classList.remove('absolute');
        navList.classList.remove('flex');
        navList.classList.add('open-list');
    }
}

checkNav()
window.addEventListener('resize', checkNav)