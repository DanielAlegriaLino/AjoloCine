import React from "react";
import { StyleSheet,Text,View,Pressable,TextInput } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function SignIn(){
    const navigation = useNavigation()
    return(
        <>
            <View style={styles.body}>    
                <View style={{display:'flex',
                alignItems:'flex-start',
                justifyContent:'center', 
                width:330, 
                position:'absolute',
                top:70}}>
                    <AntDesign onPress={()=>navigation.navigate('Welcome')} name="arrowleft" size={35} color="white"/>
                </View>
                <View>
                    <Text style={styles.mainText}>Sign In</Text>
                    <View style={{marginVertical:25}}>
                        <TextInput style={styles.textInput} placeholder="Email"/>
                        <TextInput style={styles.textInput} placeholder="Password"/>
                        <Text style={{color:'#FFF',textAlign:'center', marginTop:20, fontSize:20}}>Have an account? <Text onPress={()=>navigation.replace('Log In')} style={{color:'#FF5757'}}>Click here</Text></Text>
                    </View>
                </View>
                <View style={{marginTop:50}}>
                    <Pressable style={styles.bigPressable}>
                        <Text style={{color:'#FFF', fontWeight:'semibold', fontSize:18, textAlign:'center'}}>SIGN IN</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent:'center'
    },
    mainText: {
        color: "#FFF",
        textAlign:'center',
        fontSize:40,
        fontWeight:'semibold'
    },
    textInput: {
        borderRadius:25,
        backgroundColor:'#FFF',
        fontSize:20,
        paddingHorizontal:15,
        marginTop:30,
        width:340,
        height:58
    },
    bigPressable: {
        backgroundColor:'#FF5757',
        width:340,
        borderRadius:25,
        paddingHorizontal:15,
        paddingVertical:15
    }
})