import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function AddScreen() {

    const Loginreducer = useSelector((state) => state.Loginreducer)
    // console.log(Loginreducer)

    return (
        <View style={styles.container}>
            <Image
                style={{ width: 150, height: 150 }}
                source={require("../assets/icons/seafood/006-fish.png")}
            />
            <View style={styles.tabTitle}>
                <Text>Hi i'm a betta fish and my name is ...  {Loginreducer.credential.name}</Text>
                <Text>and my email is ... {Loginreducer.form.email}</Text>
                <Text>If you want to know more, i'm create by ABET using React Native.</Text>
            </View>
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
