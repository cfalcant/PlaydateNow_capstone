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
                marginTop: 20,
                alignItems: 'stretch'    
            }}>
                <View style = {{flex: 1, backgroundColor: 'blue'}}>
                    <UserInfo/>
                </View>
                <View style = {{flex:1, backgroundColor: 'skyblue'}}>
                    <MyPlaydatesDash/>
                </View>
                <View style = {{flex: 1, backgroundColor: 'powderblue'}}>
                    <CreateNewPlaydate/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})