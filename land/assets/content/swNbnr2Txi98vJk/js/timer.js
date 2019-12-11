document.addEventListener('DOMContentLoaded', function () {
    date_for_sale = new Date().getTime();
    date_for_sale = date_for_sale + 1 * 60 * 60 * 1000;
    countdown();
});

function countdown() {
    var days = 24 * 60 * 60, hours = 60 * 60, minutes = 60;
    seconds = 1;
    var left = Math.floor((date_for_sale - (new Date().getTime())) / 1000);
    if (left < 0) {
        left = 0;
    }
    ;
    h = Math.floor(left / hours);
    if (h < 10) {
        h = '0' + h;
    }
    left -= h * hours;
    m = Math.floor(left / minutes);
    if (m < 10) {
        m = '0' + m;
    }
    left -= m * minutes;
    s = Math.floor(left / seconds);
    if (s < 10) {
        s = '0' + s;
    }

    let hrs = document.getElementsByClassName('hours');
    let mins = document.getElementsByClassName('min');
    let secs = document.getElementsByClassName('sec');

    display(hrs, mins, secs);

    if (h > 0 || m > 0 || s > 0 || d > 0) {
        setTimeout(countdown, 1000);
    }
    ;
};

function display(hrs, mins, secs) {
    [].forEach.call(arguments, function (element, index) {

        // make an Array from HtmlCollection
        var arr = [].slice.call(element);

        // do different actions for hours, mins, secs depending on value of index
        arr.forEach(function (el) {
            init(el, index);
        });
    });
}
function init(el, index) {
    if (index === 0) {
        el.innerHTML = h;
    } else if (index === 1) {
        el.innerHTML = m;
    } else if (index === 2) {
        el.innerHTML = s;
    }
}