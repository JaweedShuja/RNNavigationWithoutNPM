import React,{Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:20,}}>This is login screen</Text>
                <Button title="goto Home Screen" onPress={() => this.props.goto('Home')}></Button>
            </View>
        );
    }
}