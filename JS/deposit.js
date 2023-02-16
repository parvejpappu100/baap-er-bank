// * Step 1: Add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click",function(){
    // * Step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString =depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if(isNaN(newDepositAmount)){
        alert("Please provide a number.");
        return;
    };
    // * Step 3: Get the current deposit total:
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString =depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // * step 4: add amounts to the total deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // * set the deposit total
    depositTotalElement.innerText = currentDepositTotal ;

    // * Step 5: get balance current total:
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalElementString);

    // * step 6: calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // * set the total balance
    balanceTotalElement.innerText = currentBalanceTotal;

    // * clear the deposit field:
    depositField.value = "";
    
});