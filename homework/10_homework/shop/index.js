'use strict';
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
    <main>
        <div class="card">
            <h4><input type="text" placeholder="Product name" value="${this.data.productName}"><span>X</span></h4>
            <div><textarea rows="2" placeholder="Product description" value="${this.data.productDescription}"></textarea></div>
            <div class="button">Buy</div>
        </div>
    </main>
        `
    }
    remove() {
        this.$el.remove();
    }
    rename() {
        this.data.productName = this.$el.firstElementChild.getElementsByTagName('input')[0].value;
        this.render();
    }
    changeDescription() {
        this.data.productDescription = this.$el.firstElementChild.getElementsByTagName('textarea')[0].value;
        this.render();
    }
    render() {
        if (!this.$el) {
            this.$el = document.createElement('main');
        }
        this.$el.innerHTML = this.template();
        this.$el = this.$el.firstElementChild;
        const productNameInput = this.$el.getElementsByTagName('input')[0];
        const productDescriptionInput = this.$el.getElementsByTagName('textarea')[0];
        const buyButton = this.$el.getElementsByTagName('div')[1]
        productNameInput.addEventListener('blur', this.rename);
        productDescriptionInput.addEventListener('blur', this.changeDescription);
        buyButton.addEventListener('click', this.buy);
        return this.$el
    }
}

class headerView {
    constructor(data = { products: [], filter: '', itemsInCart: 0 }) {
        this.data = data;
        this.addProduct = this.addProduct.bind(this);
        this.filter = this.filter.bind(this);
        this.buy = this.buy.bind(this);
    }
    template() {
        return `
    <header>
        <div class="logo">My SuperSHop</div>
        <div class="controls">
            <input type="text" placeholder="Filter">
            <div>
               <span>Items in cart:${this.data.itemsInCart}</span><span> 0</span>
            </div>
            <div class="button">Add new product</div>
        </div>
    </header>
        `
    }
    addProduct() {
        this.data.products.push({ productName: '', productDescription: '' });
        this.render();
    }
    filter() {
        const filterInput = this.$el.children[1].getElementsByTagName('input')[0];
        this.data.filter = filterInput.value;
        this.render();
    }
    buy() {
        this.data.itemsInCart = this.$el.children[1].getElementsByTagName('span')[1].value + 1;
        this.render();
    }
    render() {
        if (!this.$el) {
            this.$el = document.createElement('header');
        }
        // Remove div wrapper element
        this.$el.innerHTML = this.template();
        // Add event listeners to elements
        const addButton = this.$el.children[1].getElementsByTagName('div')[0];
        const filterInput = this.$el.children[1].getElementsByTagName('input')[0];
        const itemsInCart = this.$el.children[1].getElementsByTagName('span')[1]
        filterInput.value = this.data.filter;
        addButton.addEventListener('click', this.addProduct);
        itemsInCart.addEventListener('click', this.buy);
        // Render child elements
        const filtered = this.data.filter ? this.data.products.filter(product => product.title.includes(this.data.filter)) : this.data.products ;
        filtered.forEach(product => {
            const view = new cardView(product);
            this.$el.appendChild(view.render());
        });
        return this.$el
    }
}

document.getElementsByTagName('body')[0].appendChild(new cardView().render());
