$(document).ready(function(){
    detailSlider();
    basicslider();
    headerHg();
    tabletop_menu();
    list_menu();
    menulist();
    toggleTodo();
    loginActive();
    tabUI();
    tabbg();
    scrollEvent();
    cart();
    cartdelete();
    gotologin();
    scrollanimationEvent();
    rightslide();
    lateralmovement();
    animateItems();
    Filter();
    asideFilter();
    inputbg();
    borderbutton();
    qtyComponent();
    recommendations();
    backbutton();
    account_Registered_event();
    account_Address_container_event();
    account_wishilist_container_event();
    account_order_container_event();
    account_cancellation_container_event();
});

function toggleActiveClass() {
    function checkScreenSize() {
        const screenWidth = window.innerWidth;
        return screenWidth <= 1279;
    }
  
    const h3Elements = document.querySelectorAll(".account_container > div > aside div");

    h3Elements.forEach(h3 => {
        h3.addEventListener("click", function () {
            if (checkScreenSize()) {
                if (h3.classList.contains("active")) {
                    h3.classList.remove("active");
                } else {
                    h3.classList.add("active");
                }
            }
        });
    });

    window.addEventListener("resize", () => {
        h3Elements.forEach(h3 => {
            if (!checkScreenSize()) {
                h3.classList.remove("active");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", toggleActiveClass);

  function list_menu() {
    if ($(window).width() <= 1279) { 
        $('.list_container > div:nth-of-type(2) section > div > ul li, .list_container > div:nth-of-type(2) section > div > div > ul li, .list_container > div:nth-of-type(2) section > ul li').on('click', function() {
            var $this = $(this);
            var $divInside = $this.find('div');
            
            // 다른 div들을 숨기기
            $('.list_container > div:nth-of-type(2) section > div > ul li div, .list_container > div:nth-of-type(2) section > div > div > ul li div, .list_container > div:nth-of-type(2) section > ul li div')
                .not($divInside)
                .stop(true, true)
                .fadeOut(100)
                .css('display', 'none');
            
            if ($divInside.css('display') === 'none') {
                $divInside.stop(true, true).fadeIn(100).css('display', 'block');
            } else {
                $divInside.stop(true, true).fadeOut(100).css('display', 'none');
            }
        });
    }
};

function tabletop_menu(){
    $('header div div > button:nth-of-type(2)').click(function() {
        $('header div > section').fadeIn(300);
    });
    $('header div > section').hide();
    $('header div > section div input[type="button"]').click(function() {
        $('header div > section').fadeOut(300);
    });
};

function menulist(){
    $('header div > section div ul li h3').click(function() {
      var $h3 = $(this);
      var $ol = $h3.closest('li').find('ol');
      $h3.toggleClass('active');
      $ol.toggleClass('active');
      $('header div > section div ul li h3').not($h3).removeClass('active');
      $('header div > section div ul li ol').not($ol).removeClass('active');
    });
};
//  cart popup
function cart(){
    $("header span button").click(function(){
        $('#cartPanel').fadeIn(300);
    });
    $("#cartPanel > div div > div").click(function(){
        $('#cartPanel').fadeOut(300);
    });
    $("#cartPanel > span").click(function(){
        $('#cartPanel').fadeOut(300);
    });
    $(".detail_container > div:first-of-type  aside form > input:nth-of-type(1)").click(function(){
        $('#cartPanel').fadeIn(300);
    });
}
function cartdelete(){
    $('#cartPanel > div form ul li > input').click(function(){
        $(this).hide();
        $('#cartPanel > div div h2 span').text('0');
        $('#cartPanel > div form section span').text('0');
        $('#cartPanel > div form ul li a').hide();
        $('#cartPanel > div form ul li').css('border', 'none');     
        $('#cartPanel > div form ul li span.no-items').remove();
        $('#cartPanel > div form ul li').each(function() {
            if ($(this).children('span.no-items').length === 0) {
                $(this).append('<span class="no-items">No items</span>');
            }
        });
    });
}

function loginActive() {
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
        $('header > div > div > button').addClass('loginActive');
    } else {
        $('header > div > div > button').removeClass('loginActive');
    }

    // 로그인 폼 제출 이벤트 처리
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const username = $('#userId').val();
        const password = $('#userPassword').val();

        if (username && password) {
            localStorage.setItem('isLoggedIn', 'true');
            $('header div div > button:nth-of-type(1)').addClass('loginActive');
            $('#loginPanel').hide(); 

            window.location.href = 'index.html';
        }
    });
    $("header div div > button:nth-of-type(1)").on('click', function() {
        if (isLoggedIn) {
            gotologin();
        } else {
            window.location.href = 'login.html';
        }
    });

    $('#loginPanel > div > input[type="button"]').on('click', function() {

        localStorage.setItem('isLoggedIn', 'false');
        $('header div div > button:nth-of-type(1)').removeClass('loginActive');
        $('#loginPanel').hide();
        window.location.href = 'login.html';
    });
}

function toggleTodo(){
    var $toggleTarget = $(".material-symbols-outlined.toggleVisible");
    var $toggleInput = $("#userPassword");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}

function gotologin() {
    $('#loginPanel').fadeToggle(50);
}

// header height
function headerHg() {
    // 화면 크기 체크
    if (window.innerWidth >= 1280) {
        // 1280px 이상일 때만 hover 이벤트 활성화
        $("header nav ul").hover(function() {
            $('header').addClass('hg');
        }, function() {
            $('header').removeClass('hg');
        });
    } else {
        // 1280px 미만일 때는 hover 이벤트 아예 비활성화
        $("header nav ul").off('mouseenter mouseleave');
    }
}

// 화면 크기 변경 시, 다시 체크하여 이벤트 추가/제거
$(window).resize(function() {
    headerHg();
});

headerHg();


// header scroll
function scrollEvent() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrollbg');
        } else {
            $('header').removeClass('scrollbg');
        }
    });
    $(window).resize(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrollbg');
        } else {
            $('header').removeClass('scrollbg');
        }
    });
}

