import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Settings extends Component {
    render() {
        return ( 
            <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#DF89FB'
            }}>
                <View >
                    <Text> Settings component </Text> 
                </View> 
            </View>
        )
    }
}