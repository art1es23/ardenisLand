const bg = document.querySelector('.parallax-background');
const faq = document.querySelector('.faq');
const faqList = faq.querySelectorAll('.faq-list');
const faqNav = faq.querySelector('.faq-navigation');
const nav = document.querySelector('.navigation-wrapper');
const order = document.querySelector('.order-site');
const orderTitle = order.querySelector('.order-site__title');
const orderForm = order.querySelector('.order-site__form');
const stages = document.querySelector('.stages');
const moreWorksNavItem = document.querySelectorAll('.more-navigation__item')
const moreWorksListItem = document.querySelectorAll('.more-list__item')

const tl = new TimelineMax();

tl.fromTo(nav, 1, {y: -100, opacity: 0}, {y:0, opacity: 1}).
fromTo(stages, 0.5, {x: - window.innerWidth, opacity: 0}, {x: 0, opacity: 1}).
fromTo(faq, 0.5, {x: window.innerWidth}, {x: 0}).
fromTo(faqNav, 1, {opacity: 0}, {opacity: 1}).
fromTo(faqList, 1, {x: -window.innerWidth, opacity: 0}, {x: 0, opacity: 1}).
fromTo(order, 0.25, {x: window.innerWidth / 2, opacity: 0}, {x: 0, opacity: 1}, ).
fromTo(orderTitle, 0.5, {y: -500, opacity: 0}, {y: 0, opacity: 1}).
fromTo(orderForm, 1, {x: 500, opacity: 0}, {x: 0, opacity: 1});

let menuNav = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menu');
let menuOpenIcon = menuToggle.querySelector('.menu-global');
/*
let menuCloseIcon = menuToggle.querySelector('.menu-global--close');
*/

let anchorLinks = document.querySelectorAll('.navigation .navigation__link');

menuToggle.addEventListener('click', function (e) {
        menuNav.classList.toggle('menu-open');
        nav.classList.toggle('navigation_open');
        menuOpenIcon.classList.toggle('menu-global--active');
        document.body.classList.toggle('scroll--hidden')
})

anchorLinks.forEach(link =>
    link.addEventListener('click', (e) => {
            document.body.classList.remove('scroll--hidden');
            menuNav.classList.toggle('menu-open');
            nav.classList.toggle('navigation_open');
            menuOpenIcon.classList.toggle('menu-global--active');
    })
)

const heroSlides = document.querySelectorAll('.hero__slides');
let currentSlide = 0;
function nextSlide() {

        heroSlides[currentSlide].className = 'hero__slides';
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].className = 'hero__slides hero__slides--active';
}

slideInterval = setInterval(nextSlide, 5000);


window.addEventListener('scroll', function (e) {
        let shiftY = window.pageYOffset;
        let wScroll = window.innerHeight;

        bg.style.top = - shiftY / 5 + 'px' ;
        if (shiftY === 0) bg.style.top = '0px' ;

        let services = document.querySelector('.services-group');
        let servicesItems = services.querySelectorAll('.services');
        let servicesScroll = services.getBoundingClientRect().top;
        let servicesFirstItem = services.querySelector('.services-shop');
        let servicesFirstItemScroll = servicesFirstItem.getBoundingClientRect().top;
        let servicesVideo = services.querySelector('.video-wrapper');

        if (wScroll > servicesScroll) {
                for (let i = 0; i < servicesItems.length; i++) {
                        setTimeout(function () {
                                servicesItems[i].classList.add("show");
                        }, 400 * (i + 1));
                }
        }

        const worksSection = document.querySelector('.works');
        const worksItems = worksSection.querySelectorAll('.works__item');
        const worksScroll = worksSection.getBoundingClientRect().top;

        if (wScroll > worksScroll) {
                for (let i = 0; i < worksItems.length; i++) {
                        setTimeout(function () {
                                worksItems[i].classList.add("show");
                        }, 350 * (i + 1));
                }
        }

        if (wScroll > servicesFirstItemScroll) {
                servicesFirstItem.style.overflow = 'visible';
                servicesVideo.style.animation = 'show 1s ease forwards';
        }

        let navHeight = nav.clientHeight;

        if (shiftY >= navHeight) {
                nav.classList.add('navigation_fixed');
        } else {
                nav.classList.remove('navigation_fixed');
        }
})

