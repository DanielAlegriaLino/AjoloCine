import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function HomeStack(){
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === 'Home'){
                        iconName = focused
                        ? 'home'
                        : 'home-outline';
                    }

                    return <Ionicons name={iconName} size={30} color={color}/>;
                },
                tabBarActiveTintColor:'tomato',
                tabBarActiveTintColor:'gray',
                headerShown:false
            })}>
                <Tab.Screen name='Home' component={Home}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}