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
    var thirdSection = document.querySelector(".third_area");
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
        thirdSection.style.display = 'none';
        return htmlValue + ' will let us to add a few new modules';
    }
}

function ValidationName(){
    var name = document.getElementById('namef');
    var nameError = document.getElementById('name-error');
    var pattern = /^[\D]{3,}\s+[\D]{3,}$/;
    const is_name = pattern.test(name.value);
    if(!is_name){
        name.classList.add('error-massage');
        nameError.style.opacity = 1;
        return false;
    }
    else{
        name.classList.remove('error-massage');
        nameError.style.opacity = 0;
        return true;
    }
}

function ValidationEmail(){
    var email = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var pattern2 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const is_email = pattern2.test(email.value);
    if(!is_email){
        email.classList.add('error-massage');
        emailError.style.opacity = 1;
        return false;
    }
    else{
        email.classList.remove('error-massage');
        emailError.style.opacity = 0;
        return true;
    }
}

function ValidationAddress() {
    var address = document.getElementById('address');
    var addressError = document.getElementById('address-error');
    var pattern = /^[\D]{3,}\s+[\d]{0,8}$/;
    var is_address = pattern.test(address.value);
    if(!is_address){
        address.classList.add('error-massage');
        addressError.style.opacity = 1;
        return false;
    }
    else{
        console.log(is_address);
        address.classList.remove('error-massage');
        addressError.style.opacity = 0;
        return true;
    };
}

function ValidationCity() {
    var city = document.getElementById('city');
    var cityError = document.getElementById('city-error');
    var pattern = /^[\D]{3,}\,\s+[\D]{0,8}$/;
    var is_city = pattern.test(city.value);
    if(!is_city){
        city.classList.add('error-massage');
        cityError.style.opacity = 1;
        return false;
    }
    else{
        city.classList.remove('error-massage');
        cityError.style.opacity = 0;
        return true;
    }
}

var name = document.getElementById('namef');
name.oninput = checkResult;

var email = document.getElementById('email');
email.oninput = checkResult;

var address = document.getElementById('address');
address.oninput = checkResult;

var city = document.getElementById('city');
city.oninput = checkResult;

var thirdSection = document.querySelector(".third_area");

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

$('#namef').on('blur', function() {
    var name = document.getElementById('namef');
    var nameError = document.getElementById('name-error');
    var input = $(this);
    var pattern = /^[\D]{3,}\s+[\D]{3,}$/;
     is_name = pattern.test(input.val());
    if(is_name){
        name.classList.remove('error-massage');
        nameError.style.opacity = 0;
        return true;
    }
    else{
        name.classList.add('error-massage');
        nameError.style.opacity = 1;
    }
});

$('#email').on('blur', function() {
    var email = document.getElementById('email');
    var emailError = document.getElementById('email-error');
    var input = $(this);
    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var is_email = pattern.test(input.val());
    if(is_email){
        email.classList.remove('error-massage');
        emailError.style.opacity = 0;
    }
    else{
        email.classList.add('error-massage');
        emailError.style.opacity = 1;
    }
});

$('#address').on('blur', function() {
    var address = document.getElementById('address');
    var addressError = document.getElementById('address-error');
    var input = $(this);
    var pattern = /^[\D]{3,}\s+[\d]{0,8}$/;
    var is_address = pattern.test(input.val());
    if(is_address){
        address.classList.remove('error-massage');
        addressError.style.opacity = 0;
    }
    else{
        address.classList.add('error-massage');
        addressError.style.opacity = 1;
    }
});

$('#city').on('blur', function() {
    var city = document.getElementById('city');
    var cityError = document.getElementById('city-error');
    var input = $(this);
    var pattern = /^[\D]{3,}\,\s+[\D]{0,8}$/;
    var is_city = pattern.test(input.val());
    if(is_city){
        city.classList.remove('error-massage');
        cityError.style.opacity = 0;
    }
    else{
        city.classList.add('error-massage');
        cityError.style.opacity = 1;
    }
});

$('.form_section').on('blur', function() {
    var city = document.getElementById('city');
    var cityError = document.getElementById('city-error');
    var input = $(this);
    var pattern = /^[\D]{3,}\,\s+[\D]{0,8}$/;
    var is_city = pattern.test(input.val());
    if(is_city){
        city.classList.remove('error-massage');
        cityError.style.opacity = 0;
    }
    else{
        city.classList.add('error-massage');
        cityError.style.opacity = 1;
    }
});

function checkResult() {
    var allCorrect = true;
    console.log("Wartosc wpisana");
    if(($('#namef').val() &&$('#email').val() &&$('#address').val() && $('#city').val())){
        if(ValidationEmail() && ValidationName() &&ValidationAddress() && ValidationCity()){
            thirdSection.style.display = 'inline-block';
        }
    } else{
        thirdSection.style.opacity = 'none';
    }
}


