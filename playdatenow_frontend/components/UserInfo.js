import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class UserInfo extends Component {
    render() {
        return (
            <View>
                < Text style = {
                    styles.redtext
                } >
                    This is the UserInfo component that will appear on the top 1/3 of the page.
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
