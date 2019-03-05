import React from 'react';
import Client from '../../apollo/Client';
import { COLOR, ThemeContext } from 'react-native-material-ui';
import { ListItem, Icon, Card } from 'react-native-elements';
import { Query } from 'react-apollo';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import Base from '../Base';
import GetCardNumber from '../../graphql/cardNumber';
import GetBalance from '../../graphql/balance';
import MemberCard from '../../components/MemberCard';
import ZukoCard from '../../zukoLib/components/ZukoCard';
import {Navigation} from "react-native-navigation/lib/dist/index";

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
        this.state = {
          userName: '',
          flip: false,
          iconName: 'qrcode',
          displayText: 'QrCode'
        }
    }

    componentDidMount() {
      this.getUserInfo();
    }

    getUserInfo() {
      return 'Min Thu Kyaw'
    }

    goToScanQrCode() {
      Navigation.push('card', {
        component: {
          name: 'screens.card.addNewCard',
          options: {
            topBar: {
              title: {
                text: 'Add New Card'
              }
            },
            bottomTabs: {
              visible: false,
            }
          }
        }
      });
    }

    render() {
        return (
          <ScrollView>
          <Query client={Client} query={GetCardNumber} >
            {
              ({ data }) => {
                const { cardNumber } = data;
                return (
                  <Query client={Client} query={GetBalance} variables={{id: cardNumber.toString() }}>
                    {
                      ({ data, loading, error }) => {
                        if (error) {
                          return <Text>{JSON.stringify(error)}</Text>;
                        }

                        if (loading) {
                          return <Text>'loading...'</Text>
                        }


                        return (
                          <View style={styles.container}>
                            <View style={{ flex: 1 }}>
                              <MemberCard
                                cardNumber={cardNumber}
                                userName={this.state.userName}
                                flip={this.state.flip}
                              />
                            </View>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ flex: 3 }}>
                              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.balanceTextStyle}>
                                  Balance: ${data.balance.balance}
                                </Text>
                              </View>
                              <ZukoCard>
                                <Icon name='bank-transfer' type='material-community' size={50} color={COLOR.blue500} />
                                <Text style={[styles.balanceTextStyle, { fontSize: 20 }]}>View Transactions</Text>
                              </ZukoCard>
                              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
                                <View style={{ flex: 1, alignItems: 'stretch'}}>
                                  <ZukoCard>
                                    <TouchableOpacity onPress={this.goToScanQrCode}>
                                    <Icon name='qrcode-scan' type='material-community' size={30} color={COLOR.blue500} />
                                    <Text style={[styles.balanceTextStyle, { fontSize: 20 }]}>Scan To Pay</Text>
                                    </TouchableOpacity>
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
                  </Query>
                )
              }
            }
          </Query>
          </ScrollView>
        )
    }
}

export default ScanQrCode;
