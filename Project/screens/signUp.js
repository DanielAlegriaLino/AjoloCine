import React, {useEffect, useState} from "react";
import { Text,View,Pressable,TextInput } from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../styles/global";

export default function SignUp(){

    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sent, setSent] = useState(false)
    const [isFormValid, setValid] = useState(false)
    const [errors, setErrors] = useState({})

    useEffect(()=>{
        validateForm();
    }, [email,password])

    function validateForm(){
        let errors = {}

        if (!email) { 
            errors.email = 'Email is required.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'Email is invalid.'; 
        }

        if(!password){
            errors.password = 'Password is required';
        } else if(password.length < 6){
            errors.password = 'Password must be at least 6 characters';
        }

        setErrors(errors);
        setValid(Object.keys(errors).length === 0);
    }

    function handleSubmit(){
        validateForm()
        setSent(true)
    }

    return(
        <>
            <View style={globalStyles.body}>    
                <View style={{display:'flex',
                alignItems:'flex-start',
                justifyContent:'center', 
                width:330, 
                position:'absolute',
                top:70}}>
                    <AntDesign onPress={()=>navigation.navigate('Welcome')} name="arrowleft" size={35} color="white"/>
                </View>
                <View>
                    <Text style={globalStyles.mainText}>Sign Up</Text>
                    <View style={{marginVertical:25}}>
                        <TextInput onChangeText={setEmail} style={globalStyles.textInput} placeholder="Email"/>
                        <TextInput onChangeText={setPassword} secureTextEntry={true} style={globalStyles.textInput} placeholder="Password"/>
                        <Text style={{color:'#FFF',textAlign:'center', marginTop:20, fontSize:20}}>Have an account? <Text onPress={()=>navigation.replace('Log In')} style={{color:'#FF5757'}}>Click here</Text></Text>
                    </View>
                </View>
                {sent && <View>
                    {Object.values(errors).map((error,index)=>(
                        <Text style={globalStyles.errorText} key={index}>{error}</Text>
                    ))}
                </View>}
                <View style={{marginTop:50}}>
                    <Pressable onPress={handleSubmit} style={globalStyles.bigPressable}>
                        <Text style={{color:'#FFF', fontWeight:'semibold', fontSize:18, textAlign:'center'}}>SIGN UP</Text>
                    </Pressable>
                    <Pressable style={globalStyles.secondaryPressable} onPress={()=>navigation.replace('Log In')}>
                        <Text style={{color:'white', fontWeight:'semibold', fontSize:18, textAlign:'center'}}>Log In</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}
