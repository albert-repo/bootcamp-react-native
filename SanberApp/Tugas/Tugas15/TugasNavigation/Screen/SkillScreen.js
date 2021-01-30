import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SkillScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Hi, ini Skill Screen (your Home Page)</Text>
            </View>
        </View>
    )
}

export default SkillScreen

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