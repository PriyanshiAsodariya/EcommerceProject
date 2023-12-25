import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SignUp from './app/containor/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import Product from './app/containor/Home/Product';
import BottomTab from './app/routs/BottomTab';
import Login from './app/containor/Login'
import Password from './app/containor/Password'
import ProductDetails from './app/containor/Home/ProductDetails';


export default class App extends Component {
    render() {
        return (
             

            <NavigationContainer>
                   <BottomTab/>
                   {/* <ProductDetails/> */}
            </NavigationContainer>

          
            /* <SignUp/> */
            // <Login/>
            // <Password/>
        )
    }
}
