import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace("Login")
        }, 3000)
    }, [])

    return (
        <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            <Text style={{fontSize: 30}}>Tugas 15 - Navigation</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
