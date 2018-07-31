import React, { Component} from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Container, Content, Text } from 'native-base'
import axios from 'axios'


class MyPlaydatesList extends Component {

state = {
    playdates: []
}
    
componentDidMount() {
     axios.get('http://localhost:8000/playdates')
         .then(response => this.setState({
             playdates: response.data
         }));
 }

render(){
    return (
        <View>
            <FlatList
                data = {this.state.playdates}
                // keyExtractor = {(item) => item.toString()}
                renderItem = {({item}) => 
                    <View>
                        <Text style = {{fontSize: 20}}> 
                        {item.title} 
                        </Text>
                    </View>}
                keyExtractor = {(item, index) => index.toString()}
            />
        </View>
    )
}
}

export default class MyPlaydatesDash extends Component {
    render() {
        return (
            < Container style={styles.container}>
                <Content padder>
                    <Text>
                        MyPlaydatesDash 
                    </Text>

                    <MyPlaydatesList/>

                </Content>
            </Container>
        )
    }
}

styles = StyleSheet.create({
    container: {
        // backgroundColor: '#DF89FB'
        // backgroundColor: 'red'
        backgroundColor: 'white'
    },

})