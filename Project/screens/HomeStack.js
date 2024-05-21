import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Profile from './Profile';
import Discover from './Discover';

const Tab = createBottomTabNavigator();

export default function HomeStack(){
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if(route.name === 'Home'){
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if(route.name === "Discover"){
                    iconName = focused ? 'compass' : 'compass-outline';
                } else if(route.name === "Profile"){
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                }

                return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor:'rgb(205,205,205)',
            tabBarInactiveTintColor:'#562731',
            headerShown:false,
            tabBarStyle:{
                backgroundColor:'rgb(172,61,57)',
                paddingBottom: 5,
                height:65
            },
            tabBarLabelStyle:{
                fontSize:15,
                fontWeight:'semibold'
            },
            tabBarHideOnKeyboard:true
        })}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Discover' component={Discover}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    );
}