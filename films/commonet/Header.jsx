import React from 'react';
import {StyleSheet,View,Text,Image} from "react-native";
import logo from "../assets/Logo.jpg";

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
            <Image style={styles.icon} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    icon: {
        width: 50,
        height: 50,
    },
    container: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        backgroundColor: "#ccc",
    }
})
