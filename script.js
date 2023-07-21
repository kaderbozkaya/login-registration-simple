const SignInBtn = document.getElementById('Sign_in_btn')
const SignUpBtn = document.getElementById('Sign_up_btn')
const Header = document.getElementById('HeaderName')
const UserName = document.getElementById('UserName')


/* When the sign up button is pressed, the header will change, the sign in button will be disable, the user name appear */

SignUpBtn.onclick = function () {
    Header.innerHTML = "Sign Up"
    UserName.style.maxHeight = '60px'
    SignInBtn.classList.add('disable')
    SignUpBtn.classList.remove('disable')
}

/* When the sign in button is pressed, the header will change, the sign up button will be disable, the user name will not appear */

SignInBtn.onclick = function () {
    Header.innerHTML = "Sign In"
    UserName.style.maxHeight = '0'
    SignInBtn.classList.remove('disable')
    SignUpBtn.classList.add('disable')
}

