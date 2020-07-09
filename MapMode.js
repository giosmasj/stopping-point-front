import
  React,
  {
    useState,
    useCallback,
    useRef,
    useEffect
  } from 'react'
import
  {
    View,
    TextInput,
    Modal,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Text,
    Button,
    Link,
    processColor,
    ScrollView,
    ImageBackground
  } from 'react-native'
import
  MapView,
  {
    Marker,
    PROVIDER_GOOGLE,
    Callout,
    CalloutSubview,
  } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import MapInput from './MapInput';
import CustomCallout from './CustomCallout'
import GooglePlacesAutocomplete from 'react-native-google-places-autocomplete'
import WeatherList from './WeatherList';
import { GOOGLE_MAPS_API_KEY, OPEN_WEATHER_API_KEY } from 'react-native-dotenv'
// import config from './config'
  
const center = {
latitude: 39.396969,
longitude: -107.217529,
};

export default function MapMode(props) {

  const [isMapMode, setIsMapMode] = useState(false)
  const [alongTheWay, setAlongTheWay] = useState(false)
  const [marker, setMarker] = useState({})
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0
  })
  const lat = marker.latitude
  const lon = marker.longitude
  const [ways0, setWays0] = useState([])
  const [ways1, setWays1] = useState([])
  const [ways2, setWays2] = useState([])
  const [ways3, setWays3] = useState([])
  const [ways4, setWays4] = useState([])
  const [ways5, setWays5] = useState([])
  const [ways6, setWays6] = useState([])
  const [ways7, setWays7] = useState([])
  const [ways8, setWays8] = useState([])
  const [ways9, setWays9] = useState([])
  const [center, setCenter] = useState({})
  const [name, setName] = useState("")
  const [weather, setWeather] = useState(0)
  const [description, setDescription] = useState("")
  const [name0, setName0] = useState("")
  const [weather0, setWeather0] = useState(0)
  const [description0, setDescription0] = useState("")
  const [name1, setName1] = useState("")
  const [weather1, setWeather1] = useState(0)
  const [description1, setDescription1] = useState("")
  const [name2, setName2] = useState("")
  const [weather2, setWeather2] = useState(0)
  const [description2, setDescription2] = useState("")
  const [name3, setName3] = useState("")
  const [weather3, setWeather3] = useState(0)
  const [description3, setDescription3] = useState("")
  const [name4, setName4] = useState("")
  const [weather4, setWeather4] = useState(0)
  const [description4, setDescription4] = useState("")
  const [name5, setName5] = useState("")
  const [weather5, setWeather5] = useState(0)
  const [description5, setDescription5] = useState("")
  const [name6, setName6] = useState("")
  const [weather6, setWeather6] = useState(0)
  const [description6, setDescription6] = useState("")
  const [name7, setName7] = useState("")
  const [weather7, setWeather7] = useState(0)
  const [description7, setDescription7] = useState("")
  const [name8, setName8] = useState("")
  const [weather8, setWeather8] = useState(0)
  const [description8, setDescription8] = useState("")
  const [name9, setName9] = useState("")
  const [weather9, setWeather9] = useState(0)
  const [description9, setDescription9] = useState("")

  const weatherSearchHandler = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather(json.main.temp)
        setDescription(json.weather[0].main)
        setName(json.name)
  })}
  const weatherSearchHandler0 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather0(json.main.temp)
        setDescription0(json.weather[0].main)
        setName0(json.name)
  })}
  const weatherSearchHandler1 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather1(json.main.temp)
        setDescription1(json.weather[0].main)
        setName1(json.name)
  })}
  const weatherSearchHandler2 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather2(json.main.temp)
        setDescription2(json.weather[0].main)
        setName2(json.name)
  })}
  const weatherSearchHandler3 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather3(json.main.temp)
        setDescription3(json.weather[0].main)
        setName3(json.name)
  })}
  const weatherSearchHandler4 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather4(json.main.temp)
        setDescription4(json.weather[0].main)
        setName4(json.name)
  })}
  const weatherSearchHandler5 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather5(json.main.temp)
        setDescription5(json.weather[0].main)
        setName5(json.name)
  })}
  const weatherSearchHandler6 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather6(json.main.temp)
        setDescription6(json.weather[0].main)
        setName6(json.name)
  })}
  const weatherSearchHandler7 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather7(json.main.temp)
        setDescription7(json.weather[0].main)
        setName7(json.name)
  })}
  const weatherSearchHandler8 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather8(json.main.temp)
        setDescription8(json.weather[0].main)
        setName8(json.name)
  })}
  const weatherSearchHandler9 = (fetchURL) => {
    fetch(fetchURL)
      .then(response => response.json())
      .then(json => {
        setWeather9(json.main.temp)
        setDescription9(json.weather[0].main)
        setName9(json.name)
  })}
  const toggleAlongTheWay = () => {
    setAlongTheWay(!alongTheWay)
  }
  
  
  // const showWeather = (response) => {
  // const temperature = response.main.temp
  // const weatherDescription = response.weather
    // setWeather(response.main.temp)
