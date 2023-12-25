import { View, Text, Image } from 'react-native'
import React from 'react'
import Profileinput from '../../components/Profileinput'


export default function MyProfile({navigation}) {
  return (
    <View>
      <Text style = {{color :'black' , fontSize :30 , marginHorizontal :16,marginTop: 30, fontFamily : 'Metropolis-Bold.otf', fontWeight : 'bold'}}>My Profile</Text>
      <View style={{ flexDirection: 'row', width: "90%", height: 80, marginLeft: 10, marginTop: 10, marginBottom:40 }}>
        <View style={{ width: 80, height: 80, backgroundColor: 'black', borderRadius: 100 }}>
          <Image
            source={require('../../../assets/Images/profile.jpg')}
            style={{ width: '100%', height: '100%', borderRadius: 100 }}
          />
        </View>
        <View style={{ padding: 10 , marginLeft :4, marginTop :0}}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Priyanshi Asodariya</Text>
          <Text style={{ fontSize: 14, marginTop: 2 , color :'#9B9B9B'}}>asodariyapriyanshi@gmail.com</Text>
        </View>
      </View>

      <Profileinput
        name="My Orders"
        titel="Alredy have 12 Orders  "
        onPress={()=>navigation.navigate('Order')}
      />

      <Profileinput
        name="ShippingAddracs"
        titel="3 ddresses"
      />

      <Profileinput
        name="Paymntmethods"
        titel="Visa **34 "
      />

      <Profileinput
        name="Promocodes"
        titel="You have promocodes"
      />

      <Profileinput
        name="My  reviews"
        titel="Reviews for 4 items      "
      />

      <Profileinput
        name="Settings"
        titel="Notifications                   "
      />
    </View>
  )
}