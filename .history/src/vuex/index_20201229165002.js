import Vue from "vue"
import Vuex from "vuex"
import Cookies from "js-cookie"
import routerData from "./modules/routerData"
import role from "./modules/role"
import layout from "./modules/layout/index"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookies.get("token"),
    face: Cookies.get("face"),
    userKind:Cookies.get("userKind"),
    checkState:Cookies.get("checkState")
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      Cookies.set("token", token, { expires: 1 / 24 })
    },
    setUserKind (state, userKind) {
      state.userKind = userKind
      Cookies.set("userKind", userKind, { expires: 1 / 24 })
    },
    setFace (state, face) {
      state.face = face
      Cookies.set("face", face, { expires: 1 / 24 })
    },
    setState (state, checkState) {
      state.checkState = checkState
      Cookies.set("checkState", checkState, { expires: 1 / 24 })
    },

  },
  actions: {
    setToken ({commit}, token) {
      return new Promise((resolve, reject) => {
        commit("setToken", token)
        resolve()
      })
    },
    setUserKind ({commit}, userKind) {
      return new Promise((resolve, reject) => {
        commit("setUserKind", userKind)
        resolve()
      })
    },
    setFace ({commit}, face) {
      return new Promise((resolve, reject) => {
        commit("setFace", face)
        resolve()
      })
    },
    setState ({commit}, checkState) {
      return new Promise((resolve, reject) => {
        commit("setState", checkState)
        resolve()
      })
    }
  },
  getters: {
    addRouters: state => state.routerData.addRouters,
    token: state => state.token,
    userKind: state => state.userKind,
    face: state => state.face,
    info: state => state.role.info,
    routers: state => state.routerData.routers,
    logoShow: state => state.layout.logoShow,
    isCollapse: state => state.layout.isCollapse,
    uniquerouter: state => state.layout.uniquerouter,
    tabnavBox: state => state.layout.tabnavBox,
    visible: state => state.layout.visible,
    left: state => state.layout.left,
    top: state => state.layout.top,
    rightNav: state => state.layout.rightNav

  },
  modules: {
    routerData,
    role,
    layout
  }
})

export default store
