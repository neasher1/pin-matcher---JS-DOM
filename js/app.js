function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    //display pin
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const typedNumber = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumber.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumber.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remianingDigits = digits.join('');
            typedNumber.value = remianingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumber.value = newTypedNumber;
    }
});


document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const currentField = displayPin.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    //verify pin

    const pinSuccuessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (typedNumber === currentField) {
        pinSuccuessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccuessMessage.style.display = 'none';
    }
});