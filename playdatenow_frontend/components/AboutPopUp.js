import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import {
    Container,
    Content,
    Button,
    Text,
    Icon,
    Row
} from 'native-base';


export default class AboutPopUp extends Component {
    render () {
        return (
            <Container style={{paddingLeft: 10, paddingRight: 10, borderRadius: 5}}>
                <Content>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Icon name='ios-close'/>
                    </Row>

                    <Text>
                        This will serve as an informational "pop-up" window that can be closed. There will 
                        be an "x" on the upper right corner that will collapse this window when pressed. 
                        If possible, place a link at the bottom directing the user to an "About" section or whatever.
                    </Text>
                    <Button style ={{borderColor:'purple'}}
                          small block bordered rounded >
                        <Text style={{color: 'purple'}}>
                            Learn More
                        </Text>
                    </Button>
                </Content>
            </Container>       
        )
    }
}

const styles = StyleSheet.create({

})