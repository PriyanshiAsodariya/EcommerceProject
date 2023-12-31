import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../containor/SignUp';
import Login from '../containor/Login';
import Product from '../containor/Home/Product';
import Categories from '../containor/Home/Categories';
import ProductDetails from '../containor/Home/ProductDetails';
import ProductList from '../containor/Home/ProductList';
import MyBag from '../containor/Cart/MyBag';
import MyProfile from '../containor/Profile/MyProfile';
import Favourite from '../containor/Favourate/Favourite';
import Payment from '../containor/Cart/Payment';
import Success from '../containor/Cart/Success';
import Address from '../containor/Cart/Address';
import MyOrder from '../containor/Profile/MyOrder';
import Feather from 'react-native-vector-icons/Feather';
import Filter from '../containor/Home/Filter';


const Stack = createNativeStackNavigator();


const CustomHeaderButton = ({ icon, onclick }) => {
  return (
    <TouchableOpacity onPress={onclick}>
      <Feather name={icon} size={25} color={"black"} />
    </TouchableOpacity>
  )
}

export default function StackNavigation({ navigation }) {
  return (

    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      <Stack.Screen name='ProductList' component={ProductList}
        options={{ headerTitleAlign: 'center',
        headerTitle : 'Womens Tops',
        headerLeft: () => (
          <CustomHeaderButton
            icon='chevron-left'
            onclick={() => {
              navigation.goBack();
            }}
          />
        ), }} 
        />
      <Stack.Screen name='Categories' component={Categories}
        options={{ headerTitleAlign: 'center' }} />
      <Stack.Screen name='ProductDetails' component={ProductDetails}
        options={{
          // headerBackVisible : false,
          headerTitle: 'long Dress',

          headerLeft: () => (
            <CustomHeaderButton
              icon='chevron-left'
              onclick={() => {
                navigation.goBack();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name='Bag' component={MyBag}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Favourite' component={Favourite}
        options={{ headerShown: false }} />
      <Stack.Screen name='Profile' component={MyProfile}
        options={{ headerShown: false }}
      />

      <Stack.Screen name='Payment' component={Payment}
        options={{ headerTitle: 'Checkout', headerTitleAlign: 'center' }} />
      <Stack.Screen name='Success' component={Success}
      options={{
        headerLeft: () => (
          <CustomHeaderButton
            icon='chevron-left'
            onclick={() => {
              navigation.goBack();
            }}
          />
        ),
      }}
       />
      <Stack.Screen name='Address' component={Address} options={{ 
        headerTitleAlign: 'center', 
        headerTitle: 'Adding Shipping Adress' ,
        headerLeft: () => (
          <CustomHeaderButton
            icon='chevron-left'
            onclick={() => {
              navigation.goBack();
            }}
          />
        ),

        }} />
      <Stack.Screen name='Order' component={MyOrder}
      options={{
        headerLeft: () => (
          <CustomHeaderButton
            icon='chevron-left'
            onclick={() => {
              navigation.goBack();
            }}
          />
        ),
      }} />
      <Stack.Screen name='Filter' component={Filter}/>

    </Stack.Navigator>
  )
}