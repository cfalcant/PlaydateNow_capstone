// import React, {
//     Component
// } from 'react'
// import {
//     View,
//     Text,
//     StyleSheets
// } from 'react-native'

// export default class SearchResults extends Component {
//     render() {
//         return ( 
//             <Text >
//                 Search results component
//             </Text>
//         )
//     }
// }

import React, {
    Component
} from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    ScrollView,
    Row
} from 'react-native'
import {
    Container,
    Content,
    Text
} from 'native-base'
import axios from 'axios'
// import { Ionicons } from '@expo/vector-icons'
import {
    MaterialCommunityIcons
} from '@expo/vector-icons'



class SearchResultsContainer extends Component {

    state = {
        playdates: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/playdates/')
            .then(response => this.setState({
                playdates: response.data
            }));
    }


    // deletePressed = (item, index, id) =>{
    //     console.log(item.id)
    // }

    render() {
        return ( 
            <View>
            <FlatList
                data = {this.state.playdates}
                // keyExtractor = {(item, index) => item.id}
                keyExtractor = {
                (item, index, id) => index.toString()}   
                renderItem = {({item,index}) =>
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
                    <Text style = {{fontSize: 15}}>
                    {item.title} 
                    </Text>
                    < Text style = {{fontSize: 15}}> 
                        {item.category} 
                    </Text>

                    <MaterialCommunityIcons
                    name = "information-outline"
                    size = {20}
                    // onPress={this.deletePressed}
                    // onPress = {(id, key, item, index)=>{
                    //     console.log({key: })
                    // }}
                    // onPress = {() => console.log('trash selected')}
                    />

                </View>} 
                />
                </View>
            )
        }
    }

    export default class SearchResults extends Component {
        render() {
            return ( 
                <Container >
                <Content padder >
                <Text style = {{fontSize: 25}}>
                    Playdates by category: "All" 
                </Text>

                <SearchResultsContainer / >

                </Content> 
                </Container>
            )
        }
    }