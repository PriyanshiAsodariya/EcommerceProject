import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
export default function Profileinput({ name, titel, onPress }) {
  return (
    <View>
      <TouchableOpacity  onPress={onPress} style={{ width: "95%", height: 70, backgroundColor: 'white', marginLeft: 10, shadowOpacity: 0.25, shadowRadius: 20, elevation: 2, flexDirection: "row", marginTop: 0.5 }}>

        <TouchableOpacity style={{ padding: 15, marginLeft: 5 }} onPress={onPress}>
          <Text style={{ fontSize: 15, color: 'black' }}>{name}</Text>
          <Text style={{ fontSize: 11, color: '#9B9B9B', marginTop: 3 }}>{titel}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 160, marginTop: 25 }} onPress={onPress}>
          <Feather name='chevron-right' color="#9B9B9B" size={20} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View >
  )
}