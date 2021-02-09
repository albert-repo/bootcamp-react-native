import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import Axios from 'axios';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';

import { fisthDetailApi } from '../../services/index';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            isError: false
        };
    }

    // Mount User Method
    componentDidMount() {
        this.getDetailGithubUser()
    }

    //   Get Api Users
    getDetailGithubUser = async () => {
        try {
            const dataId = this.props.route.params.id;
            let headers = {
                'Content-Type': 'application/json',
            };
            let data = {
                dataId,
            };
            const response = await Axios.post(
                fisthDetailApi,
                data,
                {
                    headers: headers,
                    timeout: 20000
                }).then((response) => {
                    if (response.data.err_code === '0000') {
                        this.setState({ isError: false, isLoading: false, data: response.data.data })
                    } else {
                        Alert.alert("Info", response.data.message + " (" + response.data.err_code + ")")
                    }
                }, (error) => {
                    console.log('HTTP Error : ', error);
                    console.log('HTTP Error Code : ', error.response.status)
                    console.log('HTTP Error Code Message : ', error.response.data.message)
                });
        } catch (error) {
            this.setState({ isLoading: false, isError: true })
        }
    }



    render() {
        //  If load data
        if (this.state.isLoading) {
            return (
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                >
                    <ActivityIndicator size='large' color='red' />
                </View>
            )
        }
        // If data not fetch
        else if (this.state.isError) {
            return (
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                >
                    <Text>Terjadi Error Saat Memuat Data</Text>
                </View>
            )
        }
        // If data finish load
        return (
            <SafeAreaView style={styles.detailView}>
                <Image source={{ uri: this.state.data.picture_link }} style={styles.ImageDetail} />
                <View style={styles.viewContent}>
                    <Text style={styles.textName}>Name : {this.state.data.name}</Text>
                    <Text style={styles.textOther}>Description : {this.state.data.description}</Text>
                    <Text style={styles.textOther}>Source : {this.state.data.picture_source}</Text>
                    <Text style={styles.textOther} >Added : {this.state.data.created_at}</Text>
                    <Text style={styles.textUpdated} >Last Updated : {this.state.data.updated_at}</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    viewList: {
        height: 100,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center'
    },
    Image: {
        width: 88,
        height: 80,
        borderRadius: 40
    },
    textName: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginHorizontal: 20,
        fontSize: 16
    },
    textOther: {
        marginHorizontal: 20,
    },
    textUpdated: {
        fontWeight: 'bold',
        marginHorizontal: 20,
        fontSize: 12,
        marginTop: 10,
        color: 'blue'
    },
    detailView: {
        flex: 1,
        alignItems: 'center',
    },
    ImageDetail: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginTop: 20
    },
    viewContent: {
        marginTop: 50,
        alignItems: 'flex-start'
    },
})