import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet, Image, } from 'react-native';
import Axios from 'axios';

const callService = () => {
    const [betta, setBetta] = useState([]);
    const [loading, setLoading] = useState(false);

    // using axios
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await Axios.post(
                        'https://temen.in/api/betta/inquiryfood',
            );
            // console.log(res.data.data)
            setBetta([...betta, ...res.data.data]);
            setLoading(false);
        };
        fetchData();
    }, []);

    // using fetch
    // useEffect(() => {
    //     setLoading(true);
    //     // fetch(`http://localhost:10088/api/betta/inquiryfood`,
    //     fetch(`https://temen.in/api/betta/inquiryfood`,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //             })
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((res) => {
    //             // console.log(res.data)
    //             setBetta([...betta, ...res.data]);
    //             setLoading(false);
    //         });
    // }, []);

    return {
        betta,
        loading,
    };
};

export default () => {
    const { betta, loading, loadMore } = callService();

    function Item({ item }) {
        return (
            <View style={styles.listItem}>
                <Image source={{ uri: item.picture_link }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                <View style={styles.listText}>
                    <Text style={{ fontWeight: "bold", flex: 1 }}>{item.name}</Text>
                    <Text>+ {item.pros}</Text>
                    <Text>- {item.cons}</Text>
                </View>
                {/* <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "green" }}>Call</Text>
                </TouchableOpacity> */}
            </View>
        );
    }


    return (
        loading ? (
            <View
                style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
            >
                <ActivityIndicator size='large' color='blue' />
            </View>
        ) : (
                <View style={styles.container}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={betta}
                        renderItem={({ item }) => <Item item={item} />}
                        // renderItem={({ item }) => (
                        //     <View style={styles.listItem}>
                        //         <Image source={{ uri: item.picture_link }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        //         <View>
                        //             <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        //             <Text>+ {item.pros}</Text>
                        //             <Text>- {item.cons}</Text>
                        //         </View>
                        //         <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                        //             <Text style={{ color: "green" }}>Call</Text>
                        //         </TouchableOpacity>
                        //     </View>
                        // )}
                        keyExtractor={({ id }, index) => index.toString()}
                    />
                </View>
            )

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 20
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "100%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    listText: {
        paddingLeft: 10,
    },
});