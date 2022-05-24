import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native";
import Home from '../components/Home'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Search for a joke!"
        }
    }
    // Route: {
    //     screen: Route,
    //     navigationOptions: ({ navigation }) => ({
    //         title: "Idroaltech",
    //         headerRight: (
    //             <TouchableOpacity
    //                 // style={{ backgroundColor: '#DDDDDD', padding: 5 }}
    //                 onPress={() => navigation.navigate("Login")}>
    //                 <Logout />
    //             </TouchableOpacity>
    //         ),
    //         headerLeft: null
    //     })
    // },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerStyle: {
            backgroundColor: "#0282ba",
            height: 100
        }
    }
});

export default createAppContainer(HomeStack)