import React from 'react';
import { View, Text } from 'react-native';

import Base from '../Base';

class CardDetail extends Base {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>
                    Card Detail
                </Text>
            </View>
        );
    }
}

export default CardDetail;