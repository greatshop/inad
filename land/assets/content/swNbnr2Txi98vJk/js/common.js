$(document).ready(function () {
    glareSlowMove();
    glareFastMove();
    arrowRise();
    $('.pre_toform').on('click', function () {
        $('html, body').animate({scrollTop: $('#order_form').offset().top - 100}, 1200);
    });
    $('.subbutton').on('click', function () {
        $('html, body').animate({scrollTop: $('.composition').offset().top}, 1200);
    });
    $('.change-package-selector2').on('change', (function() {
        var package_id = $(this).val();
        $('.change-package-selector2').prop('value', package_id);
        set_package_prices(package_id);
    }));
});


var sliderBX = {
    settings: {
        wrap: '.use__slider',
        slider: '.use__wrap',
        liteDesctop: 767,
        mobile: 767,
        key: 0,
        winWidth: window.innerWidth
    },
    Global: function (device) {
        var sl = $('.use__cell');
        this.pager = false;
        this.moveSlides = 1;
        this.onSliderLoad = function (id) {
            sl.eq(id).addClass('center');
            sl = $('.use__cell')
        };
        this.onSlideBefore = function () {
            sl.removeClass('center');
        };
        this.onSlideAfter = function (el) {
            el.addClass('center');
        }
        this.slideWidth = 220;
    },
    initSlider: function (device) {
        if (typeof this.slider.getCurrentSlide === 'function') this.slider.destroySlider();
        this.wrap.html(this.dom);
        if (device !== 'desktop') this.slider = $(this.settings.slider).bxSlider(new this.Global(device));
    },
    resize: function () {
        this.settings.winWidth = window.innerWidth;
        if (this.settings.winWidth <= this.settings.mobile && this.settings.key !== 1) {
            this.settings.key = 1;
            this.initSlider('lite');
        } else if (this.settings.winWidth > this.settings.liteDesctop && this.settings.key !== 0) {
            this.settings.key = 0;
            this.initSlider('desktop');
        }
    },
    init: function () {
        this.wrap = $(this.settings.wrap);
        this.dom = this.wrap.html();
        this.slider = $(this.settings.slider);
        this.resize();
    }
};

$(window).load(function () {
    sliderBX.init();

    $('.slider').bxSlider({
        pager: true,
        adaptiveHeight: true,
        loop: true
    });

    $(window).resize(function () {
        sliderBX.resize();
    });
});

function glareSlowMove() {
    $(window).on('mousemove', function (event) {
        var layer = $('.glare__slow');
        var $container = $('body');
        var container_w = $container.width();
        var container_h = $container.height();
        var pos_x = event.pageX;
        var pos_y = event.pageY;
        var left = container_w / 2 - pos_x;
        var top = container_h / 2 - pos_y;
        layer.css({'transform': 'translate(' + left * 5 + "%" + ", " + top * 5 + "%"});
    });

}

function glareFastMove() {
    $(window).on('mousemove', function (event) {
        var layer = $('.glare__fast');
        var $container = $('body');
        var container_w = $container.width();
        var container_h = $container.height();
        var pos_x = event.pageX;
        var pos_y = event.pageY;
        var left = container_w / 3 - pos_x;
        var top = container_h / 1.5 - pos_y;
        layer.css({'transform': 'translate(' + left * 20 + "%" + ", " + top * 20 + "%"});
    });

}

function arrowRise() {
    var arrow = $('.effect__arrow');
    if ($(window).width() <= 540) {
        var listPos = arrow.offset().top + 100;
    } else {
        var listPos = arrow.offset().top + 500;
    }
    var boxHeight = $(window).height();
    var scrollToList = listPos - boxHeight;
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > scrollToList) {
            arrow.addClass('effect__arrow_move');
        }
    });
}