import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
// icons
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({term,termOnChange,termOnSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.iconStyle} name="search1" size={24} color="black" />
      <TextInput 
      style={styles.inputStyle}
      autoCorrect={false}
      autoCapitalize='none'
      value={term}
      onChangeText={termOnChange}
      onEndEditing={termOnSubmit}
      placeholder='Ara'/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'lightgray',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    iconStyle:{
    },
    inputStyle:{
        flex: 1,
        marginHorizontal: 10,
        fontSize: 18,
    }
})