import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content, Text } from 'native-base'

export default class MyPlaydatesDash extends Component {
    render() {
        return (
            < Container style={styles.container}
            >
                <Content padder
                >
                    < Text >
                        MyPlaydatesDash component 
                        </Text>
                </Content>
            </Container>
        )
    }
}

styles = StyleSheet.create({
    container: {
        // backgroundColor: '#DF89FB'
        backgroundColor: 'red'
    }
})