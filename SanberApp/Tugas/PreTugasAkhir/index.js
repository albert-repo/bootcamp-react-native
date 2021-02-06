import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import Splash from './screen/Splash';
import Login from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import AddScreen from './screen/AddScreen'
import ReduxScreen from './screen/ReduxScreen';
import HomeScreen from './screen/HomeScreen';
import AboutScreen from './screen/AboutScreen';
import GitScreen from './screen/GitScreen'
import GitDetailScreen from './screen/GitDetailScreen'

import { Provider } from 'react-redux';
import {store} from './redux';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
    return (
        <Provider store={store}>
            <NavigationContainer >
                <Stack.Navigator initialRouteName={Splash} headerMode="none">
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                    {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                    <Stack.Screen name="MyTab" component={MyTab} />
                    <Stack.Screen name="MyDrawer" component={MyDrawer} />
                    <Stack.Screen name="MyHomeStack" component={MyHomeStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


const MyHomeStack = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                animationEnabled: false,
                title: "APP NAME",
                headerTintColor: 'blue',
                headerTitleStyle: {
                    textAlign: "center",
                    // flex: 1
                },

                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <Feather style={styles.navItem} name="home" size={25} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() =>
                            Alert.alert("Confirmation", "Are you sure want to logout?",
                                [
                                    {
                                        text: 'OK',
                                        onPress: () => navigation.replace('Login')
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ],
                            )}>
                            <MaterialCommunityIcons style={styles.navItem} name="logout" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            <Stack.Screen name="Git" component={GitScreen} options={{ title: "Git Main" }} />
            <Stack.Screen name="GitDetail" component={GitDetailScreen} options={{ title: "Git Detail" }} />
            <Stack.Screen name="MyTab" component={MyTab} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
    )
}

const MyTab = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Home" component={MyHomeStack} options={{ title: "Home" }} />
            <Tab.Screen name="Redux" component={ReduxTab} />
            <Tab.Screen name="Add" component={AddTab} />
        </Tab.Navigator>
    )
}

const ReduxTab = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                title: "REDUX",
                headerTintColor: 'blue',
                headerTitleStyle: {
                    textAlign: "center",
                    // flex: 1
                },
                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <Feather style={styles.navItem} name="home" size={25} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('Login')}>
                            <MaterialCommunityIcons style={styles.navItem} name="logout" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Redux" component={ReduxScreen} />
        </Stack.Navigator>
    )
}

const AddTab = ({ navigation }) => {
    return (
        <Stack.Navigator
            screenOptions={{
                title: "ADD",
                headerTintColor: 'blue',
                headerTitleStyle: {
                    textAlign: "center",
                    // flex: 1
                },
                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <Feather style={styles.navItem} name="home" size={25} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('Login')}>
                            <MaterialCommunityIcons style={styles.navItem} name="logout" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Add" component={AddScreen} />
        </Stack.Navigator>
    )
}

// const MyTab = () => {
//     return (
//         <Tab.Navigator >
//             <Tab.Screen name="Home" component={MyDrawer} options={{ title: "Home" }} />
//             <Tab.Screen name="Redux" component={ReduxScreen} />
//             <Tab.Screen name="Add" component={AddScreen} />
//         </Tab.Navigator>
//     )
// }
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