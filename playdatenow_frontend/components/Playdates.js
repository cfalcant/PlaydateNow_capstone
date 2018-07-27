import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Playdates extends Component {
    render () {
        return (
            <View style = {{
                flex: 1,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow'
                // backgroundColor: '#DF89FB'
            }}>
                < View>
                    < Text>Playdates component </Text>
                </View>
            </View>
        )
    }
}

