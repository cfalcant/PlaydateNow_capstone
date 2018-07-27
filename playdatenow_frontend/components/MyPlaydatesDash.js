import React, { Component} from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Container, Content, Text } from 'native-base'


class MyPlaydatesList extends Component {
    render(){
        return (
            <View>
            <FlatList
                data = {[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}
                renderItem = {({item}) => 
                <Text style = {{fontSize: 20}}> 
                    {item.key} 
                </Text>} 
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
        backgroundColor: '#DF89FB'
        // backgroundColor: 'red'
    },

})