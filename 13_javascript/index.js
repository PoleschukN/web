const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2500,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
  pagination: {
    el: '.swiper-bullet-pagination',
    type: 'bullets',
    clickable: true
  }

})
$(".accordion").accordion({
  heightStyle: "content"
  });
  document.querySelectorAll('.section-howwework__step__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.section-howwework__step__btn').forEach(function(btn){
    btn.classList.remove('section-howwework__step__btn--active')});
    e.currentTarget.classList.add('section-howwework__step__btn--active');
    document.querySelectorAll('.section-howwework__content').forEach(function(tabsBtn){
    tabsBtn.classList.remove('section-howwework__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('section-howwework__content--active');
});
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector ('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('burger-menu__is-active')
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector ('#close-burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('burger-menu__is-active')
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector ('#search').addEventListener('click', function () {
    document.querySelector('#form-search').classList.toggle('search__is-active')
  });
});
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector ('#form-close').addEventListener('click', function () {
    document.querySelector('#form-search').classList.toggle('search__is-active')
  });
});;
