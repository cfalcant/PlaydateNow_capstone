import React, {Component} from 'react';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text
} from 'native-base';
import { StyleSheet } from "react-native"
import { Actions } from 'react-native-router-flux'

export default class TabBar extends Component {
    render() {
        return ( 
            <Container style={{flex: .091}}>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button
                            onPress={()=> {Actions.Home();}}
                            vertical>
                            <Icon name = "home" />
                            <Text style={{color: 'purple'}}>Home</Text> 
                        </Button> 
                        < Button 
                            onPress={()=> {Actions.Playdates();}}
                            vertical 
                                // active 
                                >
                            <Icon active name = "people" />
                            < Text style = {{color: 'purple'}}>Playdates </Text>
                        </Button> 
                        <Button
                            onPress={()=>{Actions.Settings();}} 
                            vertical >
                            <Icon name = "settings" / >
                            <Text style={{color: 'purple'}}>Settings</Text> 
                        </Button> 
                    </FooterTab> 
                </Footer> 
            </Container>
        );
    }
}
