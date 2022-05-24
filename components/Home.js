import axios from "axios"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text, TouchableOpacity, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tooltip } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    overlayLoadingContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'transparent'
    },
});

export default function Home() {

    const [setup, setSetup] = React.useState("")
    const [delivery, setDelivery] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(true);

    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
    const styleScroll = {
        maxWidth: 300,
        maxHeight: 500,
        alignItems: "center",
        marginTop: visible ? 0 : 212
    }

    const searchForNewJoke = () => {
        setSetup("")
        setDelivery("")
        setIsLoading(true)
        setVisible(false)
        axios.get(url)
            .then(response => {
                setIsLoading(false)
                // setDelivery(response.data)
                setSetup(response.data.setup)
                const timer = setTimeout(() => {
                    setDelivery(response.data.delivery)
                    setVisible(true)
                }, 5000);
                return () => clearTimeout(timer);
            }).catch(error => {
                setIsLoading(false)
                setSetup("ERROR. RETRY.")
                setVisible(true)
                console.log(error)
            });
    }

    return (
        <View style={styles.container}>
            {
                !visible ? null : <TouchableOpacity style={{ flexGrow: 1, marginTop: 30 }} onPress={() => searchForNewJoke()}>
                    <Icon name={"search"} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
            }
            <SafeAreaView style={styleScroll}>
                <ScrollView showsVerticalScrollIndicator={false} persistentScrollbar={true}>
                    <Pressable style={{ width: 300, alignItems: "center" }}>
                        <View style={{ maxWidth: 300, marginBottom: 50 }}>
                            <Text style={{ fontSize: 18 }}>{setup}</Text>
                        </View>
                        <View style={{ maxWidth: 300 }}>
                            <Text style={{ fontSize: 18 }}>{delivery}</Text>
                        </View>
                    </Pressable>
                </ScrollView>
            </SafeAreaView>
            {
                !isLoading ? null : <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator size="large" color="green" animating={true} />
                </View>
            }
        </View>
    );
}
