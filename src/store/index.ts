import { Commit , createStore } from 'vuex'

export default createStore({
  state: {
    authenticated : false,
    name: "",
    email:"",
    profile:"",
    cover:""
  },
  mutations: {
    SET_AUTH: (state: { authenticated: boolean}, auth: boolean)=> state.authenticated = auth,
    SET_NAME: (state: { name: string}, name: string)=> state.name = name,
    SET_EMAIL: (state: { email: string}, name: string)=> state.email = name,
    SET_PROFILE: (state: { profile: string}, name: string)=> state.profile = name,
    SET_COVER: (state: { cover: string}, name: string)=> state.cover = name
  },
  actions: {
    setAuth: ({commit}: {commit : Commit}, auth: boolean)=> commit('SET_AUTH', auth),
    setName: ({commit}: {commit : Commit}, name: string)=> commit('SET_NAME', name),
    setEmail: ({commit}: {commit : Commit}, email: string)=> commit('SET_EMAIL', email),
    setProfile: ({commit}: {commit : Commit}, profile: string)=> commit('SET_PROFILE', profile),
    setCover: ({commit}: {commit : Commit}, cover: string)=> commit('SET_COVER', cover)
  },
  modules: {
  }
})
