import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screen/LoginScreen';
import Splash from './Screen/Splash';
import AddScreen from './Screen/AddScreen'
import ReduxScreen from './Screen/ReduxScreen';
import HomeScreen from './Screen/HomeScreen';
import AboutScreen from './Screen/AboutScreen';
import GitScreen from './Screen/GitScreen'
import GitDetailScreen from './Screen/GitDetailScreen'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={Splash}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Git" component={GitScreen} options={{ title: "Git Main" }} />
                <Stack.Screen name="GitDetail" component={GitDetailScreen} options={{ title: "Git Detail" }} />
                <Stack.Screen name="MyTab" component={MyTab} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const MyTab = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={MyDrawer} options={{ title: "Home" }} />
            <Tab.Screen name="Redux" component={ReduxScreen}  />
            <Tab.Screen name="Add" component={AddScreen}  />
        </Tab.Navigator>
    )
}
const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="MyTab">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    )
}
export default index

const styles = StyleSheet.create({})