import React from 'react';
import {View, Text, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { COLOR, ThemeContext } from 'react-native-material-ui';

import Base from '../Base';
import MemberCard from '../../components/MemberCard';
import ZukoCard from '../../zukoLib/components/ZukoCard';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    balanceTextStyle: {
        color: COLOR.grey600,
        fontFamily: 'Roboto-Light',
        fontSize: 30
    }
};

class ScanQrCode extends Base {
    constructor(props) {
        super(props);
        this.state = {value: '917-969-234-21abce-reae-11'}
    }

    render() {
        return (

                <View style={styles.container}>
                    <View style={{ flex: 1, backgroundColor: COLOR.lightBlue900}}>
                        <MemberCard />
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 3 }}>
                        <ZukoCard>
                            <Text style={styles.balanceTextStyle}>
                                Balance: $1,230.30
                            </Text>
                        </ZukoCard>
                        <ZukoCard>
                            <Icon name='bank-transfer' type='material-community' size={50} color={COLOR.blue500} />
                            <Text style={[styles.balanceTextStyle, { fontSize: 20 }]}>View Transactions</Text>
                        </ZukoCard>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
                            <View style={{ flex: 1, alignItems: 'stretch'}}>
                                <ZukoCard>
                                    <Icon name='qrcode-scan' type='material-community' size={30} color={COLOR.blue500} />
                                    <Text style={[styles.balanceTextStyle, { fontSize: 20 }]}>Scan To Pay</Text>
                                </ZukoCard>
                            </View>
                            <View style={{ flex: 1}}>
                                <ZukoCard>
                                    <Icon name='cash-multiple' type='material-community' size={30} color={COLOR.blue500} />
                                    <Text style={[styles.balanceTextStyle, { fontSize: 20 }]}>Receive Cash</Text>
                                </ZukoCard>
                            </View>
                        </View>
                    </View>
                </View>

        )
    }
}

export default ScanQrCode;
