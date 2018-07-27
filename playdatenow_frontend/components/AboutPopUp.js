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
            <Container style={{paddingLeft: 4, paddingRight: 4, borderRadius: 5}}>
                <Content>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Icon name='ios-close'/>
                    </Row>

                    <Text style={{paddingBottom: 2}}>
                        This will serve as an informational "pop-up" window that can be closed.
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