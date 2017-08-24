$(document).ready(function () {
    console.log('DOM is load!');

//Аккордеон в секции "Команда"
    $(function () {    
        $('.team-accord__name').on('click', function (e) {
            e.preventDefault();

            var teamClick = $(e.target),
                teamDesc = teamClick.siblings(),
                teamOther = teamClick.closest('.team-accord__item').siblings().find('.team-accord__name');

            if (!teamClick.hasClass('team-accord_active')) {
                    teamOther.removeClass('team-accord_active');
                    teamClick.addClass('team-accord_active');
                    teamDesc.css({
                        'animation-name' : 'fadeIn',
                        'animation-duration' : '0.2s',
                        'animation-timing-function' : 'linear'
                    });
            } else {
                    teamClick.removeClass('team-accord_active');
            };
            console.log('Class add/delete');
        });
    });

//Аккордеон в секции Меню
    $(function(){
        $('.menu-accord__link').on('click', function (e) {
            e.preventDefault();

            var menuClick = $(e.target),
                menuWrap = menuClick.closest('.menu-accord__title'),
                menuDesc = menuWrap.siblings(),
                menuOther = menuWrap.closest('.menu-accord__item').siblings().find('.menu-accord__title');

            if (!menuWrap.hasClass('menu-accord_active')) {
                    menuOther.removeClass('menu-accord_active');
                    menuWrap.addClass('menu-accord_active');
                    menuDesc.css({
                        'animation-name' : 'fadeIn',
                        'animation-duration' : '0.2s',
                        'animation-timing-function' : 'linear'
                    });
            } else {
                    menuWrap.removeClass('menu-accord_active');
            };
            console.log('Class add/delete');
        });
    });

//Всплывающие попапы
    $(function() {
        $('[data-fancybox-menu]').fancybox({
            toolbar: false,
            smallBtn: false
        });
        
        $('[data-fancybox-rev]').fancybox({
            toolbar: false,
            smallBtn: false
        });
        
        $('.pop-close').on('click', function(e) {
            e.preventDefault();
            
            $.fancybox.close();
        });
    });

});

//Подключение карты Яндекс
$(function(){

    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.92606548, 30.32610869],
            zoom: 11
        });

        myPlacemarkTov = new ymaps.Placemark([59.915038, 30.486096], {
            hintContent: 'Mr.Burger на Товарищеском', 
            balloonContent: 'Товарищеский проспект, 20/27'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/svg/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-15, -50]
        });

        myPlacemarkTver = new ymaps.Placemark([59.94708381, 30.38481688], {
            hintContent: 'Mr. Burger на Тверской', 
            balloonContent: 'Тверская улица, 16'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/svg/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-15, -50]
        });

        myPlacemarkMosk = new ymaps.Placemark([59.891295, 30.316907], {
            hintContent: 'Mr.Burger на Московском', 
            balloonContent: 'Московский проспект, 103к2'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/svg/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-15, -50]
        });

        myPlacemarkChap = new ymaps.Placemark([59.973999, 30.311091], {
            hintContent: 'Mr.Burger на Чапыгина', 
            balloonContent: 'улица Чапыгина, 13А'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/svg/map-marker.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-15, -50]
        });  

        myMap.geoObjects
            .add(myPlacemarkTov)
            .add(myPlacemarkTver)
            .add(myPlacemarkMosk)
            .add(myPlacemarkChap);

        myMap.behaviors.disable('scrollZoom');     
    }
    console.log('Map is ready!');
});