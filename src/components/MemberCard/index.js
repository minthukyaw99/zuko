import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import styles from './style';
import {facebookService} from "../../services/FbService";

const Index = ({ cardNumber, userName }) => {
    function formatCardNumber() {
      const chuncks = cardNumber.match(/.{1,4}/g);
      return chuncks.join("-"); //returns 123-456-789
    }



    return (
      <ImageBackground
        source={require('../../assets/images/cardBackground.png')}
        style={styles.imageBackgroundStyle}
        imageStyle={styles.imageBackgroundImageStyle}
      >
        <View style={styles.containerStyle}>
          <Text style={[styles.textStyle, { fontSize: 35 }]}>Zuko</Text>
        </View>
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>{userName}</Text>
          <Text style={styles.textStyle}>{formatCardNumber()}</Text>
        </View>
      </ImageBackground>
    )
}

export default Index;
