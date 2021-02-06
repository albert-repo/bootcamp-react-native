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
import Home from './Screen/HomeScreen';
import AboutScreen from './Screen/AboutScreen';
import GitScreen from './Screen/GitScreen'
import GitDetailScreen from './Screen/GitDetailScreen'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Git" component={GitScreen} />
                <Stack.Screen name="GitDetail" component={GitDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Feed" component={ReduxScreen} />
            <Tab.Screen name="Notifications" component={AddScreen} />
        </Tab.Navigator>
    );
}

export default HomeStack

const styles = StyleSheet.create({})