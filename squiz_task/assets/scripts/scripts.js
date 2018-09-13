$('.btn_search').click(function() {
    $('.search_input').toggleClass('active');
});

var currentValue = 100;
var $currentSlider = $('#rangeSliderCurrent');
$currentSlider.rangeslider({
    polyfill: false,
    rangeClass: 'current-slider rangeslider',
    onInit: function() {
        $(this.$handle).text('$'+0);
    },
    onSlide: function(position, value) {
        currentValue = value;
        $(this.$handle).text(' $' + value);
    }
})

var thisVal = parseInt($(this).siblings('.range-slider').find('input[type="range"]').val());
var slider = document.getElementById('rangeSliderCurrent');

slider.onchange = function() {
    range.innerHTML = rangeMessage(this.value);
};

function rangeMessage(thisVal) {
    var htmlValue = '<span class="value_red">$' + thisVal + '</span>';
    var second_area = document.querySelector(".second_area");
    var display = second_area.style.display;
    if(thisVal > 0){
        second_area.style.display = 'block';
        if (thisVal <= 20) {
            return htmlValue + ' will let us to add a few new modules';
        } else if (thisVal <= 50) {
            return htmlValue + ' can help us improve this product';
        } else if (thisVal <= 80) {
            return htmlValue + ' can help us expand this product to other platforms';
        } else {
            return htmlValue + ' goes a long way. If you\'d like to consider becoming a sponsor, please contact us';
        }
    } else{
        second_area.style.display = 'none';
        return htmlValue + ' will let us to add a few new modules';
    }
}

var email = document.getElementById('email');
var emailError = document.getElementById('email-error');
email.oninput = checkResult;

var address = document.getElementById('address');
var addressError = document.getElementById('address-error');
address.oninput = checkResult;

var city = document.getElementById('city');
var cityError = document.getElementById('city-error');
city.oninput = checkResult;

var thirdSection = document.querySelector(".third_area");

function checkResult() {
    var allCorrect = true;
    if (!isEmailValid(email.value)) {
        email.classList.add('error-massage');
        emailError.style.opacity = 1;
        allCorrect = false;
    } else {
        email.classList.remove('error-massage');
        emailError.style.opacity = 0;
    }
    if (address.value.indexOf(',') == -1) {
        address.classList.add('error-massage');
        addressError.style.opacity = 1;
        allCorrect = false;
    } else {
        address.classList.remove('error-massage');
        addressError.style.opacity = 0;
    }
    if (city.value.indexOf(',') == -1) {
        city.classList.add('error-massage');
        cityError.style.opacity = 1;
        allCorrect = false;
    } else {
        city.classList.remove('error-massage');
        cityError.style.opacity = 0;
    }
    if (allCorrect) {
        thirdSection.style.display = 'inline-block';
    } else {
        thirdSection.style.opacity = 'none';
    }
}

// function isEmailValid(email) {
//     var reg = '/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/';
//     if (!reg.test(email))
//         return false;
//     else
//         return true;
//
// }

function isEmailValid(email) {
    var indexOfAt = email.indexOf('@');
    var indexOfDot = email.indexOf('!', indexOfAt);
    return indexOfDot > indexOfAt;
};

String.prototype.toCardFormat = function () {
    return this.replace(/[^0-9]/g, "").substr(0, 16).split("").reduce(cardFormat, "");
    function cardFormat(str, l, i) {
        return str + ((!i || (i % 4)) ? "" : " ") + l;
    }
};

$(document).ready(function(){
    $(".credit-card").keyup(function () {
        $(this).val($(this).val().toCardFormat());
    });
});