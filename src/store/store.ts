import Vuex from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";


export const store = new Vuex.Store({
    state: {

    },
    getters,
    mutations,
    actions
})
