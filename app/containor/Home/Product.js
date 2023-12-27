import { View, Text, Image, ScrollView, StyleSheet, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../../components/card/Card'
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics'


export default function Product({ navigation }) {
  return (
    <View style={style.containor}>
      {/* <Text>Product</Text> */}
      <ScrollView
        scrollEventThrottle={16}
      >
        <Image
          style={{ position: 'relative', width: '100%', height: verticalScale(550), }}
          source={require('../../../assets/Images/longDress1.jpg')}
        />

        <View style={{ position: 'absolute', }}>
          <Text style={{ color: 'white', marginTop: verticalScale(310), fontSize: moderateScale(50), marginHorizontal: 16, fontWeight: '500' }}>Fashion</Text>
          <Text style={{ color: 'white', fontSize: moderateScale(50), marginHorizontal: 16 }}>Sale</Text>
          <Pressable
            style={{ backgroundColor: '#DB3022', marginHorizontal: 16, padding: 10, fontWeight: '500', borderRadius: 20, marginTop: verticalScale(20) }}
            onPress={() => { }}>
            <Text style={{ color: 'white', textAlign: 'center', }}>Check</Text>
          </Pressable>
        </View>

        <View style={{ position: 'relative', marginTop: 12 }}>
          <Text style={style.text}>New</Text>
          <Text style={style.subhead}>You’ve never seen it before!</Text>
          <Text style={{ position: 'absolute', color: 'black', marginLeft: horizontalScale(300), marginTop: verticalScale(35) }}>View all</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <Card
              imguri={require('../../../assets/Images/fashion.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'12$'}
              discount='NEW'
              disColor='black'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <Card
              imguri={require('../../../assets/Images/mens.jpg')}
              title="Sitlly"
              mainTitle='Denim Jacket'
              Dollar={'19$'}
              discount='NEW'
              disColor='black'

            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <Card
              imguri={require('../../../assets/Images/girls.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'20$'}
              discount='NEW'
              disColor='black'

            />
          </TouchableOpacity>

        </ScrollView>


        {/* //--------------------------------------------------------------------------------------------- */}


        <View style={{ flex: 1, marginTop: verticalScale(30) }}>
          <Text style={style.text}>Sale</Text>
          <Text style={style.subhead}>Super Summer Sale</Text>
          <Text style={{ position: 'absolute', color: 'black', marginLeft: 300, marginTop: verticalScale(35) }}>View all</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <Card
              imguri={require('../../../assets/Images/mens3.jpg')}
              title="Dorothy Perkins"
              mainTitle='Denim Jacket'
              Dollar={'12$'}
              discount='-20%'
              disColor='#DB3022'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>

            <Card
              imguri={require('../../../assets/Images/newfashion.jpg')}
              title="Sitlly"
              mainTitle='Sport Dress'
              Dollar={'19$'}
              discount='-15%'
              disColor='#DB3022'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>

            <Card
              imguri={require('../../../assets/Images/mens.jpg')}
              title="Dorothy Perkins"
              mainTitle='Denim Jacket'
              Dollar={'20$'}
              discount='-20%'
              disColor='#DB3022'
            />
          </TouchableOpacity>

        </ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Image
            style={{ marginTop: verticalScale(20) }}
            source={require('../../../assets/Images/main.png')}
          />
          <Text style={{ color: 'white', position: 'absolute', marginTop: 1580, fontSize: 30, marginLeft: 135 }}>New Collection</Text>
        </TouchableOpacity>


        <View style={style.collectionBox}>

          <View style={{ width: horizontalScale(180), height: verticalScale(380) }}>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ width: 180, height: 170, }}>
                <Text style={{ color: '#DB3022', fontSize: moderateScale( 35), marginTop: verticalScale( 35), marginLeft:horizontalScale( 16 )}}>Summer </Text>
                <Text style={{ color: '#DB3022',fontSize: moderateScale( 35), marginLeft:  verticalScale(16) }}>Sale </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ width: horizontalScale(170), height:  verticalScale(200) }}>
                <Image
                  style={{ width: horizontalScale( 180), height: verticalScale(200) }}
                  source={require('../../../assets/Images/Black.png')}
                />
                <Text style={{ position: 'absolute', color: 'white', left: 0, bottom: 0, marginBottom: verticalScale(16), marginHorizontal: 16, fontSize: moderateScale( 35) }}>Black</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ width:horizontalScale(200), height:  verticalScale(384), }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../../../assets/Images/mensHoodie.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
  containor: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  text: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop:verticalScale (12),
    marginHorizontal: horizontalScale(16)
  },
  subhead: {
    color: '#9B9B9B',
    marginHorizontal: horizontalScale(16)
  },
  saletxt: {
    fontSize: moderateScale(30),
    color: 'black',
    fontWeight: 'bold',
    marginTop: verticalScale (30),
    marginHorizontal: horizontalScale(16)
  },
  collectionBox: {
    width: horizontalScale(370),
    height: verticalScale (370),
    flexDirection: 'row'
  },
  imgStyle: {
    resizeMode: 'contain',
    marginLeft:horizontalScale(176),
    width: '100%',
    height: '100%',
  }
})