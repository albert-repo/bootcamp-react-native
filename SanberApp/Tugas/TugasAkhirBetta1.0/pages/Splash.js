import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login")
        }, 1000)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../assets/images/betta_logo.jpg")}
                />
            </View>
            <Text style={styles.tabTitle}>BETTA Project</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    tabTitle: {
        fontSize: 20,
    },
})
