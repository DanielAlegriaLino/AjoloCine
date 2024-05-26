import React from "react";
import AppHeader from "../components/Header";
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile(){
    return(
        <View style={globalStyles.body}>
           <AppHeader/>
            <View style={styles.profileView}>
                <Ionicons style={styles.profileIcon} 
                name={"person-circle-outline"} size={250} color={'white'} />
                <View style={styles.profileInfo}>
                    <Text style={{color:'white',fontSize:30,marginTop:135, fontWeight:'semibold'}}>Username</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
                        <View style={{width:'50%', alignItems:'center', marginTop:25, fontWeight:'semibold'}}>
                            <Text style={{color:'white', fontSize:25}}>12</Text>
                            <Text style={{color:'white', marginTop:10, fontSize:16}}>Liked Films</Text>
                        </View>
                        <View style={{width:'50%', alignItems:'center', marginTop:25, fontWeight:'semibold'}}>
                            <Text style={{color:'white', fontSize:25}}>21</Text>
                            <Text style={{color:'white', marginTop:10, fontSize:16}}>Following</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileView:{
        width:340,
        marginTop:125,
        paddingHorizontal:5,
        justifyContent:'center',
        alignItems:'center',
    },
    profileIcon:{
        zIndex:2,
        position:'absolute',
        bottom:285,
        borderRadius:200,
        backgroundColor:'rgb(0, 0, 0)',
        size:75
    },
    profileInfo:{
        zIndex:1,
        width:340,
        backgroundColor:'rgb(30, 30, 30)',
        borderRadius:25,
        height:400,
        alignItems:'center'
    }
})