import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar(){
    return(<View style={{display:'flex', flexDirection:'row', borderWidth:2, borderColor:'gray', borderRadius:25, marginHorizontal:20}}>
        <Ionicons style={{
            paddingVertical:15,
            marginHorizontal:10
        }} name={'search'} size={35} color={'white'} />
        <TextInput placeholderTextColor={'white'} placeholder="Search the film here..." style={styles.searchInput} />
    </View>)
} 

const styles = StyleSheet.create({
    searchInput:{
        backgroundColor:'black',
        color:'white',
        borderRadius:25,
        fontSize:20,
        paddingHorizontal:5,
        width:280
    }
})