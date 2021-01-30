import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SkillScreen = ({navigation}) => {
    return (
        <View>
            <Text>Halaman Skill Screen (Home Page)</Text>
            <View style={{ paddingHorizontal: 10 }}>
                <Button onPress={() => navigation.navigate('MyDrawer')} title="MyDrawer" />
            </View>
        </View>
    )
}

export default SkillScreen

const styles = StyleSheet.create({})