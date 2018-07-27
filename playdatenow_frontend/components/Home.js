import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import MyPlaydatesDash from './MyPlaydatesDash';
import CreateNewPlaydate from './CreateNewPlaydate';
import TabBarFooter from './TabBar';

export default class Home extends Component {
    render (){
        return (
            <View style = {{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: 20,
                    alignItems: 'stretch',
                    backgroundColor: '#DF89FB'
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