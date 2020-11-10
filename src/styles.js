import {Dimensions, StyleSheet} from 'react-native';



export const topicItem = StyleSheet.create({
    container :{
       margin:10,
       padding:10,
       borderRadius : 10,
       backgroundColor : 'gray',
    },
    text:{
       fontSize : 20,
       fontWeight :'bold',
       color :'white'
       

    },

});

export const jobItem = StyleSheet.create({

    container:{
       margin:10,
       padding: 5,
       backgroundColor: 'white',
       borderRadius : 15,
       height: Dimensions.get('window').height * 0.40 ,
       
    },
    textTitle:{
        margin:10,
        fontWeight : 'bold',
        fontSize : 25,
        textDecorationLine:'underline',
        textAlign: 'center',
        
    },
    textLocation:{
        fontSize: 20,
        margin : 10,
        
    },
    descContainer:{
        margin:10,
        borderTopColor : 'black',
        borderTopWidth : 3,
        
    },  
});

export const favoritesItem = StyleSheet.create({
    container:{
        height : Dimensions.get('window').height *0.90 ,
        margin :5,
        padding:5,

    },
    textTitle:{
        margin:3,
        padding:10,
        fontWeight: 'bold',
        textAlign : 'center',
        fontSize : 30 ,
        
    },
    textLocation:{
        marginBottom :10,
        fontSize: 20 ,
        
        textDecorationLine : 'underline',
    },
    textDesc:{
        //
    },
});