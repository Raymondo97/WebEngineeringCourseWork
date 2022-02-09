// This file is the JavaScript file for Assign08.html

function totalPrice() {
    let guitarPrice = parseFloat(document.getElementById("guitarPrice").innerHTML),
    pianoPrice = parseFloat(document.getElementById("pianoPrice").innerHTML),
    drumsPrice = parseFloat(document.getElementById("drumsPrice").innerHTML),
    trumpetPrice = parseFloat(document.getElementById("trumpetPrice").innerHTML);

    let guitarQty = parseFloat(document.getElementById("guitarQty").value),
    pianoQty = parseFloat(document.getElementById("pianoQty").value),
    drumsQty = parseFloat(document.getElementById("drumsQty").value),
    trumpetQty = parseFloat(document.getElementById("trumpetQty").value);

    let totalPrice = (guitarPrice * guitarQty) + (pianoPrice * pianoQty) +
        (drumsPrice * drumsQty) + (trumpetPrice * trumpetQty);

    document.getElementById("total").innerHTML = totalPrice.toFixed(2);
}

function creditFunction() {
    let value = document.getElementById("credit_card").value,
    newValue = "";
    value = value.replace(/\s/g, "");

    for (var i = 0; i < value.length; i++) {
        if (i % 4 == 0 && i > 0) {
            newValue = newValue.concat(" ");
        }
        newValue = newValue.concat(value[i]);
    }
    document.getElementById("credit_card").value = newValue;
}

function phoneFunction() {
    let value = document.getElementById("phone").value,
    newValue = "";
    value = value.replace(/-/g, "");

    for (var i = 0; i < value.length; i++) {
        if (i % 3 == 0 && i > 0 && i < 9) {
            newValue = newValue.concat("-");
        }
        newValue = newValue.concat(value[i]);
    }
    document.getElementById("phone").value = newValue;
}

function expFunction() {
    let value = document.getElementById("exp_date").value,
    newValue = "";
    value = value.replace(/\//g, "");

    for (var i = 0; i < value.length; i++) {
        if (i == 2) {
            newValue = newValue.concat("/");
        }
        newValue = newValue.concat(value[i]);
    }
    document.getElementById("exp_date").value = newValue;
}

function validateForm() {

    if (validateInputs(5)) {} else{
        checkErrors();
        return false;
    }
    
    if (validateQuantities()) {} else {
        checkErrors();
        return false;
    }
    
    if (validateRadios()) {
        clearDivs("a");
        // No errors; return true
        return true;
    } else {
        checkErrors();
        return false;
    }
}

function checkErrors() {
    var errors = document.getElementsByClassName("errorDiv");
    for (let error of errors) {
        if (error.innerHTML != "") {
            changeFocus(error);
        }
    }
}

function validateInputs(number) {

    // Iterate through forms to ensure appropriate values
    var forms = document.getElementsByClassName("rightForm"),
    iterations = 0;
    for (let form of forms) {
        if (form.value == "") {
            changeDiv(form);
            return false;
        }

        if (iterations == number) {
            clearDivs("i");
            return true;
        }

        iterations += 1
    }
}

function validateQuantities() {

    // Iterate through insturment quantities to verify changes
    var quantities = document.getElementsByClassName("quantityInput"),
    quantityFilled = false;
    for (let quantity of quantities) {
        if (quantity.value > 0) {
            quantityFilled = true;
        }
    }
    if (!quantityFilled) {
        changeDiv(document.getElementById("totalError"));
        return false;
    }

    clearDivs("q");
    return true;
}

function validateRadios() {

    // Iterate through card radio buttons to verify selection
    var radios = document.getElementsByName("card"),
    radioChecked = false;
    for (let radio of radios) {
        if (radio.checked) {
            radioChecked = true;
        }
    }
    if (!radioChecked) {
        changeDiv(document.getElementById("cardTypeError"));
        return false;
    }
    
    clearDivs("r");
    // Return true if no value is empty
    return true;
}

function changeDiv(element) {
    let message = "Please Fill Out Form";
    switch(element.id) {
        case "first_name":
            document.getElementById("firstError").innerHTML = message;
            break;
        case "last_name":
            document.getElementById("lastError").innerHTML = message;
            break;
        case "address":
            document.getElementById("addressError").innerHTML = message;
            break;
        case "phone":
            document.getElementById("phoneError").innerHTML = message;
            break;
        case "credit_card":
            document.getElementById("creditError").innerHTML = message;
            break;
        case "exp_date":
            document.getElementById("expError").innerHTML = message;
            break;
        case "totalError":
            element.innerHTML = "Please Enter at Least 1 Quantity";
            break;
        case "cardTypeError":
            element.innerHTML = "Please Select Card Type"
            break;
    }
}

function changeFocus(element) {
    switch(element.id) {
        case "firstError":
            document.getElementById("first_name").focus();
            break;
        case "lastError":
            document.getElementById("last_name").focus();
            break;
        case "addressError":
            document.getElementById("address").focus();
            break;
        case "phoneError":
            document.getElementById("phone").focus();
            break;
        case "creditError":
            document.getElementById("credit_card").focus();
            break;
        case "expError":
            document.getElementById("exp_date").focus();
            break;
        case "totalError":
            document.getElementById("drumsQty").focus();
            break;
        case "cardTypeError":
            document.getElementById("visa").focus();
            break;
    }
}

function clearDivs(type) {
    var inputDivs = document.getElementsByClassName("inputErrorDiv"),
    errorDivs = document.getElementsByClassName("errorDiv");

    if (type == "i") {
        for (let div of inputDivs) {
            div.innerHTML = "";
        }
    } else if (type == "q") {
        document.getElementById("totalError").innerHTML = "";
    } else if (type == "r") {
        document.getElementById("cardTypeError").innerHTML = "";
    } else if (type == "a") {
        for (let div of errorDivs) {
            div.innerHTML = "";
        }
    }
}

function resetFunction() {
    document.getElementById("first_name").focus();
}