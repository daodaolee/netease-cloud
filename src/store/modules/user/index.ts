import { SUser } from "@/types/store"
const state = {
  userInfo: {}
}
const mutations = {
  setUserInfo(state: SUser, data: SUser): any {
    state.userInfo = data
  }
}
const actions = {

}
const getters = {
  userInfo(state: SUser): any {
    return state.userInfo
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}