import { FlatList, StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultShowScreen({ route }) {

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  const id = route.params.id;

  useEffect(() => {
    getResult(id);
  }, [])
  if (!result) {
    return null
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {
        result.is_closed ?
         <MaterialIcons name="remove-shopping-cart" size={31} color="black" /> :
         <MaterialIcons name="delivery-dining" size={31} color="black" />
      }
      </View>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={styles.image} source={item ? {uri: item} : null } />
      )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginVertical: 10,
  },
  phone:{
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  image:{
    height: 180,
    margin: 15,
    borderRadius: 10,
  },
  icon:{
    alignSelf: 'center',
  }
})