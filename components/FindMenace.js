import axios from "axios"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text, TouchableOpacity, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tooltip } from 'react-native-elements';
import { getDatabase, ref, onValue, set } from 'firebase/database';

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

export default function FindMenace() {

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
        console.log("ciao")


    }

    return (
        <View style={styles.container}>
            {
                !visible ? null : <TouchableOpacity style={{ flexGrow: 1, marginTop: 30 }} onPress={() => searchForNewJoke()}>
                    <Icon name={"search"} size={25} style={{ marginTop: 10 }} />
                </TouchableOpacity>
            }
            {
                !isLoading ? null : <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator size="large" color="green" animating={true} />
                </View>
            }
        </View>
    );
}
