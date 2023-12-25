import { View, Text, StyleSheet,ScrollView , TouchableOpacity, Image } from 'react-native'
import React from 'react'
import AppButton from '../../components/Button/AppButton'
// import { ScrollView } from 'react-native-gesture-handler'

export default function Payment({navigation}) {
  return (
    <ScrollView>
    <>
    <View style={{ padding: 6 }}>
      <Text style={{ fontSize: 24, marginTop: 10, color: 'black', marginHorizontal : 16 }}>Shipping address</Text>
      <View style={style.addressbox}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, color: "black" }}>Priyanshi Asodariya</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: '#DB3022', marginLeft: 70 }}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 14, marginTop: 15, color :'black' }}>3 Newbridge Court</Text>
        <Text style={{ fontSize: 14,color:'black' }}>Chino Hills, CA 91709,United States</Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Text style={{ fontSize: 20, color: "black" }}>Payment</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, color: '#DB3022', marginLeft: 190 }}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{width:"28%",height:60,backgroundColor:"white", shadowRadius: 30, elevation: 4, shadowOpacity: 0.10,borderRadius: 10,marginTop:15 }}>
        <Image
          source={require('../../../assets/Images/MasterCard.jpg')}
          style={{ width: "100%", height: "100%", borderRadius: 10, shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, }}
        />
        </View>
       
        <Text style={{ fontSize: 16, color: "black", marginTop: 40, marginLeft: 20 }}>**** **** ****3947</Text>
      </View>

      <Text style={{ fontSize: 20, color: "black", marginTop: 50 }}>Delivery method</Text>

      <View style={{ flexDirection: 'row' }}>

        <View style={{width:"30%",height:70,borderRadius:10,shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30,}}>
        <Image
          source={require('../../../assets/Images/ss1.png')}
          style={{ width:"100%", height: 70, borderRadius: 10, }}
        />
        </View>

        <View style={{width:"30%",height:70,borderRadius:10,shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30,marginLeft:15}}>
        <Image
          source={require('../../../assets/Images/ss2.png')}
          style={{ width:"100%", height: 70, borderRadius: 10, }}
        />
        </View>
        
        <View style={{width:"30%",height:70,borderRadius:10,shadowRadius: 30, elevation: 4, shadowOpacity: 0.10, marginTop: 30,marginLeft:15}}>
        <Image
          source={require('../../../assets/Images/ss3.png')}
          style={{ width:"100%", height: 70, borderRadius: 10, }}
        />
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Text style={{ fontSize: 14, color :'#9B9B9B'}}>Order :</Text>
        <Text style={{ fontSize: 16, color: 'black', marginLeft: 265 }}>112$</Text>      
      </View>

      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ fontSize: 16, color :'#9B9B9B' }}>Delivery :</Text>
        <Text style={{ fontSize: 16, color: 'black', marginLeft: 240 }}>015$</Text>      
      </View>

      <View style={{ flexDirection: 'row', marginTop: 8}}>
        <Text style={{ fontSize: 18,  color :'#9B9B9B'}}>Summary :</Text>
        <Text style={{ fontSize: 16, color: 'black', marginLeft: 220 }}>227$</Text>      
      </View>

      

    </View>
    <>
    <View style={{marginTop:12}}>
        <AppButton 
          titel="SUBMIT-ORDER"
          onPress={() => navigation.navigate('Success')}
        />
      </View>
    </>
    </>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  addressbox: {
    width: "100%",
    height: 120,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    shadowOpacity: 0.10,
    shadowRadius: 30,
    elevation: 4,
    padding: 20,
    // marginHorizontal : 16
  }
})