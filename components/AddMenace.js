import axios from "axios"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Alert, ActivityIndicator, Text, TouchableOpacity, SafeAreaView, ScrollView, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tooltip } from 'react-native-elements';
import { collection, doc, onSnapshot, getDocs } from 'firebase/firestore';
import { firestore } from "../firebase";

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

export default function AddMenace() {

    const [setup, setSetup] = React.useState("")
    const [delivery, setDelivery] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(true);

    const createElementOnDb = async (score) => {
        const reference = collection(firestore, "menaces");
        // const unsub = onSnapshot(doc(db, "cities", "SF"), (doc) => {
        //     console.log("Current data: ", doc.data());
        // });
        // const unsub = onSnapshot(doc(reference, "Z5u4LPlSrYqVuU2Zn4js"), (doc) => {
        //     console.log("Current data: ", doc.data());
        // });
        const querySnapshot = await getDocs(reference);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        console.log("ehi")
    }

    const searchForNewJoke = () => {
        setSetup("")
    }

    return (
        <View>
            <Button onPress={createElementOnDb}>
                Click me!
            </Button>
            {/* {
                !isLoading ? null : <View style={styles.overlayLoadingContainer}>
                    <ActivityIndicator size="large" color="green" animating={true} />
                </View>
            } */}
        </View>
    );
}
