import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Button,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import MapMode from './MapMode';
import Authenticate from './Authenticate'
import Login from './Login'

export default function App() {

  const [isMapMode, setIsMapMode] = useState(false)

  const showMapNoLogin = () => {
    setIsMapMode(!isMapMode)
  }

  const showMyLocation = useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation(position), []
    })
  })

  

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.image}
        >
      <Text style={styles.welcome}>Stopping Point</Text>
      <Authenticate noLogin={showMapNoLogin} />
      <MapMode visible={isMapMode} showMyLocation={showMyLocation} hideMap={showMapNoLogin}
      // showWeather={handleResult}
      />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E2F9FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3
  },
  welcome: {
    fontSize: 42,
    textAlign: 'center',
    marginTop: 130,
    marginBottom: 110,
    fontWeight: 'bold',
    color: '#49535f',
    opacity: 0.6
  },
  image: {
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  setColor: {
  }
});
