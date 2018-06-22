import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
};
const mutations = {
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  },
};
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd: ({ commit, state }) => {
    if (state.count % 2 === 0) {
      commit('increment');
    };
  },
  incrementAsync: ({ commit }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment');
      }, 1000);
      resolve();
    });
  },
};
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});