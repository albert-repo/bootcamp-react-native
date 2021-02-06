import React from 'react'
import { Text, Button } from 'react-native'
import { createStore } from 'redux'
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

// Membuat action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Membuat reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return { count: state.count + 1 }
  } else {
    return state
  }

}

// Mendefinisikan initial state dari store
const initialState = { count: 0 }

// Membuat store, menambahkan fungsi reducer dan nilai initial state
const store = createStore(reducer, initialState)

/// Setup Redux telah selesai, berikut cara menggunakannya:
// Lakukan dispatch actions, yang terdaftar pada store/reducer
// store.dispatch({ type: types.INCREMENT })
// store.dispatch({ type: types.INCREMENT })
// store.dispatch({ type: types.INCREMENT })
// store.dispatch({ type: types.INCREMENT })


// Menggunakan store.getState() untuk memperoleh nilai dari object state
export default function App() {

  const callDispatch = () => {
    console.log('value before: ',store.getState().count)
    store.dispatch({ type: types.INCREMENT })
    store.dispatch({ type: types.INCREMENT })
    store.dispatch({ type: types.INCREMENT })
    store.dispatch({ type: types.INCREMENT })
    console.log('value after: ',store.getState().count)
    console.log('after dispatch');
  }
    
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 100 }}>
        {store.getState().count}
      </Text>
      <Button title="Add" onPress={() => callDispatch()} />
    </SafeAreaView>
  )
} 