import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableHighlight } from 'react-native'

export default class NewPlaydateForm extends Component {

state = {
    title: 'Sample title',
    description: 'Description in state',
    category: 'toddler'
}


    
    render(){
        return (
            <View style={{flex: 1, backgroundColor: '#c997fc', padding: 10}}>
            <Text style={{fontSize: 25}}>
                Create a new playdate below:
            </Text>


                <View style={{backgroundColor: 'white', padding: 10, borderRadius: 5}}>

                    <Text style={{fontSize: 25}}>Title</Text>
                    <TextInput
                        style={{
                            height: 80,
                            fontSize: 20,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: '#c997fc',
                            borderRadius: 5,
                        }}
                        placeholder='Please enter a title here'
                        // value = {this.state.description}
                        onChangeText = {(title)=> this.setState({title})}
                    />
                    
                    <Text style={{fontSize: 25}}>Description</Text>

                    < TextInput
                        style = {{
                            height: 80,
                            fontSize: 20, 
                            padding: 10,
                            borderWidth: 1,
                            borderColor: '#c997fc',
                            borderRadius: 5,
                        }}
                        placeholder = 'Please enter a brief description/notes here' 
                        // value={this.state.description}  
                        onChangeText = {(description) => 
                            this.setState({description})}
                    />

                    <Text style={{fontSize: 25}}>Category</Text>

                    <TextInput
                        style = {{
                            height: 80,
                            fontSize: 20,
                            borderWidth: 1,
                            borderColor: '#c997fc',
                            borderRadius: 5,
                            padding: 10
                        }}
                        placeholder = 'Please enter a category'
                        onChangeText = {(category) => 
                            this.setState({category})}
                    />


                    <View style={{padding: 40}}>

                    </View>

                    < TouchableHighlight
                        style = {styles.btn}
                        onPress = {() => {Actions.SearchResults();}}
                        underlayColor = 'white'
                        // value={this.state.zipcode}    
                    >
                        <Text style = {{fontSize: 25}}>
                            Submit 
                        </Text>  
                    </TouchableHighlight>

                </View>






            </View>
        )
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
