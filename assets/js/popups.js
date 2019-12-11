count_class = ".count-people";
var discountVal = ['10%','30%','15%','35%']

lastpack_class = ".lastpack";

message02 = '<div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info icon-box horizon">Số người đang truy cập trang web:  <span id="js-user-id"></span></p></div>';
message03 = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> vừa đặt mua Penirum <span class="show-message__emph">với giá ưu đãi '+ discountVal[Math.floor(Math.random()*4)] + '</span></p></div>';
message04 = '<div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span style="font-size: 16px;"> Còn <span class="pacedNamed"></span><span style="color: red;font-size: 20px;font-weight: bold;"><span style="color: red;">'+Math.ceil(Math.random()*15+10)+'</span></span> sản phẩm với giá ưu đãi.</span></p></div>';
flag_phone = true;
flag_five = true;
flag_key = true;
idleTimer = null;
idleState = false;
idleWait = 30000;
$(document).ready(function() {
    if (parseInt($(".price_land_s1:first").text()) > 0) {
        price = parseInt($(".price_land_s1:first").text()) || 990
    } else {
        price = 0
    }
    var d = first_count();
    var c = new Date();
    var e = parseInt(c.getDate());
    var b = "27";
    changeBlink(b);
    var a = [4, 4, 4, 5, 5];
    if (localStorage.getItem("___cp")) {
        tm = parseInt(localStorage.getItem("___tm"));
        if (e - tm == 0) {
            d = localStorage.getItem("___cp");
            b = localStorage.getItem("___lp");
            changeBlink(b);
        } else {
            setLS(e, b, a, d)
        }
    } else {
        setLS(e, b, a, d)
    }
    $(count_class).text(d);
    $(lastpack_class).text(b);
    if ($(window).width() > 991) {
        $(document).bind("keydown", function() {
            if (flag_key) {
                clearTimeout(idleTimer);
                idleState = false;
                idleTimer = setTimeout(function() {
                    flag_key = false;
                    /*$.magnificPopup.open({
                        items: {
                            //src: "#pu-form",
                            src: "#myModal",    
                            type: "inline"
                        }
                    });*/
                    idleState = true
                }, idleWait)
            }
        });
        $("body").trigger("keydown")
    }
    $(".show-message").on("click", function() {
        $(".show-message__item").fadeOut(100);
        setTimeout(function() {
            $(".show-message").empty()
        }, 200)
    });
    setTimeout(function() {
        popUp()
    }, 8000)
});

function first_count() {
    var e = new Date();
    var c = e.getHours();
    var a = e.getMinutes();
    var b = 100;
    var f = b + c * 12 + Math.floor(a / 5);
    return f
}

function popUp() {
    var a = rand(321, 769);
    localStorage.setItem("___rp", a);
    shwMsg(message02, "", a);
    setTimeout(function() {
        var b = parseInt(localStorage.getItem("___lp"));
        if (b <= 5) {
            if (flag_five) {
                shwMsg(message04, "", 0);
                flag_five = false;
                setTimeout(function() {
                    showPopupEnd()
                }, 12000)
            }
        } else {
            var c = JSON.parse(localStorage.getItem("___sp"));
            showPopupBegin(b, c)
        }
    }, 12000)
}

function showPopupBegin(e, b) {
    var a = orderName();
    var g;
    var c;
    var i;
    var f;
    var h;
    var d;
    if ((b.length == 2) && (flag_phone)) {
        message03 = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> vừa đặt mua Penirum <span class="show-message__emph">với giá ưu đãi '+ discountVal[Math.floor(Math.random()*4)] + '</span></p></div>';
        shwMsg(message03, a, 0);
        flag_phone = false;
        setTimeout(function() {
            h = e;
            showPopupBegin(h, b)
        }, 13000)
    } else {
        g = Math.floor(Math.random() * (b.length));
        c = b[g];

        i = parseInt(window.price777) * parseInt(c) + window.curr777;
        f = parseInt(localStorage.getItem("___cp")) + 1;
        h = e - c;
        if ((price == 0) || (price == 1)) {
            /*d = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name">' + a + "</span></span>, сделал(а) заказ полного курса</p></div>"  */        
        } else {
            d = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name">' + a + '</span></span>, сделал(а) заказ на сумму ' + i + ', заказано <span class="bay">' + c + '</span> <span class="paced">упаковок</span><br><span class="package_left"> Осталось <span class="pacedNamed"></span> по акции <span class="blink_me">' + h + "</span></span></p></div>";
            changeBlink(h);
        }
        b.splice(g, 1);
        localStorage.setItem("___lp", h);
        localStorage.setItem("___sp", JSON.stringify(b));
        localStorage.setItem("___cp", f);
        $(count_class).text(f);
        $(lastpack_class).text(h);
        shwMsg(d, "", 0);
        setTimeout(function() {
            if (h > 5) {
                showPopupBegin(h, b)
            } else {
                if (flag_five) {
                    shwMsg(message04, "", 0);
                    flag_five = false;
                    setTimeout(function() {
                        showPopupEnd()
                    }, 12000)
                } else {
                    showPopupEnd()
                }
            }
        }, 13000)
    }
}

