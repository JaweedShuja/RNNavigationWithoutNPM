import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Login from './screens/login.js'
import Home from './screens/home.js'

export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      currentScreen:'Login'
    }

    this.changeScreen = this.changeScreen.bind(this)
  }
  changeScreen(screenName){
    this.setState({
      currentScreen:screenName
    })
  }
  render(){
    if(this.state.currentScreen == 'Login'){
      return <Login goto={this.changeScreen}/>
    }
    else if(this.state.currentScreen == 'Home'){
      return <Home goto={this.changeScreen}/>
    }
  }
}