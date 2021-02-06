import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import komponen App
import App from './App'

// Import store
import store from './store'

// Memasukkan store pada Provider
export default function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}