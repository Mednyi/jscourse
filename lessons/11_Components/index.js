'use strict';
/*
Реализовать добавление, фильтрацию, удаление, редактирование товаров. По клику на buy - увеличивать счётчик товаров в корзине.
*/
let products = [
    {
        productName: 'Suspendisse potenti',
        productDescription: 'Suspendisse potenti. Nullam vehicula elit ac purus ullamcorper finibus.'
    },
    {
        productName: 'Integer placerat',
        productDescription: 'Integer placerat sollicitudin odio, sed molestie tortor auctor nec.'
    }
];

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

class cardView extends Component {
    constructor(data = { productName: '', productDescription: '' }) {
        super(data)
    }
    template() {
        return `
            <div class="card">
                <h4><input type="text" placeholder="Product name" value="${this.data.productName}"><span>X</span></h4>
                <div><textarea rows="2" placeholder="Product description">${this.data.productDescription}</textarea></div>
                <div class="button">Buy</div>
            </div>
        `
    }
    methods () { // Заменили свойство methods на функцию methods, для того чтобы иметь доступ к методам из родительского(базового) класса
        return {
            remove () {
                this.$el.remove();
                const index = products.findIndex(product => product.productName === this.data.productName);
                products.splice(index, 1);
            },
            rename () {
                this.data.productName = this.$el.firstElementChild.getElementsByTagName('input')[0].value;
                this.render();
            },
            changeDescription () {
                this.data.productDescription = this.$el.children[1].firstElementChild.value;
                this.render();
            }
        }
    }
    onRender () {
        const productNameInput = this.$el.getElementsByTagName('input')[0];
        const productDescriptionInput = this.$el.getElementsByTagName('textarea')[0];
        const deleteButton = this.$el.firstElementChild.getElementsByTagName('span')[0];
        deleteButton.addEventListener('click', this.methods.remove);
        productNameInput.addEventListener('blur', this.methods.rename);
        productDescriptionInput.addEventListener('blur', this.methods.changeDescription);
    }
}

/**
 * @class cardsView - list of products
 */
class cardsView extends Component {
    /**
     * @function cardsView - cards constructor
     * @param {Object} data
     * @param {String} data.filter
     * @param {Array} data.products
     * @param {Number} data.count
     */
    constructor(data = {filter: '', products, count: 0}) {
        super(data)
    }
    template () {
        return `
                  <div class="shop_component">
                    <header>
                         <div class="logo">My SuperSHop</div>
                         <div class="controls">
                                <input type="text" placeholder="Filter" value="${this.data.filter}">
                                <div>
                                    <span>Items in cart:</span><span> ${this.data.count}</span>
                                </div>
                                <div class="button">Add new product</div>
                        </div>
                    </header>
                    <main>
                    </main>
                  </div>
                `
    }
    methods () {
        return {
            buy () {
                this.data.count++;
                this.render();
            },
            addProduct () {
                this.data.products.push({ productName: '', productDescription: '' });
                this.render();
            },
            filter() {
                const filterInput = this.$el.firstElementChild.children[1].getElementsByTagName('input')[0];
                this.data.filter = filterInput.value;
                this.render();
            }
        }
    }
    onRender() {
        const addButton = this.$el.firstElementChild.getElementsByClassName('button')[0];
        const filterInput = this.$el.firstElementChild.children[1].getElementsByTagName('input')[0];
        addButton.addEventListener('click', this.methods.addProduct);
        filterInput.addEventListener('blur', this.methods.filter);
        const filtered = this.data.filter ? this.data.products.filter(product => product.productName.includes(this.data.filter)) : this.data.products ;
        filtered.forEach(product => {
            const view = new cardView(product);
            const view_el = view.render();
            this.$el.getElementsByTagName('main')[0].appendChild(view_el);
            const buyButton = view_el.getElementsByTagName('div')[1];
            buyButton.addEventListener('click', this.methods.buy);
        });
    }
}
document.getElementsByTagName('body')[0].appendChild(new cardsView().render());
