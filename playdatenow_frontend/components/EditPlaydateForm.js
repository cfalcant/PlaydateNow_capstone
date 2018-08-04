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

export default class EditPlaydateForm extends Component {

    state = {
        title: 'Sample title',
        description: 'Description in state',
        category: 'toddler',
        playdate_creator: 1
    }

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
            Please edit the playdate below:
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
                placeholder = 'Please enter a title here'
                placeholderTextColor = 'white'
                // value = {this.state.description}
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
            placeholder = 'Please enter a brief description/notes here'
            placeholderTextColor = 'white'
            // value={this.state.description}  
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
            onChangeText = {
                (category) =>
                this.setState({
                    category
            })}
            />


            <View style = {{padding: 40}}> 
            </View>

            <TouchableHighlight style = {styles.btn}
            onPress = {this.createPlaydate}
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

    createPlaydate = () => {
        axios.post('http://localhost:8000/playdates', this.state).then(() => {
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