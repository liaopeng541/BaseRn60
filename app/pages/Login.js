import React,{Component} from "react"
import {View,Button } from "react-native"

class Login extends Component{


  render(){
    return(<View>
      <Button title={"返回"} onPress={()=>{this.props.navigation.goBack()}} />
    </View>)
  }

}

export default Login