// 스크롤 이벤트 초기화
$(document).ready(function() {
    scrollEvent();
});

// scrollevent animation
function scrollanimationEvent() {
    if (window.innerWidth >= 1280) {
        $(window).scroll(function() {
            let value = window.scrollY;
            console.log("scrolly", value);
            if ($(this).scrollTop() > 1610) {
                $('.index_container > div:nth-of-type(2)').addClass("scrollanimationEvent");
            } else {
                $('.index_container > div:nth-of-type(2)').removeClass("scrollanimationEvent");
            }
        });
    } else {
        $(window).off('scroll');
    }
}

$(window).resize(function() {
    scrollanimationEvent();
});

// 초기 실행
scrollanimationEvent();

function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
        $(".index_container > div:nth-of-type(4) > div span:last-of-type").removeClass("rotateanima").addClass("rotateanima");
    });
}
function tabbg(){
    $(" .tabMenu li:first-of-type").click(
        function(){
            $('.index_container > div:nth-of-type(4)').css("background-color" ,"#d9d2d0")
        })
    $(" .tabMenu li:last-of-type").click(
        function(){
            $('.index_container > div:nth-of-type(4)').css("background-color" , "#d1d0d6")
        })
}

function rightslide() {
    var currentSlide = 1; 
    var maxSlide = -75;
    var totalSlides = 4;
    var currentIndex = 1; 
    $('.index_container > div:last-of-type > input').click(function() {
        var $ul = $('.index_container > div:last-of-type > div:last-of-type ul');
        currentSlide -= 25;
        if (currentSlide < maxSlide) {
            currentSlide = 0;
            currentIndex = 1;
        } else {
            currentIndex++;
        }
        $(".index_container > div:last-of-type > div:last-of-type ul").css('transform', `translateX(${currentSlide}%)`);
        $('.index_container > div:last-of-type div:first-of-type ul li:first-of-type').text(currentIndex.toString().padStart(2, '0'));
    });
}
function detailSlider() {
    var slider = $('.detailSlider ul li');
    if (slider.length > 1) {
        $('.detailSlider ul').bxSlider({
            mode: 'horizontal',
            responsive: true,
            pager: true,
            controls: true,
            startSlide: 0,
            moveSlides: 1,
            minSlides: 1,
            maxSlides: 1, 
            slideMargin: 50,
            video:true,
            touchEnabled:false,
        });
    }
}
function basicslider() {
    var slidesToShow = 4;
    var minSlides = 4;
    var maxSlides = 4;
    var slideWidth = 380;  // 기본 슬라이드 너비

    // 화면 크기에 따라 슬라이드 수와 너비 설정
    if ($(window).width() >= 768 && $(window).width() <= 1279) {
        slidesToShow = 3;
        minSlides = 2;
        maxSlides = 3;
        slideWidth = 340;
    } else if ($(window).width() <= 767) {
        slidesToShow = 1;
        minSlides = 1;
        maxSlides = 1;
        slideWidth = 767;
    }

    $('.recommandSlider').bxSlider({
        mode: 'horizontal',
        slideWidth: slideWidth,
        minSlides: minSlides,
        maxSlides: maxSlides,
        slideMargin: 50,
        moveSlides: 1,
        startSlide: 0,
        infiniteLoop: true,
        controls: true,
        pager: true,
        responsive: true,
        touchEnabled: false,
    });
}
function lateralmovement() {
    var $scrollContainer = $('.index_container > div:nth-of-type(3) > div ul');

    // $scrollContainer가 존재하는지 확인
    if ($scrollContainer.length > 0) {
        var maxScrollLeft = $scrollContainer[0].scrollWidth - $scrollContainer[0].clientWidth;
        var autoSlideInterval;

        function startAutoSlide() {
            autoSlideInterval = setInterval(function () {
                var currentScrollLeft = $scrollContainer.scrollLeft();

                // 끝까지 갔을 때 처음으로 돌아가서 반복
                if (currentScrollLeft >= maxScrollLeft) {
                    $scrollContainer.scrollLeft(0); // 처음으로 이동
                } else {
                    $scrollContainer.scrollLeft(currentScrollLeft + 1); // 1px씩 이동
                }
            }, 10); // 10ms 간격으로 슬라이드
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval); // 기존 슬라이드를 멈춤
        }

        // 자동 슬라이드 시작
        startAutoSlide();

        // 화면 크기 조정 시 최대 스크롤 값 재계산 후 슬라이드 유지
        $(window).resize(function () {
            stopAutoSlide(); // 기존 슬라이드를 멈추고
            maxScrollLeft = $scrollContainer[0].scrollWidth - $scrollContainer[0].clientWidth; // 새 값 계산
            startAutoSlide(); // 새로 시작
        });
    }
}

