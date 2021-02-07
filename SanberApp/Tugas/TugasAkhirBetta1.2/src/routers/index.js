import React from 'react'
import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import Axios from 'axios';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'

import { Provider } from 'react-redux';
import { store } from '../redux';

import { logoutApi } from '../services/index';

import Splash from '../pages/splash/';
import Login from '../pages/login';
import RegisterScreen from '../pages/register';
import StoreScreen from '../pages/store';
import HomeScreen from '../pages/home';
import AboutScreen from '../pages/others/AboutScreen';
import TypeScreen from '../pages/type/TypeScreen'
import TypeDetailScreen from '../pages/type/TypeDetailScreen'
import FoodScreen from '../pages/food/FoodScreen'
import ProfileScreen from '../pages/profile'

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
                    <Stack.Screen name="MyTab" component={MyTab} />
                    <Stack.Screen name="MyDrawer" component={MyDrawer} />
                    <Stack.Screen name="MyHomeStack" component={MyHomeStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}


const MyHomeStack = ({ navigation }) => {

    const Loginreducer = useSelector((state) => state.Loginreducer)
    const email = Loginreducer.form.email;

    const callService = async () => {
        // console.log('data yang dikirim: ', Loginreducer.form)
        let data = {
            email
        }
        // console.log('masuk sini')
        try {
            // console.log(logoutApi)
            const response = await Axios.post(logoutApi, data, {
                timeout: 20000
            }).then((response) => {
                if (response.data.err_code === '0000') {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")",
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.replace('Login')
                            }
                        ],
                    );
                } else {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")")
                }
                // console.log(response.data);
            }, (error) => {
                console.log(error);
            });
            // this.setState({ isError: false, isLoading: false, data: response.data })

        } catch (error) {
            console.log(error);
            // this.setState({ isLoading: false, isError: true })
        }
    }

    return (
        <Stack.Navigator
            screenOptions={{
                animationEnabled: false,
                title: "Betta Project",
                // headerTintColor: 'blue',
                headerTitleStyle: {
                    textAlign: "center",
                    // flex: 1
                },

                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish" size={25} />
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
                                        onPress: () => callService()
                                        // onPress: () => navigation.replace('Login')
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ],
                            )}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish-off" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            <Stack.Screen name="Type" component={TypeScreen} options={{ title: "Betta Type" }} />
            <Stack.Screen name="TypeDetail" component={TypeDetailScreen} options={{ title: "Betta Detail Type" }} />
            <Stack.Screen name="Food" component={FoodScreen} options={{ title: "Betta Food" }} />
            <Stack.Screen name="MyTab" component={MyTab} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
        </Stack.Navigator>
    )
}

const MyTab = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home"
                component={MyHomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fish" color={color} size={size}
                        />)
                }}
            />
            <Tab.Screen
                name="Store"
                component={StoreTab}
                options={{
                    title: "Store",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fishbowl" color={color} size={size}
                        />)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileTab}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="jellyfish" color={color} size={size}
                        />)
                }}
            />
        </Tab.Navigator>
    )
}

const StoreTab = ({ navigation }) => {
    const Loginreducer = useSelector((state) => state.Loginreducer)
    const email = Loginreducer.form.email;
    const callService = async () => {
        // console.log('data yang dikirim: ', Loginreducer.form)
        let data = {
            email
        }
        // console.log('masuk sini')
        try {
            console.log(logoutApi)
            const response = await Axios.post(logoutApi, data, {
                timeout: 20000
            }).then((response) => {
                if (response.data.err_code === '0000') {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")",
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.replace('Login')
                            }
                        ],
                    );
                } else {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")")
                }
                // console.log(response.data);
            }, (error) => {
                console.log(error);
            });
            // this.setState({ isError: false, isLoading: false, data: response.data })

        } catch (error) {
            console.log(error);
            // this.setState({ isLoading: false, isError: true })
        }
    }

    return (
        <Stack.Navigator
            screenOptions={{
                title: "Betta Store",
                // headerTintColor: 'blue',
                headerTitleStyle: {
                    textAlign: "center",
                    // flex: 1
                },
                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish" size={25} />
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
                                        onPress: () => callService()
                                        // onPress: () => navigation.replace('Login')
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ],
                            )}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish-off" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Store" component={StoreScreen} />
        </Stack.Navigator>
    )
}

const ProfileTab = ({ navigation }) => {
    const Loginreducer = useSelector((state) => state.Loginreducer)
    const email = Loginreducer.form.email;
    const callService = async () => {
        // console.log('data yang dikirim: ', Loginreducer.form)
        let data = {
            email
        }
        // console.log('masuk sini')
        try {
            // console.log(logoutApi)
            const response = await Axios.post(logoutApi, data, {
                timeout: 20000
            }).then((response) => {
                if (response.data.err_code === '0000') {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")",
                        [
                            {
                                text: 'OK',
                                onPress: () => navigation.replace('Login')
                            }
                        ],
                    );
                } else {
                    Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")")
                }
                // console.log(response.data);
            }, (error) => {
                console.log(error);
            });
            // this.setState({ isError: false, isLoading: false, data: response.data })

        } catch (error) {
            console.log(error);
            // this.setState({ isLoading: false, isError: true })
        }
    }

    return (
        <Stack.Navigator
            screenOptions={{
                title: "Betta Profile",
                headerTitleStyle: {
                    textAlign: "center",
                },
                headerLeft: () => (
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => navigation.replace('MyTab')}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish" size={25} />
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
                                        onPress: () => callService()
                                        // onPress: () => navigation.replace('Login')
                                    },
                                    {
                                        text: 'Cancel',
                                    },
                                ],
                            )}>
                            <MaterialCommunityIcons style={styles.navItem} name="fish-off" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }}
        >
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
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