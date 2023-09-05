$(function () {

    $('.cover__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left cover__slider-arrow"></button>',
        nextArrow: '<button class="slider-btn slider-btn__right cover__slider-arrow"></button>',
        autoplay: false,
        dots: true,
        fade: true,
        responsive: [{
            breakpoint: 751,
            settings: {
                arrows: true,
            }
        }, ]
    });

    $('.sets__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
    });

    $('.rolls__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
    });

    $('.pizza__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
    });

    $('.wok__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
    });

    $('.novelties__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
    });

    $('.stock__slider').slick({
        prevArrow: '<button class="all-btn all-btn__left"></button>',
        nextArrow: '<button class="all-btn all-btn__right"></button>',
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },

            },
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 541,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                    dots: false,
                    centerPadding: '10%',
                },
            }
        ]
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

    $('.nav-button').on('click', function () {
        $('.header__nav-list').toggleClass('header__nav-list--active');

    });

    const block1 = document.querySelector('.header-top__phone');
    const block2 = document.querySelector('.header__nav-list');
    const navButton = document.querySelector('.nav-button');
    const headerTopInner = document.querySelector('.header-top__inner');
    const headerTopLogo = document.querySelector('.header-top__logo');
    const headerSale = document.querySelector('.header__sale');

    const mediaQuery = window.matchMedia("(max-width: 750px)");

    function handleMediaQuery(event) {
        if (event.matches) {
            block2.appendChild(block1);
            headerTopInner.insertBefore(navButton, headerTopLogo);
            headerTopInner.insertBefore(headerSale, headerTopLogo.nextSibling);
        } else {
            block1.parentNode.insertBefore(block1, block2.nextElementSibling);
            headerTopInner.appendChild(navButton);
            headerTopInner.appendChild(headerSale);
        }
    }

    mediaQuery.addEventListener('change', handleMediaQuery);
    handleMediaQuery(mediaQuery);

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");
        const img = item.querySelector(".accordion-img");

        header.addEventListener("click", function () {
            if (!content.classList.contains("accordion-content--active")) {
                closeAllItems();
            }

            content.classList.toggle("accordion-content--active");
            img.classList.toggle("accordion-img--active");

            if (content.classList.contains("accordion-content--active")) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    function closeAllItems() {
        accordionItems.forEach(item => {
            const itemContent = item.querySelector(".accordion-content");
            const itemImg = item.querySelector(".accordion-img");

            if (itemContent.classList.contains("accordion-content--active")) {
                itemContent.style.display = "none";
                itemContent.classList.remove("accordion-content--active");
            }

            if (itemImg.classList.contains("accordion-img--active")) {
                itemImg.classList.remove("accordion-img--active");
            }
        });
    }
});