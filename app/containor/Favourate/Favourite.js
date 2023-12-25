import { View,Text,ScrollView } from 'react-native'
import React, { useState } from 'react'
import FavouriteCard from '../../components/card/FavouriteCard'

export default function Favourate({navigation}) {
  return (
    <ScrollView>
      <Text style = {{color :'black' , marginHorizontal : 16 ,fontSize : 35 , fontWeight : '500' , marginTop :50}}>Favourites</Text>
      <FavouriteCard 
        img={require('../../../assets/Images/pullover.jpg')}
        color="White"
        Product="Pullover" 
        price="$15"
        size='M'
        // onPress={()=>navigation.navigate('Bag')}
      />
         <FavouriteCard 
        img={require('../../../assets/Images/hoodie.jpg')}
        color="White"
        Product="Hoodie"
        price="$12"
        size='L'
        // onPress={()=>navigation.navigate('Bag')}
      />
         <FavouriteCard 
        img={require('../../../assets/Images/newfashion.jpg')}
        color="Blue"
        Product="Denim "
        price="$18"
        size='XL'
        // onPress={()=>navigation.navigate('Bag')}
      />
         <FavouriteCard 
        img={require('../../../assets/Images/mens2.jpg')}
        color="SkyBlue"
        Product="Blazer"
        price="$8"
        size='XXL'
        // onPress={()=>navigation.navigate('Bag')}
      />
        
       <FavouriteCard 
        img={require('../../../assets/Images/girls.jpg')}
        color="black"
        Product="jacket"
        price="$16"
        size='S'
        onPress={()=>navigation.navigate('Bag')}
      />
    </ScrollView>
  )
}