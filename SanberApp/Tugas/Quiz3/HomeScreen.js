import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      totalPrice: 0,
      dataStore: '',
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    this.arrayholder = data.produk;
    this.setState({
      dataStore: data.produk,
    });
    // console.log(this.state.dataStore);
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  updatePrice(price) {
    // console.log(price)
    price = this.state.totalPrice + parseInt(price);
    this.setState({ totalPrice: price });
  }

  searchFilterFunction = searchText => {
    this.setState({
      searchText: searchText,
    });

    // console.log(this.state.searchText)

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.nama.toUpperCase()}`;
      const textData = searchText.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({ dataStore: newData, });

  };

  render() {

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
              Hai,{'\n'}
              {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              {/* <Text>{route.params}</Text> */}
              <Text style={styles.headerText}>
                {this.props.route.params.userName}
              </Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>
              Total Harga{'\n'}
              <Text style={styles.headerText}>
                {this.currencyFormat(this.state.totalPrice)}
              </Text>
            </Text>
          </View>
          <View></View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder="Cari barang.."
            // onChangeText={(searchText) => this.setState({ searchText })}
            onChangeText={searchText => this.searchFilterFunction(searchText)}
            value={this.state.searchText}
          />
        </View>

        {/* 
          //? #Soal No 2 (15 poin)
          //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
          //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
          //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)
  
          // Lanjutkan di bawah ini!
          */}
        {/* clue dapat dilihat di https://snack.expo.io/@kameyin/two-column-flatlist-(method-1) */}

        <FlatList
          style={{ marginTop: 40 }}
          //ambil dari file json langsung
          // data={data.produk}
          //ambil dari state
          data={this.state.dataStore}
          numColumns={2}
          renderItem={(produk) => (
            <ListItem
              data={produk}
              updatePrice={() =>
                this.updatePrice(produk.item.harga)}
            />
          )}
          keyExtractor={(produk) => produk.id.toString()}
        />

        {/* <FlatList
          style={{ marginTop: 40 }}
          //ambil dari file json langsung
          // data={data.produk}
          //ambil dari state
          data={this.state.dataStore}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: item.gambaruri }}
                style={styles.itemImage}
              />
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemName}>
                {item.nama}
              </Text>
              <Text style={styles.itemPrice}>
                {this.currencyFormat(Number(item.harga))}
              </Text>
              <Text style={styles.itemStock}>Sisa stok: {item.stock - 1}</Text>
              <TouchableOpacity
                style={styles.itemButton}
                onPress={() => { this.updatePrice(item.harga) }}
                underlayColor='#fff'>
                <Text style={styles.buttonText}>BELI</Text>
              </TouchableOpacity>
            </View>
          )}
        /> */}

      </View>
    );


  }
}

class ListItem extends React.Component {
  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data.item;
    // console.log (data);
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: data.gambaruri }}
          style={styles.itemImage}
          resizeMode="contain"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.itemName}>
          {data.nama}
        </Text>
        <Text style={styles.itemPrice}>
          {this.currencyFormat(Number(data.harga))}
        </Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock - 1}</Text>
        <Button style={styles.itemButton} title="BELI" onPress={this.props.updatePrice} />
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

  //? Lanjutkan styling di sini
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
  itemPrice: {
    fontWeight: 'bold',
    color: 'blue'
  },
  itemStock: {
    fontSize: 13
  },
  itemButton: {
    marginTop: 5,
    backgroundColor: 'blue',
    borderColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
});
