import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Button,
    Text
} from 'native-base';

export default class Login extends Component {
    state = {
        email: 'Carlos@gmail.com',
        password: ''
    }


    render () {
        return (
            <View style={styles.container}>
        
                




                <View style={{
                    alignItems: 'center',
                    paddingTop: 10}}>

                    <Image
                        source={require('../PlaydateNow.png')}    
                    />

                    <Item underline>
                        <Input underline
                            value = {this.state.email}
                            // placeholder = 'E-mail address' 
                            placeholderTextColor = '#470060'
                            onChangeText={(email)=>this.setState({email})}
                            
                            />
                    </Item>
                    <Item underline>
                        <Input  underline
                            placeholder = 'Password'
                            placeholderTextColor = '#470060'
        

                        />
                    </Item>

                    <View style={{paddingTop: 10}}>
                        <Button style={styles.submitBtnStyling} rounded success
                                onPress={this.onSumbit}
                        > 
                            <Text style={styles.submitBtnText}>Submit</Text>
                        </Button>
                    </View>


                    <Text style={{
                        paddingTop: 10,
                        color: '#470060'
                    }}>
                        Don't have an account? Click here to register!
                    </Text>
                </View>
                






            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 20,
        alignItems: 'stretch',
        backgroundColor: '#DF89FB'
    },
    submitBtnStlying: {
        padding: 20
    },
    submitBtnText: {
        fontSize: 20
    },
})