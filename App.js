import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SignUp from './app/containor/SignUp'
import { NavigationContainer } from '@react-navigation/native';
import Product from './app/containor/Home/Product';
import BottomTab from './app/routs/BottomTab';
import Login from './app/containor/Login'
import Password from './app/containor/Password'
import ProductDetails from './app/containor/Home/ProductDetails';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';



export default class App extends Component {
    render() {
        return (

            <Provider store={store}>

                <NavigationContainer>
                    <BottomTab />
                </NavigationContainer>
             </Provider>


        )
    }
}
