import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import BagCard from '../../component/card/BagCard'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/Button/AppButton';
import BagCard from '../../components/card/BagCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';

export default function MyBag({navigation}) {

  const HandleAction = () => {
    navigation.navigate('Address')
  }
  return (
    <View>
      <Text style ={{color :'black' , fontSize : moderateScale (40) , fontWeight : '500',marginHorizontal : horizontalScale(16) , marginTop :verticalScale (50)}}>My Bag</Text>
      <ScrollView>
        <BagCard
          imgurl={require('../../../assets/Images/pullover.jpg')}
          color="white"
          size="L"
          price="27$"
          contity="1"
          Product="Pullover"
        />
        <BagCard
          imgurl={require('../../../assets/Images/fashion.jpg')}
          color="white"
          size="M"
          price="18$"
          contity="3"
          Product="party-wear-Dresse"
        />
        <BagCard
          imgurl={require('../../../assets/Images/newfashion.jpg')}
          color="Blue"
          size="X"
          price="25$"
          contity="1"
          Product="Denim Skirt"
        />
      </ScrollView>
      <View style={{flexDirection:'row'}}>
      <TextInput
        style={{ width:  horizontalScale(295),height: verticalScale(40),marginLeft: horizontalScale(20),marginTop: verticalScale(20),backgroundColor:"white",borderRadius:10,shadowOpacity: 0.10,
        shadowRadius: 30,elevation: 4 }}
        placeholder="Enter Your Promo Code"
        keyboardType="numeric"
        placeholderTextColor="lightgrey"

      />
      <TouchableOpacity style={{width:horizontalScale( 40),height: verticalScale(40),backgroundColor:'black',borderRadius:100,marginTop: verticalScale(20),padding:10}}>
          <Feather name='arrow-right' size={20} color="white" />
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop: verticalScale (30),marginLeft: horizontalScale(20),}}>
          <Text style={{fontSize: moderateScale(15),marginTop:verticalScale(5) , color :'lightgrey'}}>Total Amount:</Text>
          <Text style={{fontSize: moderateScale(20),marginLeft: horizontalScale(190),color:'black'}}>102$</Text>
      </View>
      <View style={{marginTop: verticalScale(10)}}>
      <AppButton 
          titel="CHECK OUT"
          onPress={()=>HandleAction()}          
       />
      </View>
      
      

    </View>
  )
}