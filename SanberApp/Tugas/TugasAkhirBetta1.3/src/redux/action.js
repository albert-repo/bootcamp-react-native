export const setForm = (inputType, value) => {
    return {type: 'SET_FORM', inputType: inputType, inputValue: value};
}

export const setLoginForm = (inputType, value) => {
    return {type: 'SET_LOGIN_FORM', inputType: inputType, inputValue: value};
}

export const setLoginResponse = (inputType, value) => {
    return {type: 'SET_LOGIN_RESPONSE', inputType: inputType, inputValue: value};
}