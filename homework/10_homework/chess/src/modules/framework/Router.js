'use strict';
export default class Router {
    constructor (routes = {}, basePath) {
        this.routes = routes;
        if (basePath) {
            this.basePath = basePath
        } else {
            const path = window.location.pathname.split('/');
            path.pop();
            this.basePath = path.join('/');
        }
    }
    push (routeName) {
        history.pushState(null, null, this.basePath + '/#/' + this.routes[routeName].path); // history - browser (BOM) object for route management
        const component = new this.routes[routeName].component();
        this.$el.replace(component.render());
    }
}
