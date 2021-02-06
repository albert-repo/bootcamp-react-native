import React, { useState, useEffect } from 'react'
import { Text, Button, Image, StyleSheet, Alert } from 'react-native'
import { createStore } from 'redux'
import { useSelector } from 'react-redux'

import {
    SafeAreaView,
} from 'react-native-safe-area-context';

export default function App() {

    const Loginreducer = useSelector((state) => state.Loginreducer)

    useEffect(() => {
        console.log('global state: ', Loginreducer)
    }, [Loginreducer])

    //hooks
    const [count, setCount] = useState(0);

    const callAdd = () => {
        setCount(count + 1);
    }

    const callDecrease = () => {
        setCount(count - 1);
    }

    const callPurchase = () => {
        Alert.alert('Purchase Confirmation', 'Sorry store not available yet, see you soon!')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={{ width: 150, height: 150 }}
                source={require("../assets/icons/seafood/006-fish.png")}
            />
            <Text>
                Hi i'm a Betta fish, my name is.. {Loginreducer.credential.name}
            </Text>
            <Text>
                and my email is.. {Loginreducer.form.email}
            </Text>
        </SafeAreaView>
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