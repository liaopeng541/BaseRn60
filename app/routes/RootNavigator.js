import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "../pages/Home"
import Login from "../pages/Login"
const RootNavigator = createStackNavigator({
  Home: {screen: Home},
  Login: {screen: Login},
}, {
  initialRouteName: 'Home',
});
export default createAppContainer(RootNavigator);