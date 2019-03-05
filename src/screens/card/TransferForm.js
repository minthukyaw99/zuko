import React, { Component } from 'react';
import TForm from 'tcomb-form-native';
import { COLOR } from 'react-native-material-ui';
import { View, Text, TouchableOpacity } from 'react-native';


const Form = TForm.struct({
  transferTo: TForm.Number,
  amount: TForm.Number
});

class TransferForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }

  render() {
    const { transferTo } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: COLOR.blue700}}>
          <Text>{transferTo}</Text>
          <Text>${this.state.amount}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flex: 1, flexDirection: 'row'}}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text>4</Text>
            <Text>5</Text>
            <Text>6</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row'}}>
            <Text>7</Text>
            <Text>8</Text>
            <Text>9</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row'}}>
            <Text>.</Text>
            <Text>0</Text>
            <Text>Del</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default TransferForm;
