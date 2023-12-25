import { View, Text, ScrollView  } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from'../../Constant/Metrics'
import AppButton from '../../components/Button/AppButton'
import CategoriesName from '../../components/card/CategoriesName'



export default function Categories({navigation}) {
  return (
    <ScrollView>
        <View style={{marginTop:verticalScale(20)}}>
          <AppButton 
          titel="VIEW ALL ITEMS"
          />
        </View>
        <Text style={{marginLeft:horizontalScale(20),marginTop:verticalScale(10)}}>Choose category</Text>
        <View style={{marginTop:verticalScale(30),}}>
          <CategoriesName 
            CategoriName="Tops"
            onPress={()=>navigation.navigate('ProductList')}
          />
          <CategoriesName 
            CategoriName="Shirts & Blouses"
          />
          <CategoriesName 
            CategoriName="Cardigans & Sweaters"
          />
          <CategoriesName 
            CategoriName="Knitwear"
          />
          <CategoriesName 
            CategoriName="Blazers"
          />
          <CategoriesName 
            CategoriName="Outerwear"
          />
          <CategoriesName 
            CategoriName="Pants"
          />
          <CategoriesName 
            CategoriName="Jeans"
          />
          <CategoriesName 
            CategoriName="Shorts"
          />
          <CategoriesName 
            CategoriName="Skirts"
          />
          <CategoriesName 
            CategoriName="Dresses"
          />
          <CategoriesName 
            CategoriName="Night-Dress"
          />
        </View>
    </ScrollView>
  )
}