// 문서가 준비되었을 때 자동으로 슬라이드 실행
$(document).ready(function () {
    lateralmovement();
});

function animateItems(){
        var $items = $('.index_container > div:nth-of-type(6) > div ul li');
        var index = 0;  
        function animateItems() {
            $items.removeClass('ScaleUp');
            $items.eq(index).addClass('ScaleUp');
            index = (index + 1) % $items.length;
            setTimeout(animateItems, 1900);
        }
        animateItems();
}
function Filter() {
    $('.list_container div aside fieldset legend').click(function() {
        var inputsAndLabels = $(this).parent().find('input[type="radio"], label');
        inputsAndLabels.add(this).toggleClass('Filter');
    });
    $('.list_container div aside fieldset input[type="radio"]').change(function() {
        $('label').css('color', '');
        $('.list_container div aside fieldset input[type="radio"]:checked').each(function() {
            $(this).next('label').css('color', 'black');
        });
    });
}
function asideFilter() {
    $('.list_container > div:nth-of-type(2) aside fieldset input[type="button"]:first-of-type').click(function() {
        $('.list_container > div:nth-of-type(2) aside fieldset input[type="radio"]').prop('checked', false);
        $('.list_container > div:nth-of-type(2) aside fieldset label').css('color', '');
    });
}
function inputbg() {
    $('.detail_container > div:first-of-type aside form > div:first-of-type input').on('click', function() {
        $(this).toggleClass('inputbg'); 
    });
};
function borderbutton() {
    $('.detail_container > div:first-of-type aside form > div > button').removeClass('borderbutton');
    $('.detail_container > div:first-of-type aside form > div > button:first-of-type').addClass('borderbutton');
    $('.detail_container > div:first-of-type aside form > div > button').click(function() {
        $('.detail_container > div:first-of-type aside form > div > button').removeClass('borderbutton'); 
        $(this).addClass('borderbutton'); 
    });
}
function qtyComponent() {
    $('.qtyComponent span').text(1);

    $('.qtyComponent input:first-of-type').click(function() {
        let currentValue = parseInt($('.qtyComponent span').text());

        if (currentValue > 1) {
            currentValue--;
            $('.qtyComponent span').text(currentValue);
        }
    });

    $('.qtyComponent input:last-of-type').click(function() {
        let currentValue = parseInt($('.qtyComponent span').text());
        if (currentValue < 99) {
            currentValue++;
            $('.qtyComponent span').text(currentValue);
        }
    });
}
function recommendations(){
    $('.review_container > div section form > ul li').click(function() {
      $('.review_container > div section form > ul li').removeClass('active');
      $(this).addClass('active');
    });
};
function backbutton(){
    $('#backButton').click(function(event) {
      event.preventDefault();
      window.history.back();
    });
};
function account_Registered_event(){
    $('.account_Registered_container div input[type="submit"]').click(function() {
        $('.account_Registered_container > ul li').addClass('Registration');
    });
        $(".account_Registered_container div input[type='button']").click(function() {
            const secondInput = $(".account_Registered_container div input:nth-of-type(2)[type='text']");
            if (secondInput.val().trim() !== "") {
              $(".registration_popup").fadeIn();
            }
          });
    
          $(".registration_popup input[type='button']").click(function() {
            $(".registration_popup").fadeOut();
          });
      
          $(".account_Registered_container div > input[type='submit']").click(function() {
            $(".information_popup").fadeIn();
          });
          $(".information_popup input[type='button']").click(function() {
            $(".information_popup").fadeOut();
          });
};



