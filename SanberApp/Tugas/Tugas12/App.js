import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import VideoItem from '../Tugas12/components/videoItem';
import data from './data.json';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
    SafeAreaContext,
} from 'react-native-safe-area-context';

export default class App extends Component {
    render() {
        // alert(data.kind)
        return (
                <SafeAreaView style={styles.container}>
                    <View style={styles.navBar}>
                        <Image source={require('../../Tugas/Tugas12/images/logo.png')} style={{ width: 98, height: 22 }} />
                        <View style={styles.rightNav}>
                            <TouchableOpacity>
                                <MaterialIcons style={styles.navItem} name="search" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <MaterialIcons style={styles.navItem} name="account-circle" size={25} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.body}>
                        {/* <VideoItem video={data.items[0]} /> */}
                        <FlatList
                            data={data.items}
                            renderItem={(video) => <VideoItem video={video.item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <View style={{ height: 0.5, backgroundColor: '#e5e5e5' }} />}
                        />
                    </View>
                    <View style={styles.tabBar}>
                        <TouchableOpacity style={styles.tabItem}>
                            <MaterialIcons name="home" size={25} />
                            <Text style={styles.tabTitle}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem}>
                            <MaterialIcons name="whatshot" size={25} />
                            <Text style={styles.tabTitle}>Trending</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem}>
                            <MaterialIcons name="subscriptions" size={25} />
                            <Text style={styles.tabTitle}>Subscriptions</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tabItem}>
                            <MaterialIcons name="folder" size={25} />
                            <Text style={styles.tabTitle}>Library</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        //ios only start
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        //ios only end
        elevation: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25
    },
    body: {
        flex: 1
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle: {
        fontSize: 11,
        color: '#3c3c3c',
        paddingTop: 4
    }
})