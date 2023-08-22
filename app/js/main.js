$(function () {
    $('.cover__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"></button>',
        autoplay: true,
        dots: true,
        fade: true,
    });

    $('.sets__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });

    $('.rolls__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });

    $('.pizza__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const countElement = card.querySelector(".card-box__price-quantity");
        const decrementButton = card.querySelector(".decrement");
        const incrementButton = card.querySelector(".increment");

        let count = 1;

        decrementButton.addEventListener("click", function () {
            if (count > 1) { // Проверка, чтобы не уйти ниже 1
                count--;
                countElement.textContent = count;
            }
        });

        incrementButton.addEventListener("click", function () {
            count++;
            countElement.textContent = count;
        });
    });


});