function account_Address_container_event() {
    $('.account_Address_container > div > div:nth-of-type(1) input[type="button"]:nth-of-type(1)').click(function() {
        $('.account_Address_container mark').removeClass('active');
        $('.account_Address_container > div ul li:not(:nth-of-type(1)) span input:checked').each(function() {
            $(this).closest('li').find('mark').addClass('active');
        });
    });

    $('.account_Address_container > div ul li:nth-of-type(1) span input').change(function() {
        var isChecked = $(this).is(':checked');
        $('.account_Address_container > div ul li:not(:nth-of-type(1)) span input').prop('checked', isChecked);
    });

    $('.account_Address_container > div ul li:not(:nth-of-type(1)) span input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) {
            $('.account_Address_container > div ul li:nth-of-type(1) span input').prop('checked', false);
        }
        $('.account_Address_container > div span input[type="checkbox"]').not(this).prop('checked', false);
    });

    $('.account_Address_container > div > div:nth-of-type(2) input:nth-of-type(1)').click(function() {
        $('.account_Address_container > div ul li:not(:nth-of-type(1))').each(function() {
            if ($(this).find('span input[type="checkbox"]').is(':checked')) {
                $(this).remove();
            }
        });
        $('.account_Address_container > div ul li:nth-of-type(1) span input').prop('checked', false);
        if ($('.account_Address_container > div ul li:not(:nth-of-type(1))').length === 0) {
            $('.account_Address_container > div ul').append('<li class="active"><span></span><label>There is no registered address.</label></li>');
        }
    });
    $('.account_Address_container > div > div:nth-of-type(1) input[type="button"]:nth-of-type(2)').click(function() {
        $('.address_popup').show();
    });

    $('.address_popup div input[type="reset"]').click(function() {
        $('.address_popup').hide();
    });

    $('.account_Address_container > div > div:nth-of-type(2) input:nth-of-type(2)').click(function() {
        var isChecked = $('.account_Address_container > div ul li:not(:nth-of-type(1)) span input:checked').length > 0;

        if (isChecked) {
            $('.regist_popup').show();
        }
    });
    $('.regist_popup div input[type="button"]').click(function() {
        $('.regist_popup').hide();
    });
};
function account_wishilist_container_event() {
    $(".wishlist_container > ul:first-of-type li a").hover(
        function() {
            $(this).closest('li').find('input:nth-of-type(1)').addClass('active');
        },
        function() {
            $(this).closest('li').find('input:nth-of-type(1)').removeClass('active');
        }
    );
    $(".wishlist_container > ul:first-of-type li input:nth-of-type(1)").hover(
        function() {
            $(this).closest('li').find('input:nth-of-type(1)').addClass('active');
        },
        function() {
            $(this).closest('li').find('input:nth-of-type(1)').removeClass('active');
        }
    );
    $(".wishlist_container > ul:first-of-type li input:nth-of-type(2)").click(function() {
        $(this).toggleClass('active');
    });
    $(".wishlist_container > ul:first-of-type li input:nth-of-type(1)").click(function() {
        $(this).closest('li').addClass('active').hide();
        if ($(".wishlist_container > ul:first-of-type li:visible").length === 0) {
            $(".wishlist_container > ul:first-of-type").append(
                '<li><p>No Product</p></li>'
            );
            $(".wishlist_container > ul:first-of-type li:last-of-type").css("width", "100%");
        }
    });
}
function account_order_container_event(){
    $(".orders_container > div ul li input").click(function() {
        $(".orders_container > div ul li input").removeClass("active")
        $(this).addClass("active");
    });
    $(".cancellation_popup > div input:nth-of-type(1)").click(function() {
        $(".cancellation_popup").fadeOut();
        $(".orders_container > ul li:not(:nth-of-type(1)) div div").each(function() {
            $(this).html('<span class="canceling">Cancelling</span>');  // 텍스트 변경
        });
    });
    $(".cancellation_popup > div input:nth-of-type(2)").click(function() {
        $(".cancellation_popup").fadeOut();
    });
    $(".orders_container > ul li:not(:nth-of-type(1)) div div input:nth-of-type(1)").click(function() {
        $(".cancellation_popup").fadeIn();
    });
    $(".orders_container > ul li:not(:nth-of-type(1)) div div input:nth-of-type(2)").click(function() {
        window.location.href = "sub_contactus.html";
    });
};
function account_cancellation_container_event(){
    $(".cancellation_container > div ul li input").click(function() {
        $(".cancellation_container > div ul li input").removeClass("active")
        $(this).addClass("active");
    });
};
$(document).ready(function() {
    // footer section > div:last-of-type div 클릭 이벤트
    $("footer section > div:last-of-type div").on("click", function() {
        // .active 클래스 토글
        $(this).toggleClass("active");
    });
});