function showPopupEnd() {
    var b = true;
    var a = "";
    setInterval(function() {
        var c = new Array(0, 1);
        var d = c[Math.floor(Math.random() * (c.length))];
        if (d == 0) {
            kindx = rand(1, 33);
            rp = parseInt(localStorage.getItem("___rp"));
            if (b) {
                rp = rp + kindx;
                b = false
            } else {
                rp = rp - kindx;
                b = true
            }
            localStorage.setItem("___rp", rp);
            shwMsg(message02, "", rp)
        } else {
            a = orderName();
            message03 = '<div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info icon-box horizon"><span class="js-show-name"><span class="js-name"></span></span> vừa đặt mua Penirum <span class="show-message__emph">với giá ưu đãi '+ discountVal[Math.floor(Math.random()*4)] + '</span></p></div>';
            shwMsg(message03, a, 0)
        }
    }, 13000)
}

function orderName() {
    var a = ["Lộc", "Bảy", "Văn Linh", "Hoàng", "Thụy", "Tâm", "Đức", "Mạnh", "Đông", "Nam", "Bắc", "Hưng", "Đăng", "Thành", "Vinh", "Huy", "Thiện", "Quang", "Vân", "Điều", "Ánh", "Lâm", "Toàn", "Thu", "Cung", "Bách", "Đăng", "Tùng", "Toán", "Trường", "Sơn", "Tú", "Quý", "Phú", "Hải", "Quân", "Minh", "Hương", "Thạch", "Duy", "Việt", "Tuấn", "Duy Anh", "Việt Anh", "Đức Anh", "Thuận", "Hưng", "Hùng", "Tiến", "Thành", "Tuấn Anh", "Vân Hiếu", "Ngọc Anh", "Đức Huynh", "Lan Anh", "Khanh", "Vĩnh", "Khuê", "Tuyền", "Cơ", "Tuân", "Thắng"];
    var c = ["Hà Nội", "Tp. Hồ Chí Minh", "Hải Phòng", "Nha Trang", "Vũng Tàu", "Thanh Hóa", "Huế", "Đà Nẵng", "Đà Lạt", "Cần Thơ", "Biên Hòa", "Buôn Ma Thuột", "Vinh", "Quy Nhơn", "Long Xuyên", "Thái Nguyên", "Nam Định", "Rạch Giá", "Thủ Dầu Một", "Hạ Long", "Phan Thiết", "Thanh Hóa"];
    var d = a[Math.floor(Math.random() * (a.length))];
    var b = c[Math.floor(Math.random() * (c.length))];
    return d + " từ " + b
}

function rand(b, a) {
    b = parseInt(b);
    a = parseInt(a);
    return Math.floor(Math.random() * (a - b + 1)) + b
}

function shwMsg(c, a, b) {
    $(".show-message").append(c);
    if (a != "") {
        $(".js-name").text(a)
    }
    if (b != 0) {
        $("#js-user-id").text(b)
    }
    $(".show-message__item").slideDown(500).delay(5000).slideUp(500).delay(5000);
    setTimeout(function() {
        $(".show-message").empty()
    }, 6500)
}

function setLS(d, b, a, c) {
    localStorage.setItem("___cp", c);
    localStorage.setItem("___tm", d);
    localStorage.setItem("___lp", b);
    localStorage.setItem("___sp", JSON.stringify(a))
};

function changeBlink(e){
    var elem = document.body.querySelectorAll('.left.blink');
    for (var i = 0; i < elem.length; i++) {
        elem[i].innerHTML = e;
    };
}