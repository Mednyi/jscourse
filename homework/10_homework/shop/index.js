'use strict';
// const todos = [];
/*
Реализовать добавление, фильтрацию, удаление, редактирование товаров. По клику на buy - увеличивать счётчик товаров в корзине.
*/
class cardView {
    constructor(data = { productName: '', productDescription: '' }) {
        this.data = data;
        this.rename = this.rename.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.remove = this.remove.bind(this);
    }
    template() {
        return `
        <div class="card">
            <h4><input type="text" placeholder="Product name" value="${this.data.productName}"><span>X</span></h4>
            <div><textarea rows="2" placeholder="Product description" value="${this.data.productDescription}"></textarea></div>
            <div class="button">Buy</div>
        </div>
        `
    }
    remove() {
        this.$el.remove();
    }
    rename() {
        this.data.productName = this.$el.firstElementChild.value;
        this.render();
    }
    changeDescription() {
        this.data.productDescription = this.$el.firstElementChild.value;
        this.render();
    }
    render() {
        if (!this.$el) {
            this.$el = document.createElement('div');
        }
        this.$el.innerHTML = this.template();
        this.$el = this.$el.firstElementChild;
        const productNameInput = this.$el.firstElementChild;
        const productDescriptionInput = this.$el.getElementsByTagName('input')[0];
        const deleteButton = this.$el.getElementsByTagName('input')[1];
        productNameInput.addEventListener('blur', this.rename);
        productDescriptionInput.addEventListener('blur', this.rename);
        deleteButton.addEventListener('click', this.remove);
        return this.$el
    }
}

class headerView {
    constructor(data = { products: [], filter: '' }) {
        this.data = data;
        this.addProduct = this.addProduct.bind(this);
        this.filter = this.filter.bind(this);
    }
    template() {
        return `
        <header>
        <div class="logo">My SuperShop</div>
        <div class="controls">
            <input type="text" placeholder="Filter">
            <div>
               <span>Items in cart:</span><span> 0</span>
            </div>
            <div class="button">Add new product</div>
        </div>
        </header>
        `
    }
    addProduct() {
        this.data.todos.push({ productName: '', productDescription: '' });
        this.render();
    }
    filter() {
        const filterInput = this.$el.firstElementChild.getElementsByTagName('input')[0];
        this.data.filter = filterInput.value;
        this.render();
    }
    render() {
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