for (let i = 0; i < moreWorksNavItem.length; i++){
        moreWorksNavItem[i].addEventListener('click', function (e) {
                Array.from(moreWorksListItem).forEach(item => {
                        item.classList.remove('active')
                })
                moreWorksListItem[i].classList.add('active');
        })
}

const stagesNav = document.querySelector('.stages-navigation');
const stagesNavItem = document.querySelectorAll('.stages-navigation__link');
const stagesHeroList = document.querySelectorAll('.hero-stages');

const stagesHeroVideoItem = document.querySelectorAll('.hero-stages__video-item');
const stagesHeroListItems = document.querySelectorAll('.stages-list__item');

for (let i = 0; i < stagesNavItem.length; i++){
        stagesNavItem[i].addEventListener('click', function (e) {
                Array.from(stagesHeroList).forEach(item => {
                        item.classList.remove('stages_active')
                })
                stagesHeroList[i].classList.add('stages_active');
                stagesHeroVideoItem[0].classList.add('video-item--active');
                /*if (!stagesHeroVideoItem[0].classList.contains('video-item--active')) {
                    stagesHeroVideoItem[0].style.opacity = 0;
                    stagesHeroVideoItem[0].style.visibility = 'hidden';

                }*/
        })
}

for (let i = 0; i < stagesHeroListItems.length; i++){
        stagesHeroListItems[i].addEventListener('click', function (e) {
                Array.from(stagesHeroVideoItem).forEach(item => {
                        item.classList.remove('video-item--active')
                })
                stagesHeroVideoItem[i].classList.add('video-item--active');
        })
}

const faqNavItem = document.querySelectorAll('.faq-navigation__item');
const faqHeroList = document.querySelectorAll('.faq-list__item');

for (let i = 0; i < faqNavItem.length; i++){
        faqNavItem[i].addEventListener('click', function (e) {
                const target = e.target;

                Array.from(faqHeroList).forEach(item => {
                        item.classList.remove('faq_active')
                })
                faqHeroList[i].classList.add('faq_active');
        })
}

const modalWrapper = document.querySelectorAll('.modal');
const modalOrder = document.querySelector('.modal--order');
const modalConsultation = document.querySelector('.modal--consultation');
const orderBtn = document.querySelectorAll('.services__link');
const consultationBtn = document.querySelectorAll('.btn--consultation');
const closeBtn = document.querySelectorAll('.btn--close');

orderBtn.forEach(item => {
        item.addEventListener('click',() => {
                    modalOrder.classList.toggle('modal--active');
                    document.body.classList.add('scroll--hidden')
            }
        )
})

consultationBtn.forEach(item => {
        item.addEventListener('click',() => {
                    modalConsultation.classList.toggle('modal--active');
                    document.body.classList.add('scroll--hidden')
            }
        )
})

// Get the modal
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        modalWrapper.forEach(item => {
                if (event.target === item) {
                        item.classList.remove('modal--active');
                        document.body.classList.remove('scroll--hidden')
                }
        })
}

closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalWrapper.forEach(item => {
                if (e.target === item) {
                        item.classList.remove('modal--active');
                        document.body.classList.remove('scroll--hidden')
                }
        })
})




/*const showBlock = (someArray, someItem, someActive) => {

        const cArray = document.querySelectorAll(`${someArray}`);
        const cItem = document.querySelectorAll(`${someItem}`);

        console.log(cArray);
        console.log(cItem);

        for (let i = 0; i < cArray.length; i++){
                cArray[i].addEventListener('click', function (e) {

                        Array.from(cItem).forEach(item => {
                                item.classList.remove(`${someActive}`)
                        })
                        cItem[i].classList.add(`${someActive}`);
                })
                console.log(cItem);
        }
}

@media screen and (max-device-width: 1024px) and (min-device-width: 768px) and (orientation: landscape)

showBlock('.more-navigation__item', '.more-list__item', 'active');*/