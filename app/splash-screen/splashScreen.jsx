import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 284,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
})


const splashScreen = function () {
    return <View style={style.container}>
        <LinearGradient
            colors={['#6a11cb', '#2575fc']}
            style={style.background}
        />
        <Image
            style={style.tinyLogo}
            source={require('../../assets/images/nikeee.png')}
        />
    </View>
}

export default splashScreen;