import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import AboutPopUp from './AboutPopUp'

export default class UserInfo extends Component {
    state = {
        firstName: 'Carlos'
    }
    render() {
        return (
            <View style={{flex: 1}}>
                < Text style={{fontSize: 25}}>
                    Hello, {this.state.firstName}!
                </Text>
                <AboutPopUp/>  
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
