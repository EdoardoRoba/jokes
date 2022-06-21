import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { TouchableOpacity } from "react-native";
import AddMenace from '../components/AddMenace'
import Route from '../components/Route'

const screens = {
    Route: {
        screen: Route,
        navigationOptions: ({ navigation }) => ({
            title: "Menace tracker",
            headerLeft: null
        })
    },
    AddMenace: {
        screen: AddMenace,
        navigationOptions: {
            title: "Add a menace/phishing"
        }
    }
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