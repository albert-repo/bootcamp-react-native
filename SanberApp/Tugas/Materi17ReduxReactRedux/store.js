import { createStore } from 'redux'
import { reducer } from './todoListRedux'

// Mendefinisikan store menggunakan reducer
const store = createStore(reducer)

export default store