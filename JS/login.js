// * Step 1: add click event handlar with the submit button
document.getElementById("btn-submit").addEventListener("click",function(){
    // * Step 2: Get the email address inside the input field
    // * always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value ;
    // * Step 3: Get Password
    // * step 3.a: set id on the html element
    // * 3.b: get the element
    // * 3.c: get the value from the element
    const passwordField =document.getElementById("user-password");
    const password = passwordField.value ;
    // *DANGER: Do not verify email and password on the client side
    // * Step 4: Varify email password and check whether it's valid or not
    if (email === "parvej@gmail.com" && password === 'pappu'){
        window.location.href = "bank.html";
    }
    else{
        alert("invalid user");
    }
})