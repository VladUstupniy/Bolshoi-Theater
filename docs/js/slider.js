$(document).ready(function () {
    $(".header-slider").owlCarousel({
      items: 1, // количество слайдов на экране
      loop: true, // бесконечная прокрутка
      margin: 0, // расстояние между слайдами
      nav: true, // стрелки
      dots: false, // точки
      mouseDrag: true, // перелистывание мышкой
      touchDrag: true, // перелистывание на тачскринах
      navText: [
        'пред',
        'след',
      ],
      autoWidth: false,
    });
});