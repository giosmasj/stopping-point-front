import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'
import * as SecureStore from 'expo-secure-store';

const loginURL = `http://localhost:3000/login/`

class Login extends Component {

    state = {
        username: "",
        password: "",
        error: ""
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    enterUsername = (text) => {
        this.setState({
            username : text
        })
    }

    enterPassword = (text) => {
        this.setState({
            password : text
        })
    }

    handleSubmit = () => {
        // event.preventDefault();

        fetch(loginURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response => {
            if (response.status === 200){
                this.setState({ error: "" })
                return response.json()
            } else if (response.status === 401) {
                throw new Error("Something wrong with username or password")
                }
            })
            .then(result => this.handleResult(result))
            // .catch(error => this.setState({ error: error.message }))
            // event.target.reset()
            this.props.noLogin()
        }
        handleResult = (result) => {
            // SecureStore.setItemAsync("token", result.token)
        }

    render() {
        const { username, password, error } = this.state
       
        return(
            <View
                className="login"
                onSubmitEditing={this.handleSubmit}
                style={styles.inputContainer} >
                <Text style={styles.title} >please login</Text>
                <TextInput
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    // onChange={this.handleChange}
                    onChangeText={(text) => {this.setState({username: text})}}
                    style={styles.input} />
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    name="password"
                    keyboardAppearance="light"
                    value={password}
                    // onChange={this.handleChange}
                    onChangeText={(text) => {this.setState({password: text})}}
                    style={styles.input} />
                <View style={styles.button}>
                    <View style={styles.buttonStyle}>
                        <Button
                            onPress={this.handleSubmit}
                            title="login"
                            type="submit"
                            value="login" />
                        { error ? <View><Text>{error}</Text></View> : null }
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button
                            title="continue without login"
                            onPress={this.props.noLogin}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        height: 40,
        width: 290,
        marginBottom: 12,
        borderRadius: 5
      },
      buttonStyle: {
        backgroundColor: '#ececec',
        borderRadius: 8,
        margin: 10,
        width: 250,
        opacity: 0.6,
        borderColor: 'gray',
      },
      otherButtonStyle: {
        // alignItems: 'flex-start',
        marginTop: 210,
        backgroundColor: '#ececec',
        borderRadius: 8,
        marginBottom: 40,
        opacity: 0.8,
        width: 250
      },
      welcome: {
        fontSize: 42,
        textAlign: 'center',
        marginTop: 150,
        marginBottom: 150,
        fontWeight: 'bold',
        color: '#49535f',
        opacity: 0.6
      },
      title: {
        color: '#49535f',
        fontSize: 30,
        opacity: 0.6,
        textAlign: 'center',
        paddingBottom: 33

      }
})

export default Login