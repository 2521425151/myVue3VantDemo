import { createStore } from "vuex"
import getters from "./getters"
import app from "./modules/app"

export default createStore({
    state: {},
    mutations:{},
    actions: {},
    getters,
    modules: {
        app
    }
})