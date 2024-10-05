export const state = () => ({
    isAuthenticated: false,
  });
  
  export const mutations = {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    }
  };
  
  export const actions = {
    login({ commit }) {
      // Call your login API and set isAuthenticated
      commit('setAuthentication', true);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
    }
  };
  