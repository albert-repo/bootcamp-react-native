import React, { useState } from 'react'
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native'
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
          source={require("../assets/icons/seafood/008-shell.png")}
        />
      </View>

      <Text style={styles.textCount}>
        {count}
      </Text>
      <Button title="(+) More shell please!" onPress={() => callAdd()} />
      <Button title="(-) No it's too much!" onPress={() => callDecrease()} />
      <Button title="Perfect, i want to purchase this!" onPress={() => callPurchase()} />
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
  }
})