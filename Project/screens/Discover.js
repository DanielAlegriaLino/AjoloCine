import React from "react";
import AppHeader from "../components/Header";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";

export default function Discover(){
    return(
        <View style={globalStyles.body}>
            <AppHeader/>
        </View>
    )
}