import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation()
  return (
    <View style={styles.body}>
      <View style={{width:300, flex:1, justifyContent:'center', alignContent:'center'}}>
        <Text style={styles.mainTitle}>Welcome to <Text style={styles.redText}> AjoloCine </Text></Text>
        <Text style={styles.secondaryText}>Track your movies</Text>
      </View>
      <ImageBackground style={{
        width:'100%',
        height: '35%',
      }}>
      </ImageBackground>
      <View style={{width:'100%', alignContent:'center', justifyContent:'center', marginVertical:'2%'}}>
        <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:'6%', margin:'5%'}}>
          <View style={{flex:1, height:1, backgroundColor:'rgb(180,180,180)'}}/>
          <View>
            <Text style={{width:'100%', textAlign:'center', color:'white', paddingHorizontal:15, fontSize:20}}>Have an account?</Text>
          </View>
          <View style={{flex:1, height:1, backgroundColor:'rgb(180,180,180)'}}/>
        </View>
        <Pressable style={{
          backgroundColor:'rgb(225, 57, 57)', 
          borderRadius:30, 
          padding:15, 
          width:'80%',
          marginHorizontal: 'auto',
          marginVertical:0
          }} onPress={()=>navigation.navigate("Log In")}>
          <Text style={{textAlign:'center', color:'black', fontSize:20, textDecorationLine:'underline'}}>Log In</Text>
        </Pressable>
        <View style={{marginVertical:'5%', marginHorizontal:'auto'}}>
          <Text style={{color:'white', fontSize:20}}>New Here? <Text onPress={()=>navigation.navigate('Sign In')} style={{textDecorationLine:'underline', color:'#FF5757'}}>Sign up</Text></Text>
        </View>
      </View>
      {/* <Button title='Email or phone' color={'rgba(154, 154, 154,.21)'} style={{color:'white', borderRadius:30}}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  mainTitle: {
    color: '#FFF',
    fontSize:53,
    fontWeight:'semibold',
    textAlign:'center',
    paddingVertical:20
  },
  secondaryText:{
    color:'rgb(180,180,180)',
    fontSize:20,
    textAlign:'center'
  },
  text: {
    color:'#FFF',
    fontSize:20
  },
  redText: {
    color: '#FF5757'
  }
});
