import React from 'react';
import { View, Image } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Tab } from 'react-native-elements/dist/tab/Tab';
import AddMenace from './AddMenace';
import FindMenace from './FindMenace';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Tabs({ user, navigation }) {

    // Return the SafeAreaView
    return (
        <Tab.Navigator
            tabBarShowLabel={true}
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'AddMenace') {
                            iconName = "plus-circle"
                        } else if (route.name === 'FindMenace') {
                            iconName = "search"
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarBadgeStyle: "white",
                    tabBarInactiveTintColor: "white",
                    tabBarActiveTintColor: "white",
                    tabBarStyle: {
                        position: 'absolute',
                        eleveation: 0,
                        backgroundColor: "#0282ba",
                        height: 80,
                        headerShown: false,
                        color: "#fff"
                    },
                })

            }
        >
            <Tab.Screen name="AddMenace" children={() => <AddMenace />} />
            <Tab.Screen name="FindMenace" children={() => <FindMenace />} />
        </Tab.Navigator >
    );
}
