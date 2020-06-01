import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'mdi-home', visible:true},
      { text: 'Agenda', to: '/agenda', icon: 'mdi-format-float-left',visible:true},
      { text: 'Speakers', to: '/speakers', icon:'mdi-account-switch',visible:true},
      { text: 'Team', to: '/team', icon:'mdi-account-settings',visible:true},
      { text: 'Resources', to: '/resources', icon:'mdi-account-settings',visible:true},
      { text: 'Testimonials', to: '/testimonials', icon:'mdi-account-settings',visible:true}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
