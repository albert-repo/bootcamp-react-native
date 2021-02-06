import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function OtherScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Halaman OtherScreen</Text>
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
