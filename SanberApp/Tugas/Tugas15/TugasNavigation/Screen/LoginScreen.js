import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Button } from 'react-native'

const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Text>Login Screen</Text>
            <View style={{paddingHorizontal: 10}}>
                <Button onPress={()=>navigation.replace('MainApp')}  title="Menuju Skill Screen (Home Page)"/>                
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
