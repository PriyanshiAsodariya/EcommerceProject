import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShoppingButton from '../../components/Button/ShoppingButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../../components/Product/ProductCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import Card from '../../components/card/Card'


export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);
  const [modal, setmodel] = useState(false)

  const handlepress = () => {
    setmodel(true)
  }
  const handlecross = () => {
    setmodel(false)
  }


  useEffect(() => {
    Getdata();
  }, [])

  const Getdata = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const pdata = await response.json();
    console.log(pdata);

    setProducts(pdata);
  }





  return (
    <View>
      <ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', }}>
            <ShoppingButton
              title='T-Shirts'
              onPress={() => console.log("t shirts")}
            />
            <ShoppingButton
              title='Crop tops'
              onPress={() => console.log("Crop tops")}
            />
            <ShoppingButton
              title='Blouses'
              onPress={() => console.log("Blouses")}
            />
            <ShoppingButton
              title='Skirts'
              onPress={() => console.log("Skirts")}
            />
            <ShoppingButton
              title='Dresses'
              onPress={() => console.log("Dresses")}
            />
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row', marginTop: 15, marginHorizontal: 16, justifyContent: 'space-between' }}>

          <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('Filter')}>
            <MaterialCommunityIcons name='filter-variant' color={'black'} size={25} />
            <Text style={{ marginLeft: 8, color: 'black' }}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlepress()}>
            <MaterialCommunityIcons name='swap-vertical' color={'black'} size={25} />
            <Text style={{ marginLeft: 8, color: 'black' }}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name='view-list' color={'black'} size={25} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
        >
          <View style={{ width: '100%', marginTop: verticalScale(440), borderRadius: 50, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={handlecross} style={{ marginLeft: 150 }}>
              <MaterialCommunityIcons name='minus-thick' size={45} color={'grey'} />
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
              <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
              <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
              <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Custom Review</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
              <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Price:low to high</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '100%', height: verticalScale(55) }}>
              <Text style={{ fontSize: moderateScale(22), marginTop: verticalScale(14), marginLeft: horizontalScale(20), color: 'black' }}>Price:high to low</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <View style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', marginTop: 6, flex: 1, flexWrap: 'wrap' }}>

          {
            products.map((v, i) => (
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
                <ProductCard
                  imguri={v.images[0]}
                  title={v.description}
                  mainTitle={v.title}
                  Dollar={v.price}
                />
              </TouchableOpacity>
            ))
          }

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <ProductCard
              imguri={require('../../../assets/Images/longDress.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'12$'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <ProductCard
              imguri={require('../../../assets/Images/mens2.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'12$'}
              discount='20%'
              disColor='#DB3022'
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <ProductCard
              imguri={require('../../../assets/Images/hoodie.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'12$'}

            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <ProductCard
              imguri={require('../../../assets/Images/pullover.jpg')}
              title="Dorothy Perkins"
              mainTitle='Evening Dreese'
              Dollar={'12$'}
              discount='30%'
              disColor='#DB3022'
            />
          </TouchableOpacity>





        </View>

      </ScrollView>
    </View>
  )
}