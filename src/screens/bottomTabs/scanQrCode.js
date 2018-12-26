import React from 'react';
import QRCode from 'react-native-qrcode';
import { View, Text } from 'react-native';

import Base from '../Base';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

class ScanQrCode extends Base {
    constructor(props) {
        super(props);
        this.state = { value: '917-969-234-21abce-reae-11' }
    }

    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value={this.state.value}
                    size={200}
                    bgColor='purple'
                    fgColor='white'
                />
                <Text>{this.state.value}</Text>
            </View>
        )
    }
}

export default ScanQrCode;