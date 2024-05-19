import React, { useEffect, useState } from "react";
import { Text,View,Pressable,TextInput,Keyboard } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function LogIn(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [formValid, setValid] = useState(false);
    const [sent, setSent] = useState(false)
    const [keyboardOpen, setKeyboard] = useState(false)

    Keyboard.addListener('keyboardDidShow', ()=>{setKeyboard(true)})
    Keyboard.addListener('keyboardDidHide', ()=>{setKeyboard(false)})

    useEffect(()=>{
        validateForm()
    },[email,password])

    function validateForm(){
        let errors = {}

        if(!email){
            errors.email = 'Email is required.';
        } else if(!/\S+@\S+\.\S+/.test(email)){
            errors.email = 'Email is not valid';
        }

        if(!password){
            errors.password = 'Password is required.'
        }

        setErrors(errors);
        setValid(Object.keys(errors).length === 0);

    }

    function handleSubmit(){
        setSent(true)
        formValid ? navigation.navigate('Home') : 'null'
    }

    return(
        <>
            <View style={globalStyles.body}>    
                {!keyboardOpen && <View style={{display:'flex',
                alignItems:'flex-start',
                justifyContent:'center', 
                width:330, 
                position:'absolute',
                top:70}}>
                    <AntDesign onPress={()=>navigation.navigate('Welcome')} name="arrowleft" size={35} color="white"/>
                </View>}
                <View>
                    <Text style={globalStyles.mainText}>Log In</Text>
                    <View style={{marginVertical:25}}>
                        <TextInput onChangeText={setEmail} style={globalStyles.textInput} placeholder="Email"/>
                        <TextInput secureTextEntry={true} onChangeText={setPassword} style={globalStyles.textInput} placeholder="Password"/>
                        <Text style={{color:'#FFF',textAlign:'center', marginTop:20, fontSize:20}}>Forgot Password? <Text style={{color:'#FF5757'}}>Click here</Text></Text>
                    </View>
                </View>
                {sent && <View>
                    {Object.values(errors).map((error,index)=>(
                        <Text style={globalStyles.errorText} key={index}>{error}</Text>
                ))}
                </View>}
                <View style={{marginTop:50}}>
                    <Pressable style={globalStyles.bigPressable} onPress={handleSubmit} >
                        <Text style={{color:'#FFF', fontWeight:'semibold', fontSize:18, textAlign:'center'}}>LOG IN</Text>
                    </Pressable>
                    <Pressable style={globalStyles.secondaryPressable} onPress={()=>navigation.replace('Sign Up')}>
                        <Text style={{color:'white', fontWeight:'semibold', fontSize:18, textAlign:'center'}}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}