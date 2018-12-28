import React from 'react';
import QRCode from 'react-native-qrcode';
import { Card, ListItem, Icon } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/EvilIcons';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import { COLOR } from 'react-native-material-ui';

import Base from '../Base';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    }
};

class ScanQrCode extends Base {
    constructor(props) {
        super(props);
        this.state = {value: '917-969-234-21abce-reae-11'}
    }

    render() {
        const {height} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, backgroundColor: COLOR.lightBlue900}}>
                    <ImageBackground
                        source={require('../../assets/images/cardBackground.png')}
                        style={{
                            height: height / 4,
                            shadow: {
                                shadowColor: '#202020',
                                shadowOffset: {width: 2, height: 4},
                                shadowRadius: 5,
                            },
                            margin: 30
                        }}
                        imageStyle={{borderRadius: 20}}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}
                        >
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text
                                    style={{
                                        fontFamily: 'Roboto-Light',
                                        fontSize: 35,
                                        color: 'white'
                                    }}
                                >
                                    Zuko
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: 'Roboto-Light',
                                    fontSize: 20,
                                    color: 'white'
                                }}
                            >Min Thu Kyaw</Text>
                            <Text
                                style={{
                                    fontFamily: 'Roboto-Light',
                                    fontSize: 25,
                                    color: 'white'
                                }}
                            >
                                9170-9619-3421-3468
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1 }}>
                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1}}>
                        <Card
                            containerStyle={{
                                borderColor: COLOR.grey200,
                                shadowColor: COLOR.grey400,
                                shadowOffset: {width: 1, height: 1},
                                shadowRadius: 5,

                            }}
                        >
                            <Text style={{ color: COLOR.grey600, fontFamily: 'Roboto-Light', fontSize: 30}}>
                                Balance: $123,321,2431
                            </Text>
                        </Card>

                        <Card
                            containerStyle={{
                                borderColor: COLOR.grey200,
                                shadowColor: COLOR.grey400,
                                shadowOffset: {width: 1, height: 1},
                                shadowRadius: 5,

                            }}
                        >
                            <Icon
                                name='chart'
                                type='evilicon'
                                size={50}
                                color={COLOR.teal400}
                            />
                            <ListItem
                                title="View Transaction Detail"
                                containerStyle={{ borderBottomWidth: 0 }}
                                titleContainerStyle={{ fontSize: 30 }}
                                titleStyle={{ fontSize: 23, color: COLOR.grey600, fontFamily: 'Roboto-Light' }}
                            />
                        </Card>
                    </View>

                </View>
            </View>
        )
    }
}

export default ScanQrCode;

/**
 <Image
 source={require('../../assets/images/cardBackground.png')}
 width={300}
 />
 <QRCode
 value={this.state.value}
 size={200}
 bgColor='purple'
 fgColor='white'
 />
 <Text>{this.state.value}</Text>
 */