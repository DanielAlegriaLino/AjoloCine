import React from "react";
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native'

const TrendingFilm = props => {
    return(<TouchableOpacity style={styles.card}>
        <Image resizeMode="stretch" source={{uri:`https://image.tmdb.org/t/p/w500${props.source}`}} style={styles.filmImage}/>
        <View style={{justifyContent:'center', marginLeft:20}}>
            <Text style={styles.filmTitle}>{props.title}</Text>
            <Text style={styles.filmDescription}>{props.date}</Text>
            <Text style={styles.filmDescription}>{props.avgGrade}</Text>
        </View>
    </TouchableOpacity>)
}

export default TrendingFilm

const styles = StyleSheet.create({
    card:{
        width:'80%', 
        // height:125, 
        marginVertical:15, 
        alignSelf:'center',
        flexDirection:'row'
    },
    filmImage:{
        width:125, 
        height:125, 
        borderRadius:10
    },
    filmTitle:{
        color:'white', 
        fontWeight:'semibold', 
        fontSize:20,
        width:150,
        flexWrap:'wrap'
    },
    filmDescription:{
        color:'gray', 
        fontSize:20,
        marginTop:5
    }
})