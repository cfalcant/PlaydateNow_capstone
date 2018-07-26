import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import MyInfo from './MyInfo'

export default class UserInfo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                < Text>
                    UserInfo component
                </Text>

                <MyInfo/>

                <Button
                    title = "Edit Info"
                    color = 'red' >
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
