import { View, Text, ScrollView, TouchableOpacity, Image, Modal, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ShoppingButton from '../../components/Button/ShoppingButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../../components/Product/ProductCard';
import { horizontalScale, moderateScale, verticalScale } from '../../Constant/Metrics';
import Card from '../../components/card/Card'


export default function ProductList({ navigation }) {
  const [category, setcategory] = useState('')
  const [search, setsearch] = useState('')
  const [sort, setsort] = useState('az');
  const [products, setProducts] = useState([]);
  const [modal, setmodel] = useState(false)


  // console.log(category)

  const handlepress = () => {
    setmodel(true)
  }
  const handlecross = () => {
    setmodel(false)
  }

  let arr = []

  useEffect(() => {
    Getdata();
  }, [])

  const Getdata = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const pdata = await response.json();
    console.log(pdata);

    setProducts(pdata);
  }

  const searchsortdata = () => {

    let fdata = products.filter((v) => (
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.title.toLowerCase().includes(search.toLowerCase()) ||
      v.price.toString().includes(search.toLowerCase())

    ));

    if (category !== '') {
      fdata = fdata.filter((v) => category === v.category.name)
    }


    fdata = fdata.sort((a, b) => {
      if (sort === 'lh') {
        return a.price - b.price;
      } else if (sort === 'hl') {
        return b.price - a.price;
      } else if (sort === 'az') {
        return a.title.localeCompare(b.title)
      } else if (sort === 'za') {
        return b.title.localeCompare(a.title)
      }
    })

    return fdata;
  }

  const fdata = searchsortdata();

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row',height : 50 }} >
          {
            products.map((v) => {
              if (!arr.includes(v.category.name)) {
                arr.push(v.category.name)
              }
            })
          }

          <ShoppingButton
            // key={v.id}
            title={'All'}
            onPress={() => setcategory('')}
          />

          {
            arr.map((v) => {
              return (
                <ShoppingButton
                  key={v.id}
                  title={v}
                  onPress={() => setcategory(v)}
                />
              )
            })
          }


        </View>
      </ScrollView>

      <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 16, justifyContent: 'space-between' }}>

        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => navigation.navigate('Filter')}>
          <MaterialCommunityIcons name='filter-variant' color={'black'} size={25} />
          <Text style={{ marginLeft: 8, color: 'black' }}>Filter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlepress()}>
          <MaterialCommunityIcons name='swap-vertical' color={'black'} size={25} />
          <Text style={{ marginLeft: 2, color: 'black' }}>{sort === 'az' ? 'A to Z' : sort === 'za' ? 'Z to A' : sort === 'lh' ? 'Low to high' : sort === 'hl' ? 'high to low' : 'A to Z'}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <MaterialCommunityIcons name='view-list' color={'black'} size={25} />
        </TouchableOpacity>
      </View>

      <TextInput
        style={{ borderBottomWidth: 2, marginHorizontal: 16 }}
        placeholder='Search...'
        onChangeText={setsearch}

      />




      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={{ width: '100%', marginTop: verticalScale(440), borderRadius: 50, backgroundColor: 'white' }}>
          <TouchableOpacity onPress={handlecross} style={{ marginLeft: 150 }}>
            <MaterialCommunityIcons name='minus-thick' size={45} color={'grey'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('popular'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('az'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>A to Z</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('za'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Z to A</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('lh'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Price:low to high</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setsort('hl'), setmodel(false) }} style={style.container}>
            <Text style={style.text}>Price:high to low</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      

      <ScrollView>
        <View style={{ flexDirection: 'row', marginHorizontal: 16, justifyContent: 'space-between', marginTop: 6, flex: 1, flexWrap: 'wrap' }}>

          {
            fdata.map((v, i) => (
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',{id:v.id})}>
                <ProductCard
                  key={v.id}
                  imguri={v.images[0]}
                  // title={v.description}
                  mainTitle={v.title}
                  Dollar={v.price}
                />
              </TouchableOpacity>
            ))
          }

        </View>

      </ScrollView>
    </View >
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(55),
  },
  text: {
    fontSize: moderateScale(22),
    marginTop: verticalScale(14),
    marginLeft: horizontalScale(20),
    color: 'black'
  }
})