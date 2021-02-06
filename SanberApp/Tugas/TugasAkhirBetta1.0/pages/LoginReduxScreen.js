import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Axios from 'axios';


const LoginScreen = ({ navigation }) => {

    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('albert@espay.id');
    const [password, setPassword] = useState('123456789');

    const callService = async () => {
        let data = {
            email,
            password
        }
        console.log('masuk sini')
        try {
            const response = await Axios.post('https://temen.in/api/sappexpense/login', data, {
                timeout: 20000
            }).then((response) => {
                if (response.data.err_code === '0000') {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")",
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.replace('MyTab')
                            }
                        ],
                    );
                    // Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")");
                    setCount(count + 1);
                } else {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")")
                }
                console.log(response.data);
            }, (error) => {
                console.log(error);
            });
            // this.setState({ isError: false, isLoading: false, data: response.data })

        } catch (error) {
            console.log(error);
            // this.setState({ isLoading: false, isError: true })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Welcome</Text>
                <Text>This is the Login Screen</Text>
                <Text>You clicked {count} times</Text>
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
                    onPress={() => callService()}
                    // onPress={() => navigation.replace('MyHomeStack')} title="Menuju Skill Screen (Home Page)"
                    underlayColor='#fff'>
                    <Text style={styles.masukText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabTitle}>
                <Text>Don't have a user?</Text>
            </View>
            <View style={styles.inputButton}>
                <TouchableOpacity
                    style={styles.daftarScreenButton}
                    onPress={() => navigation.push('Register')}
                    underlayColor='#fff'>
                    <Text style={styles.masukText}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputButton}>
                <TouchableOpacity
                    style={styles.daftarScreenButton}
                    onPress={() => navigation.replace('MyTab')} title="Menuju Skill Screen (Home Page)"
                    underlayColor='#fff'>
                    <Text style={styles.masukText}>Bypass</Text>
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
