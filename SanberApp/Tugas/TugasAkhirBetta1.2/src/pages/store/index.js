import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

export default function App() {

  //hooks
  const [count, setCount] = useState(0);

  const callAdd = () => {
    setCount(count + 1);
  }

  const callDecrease = () => {
    setCount(count - 1);
  }

  const callPurchase = () => {
    Alert.alert('Purchase Confirmation', 'Sorry store not available yet, see you soon!')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tabTitle}>
        Sorry the store not available yet...
        </Text>
      <Text>
        but you can play with our shell below :
          </Text>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/seafood/008-shell.png")}
        />
      </View>

      <Text style={styles.textCount}>
        {count}
      </Text>
      <View style={styles.belowButton}>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => callAdd()}
          underlayColor='#fff'>
          <Text style={styles.myTextButton}>(+) More shell please!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => callDecrease()}
          underlayColor='#fff'>
          <Text style={styles.myTextButton}>(-) No it's too much!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => callPurchase()}
          underlayColor='#fff'>
          <Text style={styles.myTextButton}>Perfect, i want to purchase this!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: {
    marginHorizontal: 20,
  },
  logoContainer: {
    paddingTop: 50
  },
  logo: {
    width: 150,
    height: 150,
    paddingTop: 50
  },
  textCount: {
    fontSize: 100
  },
  textButton: {
    marginTop: 15
  },
  myButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: '#003366',
    borderRadius: 10,
    borderColor: '#fff',
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myTextButton: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
})