import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, TextInput, Button } from 'react-native';
import { MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
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
            'Roboto-Bold': {
                uri: require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
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
                    <View style={styles.tabTitle}>
                        <Text style={styles.textTitle}>Tentang Saya</Text>
                        <MaterialIcons style={styles.iconTitle} name="account-circle" size={150} color="lightgray" />
                        <Text style={styles.textName}>Johny Deeps</Text>
                        <Text style={styles.jobTitle}>React Native Developer</Text>
                    </View>
                    <View style={styles.boxPortfolio}>
                        <Text style={styles.boxTitle}>Portfolio</Text>
                        <View style={styles.horizontalLine} />
                        <View style={styles.boxContent}>
                            <View style={styles.boxInside}>
                                <AntDesign style={styles.navItem} name="gitlab" size={30} color="#3EC6FF" />
                                <Text style={styles.boxText}>@johny</Text>
                            </View>
                            <View style={styles.boxInside}>
                                <AntDesign style={styles.navItem} name="github" size={30} color="#3EC6FF" />
                                <Text style={styles.boxText}>@johny</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContact}>
                        <Text style={styles.boxTitle}>Contact</Text>
                        <View style={styles.horizontalLine} />
                        <View style={styles.boxBelowContent}>
                            <View style={styles.boxBelowInsideContact}>
                                <AntDesign style={styles.navItem} name="linkedin-square" size={30} color="#3EC6FF" />
                                <Text style={styles.boxText}> @johnydeeps</Text>
                            </View>
                            <View style={styles.boxBelowInsideContact}>
                                <FontAwesome5 style={styles.navItem} name="whatsapp-square" size={30} color="#3EC6FF" />
                                <Text style={styles.boxText}> +6212123123</Text>
                            </View>
                            <View style={styles.boxBelowInsideContact}>
                                <MaterialCommunityIcons style={styles.navItem} name="gmail" size={30} color="#3EC6FF" />
                                <Text style={styles.boxText}> johny@gmail.com</Text>
                            </View>
                        </View>
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
    },
    headerLogo: {
        alignItems: 'center',
    },
    tabTitle: {
        paddingTop: 60,
        alignItems: 'center',
    },
    textTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 24,
        paddingTop: 10,
        color: "#003366",
    },
    textName: {
        fontFamily: 'Roboto',
        fontSize: 24,
        paddingTop: 10,
        color: "#003366"
    },
    jobTitle: {
        fontFamily: 'Roboto',
        fontSize: 24,
        paddingTop: 10,
        color: "#3EC6FF"
    },
    inputField: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    inputButton: {
        alignItems: 'center',
        paddingTop: 20,
    },
    boxTitle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: "#003366"
    },
    boxPortfolio: {
        backgroundColor: '#EFEFEF',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    boxContact: {
        backgroundColor: '#EFEFEF',
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    horizontalLine: {
        borderBottomColor: '#003366',
        borderBottomWidth: 1,
    },
    boxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boxBelowContent: {
        marginLeft : '30%'
    },
    boxInside: {
        paddingTop: 10,
        alignItems: 'center',
        paddingHorizontal: 50,
    },
    boxInsideContact: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxBelowInsideContact: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    boxText: {
        paddingTop: 5,
        color: "#003366",
        fontFamily: 'Roboto',
        fontSize: 15,
    },
})