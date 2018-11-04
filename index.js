var number;
var list = document.getElementById("list");
var results;
var errorMessage = document.getElementById("errorMessage");

function check() {
    list.innerHTML = "";
    errorMessage.style.display = "none";
    results = 0;
    number = document.getElementById("number").value;

    a = number % 10;
    b = parseInt((number % 100) / 10);
    c = parseInt((number % 1000) / 100);
    d = parseInt((number % 10000) / 1000);

    checkValidate(a, b, c, d);
    checkValidate(a, b, d, c);
    checkValidate(a, c, b, d);
    checkValidate(a, c, d, b);
    checkValidate(a, d, b, c);
    checkValidate(a, d, c, b);
    checkValidate(b, a, c, d);
    checkValidate(b, a, d, c);
    checkValidate(b, c, a, d);
    checkValidate(b, c, d, a);
    checkValidate(b, d, a, c);
    checkValidate(b, d, c, a);
    checkValidate(c, a, b, d);
    checkValidate(c, a, d, b);
    checkValidate(c, b, a, d);
    checkValidate(c, b, d, a);
    checkValidate(c, d, a, b);
    checkValidate(c, d, b, a);
    checkValidate(d, a, c, b);
    checkValidate(d, a, b, c);
    checkValidate(d, b, a, c);
    checkValidate(d, b, c, a);
    checkValidate(d, c, a, b);
    checkValidate(d, c, b, a);
    if (results == 0)
        errorMessage.style.display = "block";


}


function checkValidate(a, b, c, d) {
    hours = a * 10 + b;
    minutes = c * 10 + d;
    if (hours < 24 && minutes < 60) {
        printValidateHour(hours, minutes);
        results++;
    }


}

function printValidateHour(h, m) {
    time = document.createElement("li");
    time.innerText = `${h}:${m}`;
    list.appendChild(time);

}