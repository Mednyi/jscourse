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
class Component {
    constructor(data = {}) {
        this.data = data;
        // Переписываем свойство methods результатом выполнения функции methods, возвращающей новый объект
        // методов, определенных в дочернем классе. Таким образом теперь methods - конкретный объект (синглтон) с методами, а не функция
        this.methods = this.methods();
        Object.keys(this.methods).forEach(methodName => this.methods[methodName] = this.methods[methodName].bind(this));
    }
    template () {return ''}
    onRender () {}
    render () {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.template();
        if (this.$el) {
            this.$el.innerHTML = wrapper.firstElementChild.innerHTML
        } else {
            this.$el = wrapper.firstElementChild
        }
        wrapper.remove();
        this.onRender();
        return this.$el
    }

}
class registrUser extends Component {
    constructor(data = {
        email: '',
        password: '',
        email_error: '',
        password_error: '' })
    {
        super(data)
    }
    template() {
        return `
<main>
<h3>Auth Master</h3>
<div class="form-block">
    <input type="text" placeholder="E-mail" value="${this.data.email}">
    <div class="error-desc">${this.data.email_error}</div>
</div>
<div class="form-block">
    <input type="password" placeholder="Пароль" value="${this.data.password}">
    <div class="error-desc">${this.data.password_error}</div>
</div>
<div id="register" class="button">
    Регистрация
</div>
</main>
`
}
methods () {
    return {
        setAndCheckLogin() {
            const emailInput = this.$el.getElementsByTagName('input')[0];
            let emailValue = emailInput.value;
            this.data.email = emailValue;
            const mailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            this.data.email_error = !mailRegEx.test(emailValue) ? 'Введите корректный E-mail' : '';
            this.render();
        },
        setAndCheckPassword() {
            const passwordInput = this.$el.getElementsByTagName('input')[1];
            let passwordValue = passwordInput.value;
            this.data.password = passwordValue;
            this.data.password_error = passwordValue.length < 6 ? 'Введите пароль не менее 6 символов' : '';
            this.render();
        },
        register() {
            this.data.email_error = !this.data.email.includes('@') ? 'Введите корректный E-mail' : '';
            this.data.password_error = this.data.password.length < 6 ? 'Введите пароль не менее 6 символов' : '';
            if (this.data.email_error === '' && this.data.password_error === '') {
                alert(`
            Спасибо за регистрацию!
          
            Ваша почта: ${this.data.email}
            Ваш пароль: ${this.data.password}
            `)
            }
            this.render();
        }
    }
}
onRender() {
    const emailInput = this.$el.getElementsByTagName('input')[0];
    const passwordInput = this.$el.getElementsByTagName('input')[1];
    const registerButton = this.$el.getElementsByClassName('button')[0];
    // email check
    emailInput.addEventListener('blur', this.methods.setAndCheckLogin);
    // password check
    passwordInput.addEventListener('blur', this.methods.setAndCheckPassword);
    // registration check
    registerButton.addEventListener('click', this.methods.register);
    return this.$el
}
}


document.getElementsByTagName('body')[0].appendChild(new registrUser().render());
