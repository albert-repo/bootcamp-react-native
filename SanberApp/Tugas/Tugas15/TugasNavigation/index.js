import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/Home';
import Login from './Screen/LoginScreen';
import Splash from './Screen/Splash';
import AddScreen from './Screen/AddScreen'
import ProjectScreen from './Screen/ProjectScreen';
import SkillScreen from './Screen/SkillScreen';
import AboutScreen from './Screen/AboutScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={Splash}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainApp = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Skill" component={MyDrawer} />
            <Tab.Screen name="Project" component={ProjectScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
        </Tab.Navigator>
    )
}
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="MainApp">
            <Drawer.Screen name="Home / Skill" component={SkillScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}
export default index

const styles = StyleSheet.create({})