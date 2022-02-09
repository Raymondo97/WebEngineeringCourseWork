// This is the JavaScript file for week07 assignment

/* Get data for calculating payment */
function doPayment() {
  // Clear current monthly payments
  document.getElementById("payment").innerHTML = null;
  
  // Declare variables for form elements
  var apr = document.getElementById("apr"),
  term = document.getElementById("term"),
  amount = document.getElementById("amount");

  // Obtain the number of forms and number of filled forms
  var forms = document.getElementsByClassName("dataForm");
  var formsNumber = Array.prototype.filter.call(forms, function(forms) {
    return forms.value != "";
  })

  // Declare variables of form values as floats
  let payment,
  aprFloat = parseFloat(apr.value),
  termFloat = parseFloat(term.value),
  amountFloat = parseFloat(amount.value);

  // If there are no empty forms and no errors
  if ((formsNumber.length == forms.length) && !(isError("apr", aprFloat))
  && !(isError("term", termFloat))) {
    // Clear error message and calculate monthly payment
    document.getElementById("formsDiv").innerHTML = null;
    payment = computePayment(amountFloat, aprFloat, termFloat);
    document.getElementById("payment").innerHTML = "$" + payment;
  } else {
    // Displays error message and calls function to set focus
    document.getElementById("formsDiv").innerHTML = 
    "Not all forms are filled correctly";
    findError();
  }  
}

/* Determine where (which form) an error is located
This is based on cell values; whether empty or out of range */
function findError() {
  // Declares variables for form elements
  apr = document.getElementById("apr");
  term = document.getElementById("term");
  amount = document.getElementById("amount");

  // If apr form is blank or out of range
  if ((apr.value == "") || (isError("apr", apr.value))) {
    apr.focus();
  // Else if term form is blank or out of range
  } else if ((term.value == "") || (isError("apr", apr.value))) {
    term.focus();
  // Else if amount form is blank
  } else if (amount.value == "") {
    amount.focus();
  }
}

/* Determine if given form value is within the specified range */
function isError(keyword, value) {
  switch (keyword) {
    case "apr":
      if ((value > 25.00) || (value < 0)) {
        return true;
      } else {
        return false;
      }
    case "term":
      if ((value < 0) || (value >= 40)) {
        return true;
      } else {
        return false;
      }
  }
}

/* Validate apr form to verify that given float is within range */
function validateApr() {
  let message = "Invalid input",
  aprFloat = document.getElementById("apr").value;

  if (isError("apr", aprFloat)) {
    // Displays error message beneath form
    document.getElementById("aprDiv").innerHTML = message;
  } else {
    // Clears any error message remaining
    document.getElementById("aprDiv").innerHTML = null;
  }
}

/* Validate term form to verify that given float is within range */
function validateTerm() {
  let message = "Invalid input",
  termFloat = document.getElementById("term").value;

  if (isError("term", termFloat)) {
    // Displays error message beneath form
    document.getElementById("termDiv").innerHTML = message;
  } else {
    // Clears any error message remaining
    document.getElementById("termDiv").innerHTML = null;
  }
}

// Clears all divs when reset is pressed
function clearDivs() {
  let divs = document.getElementsByClassName("formDiv");
  for (div in divs) {
    divs[div].innerHTML = null;
  }
}