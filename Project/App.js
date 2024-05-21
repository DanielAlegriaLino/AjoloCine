import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome'
import LogIn from './screens/logIn';
import SignUp from './screens/signUp';
import HomeStack from './screens/HomeStack';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Log In" component={LogIn}/>
          <Stack.Screen name = "Sign Up" component={SignUp}/>
          <Stack.Screen name= "HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
