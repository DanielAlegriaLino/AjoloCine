import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/logIn'
import Welcome from "../screens/Welcome";
import SignIn from "../screens/signIn";

const screens = {
    Welcome : {
        screen : Welcome
    },
    logIn : {
        screen : LogIn
    },
    SignIn: {
        screen : SignIn
    }
}

const Stack = createStackNavigator();



export default function WelcomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Log In" component={LogIn}/>
            <Stack.Screen name = "Sign In" component={SignIn}/>
        </Stack.Navigator>
    )
}