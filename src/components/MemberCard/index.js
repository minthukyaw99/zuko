import React, { Component } from 'react';
import FlipCard from 'react-native-flip-card';
import QRCode from 'react-native-qrcode-svg';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Card } from 'react-native-elements';

import styles from './style';
import {COLOR} from "react-native-material-ui";
//= ({ cardNumber, userName }) =>
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: this.props.flip,
    }
  }

  componentDidMount() {

  }

  formatCardNumber() {
    const { cardNumber } = this.props;
    const chuncks = cardNumber.match(/.{1,4}/g);
    return chuncks.join("-"); //returns 123-456-789
  }

  render() {
    const { cardNumber, userName } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlipCard
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          clickable={false}
          alignHeight={true}
          flip={this.state.flip}
          style={{ borderColor: COLOR.white}}
        >
          <ImageBackground
            source={require('../../assets/images/cardBackground.png')}
            style={styles.imageBackgroundStyle}
            imageStyle={styles.imageBackgroundImageStyle}
          >
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => this.setState({ flip: !this.state.flip})}>
                <Icon name='rotate-3d' type='material-community' size={30} color={COLOR.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.containerStyle}>
              <Text style={[styles.textStyle, { fontSize: 35 }]}>Zuko</Text>
            </View>
            <View style={styles.containerStyle}>
              <Text style={styles.textStyle}>{userName}</Text>
              <Text style={styles.textStyle}>{this.formatCardNumber()}</Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require('../../assets/images/cardBackground.png')}
            style={styles.imageBackgroundStyle}
            imageStyle={styles.imageBackgroundImageStyle}
          >
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
              <TouchableOpacity onPress={() => this.setState({ flip: !this.state.flip})}>
                <Icon name='rotate-3d' type='material-community' size={30} color={COLOR.white} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center'}}>
              <QRCode size={styles.qrCodeStyle.height} value={cardNumber}/>
            </View>
          </ImageBackground>
        </FlipCard>
      </View>
    )
  }
}

export default Index;
