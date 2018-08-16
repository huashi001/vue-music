import * as types from './mutation-types.js'
const mutations={
  [types.SET_SINGER](state,singer){
    state.singer = singer
  },
  [types.CHANGELOG](state,userName){
    state.userName = userName
  }
}
export default mutations