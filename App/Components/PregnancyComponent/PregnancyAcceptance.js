import React, { Component } from 'react';

import {
    Image,
    View,
    Text,
    AsyncStorage,
    StyleSheet,
    ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class PregnancyAcceptance extends Component {

    constructor() {
        super();
        this.state = {
           
        };
    }

componentWillMount() {
  
    }

    render() {
        return (
            <View style ={{flex:1}}> 
            {/* <View > */}
            {/* <Image source={}/> */}
            {/* </View> */}
            <Text style={{margin:20,textAlign:"center"}}>Are You Pregnant</Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", borderRadius:45,backgroundColor:"black"}}>
            <Text> YES</Text>
             </View>

            </View>
          
         
        );
    }

}


const styles = StyleSheet.create({


  });