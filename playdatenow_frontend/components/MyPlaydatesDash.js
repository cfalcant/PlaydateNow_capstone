import React, { Component} from 'react'
import { View, StyleSheet, FlatList, ScrollView, Row } from 'react-native'
import { Container, Content, Text } from 'native-base'
import axios from 'axios'
// import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'



class MyPlaydatesList extends Component {

state = {
    playdates: []
}
    
componentDidMount() {
     axios.get('http://localhost:8000/playdates/1/myplaydates')
         .then(response => this.setState({
             playdates: response.data
         }));
 }

render(){
    return (
        <View>
            <FlatList
                data = {this.state.playdates}
                keyExtractor = {(item, index, id) => index.toString()}
                renderItem = {({item, index, id}) => 
                    <View style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        borderRadius: 5,
                        // borderColor: '#c997fc',
                        borderColor: '#7b51a5',
                        borderWidth: 2,
                        // backgroundColor: '#DF89FB',
                        padding: 20
                    }}>
                        <Text style = {{fontSize:15}}> 
                        
                        {item.title} 
                        </Text>
                     
                        < MaterialCommunityIcons 
                            name = "delete"
                            size = {20}
                            // onPress={()=>console.log('Icon pressed')}
                            // onPress = {() => console.log('trash selected')}
                        />
                    
                    </View>}
            />
        </View>
    )
}
}

export default class MyPlaydatesDash extends Component {
    render() {
        return (
            <Container>
                <Content padder>
                    <Text style={{fontSize: 25}}>
                        My Playdates
                    </Text>

                    <MyPlaydatesList/>

                </Content>
            </Container>
        )
    }
}