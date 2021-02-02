import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SkillScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tabTitle}>
                <Text>Hi, ini Skill Screen (your Home Page)</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.inputButton}
                    onPress={() => navigation.push('Git')} title="Menuju Git Screen"
                    underlayColor='#fff'>
                    <Text style={styles.textButton}>GIT Page</Text>
                </TouchableOpacity>
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
    inputButton: {
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
    textButton: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
    },
    viewButton: {
        alignItems: 'center',
        paddingTop: 20,
    },
})