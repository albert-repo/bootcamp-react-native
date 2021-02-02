import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Welcome</Text>
                <Text>This is the Login Screen</Text>
            </View>
            <View style={styles.inputField}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                />
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                />
            </View>
            <View style={styles.inputButton}>
                <TouchableOpacity
                    style={styles.daftarScreenButton}
                    onPress={() => navigation.replace('MainApp')} title="Menuju Skill Screen (Home Page)"
                    underlayColor='#fff'>
                    <Text style={styles.masukText}>Masuk</Text>
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
