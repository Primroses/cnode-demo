import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getter'
Vue.use(Vuex)

const state = {
    accesstoken : '',
    loginState : JSON.parse(localStorage.getItem('loginState')) || false,
    isShow :true,
    loginname : ''
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})