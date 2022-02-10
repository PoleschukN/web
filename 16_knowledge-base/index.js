const element = document.querySelector('.select');
const choices = new Choices(element, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: ''
});
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [48.872185073737896, 2.354223999999991],
        // Уровень масштабирования
        zoom: 17
    });

    // Создание моего геообъекта
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/Subtract.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
    //удаление объектов
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

var telSelector = document.querySelector('input[type="tel"]');

var im = new Inputmask('+7(999) 999-99-99');
im.mask(telSelector);



new window.JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 3,
            maxLength: 20,
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = telSelector.inputmask.unmaskedvalue()
                    // console.log(phone)
                console.log(Number(phone) && phone.length === 10)
                return Number(phone) && phone.length === 10
            }
        },
        email: {
            required: true,
            email: true
        },
    },
    colorWrong: '#FF5C00',
    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Введите не более 20 символов',
        },
        tel: {
            required: 'Укажите ваш телефон',
            function: 'Укажите корректный телефон',
        },
        email: {
            email: 'Введите корректный E-mail',
            required: 'Укажите ваш e-mail'
        },
    },
    submitHandler: function(thisForm) {

    }
});

tippy('#popup', {
    content: "Глава 2, страница 176",
    placement: 'top',
    animation: 'scale',
    theme: 'material',
    maxWidth: 170,
});
