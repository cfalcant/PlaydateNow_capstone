import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { Container, Content } from 'native-base'
import AboutPopUp from './AboutPopUp'

export default class UserInfo extends Component {
    state = {
        firstName: 'Carlos'
    }
    render() {
        return (
            <Container>
                <Content padder>
                        
                        <AboutPopUp/>  
                    
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})
