$(document).ready(function () {
    let owlCarousel = $('.owl-carousel');
    if (owlCarousel.length === 0) {
        return;
    }
    owlCarousel.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
});

/* read more btn feedback */
/*let feedbackText = document.querySelector('.feedback__text').innerHTML;
let numberOfWords = feedbackText.split(' ').length;*/
/*let readMoreBtn = document.querySelectorAll('.feedback__button');
let dots = document.querySelector(".dots");
let moreText = document.querySelector(".more");
moreText.hidden = true;

console.log(readMoreBtn)*/
/*if (numberOfWords < 30) {
    dots.hidden = true;
}*/

/*
function seeMore() {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readMoreBtn.innerHTML = "Читать полностью";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readMoreBtn.innerHTML = "Скрыть";
        moreText.style.display = "inline";
    }
}

readMoreBtn.addEventListener('click', seeMore)*/


$(function(){
    $(".feedback__text").elimore({
        maxLength: 230,
        moreText: "Читать далее",
        lessText: "Свернуть текст"
    });
});