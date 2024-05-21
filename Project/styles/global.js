import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
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
    errorText:{
        color:'red',
        textAlign:'center',
        fontSize:20
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
    },
    secondaryPressable:{
        // backgroundColor:,
        borderWidth:2,
        borderColor:'rgba(255,255,255,.5)',
        width:340,
        borderRadius:25,
        paddingHorizontal:15,
        paddingVertical:15,
        marginTop: 20
    }
})