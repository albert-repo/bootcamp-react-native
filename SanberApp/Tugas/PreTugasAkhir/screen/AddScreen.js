import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setForm } from '../redux';

export default function AddScreen() {
    //ambil smua reducer
    // const globalState = useSelector((state) => state)
    //ambil register reducer aja
    // const RegisterReducer = useSelector((state) => state.Registerreducer)
    const {form} = useSelector((state) => state.Registerreducer)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log('global state: ',globalState)
    // },[globalState])

    // useEffect(() => {
    //     console.log('global state: ', RegisterReducer)
    // }, [RegisterReducer])

    const sendData = () => {
        // console.log('data yang dikirim: ', RegisterReducer.form)
        console.log('data yang dikirim: ', form)
    }

    const onInputChange = (value, inputType) => {
        // dispatch({type: 'SET_TITLE'})
        // dispatch({type: 'SET_FORM', inputType: input, inputValue: value})
        dispatch(setForm(inputType, value))
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Halaman AddScreen
                    {/* {globalState.name}  */}
                    {/* {globalState.umur} */}
                </Text>
                {/* <Text> {RegisterReducer.title} </Text> */}
            </View>
            <TextInput
                placeholder="nama lengkap"
                // value={RegisterReducer.form.fullName}
                value={form.fullName}
                onChangeText={value => onInputChange(value, 'fullName')}
            />
            <TextInput
                placeholder="email"
                // value={RegisterReducer.form.email}
                value={form.email}
                onChangeText={value => onInputChange(value, 'email')}
            />
            <TextInput
                placeholder="password"
                // value={RegisterReducer.form.password}
                value={form.password}
                onChangeText={value => onInputChange(value, 'password')}
            />
            <Button title="Add" onPress={sendData} />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabTitle: {
        paddingTop: 60,
    },
})
