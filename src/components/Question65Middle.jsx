import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { images } from "../images";

const Question65Middle = () => {

    return(
        <View style={styles.middleContainer}>
            <Image source={images.removeTenThounsand} style={styles.image}></Image>
        </View>
    )

};

const styles = StyleSheet.create({
    middleContainer: {
        width: '100%',
        height: 150,
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 20,
        marginLeft: 10
    },
    image: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'contain', 
    },
});

export default Question65Middle;