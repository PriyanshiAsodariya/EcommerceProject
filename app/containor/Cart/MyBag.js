import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
// import BagCard from '../../component/card/BagCard'
import Feather from 'react-native-vector-icons/Feather';
import AppButton from '../../components/Button/AppButton';
import BagCard from '../../components/card/BagCard';

export default function MyBag({navigation}) {

  const HandleAction = () => {
    navigation.navigate('Address')
  }
  return (
    <View>
      <Text style ={{color :'black' , fontSize : 40 , fontWeight : '500',marginHorizontal : 16 , marginTop :50}}>My Bag</Text>
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
        style={{ width: 295,height: 40,marginLeft:20,marginTop:20,backgroundColor:"white",borderRadius:10,shadowOpacity: 0.10,
        shadowRadius: 30,elevation: 4 }}
        placeholder="Enter Your Promo Code"
        keyboardType="numeric"
        placeholderTextColor="lightgrey"

      />
      <TouchableOpacity style={{width:40,height:40,backgroundColor:'black',borderRadius:100,marginTop:20,padding:10}}>
          <Feather name='arrow-right' size={20} color="white" />
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',marginTop:30,marginLeft:20,}}>
          <Text style={{fontSize:15,marginTop:5 , color :'lightgrey'}}>Total Amount:</Text>
          <Text style={{fontSize:20,marginLeft:190,color:'black'}}>102$</Text>
      </View>
      <View style={{marginTop:10}}>
      <AppButton 
          titel="CHECK OUT"
          onPress={()=>HandleAction()}          
       />
      </View>
      
      

    </View>
  )
}