import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Settings extends Component {

state = {
    firstname: 'Carlos',
    lastname: 'Alcantar',
    email: 'carlos@gmail.com',
    password: 'carlos',
    zipcode: 85033
}
    
    render() {
        return ( 
            <View style = {{
                    // padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    backgroundColor: '#7b51a5'
            }}>
                <View style={{flex: 1, padding: 10}} >
                    <Text style={styles.text}>My Info: </Text>
                    <View style={{padding: 10, backgroundColor: 'white', borderRadius: 5}}>
                        <Text style={{fontSize: 20}}>
                            First name: {this.state.firstname}
                        </Text>
                        <Text style={{fontSize: 20}}>
                            Last name: {this.state.lastname}
                        </Text>
                        <Text style={{fontSize: 20}}>
                            E-mail address: {this.state.email}
                        </Text>
                        <Text style={{fontSize: 20}}>
                            Password: ******
                        </Text>
                        <Text style={{fontSize: 20}}>
                            Zip Code: {this.state.zipcode}
                        </Text>
                    </View>

                    <View style={{padding: 10}}>
                    </View> 



                    <TouchableHighlight
                        style={{backgroundColor: 'pink',
                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40
                    
                    }}
                    >
                        <Text style={{fontSize: 25}}>
                            Edit profile
                        </Text>
                    </TouchableHighlight>
                </View>




                < View style = {
                    {
                        flex: 1,
                        padding: 10,
                        alignItems: 'center',
                        backgroundColor: '#c997fc'
                    }
                } >
                <Text style={{fontSize: 25}}>Please click below to log out</Text>

                <View style={{padding: 35}}>

                </View>
                
                <TouchableHighlight
                    style={{backgroundColor: 'red', padding: 15, borderRadius: 5, width: 150, justifyContent: 'center', alignItems: 'center'}}
                    onPress={()=>{Actions.Login();}}
                >
                    <Text style={styles.text}>Logout</Text>   
                </TouchableHighlight> 

                </View> 

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: 'white'
    }
})