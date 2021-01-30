import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ProjectScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Halaman project screen</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center', 
        alignItems:'center',
    },
    tabTitle: {
        paddingTop: 60,
    },
})