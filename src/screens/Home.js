import React from 'react';
import { View, Text } from 'react-native';

import Base from './Base';

class Home extends Base {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10
            }}>
                <Text>
                    Home
                </Text>
            </View>
        );
    }
}

export default Home;
