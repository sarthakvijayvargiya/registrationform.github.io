
const formlogin = document.getElementById('form');
const emaillogin = document.getElementById('emaillogin');
const passwordlogin = document.getElementById('passwordlogin');

const getemailData = localStorage.getItem("email");
const getpasswordData = localStorage.getItem("password");
const getusername = localStorage.getItem("username");



formlogin.addEventListener('submit', e => {
    e.preventDefault();

    validateLoginInputs();

});


const setLoginError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

const setLoginSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateLoginInputs = () => {
    const emailLoginvalue = emaillogin.value;
    const passwordLoginValue = passwordlogin.value;

    if(emailLoginvalue != getemailData){
        setLoginError(emaillogin, 'Enter Email is not registred');
    }else if(passwordLoginValue != getpasswordData){
        setLoginError(passwordlogin, 'Password is not correct')
    }else{
        setLoginSuccess(emaillogin);
        setLoginSuccess(passwordlogin);
        document.getElementById("loginOne").onclick = function () {
            location.href = "welcome.html";
        }
    }
};

