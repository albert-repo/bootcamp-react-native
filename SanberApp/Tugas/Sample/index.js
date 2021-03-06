import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screen/LoginScreen';
import Splash from './Screen/Splash';
import AddScreen from './Screen/AddScreen'
import ProjectScreen from './Screen/ProjectScreen';
import SkillScreen from './Screen/SkillScreen';
import AboutScreen from './Screen/AboutScreen';
import GitScreen from './Screen/GitScreen'
import GitDetailScreen from './Screen/GitDetailScreen'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={Splash} headerMode="none">
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Git" component={GitScreen} />
                <Stack.Screen name="GitDetail" component={GitDetailScreen} />
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MyTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MyDrawer} />
            <Tab.Screen name="Project" component={ProjectScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>
    )
}
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="MyTab">
            <Drawer.Screen name="Home" component={SkillScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}
export default index

const styles = StyleSheet.create({})