// Mendefinisikan types yang merupakan action yang akan digunakan untuk 
// memodifikasi state pada store
export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
  }
  
  // Fungsi tambahan untuk men-dispatch action, dengan tambahan data payload
  export const actionCreators = {
    add: item => {
      return { type: types.ADD, payload: item }
    },
    remove: index => {
      return { type: types.REMOVE, payload: index }
    },
  }
  
  // Initial state dari store
  const initialState = {
    todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
  }
  
  // Fungsi untuk mengatur action dan update state yang terdapat pada store.
  // Catatan:
  // - reducer harus me-return state baru dalam bentuk object. Tidak boleh 
  //   secara langsung mengubah (assign) state secara langsung. State harus 
  //   diperlakukan sebagai immutable.
  // - Pada reducer ditambahkan default value dari state = initialState.
  //   Redux akan memanggil reducer() tanpa state di awal, sehingga pada 
  //   aplikasi ini state awal sudah terisi dengan initialState.
  export const reducer = (state = initialState, action) => {
    const { todos } = state
    const { type, payload } = action
  
    switch (type) {
      case types.ADD: {
        return {
          ...state,
          todos: [payload, ...todos],
        }
      }
      case types.REMOVE: {
        return {
          ...state,
          todos: todos.filter((todo, i) => i !== payload),
        }
      }
    }
  
    return state
  }