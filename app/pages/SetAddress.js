import React,{Component} from "react"
import {View,Button } from "react-native"
import {connect} from "react-redux"
class SetAddress extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render(){
    return(<View>
      <Button title={"返回"} onPress={()=>{this.props.navigation.goBack()}} />
    </View>)
  }

}

const mapstate = state => {
  return {

    pushdata: state.pushdata
  }
}
export default connect(mapstate)(SetAddress)