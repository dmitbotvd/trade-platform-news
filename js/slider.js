$('.tikets').slick({
    slidesToShow: 7.5,
    slidesToScroll: 1,
    dots: false,
    // centerMode: true,
    focusOnSelect: false,
    arrows: false,
    // centerPadding: '60px',
    // centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 3.8,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3.3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1.9,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        }
    ]
});
$(document).ready(function() {
    $("#theme-toggle").click(function() {
        $("body").toggleClass("dark light"); // Переключение класса "dark" для <body>
        // Получение текущего класса <body>
        const isDarkTheme = $("body").hasClass("dark");

        // Подключение файла стилей в зависимости от темы
        if (isDarkTheme) {
            $("#theme-styles").attr("href", "/style/dark.css");
            $("#theme-toggle img").attr("src", "/img/Switch-dark.svg");
            $(".analysis img").attr("src", "/img/speed-dark.png");
            $(".main-table__graphic img").attr("src", "/img/trade-image-dark.png");
        } else {
            $("#theme-styles").attr("href", "/style/main.css");
            $("#theme-toggle img").attr("src", "/img/Switch.svg");
            $(".analysis img").attr("src", "/img/speed.png");
            $(".main-table__graphic img").attr("src", "/img/trade-image.png");
        }
    });
});
$('.toggle-color').toggle(function() {
    $('body').css({"background": "var(--board-color-dark)"})
    $('.lk-header, .header, .main-table,.market,.analysis, #pills-tab, .table-content .pagination, .navbar-collapse.collapse.show').css({"background": "var(--dark-background-block)"})
    $('.lk-header #pills-account .input__item label, .balance__value, .header-menu__text-name, .main-table__active,.table-striped tbody tr td,\n' +
        '.table-striped tbody tr th, .market__title, .market-order__item .name, .market-order__item .value, ' +
        '.main-transactions #pills-tab .nav-item > .active, .lk-pills .nav-item > .active, .footer p, .grid-items__item').css({"color": "var(--color-white)"})
    $('.lk-header #pills-account .input__item input, .lk-header #pills-account .input__item select').css({"background": "var(--board-color-light-dark)"})
    $('.grid-items:nth-child(2n)').css({"background": "var(--dark-light-table)"})
    $('.lk-header #pills-account .input__item input, .lk-header #pills-account .input__item select, ' +
        '.lk-header #pills-account .input__item-btn input::placeholder,.lk-header #pills-account .input__item-btn input::placeholder').css({"color": "var(--dark-input)"})
    $('.table').addClass('board-light-dark')
    $('.main-table__graphic img').attr('src','/img/trade-image-dark.png')
    $('.analysis img').attr('src','/img/speed-dark.png')
    $('.toggle-color img').attr('src','/img/Switch-dark.svg')
    $('.input__item-btn #phone::placeholder').css({'color': '#fff'})
    $('.toggler-icon').css({'background': '#fff'})
    $('.striped__color-green').css({'color': 'var(--color-green)'})
    $('.striped__color-red').css({'color': 'var(--color-red)'})
    $('.table-content .pagination').addClass('test');
    let testtest = '.main-transactions #pills-tab .nav-item > .active, .lk-pills .nav-item > .active';
    // ().addClass('testtest');
    if ($(testtest).prop('ariaSelected', true)) {
        $(testtest).addClass('testtest');
        console.log('cool')
    } else if ($('.nav-item').prop('ariaSelected', false)) {
        console.log('error')
    }
    // if ($('button.nav-link').prop('ariaSelected', false)) {
    //     // $('button.nav-link').prop('aria-selected', false);
    //     console.log('cool')
    //     $('.main-transactions #pills-tab .nav-item > .active, .lk-pills .nav-item > .active').addClass('test-white');
    // }
    $('.page-link:hover').css({"background-color": "var(--color-grey-dark)"})

}, function() {
   /*  alert( "Second handler for .toggle() called." ); */
});

if ($('.nav-item').prop('ariaSelected', true)) {
    console.log($('.nav-item'))
} else if ($('.nav-item').prop('ariaSelected', false)) {
    console.log('error')
}

//
// $(document).ready(function() {
//     if ( $("#navbarNav").hasClass("show") ) {
//         alert("У элемента задан класс sizeable!");
//     }
//     let head = $(".navbar-logo img");
//     let w = $(window).width(); // Получаем ширину окна
//     if (w <= 992) { // Если ширина окна меньше, либо равна 600
//         head.attr('src', '/img/full-logo.svg');
//     }
// });
$(".navbar-toggler").click(function(e) {
    var menuItem = $(this);

    if (menuItem.attr("aria-expanded") === "true") {
        // $(".navbar-toggler-icon").addClass('clicked');
        $(".navbar__button-item").css({'display': "none"})
        $("body").css({"overflow-y": "hidden"})
        console.log('add')
    }
    else if (menuItem.attr("aria-expanded") === "false") {
        $("body").css({"overflow-y": "auto"})
        $(".navbar__button-item").css({'display': "block"})
    }
});
$(".toggle-color").click(function (e) {
    var toggleColor = $(this);
})
$(document).ready(function() {
    $("#contentSelector").change(function() {
        $(".content").hide();
        var selectedValue = $(this).val();
        $("#contentToShow" + selectedValue).show();
        $(".tab-pane").addClass('show active')
        $(".lk-header .tab-pane.active.show").removeAttr("style");
    });
});
$(document).ready(function() {
    function addParentClassOnResize() {
        if ($(window).width() < 768) {
            $(".child-element").each(function() {
                $(this).parent().addClass("pills-account");
            });
        } else {
            $(".child-element").each(function() {
                $(this).parent().removeClass("pills-account");
            });
        }
    }
    $(document).ready(addParentClassOnResize);
    $(window).resize(addParentClassOnResize);
});