//deklarowanie zmiennych
let $img1;
let $img2;
let $img3;
let $img4;
let $img5;
let $img6;
let $img7;
let $img8;

let $prev;
let $close;
let $next;

let $popup;
let $popupPhoto;



const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

//Pobieranie elementow
const prepareDOMElements = () => {
    // for (let i = 1; i < 9; i++){
    // eval(`$img${i}`) = document.querySelector(`.img${i}`)
    // };
    $img1 = document.querySelector('.img1');
    $img2 = document.querySelector('.img2');
    $img3 = document.querySelector('.img3');
    $img4 = document.querySelector('.img4');
    $img5 = document.querySelector('.img5');
    $img6 = document.querySelector('.img6');
    $img7 = document.querySelector('.img7');
    $img8 = document.querySelector('.img8');

    $prev = document.querySelector('.prev');
    $close = document.querySelector('.close');
    $next = document.querySelector('.next');

    $popup = document.querySelector('.popup');
    $popupPhoto = document.querySelector('.photo');
};


// Nadawanie nasłuchiwania
const prepareDOMEvents = () => {
    for (let i = 1; i < 9; i++){
        eval(`$img${i}`).addEventListener('click', showPopup);
    }
    // $img1.addEventListener('click', showPopup);
    // $img2.addEventListener('click', showPopup);
    // $img3.addEventListener('click', showPopup);
    // $img4.addEventListener('click', showPopup);
    // $img5.addEventListener('click', showPopup);
    // $img6.addEventListener('click', showPopup);
    // $img7.addEventListener('click', showPopup);
    // $img8.addEventListener('click', showPopup);
};


const showPopup = (e) => {
    ref = e.target.closest('a').className;
    href = getComputedStyle(eval(`$${ref}`)).backgroundImage;
    $popupPhoto.style.backgroundImage = href;
    $popup.classList.remove('hide');

    $prev.addEventListener('click', prevPhoto);
    $close.addEventListener('click', popupClose);
    $next.addEventListener('click', nextPhoto);

    document.addEventListener('keyup', pressBtn);
};



const pressBtn = (e) => {
    if (e.keyCode === 37) {
        $prev.click();
    } else if (e.keyCode === 27) {
        popupClose();
    } else if (e.keyCode === 39) {
        $next.click();
    } else {
        console.log('niestety coś nie pykło :/');
    }
};


const prevPhoto = (e) => {
    ref = e.target.closest('.photo').style.backgroundImage;
    newRef = ref.split('');
    revRef = newRef.reverse();
    newHref = ref.split('-');
    if (revRef[7] == 0 && revRef[6] == 1) {
        console.log('to jest pierwsze zdjęcie, nie da się cofnąć bardziej! W sumie mógłbym zrobić karuzele, ale to już ogarnę później :)');
    } else if (revRef[7] == 0 && revRef[6]*1 > 1) {
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${revRef[7]}`+`${revRef[6]*1-1}`+'.jpg';
    } else if (revRef[6] == 0 && revRef[7]*1 > 0){ 
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${revRef[7]*1-1}9`+'.jpg';
    } else if (revRef[7]*1 > 0) {
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${(revRef[7]+revRef[6])*1-1}`+'.jpg';
    } else {
        console.log('no siema, cos poszło nie tak niestety');
    }
}

const nextPhoto = (e) => {
    ref = e.target.closest('.photo').style.backgroundImage;
    newRef = ref.split('');
    revRef = newRef.reverse();
    newHref = ref.split('-');
    if (revRef[7] == 0 && revRef[6]*1 <= 8) {
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${revRef[7]}`+`${revRef[6]*1+1}`+'.jpg';
    } else if (revRef[7] == 3 && revRef[6] == 2){
        console.log('koniec zdjec! Tu powraca temat karuzeli - kiedys ogarnę :)');
    } else if (revRef[6] == 9){ 
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${revRef[7]*1+1}0`+'.jpg';
    } else if (revRef[7]*1 > 0) {
        $popupPhoto.style.backgroundImage = `${newHref[0]}`+'-'+`${(revRef[7]+revRef[6])*1+1}`+'.jpg';
    } else {
        console.log('no siema, cos poszło nie tak niestety');
    }
};


const popupClose = () => {
    $popup.classList.add('hide');
};

document.addEventListener('DOMContentLoaded', main);