// }

  const showMapNoLogin = () => {
    setIsMapMode(true)
  }

  const showMarker = (coordinates) => {
    setMarker(coordinates)
  }

  const showLocation = (position) => {
    setLocation(position)
  }

  const reCenter = (coords) => {
    setCenter(coords)
  }

  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  const panTo = useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(11)
  }, [])

  const [focus, setFocus] = useState({
    latitude: 39.436895,
    longitude: -107.180255,
    latitudeDelta: 0.6,
    longitudeDelta: 0.3
  })

  const changeZoom = (coordinates) => {
    setFocus(coordinates)
  }


  const addZeroWaypoint = (waypointCoords) => {
    setWays0(waypointCoords)
  }
  const addFirstWaypoint = (waypointCoords) => {
    setWays1(waypointCoords)
  }
  const addSecondWaypoint = (waypointCoords) => {
    setWays2(waypointCoords)
  }
  const addThirdWaypoint = (waypointCoords) => {
    setWays3(waypointCoords)
  }
  const addFourthWaypoint = (waypointCoords) => {
    setWays4(waypointCoords)
  }
  const addFifthWaypoint = (waypointCoords) => {
    setWays5(waypointCoords)
  }
  const addSixthWaypoint = (waypointCoords) => {
    setWays6(waypointCoords)
  }
  const addSeventhWaypoint = (waypointCoords) => {
    setWays7(waypointCoords)
  }
  const addEighthWaypoint = (waypointCoords) => {
    setWays8(waypointCoords)
  }
  const addNinthWaypoint = (waypointCoords) => {
    setWays9(waypointCoords)
  }
  
  const waypts = [
    {latitude: 39.3688730999999, longitude: -107.0328241},
    {latitude: 39.3310273, longitude: -106.9848271}
  ]
  return (
    <Modal visible={props.visible} style={styles.background}>
      <SafeAreaView style={styles.container, styles.background}>
        <MapView
          // ref={(map) => this._map = map}
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomControlEnabled={true}
          initialRegion={{latitude: 39.436895,
            longitude: -107.180255,
            latitudeDelta: 0.6,
            longitudeDelta: 0.3}}
          // onMapReady={() => {fitToCoordinates([ways0, marker])}}
          // region={{latitude: 39.396969,
          //   longitude: -107.217529,
          //   latitudeDelta: 0.55,
          //   longitudeDelta: 0.53}}
          region={focus}
          zoomTapEnabled={true}
          zoomEnabled={true}
          userLocationAnnotationTitle="You Are Here"
          showsCompass= {true}
          zoomEnabled={true}
          // minZoomLevel={3}
          // maxZoomLevel={20}
          showLocation={showLocation}
          
          >
            {ways0.latitude ? 
            <Marker coordinate={
              ways0
            }
            image={require('./tire.png')}
            identifier={'mk1'}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name0}</Text>
                <Text style={styles.temp}>Currently: {weather0}°F and {description0}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways1.latitude ? 
            <Marker coordinate={
              ways1
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name1}</Text>
                <Text style={styles.temp}>Currently: {weather1}°F and {description1}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways2.latitude ? 
            <Marker coordinate={
              ways2
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name2}</Text>
                <Text style={styles.temp}>Currently: {weather2}°F and {description2}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways3.latitude ? 
            <Marker coordinate={
              ways3
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name3}</Text>
                <Text style={styles.temp}>Currently: {weather3}°F and {description1}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways4.latitude ? 
            <Marker coordinate={
              ways4
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name4}</Text>
                <Text style={styles.temp}>Currently: {weather4}°F and {description1}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways5.latitude ? 
            <Marker coordinate={
              ways5
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name5}</Text>
                <Text style={styles.temp}>Currently: {weather5}°F and {description1}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways6.latitude ? 
            <Marker coordinate={
              ways6
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name6}</Text>
                <Text style={styles.temp}>Currently: {weather6}°F and {description1}</Text>
                {/* <CalloutSubview
                onPress={() => console.log('button')}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview> */}
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways7.latitude ? 
            <Marker coordinate={
              ways7
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name7}</Text>
                <Text style={styles.temp}>Currently: {weather7}°F and {description1}</Text>
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways8.latitude ? 
            <Marker coordinate={
              ways8
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name8}</Text>
                <Text style={styles.temp}>
                  Currently: {weather8}°F and {description1}
                </Text>
              </CustomCallout>
            </Callout>
            </Marker> : null}
            {ways9.latitude ? 
            <Marker coordinate={
              ways9
            }
            image={require('./tire.png')}
            >
              <Callout
              alphaHitTest
              tooltip
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name9}</Text>
                <Text style={styles.temp}>
                  Currently: {weather9}°F and {description1}
                </Text>
              </CustomCallout>
            </Callout>
            </Marker> : null}
          {marker.latitude ?
            <Marker
              coordinate={marker}
              identifier={'mk9'}
              image={require('./map-marker-2-16.png')}
              >
              <Callout
              alphaHitTest
              tooltip
              style={styles.customView}
            >
              <CustomCallout >
              <Text style={styles.city}>{name}</Text>
                <Text style={styles.temp}>Currently: {weather}°F and {description}</Text>
                <CalloutSubview
                onPress={toggleAlongTheWay}
                 >
                  <Text style={styles.weatherButton}>Weather Along the Way</Text>
                </CalloutSubview>
              </CustomCallout>
            </Callout>
            </Marker>: null}
          {marker.latitude ? 
            <MapViewDirections
              origin={{latitude: 39.436895, longitude: -107.180255}}
              destination={{latitude: marker.latitude, longitude: marker.longitude}}
              strokeWidth={3.8}
              strokeColor='#cd00cd'
              precision= "high"
              apikey={GOOGLE_MAPS_API_KEY}
              optimizeWaypoints={true}
              onStart={(params) => {
              }}
              onReady={result => {
                const coordslength = result.coordinates.length
                const first = parseInt(1 + (coordslength - 1)/10)
                const second = (first * 2)
                const third = (first * 3)
                const fourth = (first * 4)
                const fifth = (first * 5)
                const sixth = (first * 6)
                const seventh = (first * 7)
                const eighth = (first * 8)
                const ninth = (first * 9)
                const zero = parseInt((1 + coordslength) - coordslength)
                // console.log(`mid ${mid}`)
                // console.log(`coords ${Object.values(result.coordinates[mid])}`)
                const zeroCoords = result.coordinates[zero]
                const firstCoords = result.coordinates[first]
                const secondCoords = result.coordinates[second]
                const thirdCoords = result.coordinates[third]
                const fourthCoords = result.coordinates[fourth]
                const fifthCoords = result.coordinates[fifth]
                const sixthCoords = result.coordinates[sixth]
                const seventhCoords = result.coordinates[seventh]
                const eighthCoords = result.coordinates[eighth]
                const ninthCoords = result.coordinates[ninth]
                addZeroWaypoint(zeroCoords)
                addFirstWaypoint(firstCoords)
                addSecondWaypoint(secondCoords)
                addThirdWaypoint(thirdCoords)
                addFourthWaypoint(fourthCoords)
                addFifthWaypoint(fifthCoords)
                addSixthWaypoint(sixthCoords)
                addSeventhWaypoint(seventhCoords)
                addEighthWaypoint(eighthCoords)
                addNinthWaypoint(ninthCoords)
                const lat0 = zeroCoords.latitude
                const lon0 = zeroCoords.longitude
                const fetchURL0 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat0}&lon=${lon0}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler0(fetchURL0)
                const lat1 = firstCoords.latitude
                const lon1 = firstCoords.longitude
                const fetchURL1 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat1}&lon=${lon1}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler1(fetchURL1)
                const lat2 = secondCoords.latitude
                const lon2 = secondCoords.longitude
                const fetchURL2 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat2}&lon=${lon2}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler2(fetchURL2)
                const lat3 = thirdCoords.latitude
                const lon3 = thirdCoords.longitude
                const fetchURL3 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat3}&lon=${lon3}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler3(fetchURL3)
                const lat4 = fourthCoords.latitude
                const lon4 = fourthCoords.longitude
                const fetchURL4 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat4}&lon=${lon4}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler4(fetchURL4)
                const lat5 = fifthCoords.latitude
                const lon5 = fifthCoords.longitude
                const fetchURL5 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat5}&lon=${lon5}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler5(fetchURL5)
                const lat6 = sixthCoords.latitude
                const lon6 = sixthCoords.longitude
                const fetchURL6 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat6}&lon=${lon6}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler6(fetchURL6)
                const lat7 = seventhCoords.latitude
                const lon7 = seventhCoords.longitude
                const fetchURL7 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat7}&lon=${lon7}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler7(fetchURL7)
                const lat8 = eighthCoords.latitude
                const lon8 = eighthCoords.longitude
                const fetchURL8 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat8}&lon=${lon8}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler8(fetchURL8)
                const lat9 = ninthCoords.latitude
                const lon9 = ninthCoords.longitude
                const fetchURL9 = `http://api.openweathermap.org/data/2.5/weather?lat=${lat9}&lon=${lon9}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
                weatherSearchHandler9(fetchURL9)
              }}
              /> : null
        }
          
        </MapView>
      </SafeAreaView>
        <View>
        <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        onPress={(data, details, currentLocation = null) => {
          const coordinates = {
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng
          }
          const latDelta = Number(details.geometry.viewport.northeast.lat) - Number(details.geometry.viewport.southwest.lat)
          const lngDelta = Number(details.geometry.viewport.northeast.lng) - Number(details.geometry.viewport.southwest.lng)
          const lat = details.geometry.location.lat
          const lon = details.geometry.location.lng
          const zoomCoords = {
            latitude: lat,
            longitude: lon,
            latitudeDelta: latDelta,
            longitudeDelta: lngDelta
          }
          const fetchURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=imperial`
          showMarker(coordinates)
          weatherSearchHandler(fetchURL)
          changeZoom(zoomCoords)
        }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      enablePoweredByContainer={false}
      currentLocation={true}
      styles={{
        container: {
          zIndex: 5,
        },
        textInputContainer: {
          zIndex: 7,
          position: "absolute",
          marginTop:-773,
          height: 40,
          width: 375,
          paddingBottom: 45,
          backgroundColor: '#d6d3da'
        },
        textInput: {
          backgroundColor: '#e7eff6',
          color: '#49535f',
          opacity: 0.8
        },
        listView: {
          zIndex: 8,
          position: "absolute",
          backgroundColor: '#d6d3da',
          opacity: 0.5,
          marginTop: -729,
          color: '#49535f'
        },
        button: {
          width: 80,
          paddingHorizontal: 12,
          alignItems: 'center',
          marginHorizontal: 10,
        },
        buttonContainer: {
          flexDirection: 'row',
          marginVertical: 20,
          backgroundColor: 'transparent',
        },
        calloutButton: {
          width: 'auto',
          backgroundColor: 'rgba(255,255,255,0.7)',
          paddingHorizontal: 6,
          paddingVertical: 6,
          borderRadius: 12,
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        },
      }}
      ></GooglePlacesAutocomplete>
      <Modal visible={alongTheWay} style={styles.modal}>
      <View style={styles.view}>
      <ImageBackground
        source={require('./assets/background.png')}
        style={styles.image}
        >
      <View style={styles.buttonContainer}>
        <Button style={styles.mapButton} title="Map" onPress={toggleAlongTheWay} />
      </View>
      <ScrollView>
        <View style={styles.weatherContainer}>
          <View style={styles.weatherCard2}>
            <Text style={styles.weatherCardCity}>{name0}</Text>
            <Text style={styles.weatherCardWeather}>Currently: {weather0}°F and {description0}</Text>
          </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name1}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather1}°F and {description1}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name2}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather2}°F and {description2}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name3}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather3}°F and {description3}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name4}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather4}°F and {description4}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name5}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather5}°F and {description5}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name6}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather6}°F and {description6}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name7}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather7}°F and {description7}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name8}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather8}°F and {description8}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name9}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather9}°F and {description9}</Text>
        </View>
        <View style={styles.weatherCard}>
          <Text style={styles.weatherCardCity}>{name}</Text>
          <Text style={styles.weatherCardWeather}>Currently: {weather}°F and {description}</Text>
        </View>
      </View>
      
      </ScrollView>
      </ImageBackground>
      </View>
      </Modal>
      </View>
    </Modal>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 3
    },
    mapView: {
      height: 730,
      width: 375,
      flex: 1,
      marginTop: 80,
      zIndex: 6,
      position: 'absolute'
    },
    background: {
      backgroundColor: '#E2F9FF',
      flex: 3
    },
    city: {
      fontSize: 23,
      textAlign: 'center',
      padding: 4,
      color: '#49535f',
      opacity: 0.8
    },
    // temp: {
    //   paddingLeft: 12,
    //   paddingTop: 3
    // },
    temp: {
      textAlign: 'center',
      paddingTop: 2,
      fontSize: 16,
      color: '#49535f',
      opacity: 0.8
    },
    callout: {
      borderRadius: 5
    },
    weatherButton: {
      textAlign: 'center',
      padding: 4,
      color: 'blue',
      opacity: 0.6,
      fontSize: 17,
      marginTop: 3
    },
    weatherContainer: {
      flex: 1,
      marginTop: -35,
      backgroundColor: '#D1F5FF',
      opacity: 0.7,
      paddingBottom: 40,
      marginBottom: 20
    },
    buttonContainer: {
      // flex: 1,
      paddingTop: 0,
      marginTop: 55,
      marginLeft: 15,
      zIndex: 100,
      backgroundColor: '#d6d3da',
      height: 40,
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0.7
    },
    mapButton: {
      paddingBottom: 20,
    },
    weatherCard: {
      backgroundColor: '#d6d3da',
      margin: 10,
      padding: 4,
      borderRadius: 4,
      alignItems: 'center',
      marginBottom: 2,
    },
    weatherCard2: {
      backgroundColor: '#d6d3da',
      margin: 10,
      padding: 4,
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 2
    },
    weatherCardCity: {
      fontSize: 30
    },
    weatherCardWeather: {
      fontSize: 22
    },
    view: {
      backgroundColor: '#D1F5FF',
    },
    image: {
      justifyContent: "center",
      width: '100%',
      height: '100%'
    },
    customMarker: {
      height: 50,
      width: 50
    }
  })