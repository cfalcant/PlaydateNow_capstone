import React, { Component } from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Button,
    Text
} from 'native-base';
import { Actions } from 'react-native-router-flux'

export default class Login extends Component {
    state = {
        email: 'Sample@mail.com',
        password: '',
    }

    // onPress = () => {Actions.Home();}

    render () {
        return (
            <KeyboardAvoidingView 
                behavior='padding' 
                style={styles.container}>
        
                
                <View style={{
                    alignItems: 'center',
                    paddingTop: 10}}>

                    <Image
                        source={require('../PlaydateNow.png')}    
                    />

                    <Item underline>
                        <Input underline
                            style={{color: 'white'}}
                            // value = {this.state.email}
                            placeholder = 'E-mail address' 
                            placeholderTextColor = 'white'
                            onChangeText={(email)=>this.setState({email})}
                            
                            />
                    </Item>
                    <Item underline>
                        <Input  underline
                            style={{color: 'white'}}
                            placeholder = 'Password'
                            // value = {this.state.password}
                            placeholderTextColor = 'white'
                            onChangeText = {
                                (email) => this.setState({email})}
        

                        />
                    </Item>

                    <View style={{paddingTop: 30}}>
                        <Button style={styles.submitBtnStyling} rounded success
                                // onPress={this.onSumbit}
                                onPress = {() => {Actions.Home();}}
                        > 
                            <Text style={styles.submitBtnText}>Submit</Text>
                        </Button>
                    </View>
                    <View style={{padding: 20}}>

                    </View>

                    <Text style={{
                        paddingTop: 10,
                        color: 'white'
                    }}>
                        Don't have an account? 
                    </Text>

                    <View style={{padding: 10}}>

                    </View>

                    <Text style={{paddingTop: 10, color: 'white'}}>
                        Click here to register!
                    </Text>
                </View>
                






            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        alignItems: 'stretch',
        backgroundColor: '#7b51a5',
        padding: 10
    },
    submitBtnStlying: {
        padding: 20
    },
    submitBtnText: {
        fontSize: 25
    },
})