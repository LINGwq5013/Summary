/*
 * @Author: your name
 * @Date: 2021-08-12 11:13:59
 * @LastEditTime: 2021-09-07 19:27:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official-website-master\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
   user:'',
   order:[]
}
const actions = {
    setuser({ commit }, data) {
        commit('setUser', data);
      },
      setorder({commit},data){
        commit('setOrder', data);
      }
}
const getters = {
    getUser (state) {
        return state.user
      },
    getOrder (state) {
        return state.order
      },  
}
const mutations = {
    setUser (state, data) {
        state.user = data;
      },
    setOrder(state,data){
        state.order.push(data)
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})