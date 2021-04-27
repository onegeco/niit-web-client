import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import User from '@/services/user'
import Api from '@/services/api'

Vue.use(Vuex)

const userData = JSON.parse(localStorage.getItem('niit__user_'))

export default new Vuex.Store({
  state: {
		LoggedIn: false,
    niit__user_: userData,
    LoadingCount: 0,
  },
  
  getters: {
    currentUser(state) {
			return state.currentUser;
		},

		LoggedIn(state) {
			return state.LoggedIn;
		},

    niit__user_(state){
			return state.niit__user_;
		},

    getLoadingCount(state) {
      return state.LoadingCount;
    },

    priviledge(state) {
      return state.priviledge;
    }
  },

  mutations: {
    loginSuccess(state) {
			state.LoggedIn = true;
      state.LoadingCount = 1;
		},

		logout(state) {
			User.logout().then( () => {
        router.go();
        state.LoggedIn = false;
        localStorage.removeItem('_statefulTokens_');
        localStorage.removeItem('niit__user_');
        state.niit__user_ = null;
        state.priviledge = null;
        })
		},

    FETCH_USER(state){
      state.niit__user_ = JSON.parse(localStorage.getItem('niit__user_'));
    },
  },

  actions: {
    logout(context){
			context.commit('logout');
		},

    handleAuthorization(context) {
      return new Promise((resolve, reject) => {
        Api.get(`/authrequest/`, {
          params: {
            ut: userData.type
          }
        }).then(response => {
            resolve(response)
          }).catch(() => {
            reject(context.commit('logout'));
          })
      })
    }
  },

  modules: {
  }
})
