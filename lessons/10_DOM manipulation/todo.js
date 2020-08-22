'use strict';
// const todos = [];
class todoView {
    constructor(data = {title: '', done: false}) {
        this.data = data;
        this.rename = this.rename.bind(this);
        this.setState = this.setState.bind(this);
        this.remove = this.remove.bind(this);
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

class todosView {
    constructor(data = {todos:[], filter:''}) {
        this.data = data;
        this.addTodo = this.addTodo.bind(this);
        this.filter = this.filter.bind(this);
    }
    template () {
        return `
                <header class="todo" id="toolbar">
                    <input type="text" placeholder="filter">
                    <div id="add" class="button">Добавить</div>
                </header>
        `
    }
    addTodo () {
        this.data.todos.push({ title: '', done: false });
        this.render();
    }
    filter () {
        const filterInput = this.$el.firstElementChild.getElementsByTagName('input')[0];
        this.data.filter = filterInput.value;
        this.render();
    }
    render () {
        // Check if element already exists, if not - create one
        if (!this.$el) {
            this.$el = document.createElement('main');
        }
        // Remove div wrapper element
        this.$el.innerHTML = this.template();
        // Add event listeners to elements
        const addButton = this.$el.firstElementChild.getElementsByTagName('div')[0];
        const filterInput = this.$el.firstElementChild.getElementsByTagName('input')[0];
        filterInput.value = this.data.filter;
        addButton.addEventListener('click', this.addTodo);
        filterInput.addEventListener('input', this.filter);
        // Render child elements
        const filtered = this.data.filter ? this.data.todos.filter(todo => todo.title.includes(this.data.filter)) : this.data.todos;
        filtered.forEach(todo => {
           const view = new todoView(todo);
           this.$el.appendChild(view.render());
        });
        return this.$el
    }
}

document.getElementsByTagName('body')[0].appendChild(new todosView().render());
