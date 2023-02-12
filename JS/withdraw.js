// *  Step 1: Add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function () {

  // * Step 2: get the withdraw amount from the withdraw field
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // * Step 3: clear the withdraw field
  withdrawField.value = "";

  if(isNaN(newWithdrawAmount)){
    alert("please provide a number");
    return;
  }

  // * Step 4: get the current total balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  
  // *  Set condition if the withdraw amount is gatter than the balance 
  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Baap er bank e eto taka nai");
    return;
  }

  // * step 5: sublation amount to the total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  // * step 6: set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // * Step 7: get amounts from previous withdraw total
  const totalWithdrawElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = totalWithdrawElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  // * Step 8: add amounts inside to the withdraw total field
  const totalWithdraw = previousWithdrawTotal + newWithdrawAmount;
  totalWithdrawElement.innerText = totalWithdraw;
});
