import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }) => {
    // redux retrieve global state
    const Loginreducer = useSelector((state) => state.Loginreducer)

    useEffect(() => {
        console.log('global state: ', Loginreducer)
    }, [Loginreducer])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../assets/images/betta_logo.jpg")}
                />
            </View>
            <View style={styles.tabTitle}>
                <Text>Hi, how are you {Loginreducer.credential.name}?</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.inputButton}
                    onPress={() => navigation.push('Git')} title="Menuju Git Screen"
                    underlayColor='#fff'>
                    <Text style={styles.textButton}>GIT Page</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "space-between", marginTop: 50, flex: 1, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity style={styles.box}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../assets/images/email.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Profile")}
                        style={styles.box2}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../assets/images/account_circle.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Animation")}
                        style={styles.box3}
                    >
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../assets/images/card_giftcard.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box4}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require("../assets/images/add_shopping_cart.png")}
                        />
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
        // justifyContent: 'center',
        // alignItems: 'center',
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
    },
    // inputButton: {
    //     marginRight: 40,
    //     marginLeft: 40,
    //     marginTop: 10,
    //     backgroundColor: '#003366',
    //     borderRadius: 10,
    //     borderColor: '#fff',
    //     width: 140,
    //     height: 40,
    //     borderRadius: 20,
    //     textAlign: 'center',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // textButton: {
    //     color: '#fff',
    //     textAlign: 'center',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     fontSize: 24,
    // },
    // viewButton: {
    //     alignItems: 'center',
    //     paddingTop: 20,
    // },
    box: {
        backgroundColor: "#FF7B40",
        width: 111,
        height: 106,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box2: {
        backgroundColor: "#1F99CC",
        width: 111,
        height: 106,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box3: {
        backgroundColor: "#1CBC18",
        width: 111,
        height: 106,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    box4: {
        backgroundColor: "#D81A1A",
        width: 111,
        height: 106,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    footer: {
        justifyContent: "space-between",
        flex: 1,
    }
})