'use strict';
import Component from "./modules/framework/component.js";
import Header from "./modules/Header.js";
import Footer from "./modules/Footer.js";
import Router from "./modules/router.js"
export default class App extends Component {
    onRender() {
        this.$el.append(this.components.header.render());
        const router_el = document.createElement('div');
        Router.$el = router_el;
        this.$el.append(router_el);
        this.$el.append(this.components.footer.render());
    }
    components = {
        header: new Header(),
        footer: new Footer(),
        landing: new Landing()
    }
}
