'use strict';
// Создать компонент 'Лендинг' по аналогии с предыдущими ДЗ. Шаблон в index.html.
import Component from "./component.js";
// Импорт базового класса для создания компонентов
// Пример использования:
// class MyComponent extends Component {
//      template () {
//          return `....`
//      }
//      .....
// }
//


class lending extends Component {
    constructor(data = {})
    {
        super(data)
    }
    template() {
        return `  
    <body>
    <div id="landing">
        <header>
            <div>&#9819; Amazing Checkmates</div>
            <div>
                <div class="burger"></div>
                <div class="burger2"></div>
                <div class="burger3"></div>
            </div>
        </header>
        <main>
            <article class ="article1">
                <h4> Amazing Checkmates </h4>
                <hr>
            </article>
            <article class = "article2">
                <p> Reveal your strategic skills </p>
                <p>In the game of kings</p>
                <img class="img" src="assets/images/chess1.png">
            </article>
            <input class="button" type="submit" value="Conquer">
            <img class="ladia" src="assets/images/ladia.png">
        </main>
        <footer>
            <div class="text">Amazing things LLC</div>
        </footer>
    </div>
    </body>
`
}
methods () {
    return {
        conquer() {
            this.render();
        }
    }
}
onRender() {
    const ConquerButton = this.$el.getElementsByClassName('button')[0];
    ConquerButton.addEventListener('click', this.methods.conquer);
    return this.$el
}
}

document.getElementsByTagName('body')[0].appendChild(new lending().render());