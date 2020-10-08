let $prevVideo;
let $nextVideo;

let $slides;

let $barB1;
let $barB2;
let $barB3;

const mainVideo = () => {
    prepareDOMElementsVideo();
    prepareDOMEventsVideo();
};

const prepareDOMElementsVideo = () => {
    $prevVideo = document.querySelector('.prevVideo');
    $nextVideo = document.querySelector('.nextVideo');

    $slides = document.querySelector('.slides');

    $barB1 = document.querySelector('.b1');
    $barB2 = document.querySelector('.b2');
    $barB3 = document.querySelector('.b3');
}

const prepareDOMEventsVideo = () => {
    $prevVideo.addEventListener('click', prevVideo);
    $nextVideo.addEventListener('click', nextVideo);

    $barB1.addEventListener('click', chgVid1);
    $barB2.addEventListener('click', chgVid2);
    $barB3.addEventListener('click', chgVid3);
}


const chgVid1 = () => {
    $slides.style.marginLeft = '200%'
    $barB3.classList.remove('barHydrated')
    $barB2.classList.remove('barHydrated')
    $barB1.classList.add('barHydrated')
}

const chgVid2 = () => {
    $slides.style.marginLeft = '0%'
    $barB3.classList.remove('barHydrated')
    $barB2.classList.add('barHydrated')
    $barB1.classList.remove('barHydrated')
}

const chgVid3 = () => {
    $slides.style.marginLeft = '-200%'
    $barB3.classList.add('barHydrated')
    $barB2.classList.remove('barHydrated')
    $barB1.classList.remove('barHydrated')
}


const prevVideo = () => {
    const margin = window.getComputedStyle($slides).getPropertyValue('margin-left')
    const newMargin = margin.split('');
    if (margin !== '0px' && newMargin[0] =='-') {
        $slides.style.marginLeft = '0%'
        $barB3.classList.remove('barHydrated')
        $barB2.classList.add('barHydrated')
    } else if (margin == '0px') {
        $slides.style.marginLeft = '200%'
        $barB2.classList.remove('barHydrated')
        $barB1.classList.add('barHydrated')
    } else if (margin !== '0px' && newMargin[0] !=='-') {
        $slides.style.marginLeft = '-200%'
        $barB1.classList.remove('barHydrated')
        $barB3.classList.add('barHydrated')
    }
}

const nextVideo = () => {
    const margin = window.getComputedStyle($slides).getPropertyValue('margin-left')
    const newMargin = margin.split('');
    if (margin !== '0px' && newMargin[0] !=='-') {
        $slides.style.marginLeft = '0%'
        $barB1.classList.remove('barHydrated')
        $barB2.classList.add('barHydrated')
    } else if (margin == '0px') {
        $slides.style.marginLeft = '-200%'
        $barB2.classList.remove('barHydrated')
        $barB3.classList.add('barHydrated')
    } else if (margin !== '0px' && newMargin[0] =='-') {
        $slides.style.marginLeft = '200%'
        $barB3.classList.remove('barHydrated')
        $barB1.classList.add('barHydrated')
    }
}


document.addEventListener('DOMContentLoaded', mainVideo);