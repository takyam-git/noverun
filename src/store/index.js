import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import config from './modules/config';
import dictionary from './modules/dictionary';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    isSidebarOpened: false,
  },
  getters,
  mutations,
  actions,
  modules: {
    config,
    dictionary,
  },
  strict: debug,
});
