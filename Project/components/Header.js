import React from "react";
import { View, Text } from "react-native";

export default function AppHeader(){
    return(<View style={{justifyContent:'flex-start', width:'100%', height:'10%', paddingHorizontal:30, paddingTop:30}}>
        <Text style={{color:'white', fontSize:35, fontWeight:'semibold'}}>Ajolo<Text style={{color:'#FF5757'}}>Cine</Text></Text>
    </View>)
}