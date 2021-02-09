import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {
    // redux retrieve global state
    const Loginreducer = useSelector((state) => state.Loginreducer)

    // useEffect(() => {
    //     console.log('global state: ', Loginreducer)
    // }, [Loginreducer])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/images/betta_logo.jpg")}
                />
            </View>
            <View style={styles.tabTitle}>
                <Text>Hi {Loginreducer.credential.name}</Text>
                <Text>What do you want to learn today?</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => navigation.push("Type")}
                        style={styles.box}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../assets/icons/seafood/002-fish.png")}
                        />
                        <Text style={styles.boxText}>Type</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Food")}
                        style={styles.box3}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../assets/icons/seafood/010-caviar.png")}
                        />
                        <Text style={styles.boxText}>Food</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Coming Soon", "Dear Bettaers, this feature will be available soon.")}
                        style={styles.box2}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../assets/icons/seafood/012-fish.png")}
                        />
                        <Text style={styles.boxText}>Breeding</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Alert.alert("Coming Soon", "Dear Bettaers, this feature will be available soon.")}
                        style={styles.box4}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../../assets/icons/seafood/011-jar.png")}
                        />
                        <Text style={styles.boxText}>Aquarium</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        alignItems: "center",
        paddingTop: 40,
    },
    logo: {
        width: 200,
        height: 140,
    },
    tabTitle: {
        padding: 10,
        alignItems: "center",
    },
    box: {
        backgroundColor: "#808080",
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box2: {
        backgroundColor: "#1F99CC",
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box3: {
        backgroundColor: "#1CBC18",
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box4: {
        backgroundColor: "#D81A1A",
        width: 120,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    boxText: {
        paddingTop: 5,
        color: "#ffffff",
        fontSize: 12,
    },
    footer: {
        justifyContent: "space-between",
        flex: 1,
    }
})