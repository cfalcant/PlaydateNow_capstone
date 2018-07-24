import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserInfo from './UserInfo';
import MyPlaydatesDash from './MyPlaydatesDash';

export default class Home extends Component {
    render (){
        return (
            <View style = {{
                flex: 1,
                alignItems: 'center'    
            }}>
                < View style = {{flex: 1}}>
                    <UserInfo/>
                </View>
                <View style = {{flex:1}}>
                    <MyPlaydatesDash/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})