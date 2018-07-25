import React, {
    Component
} from 'react';
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
                    marginTop: 20,
                    justifyContent: 'center',
                    backgroundColor: 'green'
            }}>
                <View >
                    <Text> Settings component </Text> 
                </View> 
            </View>
        )
    }
}