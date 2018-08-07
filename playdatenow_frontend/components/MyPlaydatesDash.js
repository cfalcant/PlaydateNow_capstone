import React, { Component} from 'react'
import { View, StyleSheet, FlatList, ScrollView, Row } from 'react-native'
import { Container, Content, Text } from 'native-base'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
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


// deletePressed = ({item}) =>{
//     console.log('DELETE', id)
    // axios.delete('http://localhost:8000/playdates/{req.params.id}/', this.state).then(()=>{
    //     Actions.Home();
    // })
// }

render(){
    return (
        <View>
            <FlatList
                // data = {(item)}
                data = {this.state.playdates}
                // keyExtractor = {(item, index) => item.id}
                keyExtractor = {(item, index, id) => index.toString()}
                renderItem = {({item, index,}) => 
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
                        
                        {/* {JSON.stringify(this.state.playdates.playdates)} */}
                        {item.id} 
                        {item.title}
                    
                        </Text>
                     
                        < MaterialCommunityIcons
                        id = {item.id}
                        name = "table-edit"
                        size = {20}
                        // onPress = {
                        //     () => console.log('EDIT',item.id)
                        // }
                        onPress = {
                            () => Actions.EditPlaydateForm(item)
                            // ()=> console.log(item.id)
                            // ()=>console.log(item)
                            // ()=>console.log('hello world')
                        }
                        />
                        < MaterialCommunityIcons 
                            name = "delete"
                            size = {20}
                            id = {item.id}
                            // onPress={this.deletePressed}
                            // onPress = {() => console.log('DELETE',item.id)}
                            // onPress = {
                            //     axios.delete('http://localhost:8000/playdates/:${item.id}', this.state).then(()=>{
                            //         Actions.Home();
                            //     })
                            // }
                            // app.get('/playdates/:id',function(req,res){
                            //      req.params.id  
                            // })
                            onPress = {()=>{
                                axios.delete(`http://localhost:8000/playdates/${item.id}`, this.state).then(() => {
                                    Actions.Home();
                                }).catch((error)=>{
                                    console.log(error)
                                })
                            }}
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