import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'

export default class NewPlaydateForm extends Component {

state = {
    title: 'Sample title',
    description: 'Description in state',
    category: 'toddler'
}


    
    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#c997fc', padding: 10}}>
            <Text>
                New Playdate Form component title
            </Text>


                <View style={{backgroundColor: 'white', padding: 10}}>

                    <Text>Title</Text>
                    <TextInput
                        style={{height: 80, fontSize: 25, borderWidth: 1, padding: 10}}
                        placeholder='Placeholder goes here'
                        onChangeText = {(title)=> this.setState({title})}
                    />
                    
                    <Text>Description</Text>

                    < TextInput
                        style = {{height: 80,fontSize: 25}}
                        // placeholder = 'Placeholder goes here' 
                        value={this.state.title}  
                    />

                    <Text>Category</Text>

                    <TextInput
                    style = {{
                        height: 80,
                        fontSize: 25,
                        borderWidth: 1
                        }}
                    placeholder = 'Placeholder goes here'
                    />

                </View>



            </View>
        )
    }

}
