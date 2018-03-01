const nameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const jobRole = document.getElementById('title');
const otherJob = document.getElementById('other');
const design = document.getElementById('design');
const color = document.getElementById('color');
const colors = $(color).children();
const checkbox = $("[type*='checkbox']");
const all = $("input[name='all']");
const jsFrameworks = $("input[name='js-frameworks']");
const jsLibs = $("input[name='js-libs']");
const express = $("input[name='express']");
const node = $("input[name='node']");
const buildTools = $("input[name='build-tools']");
const npm = $("input[name='npm']");
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const paymentMethod = document.getElementById('payment');
let price = 0;
var checked1 = true;
var checked2 = true;
var checked3 = true;

paymentMethod.selectedIndex = 1;
if (paymentMethod.value == 'credit card') {
    $('fieldset:nth-of-type(4) div:nth-of-type(3) p').hide();
    $('fieldset:nth-of-type(4) div:nth-of-type(2) p').hide();
}

nameInput.focus();
$(otherJob).hide();

$('.activities').append("<span id = 'price'> Total: $0</span>");

$(jobRole).change(() => {
    if (jobRole.value == 'other') {
        $(otherJob).show();
    } else {
        $(otherJob).hide();
    }
});

$(design).change(() => {
    for (let i = 0; i < colors.length; i++)
        if (design.value == 'js puns') {
            if (colors[i].textContent.includes('JS shirt')) {
                $(colors[i]).hide();
            } else {
                $(colors[i]).show();
            }
        }
    else if (design.value == 'heart js') {
        if (colors[i].textContent.includes('JS shirt')) {
            $(colors[i]).show();
        } else {
            $(colors[i]).hide();
        }
    }
});

$(checkbox).change(() => {
    if ($(all).is(':checked') && checked2) {
        price += 200;
        checked2 = false;
    } else if ($(all).is(':checked') == false) {
        if (checked2 == false) {
            price -= 200;
        }
        checked2 = true;
    }

    if ($(jsFrameworks).is(':checked')) {
        $(express).attr("disabled", true);
        $(express).parents('label').css('color', 'gray');
        $(buildTools).attr("disabled", true);
        $(buildTools).parents('label').css('color', 'gray');
        if (checked1) {
            price += 100;
        }
        checked1 = false;
    } else if ($(express).is(':checked') && checked1) {
        $(jsFrameworks).attr("disabled", true);
        $(jsFrameworks).parents('label').css('color', 'gray');
        $(buildTools).attr("disabled", true);
        $(buildTools).parents('label').css('color', 'gray');
        if (checked1) {
            price += 100;
        }
        checked1 = false;
    } else if ($(buildTools).is(':checked')) {
        $(jsFrameworks).attr("disabled", true);
        $(jsFrameworks).parents('label').css('color', 'gray');
        $(express).attr("disabled", true);
        $(express).parents('label').css('color', 'gray');
        if (checked1) {
            price += 100;
        }
        checked1 = false;
    } else if ($(buildTools).is(':checked') == false && $(express).is(':checked') == false && $(jsFrameworks).is(':checked') == false) {
        $(jsFrameworks).attr("disabled", false);
        $(express).attr("disabled", false);
        $(buildTools).attr("disabled", false);
        $(jsFrameworks).parents('label').css('color', 'black');
        $(buildTools).parents('label').css('color', 'black');
        $(express).parents('label').css('color', 'black');
        if (checked1 == false) {
            price -= 100;
        }
        checked1 = true;
    }

    if ($(jsLibs).is(':checked')) {
        $(npm).attr("disabled", true);
        $(npm).parents('label').css('color', 'gray');
        $(node).attr("disabled", true);
        $(node).parents('label').css('color', 'gray');
        if (checked3) {
            price += 100;
        }
        checked3 = false;
    } else if ($(npm).is(':checked') && checked1) {
        $(jsLibs).attr("disabled", true);
        $(jsLibs).parents('label').css('color', 'gray');
        $(node).attr("disabled", true);
        $(node).parents('label').css('color', 'gray');
        if (checked3) {
            price += 100;
        }
        checked3 = false;
    } else if ($(node).is(':checked')) {
        $(jsLibs).attr("disabled", true);
        $(jsLibs).parents('label').css('color', 'gray');
        $(npm).attr("disabled", true);
        $(npm).parents('label').css('color', 'gray');
        if (checked3) {
            price += 100;
        }
        checked3 = false;
    } else if ($(npm).is(':checked') == false && $(node).is(':checked') == false && $(jsLibs).is(':checked') == false) {
        $(npm).attr("disabled", false);
        $(jsLibs).attr("disabled", false);
        $(node).attr("disabled", false);
        $(npm).parents('label').css('color', 'black');
        $(node).parents('label').css('color', 'black');
        $(jsLibs).parents('label').css('color', 'black');
        if (checked3 == false) {
            price -= 100;
        }
        checked3 = true;
    }
    $('#price').text('Total: $' + price);
});

$(paymentMethod).change(() => {
    if (paymentMethod.value == 'credit card') {
        $('fieldset:nth-of-type(4) div:nth-of-type(1)').show();
        $('fieldset:nth-of-type(4) div:nth-of-type(3) p').hide();
        $('fieldset:nth-of-type(4) div:nth-of-type(2) p').hide();
    } else if (paymentMethod.value == 'paypal') {
        $('fieldset:nth-of-type(4) div:nth-of-type(1)').hide();
        $('fieldset:nth-of-type(4) div:nth-of-type(3) p').hide();
        $('fieldset:nth-of-type(4) div:nth-of-type(2) p').show();
    } else if (paymentMethod.value == 'bitcoin') {
        $('fieldset:nth-of-type(4) div:nth-of-type(1)').hide();
        $('fieldset:nth-of-type(4) div:nth-of-type(3) p').show();
        $('fieldset:nth-of-type(4) div:nth-of-type(2) p').hide();
    }
});

document.querySelector('form').addEventListener('submit', (e) => {
    if (nameInput.value == '') {
        nameInput.style.backgroundColor = 'tomato';
        e.preventDefault();
    } else {
        nameInput.style.backgroundColor = '';
    }
    if (/\S+@\S+\.\S+/.test(emailInput.value) == false) {
        e.preventDefault();
        emailInput.style.backgroundColor = 'tomato';
    }
    else{
        emailInput.style.backgroundColor = '';
    }
    if (price == 0) {
        e.preventDefault();
        $('.activities').css("background-color", "tomato");
    }
    else{
        $('.activities').css("background-color", "");
    }
    if (paymentMethod.value == 'credit card') {
        if (/^[0-9]+$/.test(cardNumber.value) == false || cardNumber.value.length < 13 || cardNumber.value.length > 16) {
            e.preventDefault();
            cardNumber.style.backgroundColor = 'tomato';
        } else {
            cardNumber.style.backgroundColor = '';
        }
        if (/^[0-9]+$/.test(zip.value) == false || zip.value.length != 5) {
            e.preventDefault();
            zip.style.backgroundColor = 'tomato';
        } else {
            zip.style.backgroundColor = '';
        }
        if (/^[0-9]+$/.test(cvv.value) == false || cvv.value.length != 3) {
            e.preventDefault();
            cvv.style.backgroundColor = 'tomato';
        } else {
            cvv.style.backgroundColor = '';
        }
    }


});
