<?php
    // This PHP file is for the mortgage calculator assignment for week 10
    
    // Declare variables
    $apr = $term = $amount = "";
    $aprErr = $termErr = $amountErr = "";
    $errorMessage = "Invalid input.";
    
    // Set values
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        if (empty($_GET["apr"])) {
            $aprErr = $errorMessage;
        } else {
            $apr = $_GET["apr"];
        }
        
        if (empty($_GET["term"])) {
            $term = $errorMessage;
        } else {
            $term = $_GET["term"];
        }
        
        if (empty($_GET["amount"])) {
            $amount = $errorMessage;
        } else {
            $amount = $_GET["amount"];
        }
    }
    
    // Prepare calculation variables
    $payment = 0;
    $intRate = ($apr / 100) / 12;
    $months = $term * 12;
    
    $payment = pow((1 + $intRate), -($months));
    $payment = ($amount * $intRate) / (1 - $payment);
?>    
<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Results | Mortgage Calculator</title>

<link rel="stylesheet" href="mortgage.css">
<style>
  #paymentForm {
    grid-template-rows: repeat(7, 1fr);
  }

  .formp {
    justify-self: right;
  }
</style>

</head>
<body>
<div id="mainContent">
<h2>Loan Calculator</h2>
<p>Here is the results of the loan information you entered.</p>

<form id="paymentForm" action="mortgage.php" method="GET">
  <p class="formp aprForm" id="aprp">Annual Percentage Rate (0-25.00%):</p>
  <p name="apr" type="number" id="apr" class="dataForm aprForm"><?php echo $apr?></p>
  <div id="aprDiv" class="formDiv"></div>
  <p class="formp termForm" id="termp">Loan Term (Years):</p>
  <p name="term" type="number" id="term" class="dataForm termForm"><?php echo $term?></p>
  <div id="termDiv" class="formDiv"></div>
  <p class="formp amountForm" id="amountp">Loan Amount (Dollars):</p>
  <p name="amount" type="number" id="amount" class="dataForm amountForm"><?php echo $amount?></p>
  <div id="amountDiv" class="formDiv"></div>
</form>

<p id="paymentParagraph">Monthly Payment: <span id="finalPayment"><?php echo number_format($payment, 2, ".", ",");?></span></p>

</div>

<footer>
  <a href="../index.html">CS213</a>
</footer>
</body>
</html>
    
?>