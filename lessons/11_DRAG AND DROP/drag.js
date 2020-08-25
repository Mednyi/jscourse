'use strict';
// const todos = [];
class taskView {
    constructor(data = {title: '', state: false, description: ''}) {
        this.data = data;
        this.rename = this.rename.bind(this);
        this.setState = this.setState.bind(this);
        this.remove = this.remove.bind(this);
        this.setDescription = this.setDescription.bind(this);
    }
    template () {
        return `
            <div class="todo">
                <input id="title" type="text" placeholder="title" value="${this.data.title}">
                <input ${this.data.done ? 'checked' : ''} type="checkbox">
                <div>X</div>
            </div>
        `
    }
    setDescription () {}
    remove () {
        this.$el.remove();
    }
    rename () {
        this.data.title = this.$el.firstElementChild.value;
        this.render();
    }
    setState () {
        this.data.done = this.$el.getElementsByTagName('input')[1].checked;
        this.render();
    }
    render () {
        if (!this.$el) {
            this.$el = document.createElement('div');
        }
        this.$el.innerHTML = this.template();
        this.$el = this.$el.firstElementChild;
        const titleInput = this.$el.firstElementChild;
        const stateInput = this.$el.getElementsByTagName('input')[1];
        const deleteButton = this.$el.getElementsByTagName('div')[0];
        titleInput.addEventListener('blur', this.rename);
        stateInput.addEventListener('change', this.setState);
        deleteButton.addEventListener('click', this.remove);
        return this.$el
    }
}
