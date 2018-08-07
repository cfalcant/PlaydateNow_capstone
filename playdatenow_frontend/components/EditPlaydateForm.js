import React, {
    Component
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableHighlight
} from 'react-native'
import axios from 'axios'
import {
    Actions
} from 'react-native-router-flux'

// class EditedPlaydate extends Component {

// }

export default class EditPlaydateForm extends Component {

state = {
    playdate: []
}    

// componentDidMount(){
//     axios.get(`http://localhost:8000/playdates/25`, this.state)
// }
componentDidMount() {
    axios.get('http://localhost:8000/playdates/25')
        .then(response => this.setState({
            playdate: response.data
        }));
}

// onPress = ()=>{
//     axios.delete(`http://localhost:8000/playdates/${item.id}`, this.state).then(() => {
//         Actions.Home();
// }).catch((error)=>{
//     console.log(error)
// })}

// state = {
//     title: 'Sample title',
//     description: 'Description in state',
//     category: 'toddler',
//     playdate_creator: 1
// }

    render() {
        return ( 
            <View style = {{
                flex: 1,
                backgroundColor: '#c997fc',
                padding: 10
                }}>
            <Text style = {{
                fontSize: 25
                }}>
                    {/* Please edit the playdate below: */}
                    {/* {JSON.stringify(this.state.playdate)} */}
                    {this.state.playdate.id} 
            </Text>


            <View style = {{
                backgroundColor: '#7b51a5',
                padding: 10,
                borderRadius: 5
                }}>

            <Text style = {{
                fontSize: 25,
                color: 'white'
                }}> 
                Title 
                </Text> 
                <TextInput style = {{
                    height: 80,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: '#c997fc',
                    borderRadius: 5,
                }}
                // placeholder = 'Please enter a title here'
                placeholderTextColor = 'white'
                value = {this.state.playdate.title}
                onChangeText = {
                    (title) => this.setState({
                        title
                    })}
                />

            <Text style = {{
                fontSize: 25,
                color: 'white'
                }}> 
            Description 
            </Text>

            <TextInput style = {{
                height: 80,
                fontSize: 20,
                padding: 10,
                borderWidth: 1,
                borderColor: '#c997fc',
                borderRadius: 5,
                }}
            // placeholder = 'Please enter a brief description/notes here'
            placeholderTextColor = 'white'
            value={this.state.playdate.description}  
            onChangeText = {
                (description) =>
                this.setState({
                    description
            })}
            />

            <Text style = {{
                fontSize: 25,
                color: 'white'
                }}>Category 
            </Text>

            <TextInput style = {{
                height: 80,
                fontSize: 20,
                borderWidth: 1,
                borderColor: '#c997fc',
                borderRadius: 5,
                padding: 10
            }}
            placeholder = 'Please enter a category'
            placeholderTextColor = 'white'
            value = {this.state.playdate.description}
            onChangeText = {
                (category) =>
                this.setState({
                    category
            })}
            />


            <View style = {{padding: 40}}> 
            </View>

            <TouchableHighlight style = {styles.btn}
            // onPress = {this.createPlaydate}
            onPress = {()=>{
                Actions.Home()
            }}
            underlayColor = 'pink'
            // value={this.state.zipcode}    
            >
            <Text style = {{fontSize: 25}
            }>
            Submit 
            </Text>

            </TouchableHighlight>

            </View>






            </View>
        )
    }

    editPlaydate = () => {
        axios.put(`http://localhost:8000/playdates/${id}`, this.state).then(() => {
            // console.log('Successfully added playdate')
            Actions.Home();

        })
    }

}

styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: '#898988',
        alignItems: 'center',
        borderRadius: 5,
    },
})