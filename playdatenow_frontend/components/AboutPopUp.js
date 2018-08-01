import React, { Component } from 'react'
import { View, StyleSheet, } from 'react-native'
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
            <Container rounded style={{paddingLeft: 4, paddingRight: 4, borderRadius: 5}}>
                <Content>
                    <Row style={{justifyContent: 'flex-end'}}>
                        <Icon name='ios-close'/>
                    </Row>

                    <Text style={{paddingBottom: 2, paddingLeft: 4}}>
                        {/* This will serve as an informational "pop-up" window that can be closed. */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec scelerisque maximus scelerisque.Morbi ac mollis leo.Vestibulum aliquet ac diam ut ornare.In sit amet scelerisque turpis, non scelerisque ipsum.Sed laoreet ex vel elit rhoncus rutrum.Vestibulum consectetur enim rutrum fermentum tristique.Duis fermentum non mi eu varius.Cras eleifend libero vitae tempor convallis.
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