import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';

export default function SearchScreen() {

  const [searchApi, results, errorMessage] = useResults();


  const [term, setTerm] = useState('');
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        termOnChange={setTerm}
        termOnSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text style={styles.msg1}>{errorMessage}</Text> : null}
      {results.length == 0 ? <Text style={styles.msg2}>Sonuç bulunamadı..</Text> : <>
        <ResultList title="Ucuz Restoranlar" results={filterResultsByPrice('₺')} />
        <ResultList title="Uygun Restoranlar" results={filterResultsByPrice('₺₺')} />
        <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
      </>}
    </View>
  )
}

const styles = StyleSheet.create({
  msg1:{
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },
  msg2:{
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '50%',
  }
})