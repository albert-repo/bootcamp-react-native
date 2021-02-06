import { combineReducers } from "redux";

const initialState = {
    name: 'Johny Saputra',
    umur: 20,
}

const initialStateRegister = {
    form: {
        fullName: '',
        email: '',
        password: '',
    },
    title: 'Register Page',
    desc: 'Ini adalah desc untuk Register',
}

const initialStateLogin = {
    form: {
        email: 'albert@espay.id',
        password: '12345678',
    },
    credential: {
        name: '',
        token: '',
    },
    info: '',
    isLogin: false,
}

const Registerreducer = (state = initialStateRegister, action) => {
    if(action.type === 'SET_TITLE') {
        return {
            ...state,
            title: 'Register Ganti Title'
        }
    }
    if(action.type === 'SET_FORM') {
        console.log('masuk register reducer')
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state
};

const Loginreducer = (state = initialStateLogin, action) => {
    if(action.type === 'SET_LOGIN_FORM') {
        // console.log('masuk login reducer')
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue
            }
        }
    }
    if(action.type === 'SET_LOGIN_RESPONSE') {
        // console.log('masuk login reducer')
        return {
            ...state,
            credential: {
                ...state.credential,
                [action.inputType]: action.inputValue
            }
        }
    }
    return state
};

// const reducer = (state = initialState, action) => {
//     return state
// };

const reducer = combineReducers({
    Registerreducer,
    Loginreducer,
})

export default reducer;