import Router from './framework/Router';
import Landing from "./Landing.js"
import Auth from "./Auth.js";
export default new Router ({
    Landing: {
        component: Landing,
        path: 'landing'
    },
    Auth: {
        component: Auth,
        path: 'auth'
    }
})
