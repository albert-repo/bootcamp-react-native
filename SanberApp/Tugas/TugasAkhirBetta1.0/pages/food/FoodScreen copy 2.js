import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { View, FlatList, Text, Button, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    SafeAreaView,
} from 'react-native-safe-area-context';

const callService = () => {
    const [betta, setBetta] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:10088/api/betta/inquiryfood`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                })
            }
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
                setBetta([...betta, ...res.data]);
                setLoading(false);
            });
    }, [page]);

    // const loadMore = () => {
    //     setPage(page + 1);
    // };

    return {
        betta,
        loading,
        // loadMore,
    };
};

export default () => {
    const { betta, loading, loadMore } = callService();

    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={betta}
                // keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    // <View style={styles.listItem}>
                    //     <Image source={{ uri: item.picture_link }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                    //     <View style={{ alignItems: "center", flex: 1 }}>
                    //         <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    //         <Text>+ {item.pros}</Text>
                    //         <Text>- {item.cons}</Text>
                    //     </View>
                    //     <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                    //         <Text style={{ color: "green" }}>Call</Text>
                    //     </TouchableOpacity>
                    // </View>
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.picture_link }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        <View style={{ alignItems: "center", flex: 1 }}>
                            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                            <Text>+ {item.pros}</Text>
                            <Text>- {item.cons}</Text>
                        </View>
                        <TouchableOpacity style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: "green" }}>Call</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={({ id }, index) => index.toString()}
            // ListFooterComponent={
            //     loading ? (
            //         <ActivityIndicator />
            //     ) : (
            //             <Button title="Load More" onPress={loadMore} />
            //         )
            // }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    }
});