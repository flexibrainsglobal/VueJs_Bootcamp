import axios from "axios";
const state = {
  test: null,
};

const getters = {
    test:(state)=>state.test
};

const actions = {
  async getCharData({commit}) {
    await axios.get("http://localhost:3000/chart").then(function(response) {
        commit('setData',response.data)
       console.log(response.data)
    });
  },
};

const mutations = {
    setData:(state,test)=>(state.test=test)
};

export default {
    state,
    getters,
    actions,
    mutations
}
