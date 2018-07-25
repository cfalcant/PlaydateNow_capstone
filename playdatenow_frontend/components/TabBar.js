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

export default class TabBarFooter extends Component {
    render() {
        return ( 
            <Container>
                <Content/>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon name = "home" />
                            <Text>Home</Text> 
                        </Button> 
                        <Button vertical active >
                            <Icon active name = "people" / >
                            <Text>Playdates</Text> 
                        </Button> 
                        <Button vertical >
                            <Icon name = "settings" / >
                            <Text >Settings</Text> 
                        </Button> 
                    </FooterTab> 
                </Footer> 
            </Container>
        );
    }
}