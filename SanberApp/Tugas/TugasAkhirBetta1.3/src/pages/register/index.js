import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'

const LoginScreen = ({ navigation }) => {

    const callService = () => { 
        Alert.alert("Info","Sorry Registration is closed right now",
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.replace('Login')
                            }
                        ],
                    );              
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/images/betta_logo.jpg")}
                />
            </View>
            <View style={styles.tabTitle}>
                <Text>Register</Text>
                <Text>Please fill the following information :</Text>
            </View>
            <View style={styles.inputField}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                />
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                />
            </View>
            <View style={styles.inputButton}>
                <TouchableOpacity
                    style={styles.daftarScreenButton}
                    onPress={() => callService()}
                    underlayColor='#fff'>
                    <Text style={styles.masukText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabTitle: {
        paddingTop: 60,
        alignItems: 'center',
    },
    inputField: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    inputTitle: {
        color: "#003366",
        paddingTop: 16,
    },
    daftarScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        backgroundColor: '#003366',
        borderRadius: 10,
        borderColor: '#fff',
        width: 140,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    masukText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
    },
    inputButton: {
        alignItems: 'center',
        paddingTop: 20,
    },
})
