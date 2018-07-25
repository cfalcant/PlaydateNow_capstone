import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import MyPlaydatesDash from './MyPlaydatesDash';
import CreateNewPlaydate from './CreateNewPlaydate';

export default class Home extends Component {
    render (){
        return (
            <View style = {{
                flex: 1,
                alignItems: 'center',
                marginTop: 20    
            }}>
                <View style = {{flex: 1}}>
                    <UserInfo/>
                </View>
                <View style = {{flex:1}}>
                    <MyPlaydatesDash/>
                </View>
                <View style = {{flex: 1}}>
                    <CreateNewPlaydate/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})