import React, { useState } from 'react'
import { Text, Button, Image, StyleSheet, Alert } from 'react-native'
import { createStore } from 'redux'
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
    Alert.alert('Purchase Confirmation','Sorry store not available yet, see you soon!')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("../assets/icons/seafood/008-shell.png")}
      />
      <Text style={{ fontSize: 100 }}>
        {count}
      </Text>
      <Button title="More shell please!" onPress={() => callAdd()} />
      <Button title="No-no too much shell!" onPress={() => callDecrease()} />
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
    paddingTop: 60,
  },
})