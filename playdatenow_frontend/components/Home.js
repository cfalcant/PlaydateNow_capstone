import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Row } from 'native-base'
import UserInfo from './UserInfo';
import MyPlaydatesDash from './MyPlaydatesDash';
import CreateNewPlaydate from './CreateNewPlaydate';
import TabBarFooter from './TabBar';
import NewPlaydateForm from './NewPlaydateForm';

export default class Home extends Component {
state = {
    firstname: 'Carlos'
}    
    render (){
        return (
            <View style = {{
                    flex: 1,
                    // marginTop: 50,
                    alignItems: 'stretch',
                    // backgroundColor: '#DF89FB'
                    backgroundColor: 'purple',
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Image
                    source = {require('../PlaydateNow.png')}/>
                </View>

                <View style = {{flex: 1}}>
                    <Text style = {{fontSize: 25}}>
                        Hello, {this.state.firstname}!
                    </Text>
                    <UserInfo/>
                </View>
                < View style = {{flex: 1}}>
                    <CreateNewPlaydate/>
                </View>
                <View style = {{flex:1}}>
                    <MyPlaydatesDash/>
                </View>
                
            </View>
        )
    }
}