
window.onload = function () {

    function sharedFunc(element) {
        const res = document.getElementById(element) || document.querySelector(element);
            return res;
    }
    let fullName = sharedFunc('fullName');
    let userName = sharedFunc('userName');
    let email = sharedFunc('email');
    let password = sharedFunc('password');
    let repeatPassword = sharedFunc('repeatPassword');
    let checkbox = sharedFunc('formCheckbox');
    let button = sharedFunc('signUp');
    let hrefFooter = sharedFunc('href-footer');

    const form = sharedFunc('form');

    let popupBg = sharedFunc('.popup__bg');
    let popupButton = sharedFunc('.popup__button');

    fullName.onkeydown = (e) => {
     const sym = '0,.;\'\\/|<>":+-*_-!@#$%^&()=[]{}';
        let a = sym.indexOf(e.key);
        if (parseFloat(e.key) || a >= 0) {
            e.preventDefault();
        }
    }

    userName.onkeydown = (e) => {
        const sym = ' ,./;\'\\|<>":+-*_-!@#$%^&()=[]{}';
        let a = sym.indexOf(e.key);
        if (a >= 0) {
            e.preventDefault();
        }
    }

    password.onkeydown = (e) => {
        const sym = ' ,.';
        let a = sym.indexOf(e.key);
        if (a >= 0) {
            e.preventDefault();
        }
    }

    function handleInputChange(event) {
        const input = event.target;
        input.value !== '' ?
        input.style.borderColor = 'greenyellow' :
        input.style.borderColor = '';
    }
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    });

    checkbox.onchange = (e) => {    
       checkbox.checked ? console.log('Согласен') : console.log('Не согласен');
       }

    const registration = (event) => {
        event.preventDefault();
        if (!form[0].value) {
            alert('Заполните поле Full Name')
        } else if (!form[1].value) {
            alert('Заполните поле Your username');
        } else if (!form[2].value) {
            alert('Заполните поле E-mail');
        } else if (!form[3].value) {
            alert('Заполните Password ');
        } else if (form[3].value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов.');
        } else if (!form[4].value) {
            alert('Заполните поле Repeat Password');
        } else if (form[3].value !== form[4].value){
            alert('Проверьте совпадают ли пароли из двух текстовых полей');
        } else if (!form[5].value) {
            alert('Проверьте выбран ли чекбокс');
        } else {
            form.reset();
            showModal();
            formInputs.forEach(input => {
                input.style.borderColor = '';
            });
        }
    };
    button.addEventListener('click',registration);

    let showModal = () => {
        popupBg.classList.add('active');
        popupButton.addEventListener('click', (e) => {
            e.preventDefault();
            popupBg.classList.remove('active');
            loginBlock()
         });
    }

    const authorization = (event) => {
        event.preventDefault();
        if (!form[0].value) {
            alert('Заполните поле Your username');
        } else if (!form[1].value) {
            alert('Заполните Password ');
        } else if (form[1].value.length < 8){
            alert('Пароль должен содержать не менее 8 символов.');
        } else {
            alert(`Добро пожаловать! ${form[0].value}`);
            window.location.reload();
        }
    };

    hrefFooter.addEventListener('click', (e) => {
        loginBlock();
    });

    const loginBlock = () => {
        const header = sharedFunc('.order')
        header.querySelector('h1').innerHTML = 'login in the System';
        header.querySelector('p').remove();
        fullName.parentElement.remove();
        email.parentElement.remove();
        repeatPassword.parentElement.remove();
        checkbox.parentElement.remove();
        hrefFooter.remove();
        button.removeEventListener('click',registration);
        button.addEventListener('click',authorization);
    }
}
