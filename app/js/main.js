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

    $('.wok__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });

    $('.novelties__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });

    $('.stock__slider').slick({
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

    const cardsWok = document.querySelectorAll(".wok__slider-box");

    cardsWok.forEach(card => {
        const clearButton = card.querySelector(".clear");
        const plusButton = card.querySelector(".plus");
        const quantityElement = card.querySelector(".quantity");
        const priceElement = card.querySelector(".price");
        const sauceSelect = document.getElementById("sauce-select");

        let saucePrice = 0; // Цена за один соус
        let sauceQuantity = 0;

        sauceSelect.addEventListener("change", function () {
            saucePrice = parseFloat(sauceSelect.value); // Получаем значение value и преобразуем в число
            updateTotalPrice();
        });

        clearButton.addEventListener("click", function () {
            sauceQuantity = 0;
            updateQuantity();
        });

        plusButton.addEventListener("click", function () {
            sauceQuantity++;
            updateQuantity();
        });

        function updateQuantity() {
            quantityElement.innerHTML = `<span class="quantity__plus">+</span>${sauceQuantity}`;
            updateTotalPrice();
        }

        function updateTotalPrice() {
            const totalPrice = (saucePrice * sauceQuantity).toFixed(2);
            priceElement.textContent = totalPrice;
        }
    });

    $('.promotion__title-novelties').on('click', function () {
        $('.promotion__title-novelties').addClass('promotion__title-novelties--active');
        $('.novelties').addClass('novelties--on');
        $('.promotion__title-stock').removeClass('promotion__title-stock--active');
        $('.stock').removeClass('stock--on');
    });

    $('.promotion__title-stock').on('click', function () {
        $('.promotion__title-stock').addClass('promotion__title-stock--active');
        $('.stock').addClass('stock--on');
        $('.promotion__title-novelties').removeClass('promotion__title-novelties--active');
        $('.novelties').removeClass('novelties--on');
    });


});