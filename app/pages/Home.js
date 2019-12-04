import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button
} from 'react-native';
import {connect} from "react-redux"
import { BaiduMapManager, MapView, MapTypes, Geolocation, Overlay, MapApp } from 'react-native-baidu-map';
BaiduMapManager.initSDK("3p8GLwupGZsjzfrikaBFaxeZGj4Q4sye");

const { height, width } = Dimensions.get('window');
class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      center: { longitude: 113.950453, latitude: 22.546045 },
      markers: [
        {
          location: {
            longitude: 113.960453,
            latitude: 22.546045
          }
        },
        {
          location: {
            longitude: 113.961453,
            latitude: 22.547045
          }
        },
        {
          location: {
            longitude: 113.962453,
            latitude: 22.548045
          }
        },
        {
          location: {
            longitude: 113.963453,
            latitude: 22.545045
          }
        },
        {
          location: {
            longitude: 113.964453,
            latitude: 22.544045
          }
        }
      ]
    };
  }
  componentDidMount()
  {

    console.log(this.props)
  }
  test(){
    this.props.navigation.navigate("Login")
  }
  render()
  {
    const {
      location,
      center
    } = this.state;
    return(
      <View>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <MapView
                showsUserLocation={true}
                locationData={location}
                width={width}
                height={400}
                zoom={18}
                trafficEnabled={true}
                zoomControlsVisible={true}
                mapType={MapTypes.NORMAL}
                center={center}
              >
              </MapView>
            </View>
            <Button onPress={this.test.bind(this)} title={"aaa"} />
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {

  },
  location: {
    padding: 16,
  },
  buttonGroup: {
    padding: 16,
    flexDirection: 'row'
  },
  button: {
    width: 80,
    margin: 8
  }
});
const mapStateToProps=(state)=>{
  return {
    user:state.user
  }
}
export default connect(mapStateToProps)(Home)