import React from "react";
import AppHeader from "../components/Header";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home(){
    return(<>
        <View style={globalStyles.body}>
            <AppHeader/>
            <View style={{height:'90%'}}>

            </View>
        </View>
    </>)
}

