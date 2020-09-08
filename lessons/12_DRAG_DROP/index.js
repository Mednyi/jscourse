'use strict';
/*
Реализовать добавление, фильтрацию, удаление, редактирование товаров. По клику на buy - увеличивать счётчик товаров в корзине.
*/
let tasks = [
    {
        name: 'Suspendisse potenti',
        desc: 'Suspendisse potenti. Nullam vehicula elit ac purus ullamcorper finibus.',
        status: 0
    },
    {
        name: 'Integer placerat',
        desc: 'Integer placerat sollicitudin odio, sed molestie tortor auctor nec.',
        status: 1
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
    constructor(data = {task: {name: '', desc: '' }}) {
        super(data)
    }
    template() {
        return `
            <div class="card" draggable="true">
                <h4><input type="text" placeholder="Task name" value="${this.data.task.name}"><span>X</span></h4>
                <div><textarea rows="2" placeholder="Task description">${this.data.task.desc}</textarea></div>
            </div>
        `
    }
    methods () { // Заменили свойство methods на функцию methods, для того чтобы иметь доступ к методам из родительского(базового) класса
        return {
            remove () {
                this.$el.remove();
                const index = tasks.findIndex(task => task.name === this.data.task.name);
                tasks.splice(index, 1);
            },
            rename () {
                this.data.task.name = this.$el.firstElementChild.getElementsByTagName('input')[0].value;
                this.render();
            },
            changeDescription () {
                this.data.task.desc = this.$el.children[1].firstElementChild.value;
                this.render();
            },
            drag (e) {
                e.dataTransfer.setData('text', this.data.task.name)
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
        this.$el.addEventListener('dragstart', this.methods.drag);
    }
}

/**
 * @class cardsView - list of products
 */
class cardsView extends Component {
    /**
     * @function cardsView - cards constructor
     * @param {Object} data
     * @param {Array} data.tasks
     */
    constructor(data = {tasks}) {
        super(data)
    }
    template () {
        return `
    <main>
        <div id="todo"></div>
        <div id="progress"></div>
        <div id="done"></div>
    </main>
                `
    }
    methods () {
        return {
            allowDrop (e) {
                e.preventDefault();
            },
            drop (e) {
                e.preventDefault();
                const statusMap = {
                    todo: 0,
                    progress: 1,
                    done: 2
                };
                const task = tasks.find(t => t.name === e.dataTransfer.getData('text'));
                task.status = statusMap[e.currentTarget.id];
                this.render();
            }
        }
    }
    onRender() {
        const columns = this.$el.children;
        for (let column of columns) {
            column.addEventListener('drop', this.methods.drop);
            column.addEventListener('dragover', this.methods.allowDrop);
        }
        this.data.tasks.forEach(task => {
            const view = new cardView({task});
            const view_el = view.render();
            columns[task.status].appendChild(view_el);
        });
    }
}
document.getElementsByTagName('body')[0].appendChild(new cardsView().render());
