import React, {Component} from 'react'
import {View, Text,  Button} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:20,}}>This is  home screen</Text>
                <Button title="goto Login Screen" onPress={() => this.props.goto('Login')}></Button>
            </View>
        );
    }
}