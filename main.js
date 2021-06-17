/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


//Display signIn message when button is clicked
function sSignIn(){
    alert("Thank you for login!");
}


//Display signUp message when button is clicked
function sSignUp(){
    alert("Account created successfully!");
}

$(document).ready(function () {
    //change selectboxes to selectize mode to be searchable
       $("select").select();
    });