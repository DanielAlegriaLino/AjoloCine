import React from "react";
import AppHeader from "../components/Header";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { globalStyles } from "../styles/global";
import SearchBar from "../components/SearchBar";

export default function Home(){
    return(<>
        <KeyboardAvoidingView style={globalStyles.body}>
            <ScrollView>
                <AppHeader/>
                <View style={{}}>
                    <View style={{}}>
                        <SearchBar/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </>)
}

