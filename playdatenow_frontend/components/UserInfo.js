import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class UserInfo extends Component {
    render() {
        return (
            <View>
                < Text style = {
                    styles.redtext
                } >
                    UserInfo component
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    redtext: {
        color: 'red'
    }
})
