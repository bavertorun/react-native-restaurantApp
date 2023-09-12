import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={result.image_url ? { uri: result.image_url } : null} />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.rating}>{result.rating} Yıldızlı Restoran, {result.review_count} Değerlindirme</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        height: 120,
        width: 250,
        borderRadius: 10,
        marginBottom: 5,
    },
    name:{
        fontWeight: 'bold',
    }
})