import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, FlatList, TouchableOpacity, Button, Dimensions, TextInput } from 'react-native'
import Axios from 'axios';

const DEVICE = Dimensions.get('window');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: true,
            isError: false
        };
        this.arrayholder = [];
    }

    // Mount User Method
    componentDidMount() {
        this.callService()
    }

    //   Get Api Users
    callService = async () => {
        try {
            // const response = await Axios.post(`http://localhost:10088/api/betta/inquirytype`)
            const response = await Axios.post(`https://temen.in/api/betta/inquirytype`)
            // console.log('Masuk sini', response.data.data)
            this.setState({ isError: false, isLoading: false, data: response.data.data })
            this.arrayholder = response.data.data;
        } catch (error) {
            this.setState({ isLoading: false, isError: true })
        }
    }

    searchFilterFunction = searchText => {
        this.setState({
          searchText: searchText,
        });
    
        // console.log(this.state.searchText)
    
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.name.toUpperCase()}`;
          const textData = searchText.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({ data: newData, });
    
      };

    render() {
        //  If load data
        if (this.state.isLoading) {
            return (
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
                >
                    <ActivityIndicator size='large' color='blue' />
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
            <View style={styles.container}>
                <View
                    style={{
                        minHeight: 50,
                        width: DEVICE.width * 0.88 + 20,
                        marginVertical: 8,
                    }}
                >
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text>
                            Hi,{'\n'}
                            {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
                            {/* <Text>{route.params}</Text> */}
                            <Text style={styles.headerText}>
                            Find your favourite betta below :
                            </Text>
                        </Text>
                    </View>
                    <View></View>
                    <TextInput
                        style={{ backgroundColor: 'white', marginTop: 8 }}
                        placeholder="Try halfmoon maybe?"
                        onChangeText={searchText => this.searchFilterFunction(searchText)}
                        value={this.state.searchText}
                    />
                </View>
                <FlatList
                    data={this.state.data}
                    numColumns={2}
                    renderItem={(produk) => (
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('TypeDetail', { id: produk.item.id })}>
                            <ListItem
                                data={produk}
                                updatePrice={() =>
                                    this.updatePrice(produk.item.harga)}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(produk) => produk.id.toString()}
                />

            </View>
        );
    }
}

class ListItem extends Component {
    render() {
        const data = this.props.data.item;
        // console.log (data);
        return (
            <View style={styles.itemContainer}>
                <Image
                    source={{ uri: data.picture_link }}
                    style={styles.itemImage}
                    resizeMode="contain"
                />
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemName}>
                    {data.name}
                </Text>
                <Text numberOfLines={3} ellipsizeMode="tail" style={styles.itemStock}>
                    {"\n"}
                    {data.description}
                </Text>
                <Text>
                    {"\n"}
                    More Info
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemContainer: {
        width: DEVICE.width * 0.44,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 5,
    },
    itemImage: {
        width: 150,
        height: 100,
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemStock: {
        fontSize: 13
    },
})