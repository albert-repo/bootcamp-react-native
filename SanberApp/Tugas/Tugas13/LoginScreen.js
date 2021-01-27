import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
    SafeAreaContext,
} from 'react-native-safe-area-context';

export default class App extends Component {
    state = {
        fontsLoaded: false,
    };

    async loadFonts() {
        await Font.loadAsync({
            // Load a font `Montserrat` from a static resource
            // Montserrat: require('./assets/fonts/Montserrat.ttf'),
            Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),

            // Any string can be used as the fontFamily name. Here we use an object to provide more control
            // 'Montserrat-SemiBold': {
            //     uri: require('./assets/fonts/Montserrat-SemiBold.ttf'),
            //     fontDisplay: Font.FontDisplay.FALLBACK,
            // },
            'Roboto-Medium': {
                uri: require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
                fontDisplay: Font.FontDisplay.FALLBACK,
            },
        });
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFonts();
    }

    render() {
        // Use the font with the fontFamily property after loading
        if (this.state.fontsLoaded) {
            return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.headerLogo}>
                        <Image source={require('../../Tugas/Tugas13/assets/images/logo.png')} style={{ width: 375 }} />
                    </View>
                    <View style={styles.tabTitle}>
                        <Text style={{ fontFamily: 'Roboto', fontSize: 24, color: "#003366" }}>Register</Text>
                    </View>
                    <View style={styles.inputField}>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput
                            style={{ fontFamily: 'Roboto', height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                        // onChangeText={text => onChangeText(text)}
                        />
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput
                            style={{ fontFamily: 'Roboto', height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                        // onChangeText={text => onChangeText(text)}
                        />
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={{ fontFamily: 'Roboto', height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                        // onChangeText={text => onChangeText(text)}
                        />
                        <Text style={styles.inputTitle}>Ulangi Password</Text>
                        <TextInput
                            style={{ fontFamily: 'Roboto', height: 40, borderColor: 'gray', borderWidth: 1, borderColor: "#003366" }}
                        // onChangeText={text => onChangeText(text)}
                        />
                    </View>
                    <View style={styles.inputButton}>
                        <TouchableOpacity
                            style={styles.daftarScreenButton}
                            // onPress={() => navigate('HomeScreen')}
                            underlayColor='#fff'>
                            <Text style={styles.masukText}>Daftar</Text>
                        </TouchableOpacity>
                        <Text style={styles.atauTitle}>atau</Text>
                        <TouchableOpacity
                            style={styles.masukScreenButton}
                            // onPress={() => navigate('HomeScreen')}
                            underlayColor='#fff'>
                            <Text style={styles.masukText}>Masuk</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            );
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
        // paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    headerLogo: {
        alignItems: 'center',
    },
    tabTitle: {
        paddingTop: 60,
        alignItems: 'center',
    },
    inputField: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    inputButton: {
        alignItems: 'center',
        paddingTop: 20,
    },
    atauTitle: {
        paddingTop: 10,
        fontFamily: 'Roboto',
        fontSize: 24,
        color: "#3EC6FF",
    },
    masukScreenButton: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        backgroundColor: '#3EC6FF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: 140,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontFamily: 'Roboto',
        fontSize: 24,
    },
    inputTitle: {
        color: "#003366",
        paddingTop: 16,
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        //ios only start
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        //ios only end
        elevation: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25
    },
    body: {
        flex: 1
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },

})