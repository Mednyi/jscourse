'use strict';
/**
 * ДЗ
 * Создать класс компонентов 'Регистрация' на базе шаблона в index.html
 * Реализовать следующий функционал:
 *
 * 1. После ввода E-mail, осуществить его верификацию, проверяющую наличие в введенном E-mail символа @
 * Если верификация не прошла успешно, то изменить значение переменной email_error(по умолчанию - undefined) в data на true и
 * отобразить сообщение об ошибке как в шаблоне.
 * При успешном вводе email_error установить в false и спрятать ошибку, если она отображена
 *
 * 2. После ввода Пароля также осуществить верификацию, проверяющую что длина введенного пароля составляет
 * не менее 6 символов
 * Если верификация не прошла успешно, то изменить значение переменной password_error(по умолчанию - undefined) в data на true и
 * отобразить сообщение об ошибке как в шаблоне.
 * При успешном вводе password_error установить в false и спрятать ошибку, если она отображена
 *
 * 3. При нажатии кнопки регистрации проверить что оба поля прошли верификацию успешно
 * и если это так, то с помощью функции alert вывести сообщение:
 * "
 *  Спасибо за регистрацию!
 *
 *  Ваша почта: <введенная почта>
 *  Ваш пароль: <введенный пароль>
 *
 * "
 * иначе не предпринимать никаких действий, пока пользователь не исправит содержимое полей и не нажмет
 * кнопку регистрации еще раз.
 * */
class registrUser {
    constructor(data = { email: '', password: '' }) {
        this.data = data;
        this.setAndCheckLogin = this.setAndCheckLogin.bind(this);
        this.setAndCheckPassword = this.setAndCheckPassword.bind(this);
        this.register = this.register.bind(this);
    }
    template() {
        return `
<main>
<h3>Auth Master</h3>
<div class="form-block">
    <input type="text" placeholder="E-mail" value="${this.data.email.value}">
    <div class="error-desc">Введите корректный E-mail</div>
</div>
<div class="form-block">
    <input type="password" placeholder="Пароль" value="${this.data.password.value}>
    <div class="error-desc">Введите пароль не менее 6 символов</div>
</div>
<div id="register" class="button">
    Регистрация
</div>
</main>
`
}
setAndCheckLogin() {
    this.data.email = this.$el.firstElementChild.getElementsByTagName('input')[0].value;
    this.render();
}
setAndCheckPassword() {
    this.data.password = this.$el.firstElementChild.getElementsByTagName('input')[1].value;
    this.render();
}
register() {
    this.data.productDescription = this.$el.firstElementChild.getElementsByTagName('div')[4].value;
    this.render();
}
render() {
    if (!this.$el) {
        this.$el = document.createElement('main');
    }
    this.$el.innerHTML = this.template();
    this.$el = this.$el.firstElementChild;
    const emailInput = this.$el.getElementsByTagName('input')[0];
    const passwordInput = this.$el.getElementsByTagName('input')[1];
    const registerButton = this.$el.getElementsBy('div')[4];
    // email check
    emailInput.addEventListener('blur', this.setAndCheckLogin);
    let emailValue = this.emailInput.value;
    let email_error = this.emailInput.valueincludes('@') ? email_error == false : email_error == true;
    if (email_error == true) {alert(this.$el.getElementsByTagName1('div')[1])}
    // password check
    passwordInput.addEventListener('blur', this.setAndCheckPassword);
    let passwordValue = this.passwordInput.value;
    let password_error
    if (passwordValue.length < 6) {
        passwordValue == true
        alert(this.$el.getElementsByTagName1('div')[3])
    }
    else password_error == false;
    // registration check
    registerButton.addEventListener('click', this.register);
    if (email_error == false & password_error == false) {
        alert(`
            Спасибо за регистрацию!
            
            Ваша почта: ${this.$el.emailValue}
            Ваш пароль: ${this.$el.passwordValue}
            `)
    }
    return this.$el
}
}


document.getElementsByTagName('main')[0].appendChild(new registrUser().render());   