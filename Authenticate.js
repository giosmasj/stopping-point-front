import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import Login from './Login'
import CreateLogin from './CreateLogin'




export default class Authenticate extends Component {

    state = {
        isLogin: true
    }

    toggleCreateOrLogin = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }

    render() {
        const { isLogin } = this.state
    
        return (
            <View>
                {isLogin ? <Login noLogin={this.props.noLogin} /> : <CreateLogin noLogin={this.props.noLogin}/>}
                <View style={styles.otherButtonStyle}>
                    <Button
                        onPress={this.toggleCreateOrLogin}
                        title={isLogin ? "create login?" : "already a user?"}
                    />
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
        marginTop: 140,
        backgroundColor: '#ececec',
        borderRadius: 8,
        marginBottom: 40,
        opacity: 0.8,
        width: 250,
        marginHorizontal: 60
    }
})
