import React from "react";
import { View, Text } from "react-native";

export default function AppHeader(){
    return(<View style={{width:'100%', marginHorizontal:20, marginVertical:30}}>
        <Text style={{color:'white', fontSize:35, fontWeight:'semibold', width:'100%', textAlign:'left', paddingHorizontal:30}}>Ajolo<Text style={{color:'#FF5757'}}>Cine</Text></Text>
    </View>)
}