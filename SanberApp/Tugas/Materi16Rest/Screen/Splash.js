import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.tabTitle}>Materi 16 - Rest</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center', 
        alignItems:'center',
    },
    tabTitle: {
        fontSize: 30,
    },
})
