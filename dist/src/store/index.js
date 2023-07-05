import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {},
  mutations: {
    pushProducts(state, data) {
      state.products = [...data];
    },
    addProduct(state, data) {
      state.products.push(data);
    },
    changeProduct(state, data) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === data.id) {
          state.products.splice(i, 1, data);
          break;
        }
      }
    },
    deleteProduct(state, id) {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id === id) {
          state.products.splice(i, 1);
          break;
        }
      }
    },
  },
  actions: {},
  modules: {},
});
