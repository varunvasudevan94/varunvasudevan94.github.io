const RAZOR_PAY_URL = 'https://rzp.io/rzp/3hnbVQz';

function setPaymentsGateway() {
    var giftButton = document.getElementById('gift-btn');
    giftButton.onclick = function() {
        window.location.href = RAZOR_PAY_URL;
    };
}

window.onload = function () {
    setPaymentsGateway();
};
