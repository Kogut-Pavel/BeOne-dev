function sliders() {

    let heroSlider = document.querySelector('.hero__slider-wrapper');
    if (heroSlider) {
        heroSlider = new Swiper('.hero__slider-wrapper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function(index, className) {
                    return (
                        '<span class="' + className + '">' + (index + 1) + '</span>'
                    );
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    let catalogSwiper = document.querySelector('.swiper.catalog-block__list');
        if (catalogSwiper) {
            catalogSwiper = new Swiper('.swiper.catalog-block__list', {
                slidesPerView: 4,
                // spaceBetween: 10,
                freeMode: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.catalog-block-next',
                    prevEl: '.catalog-block-prev',
                },
                scrollbar: {
                    el: '.catalog-block-swiper-scrollbar',
                    draggable: true,
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                        freeMode: false,
                    },
                    450: {
                        slidesPerView: 'auto',
                    },
                    768: {
                        slidesPerView: 2.5,
                        freeMode: {
                            enabled: true,
                        },
                    },
                    1024: {
                        slidesPerView: 3.2,
                    },
                    1241: {
                        freeMode: false,
                        enabled: false,
                    },
                },
            });
        }
   
}

export default sliders;
