import 'react-native-gesture-handler'
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center,Spinner,NativeBaseProvider, Box } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
	Text,
	View 
} from 'react-native';
import { HamburgerIcon } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryView from './screens/GalleryView.js';
import Home from './screens/Home.js';
import getImages from './utils/getImages';
import Config from 'react-native-config';
import axios from 'axios';

const Drawer = createDrawerNavigator();

export const Global=React.createContext("Global")
console.log(Config)
const App=()=>{

	const [mode,setMode]=React.useState('gallery')
	const [uris,setURIS]=React.useState([])
	const [isLoading,setIsLoading]=React.useState(true)
	React.useLayoutEffect(()=>{
	   const fetchData=async()=>{	
	   	try{
	          	await axios.get(
		       "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=3b8e3e2ef269fc3c03400b21f912cf29&format=json&nojsoncallback=1")
	       	.then(async(res)=>{
		   	setURIS(await res.data.photos.photo)
		   	setIsLoading(false)
	       	})
	   	}
	   
	catch(err){				
		console.log(err)
		setIsLoading("error")}
	}
	fetchData()	
      },[])
      
      React.useEffect(()=>{
      
         const getItem =async()=>{
      
      	   if(!setIsLoading){
             console.log("Setting localstorage")
             await AsyncStorage.setItem('@Meta',JSON.stringify({uris:uris}))}
      	   let val=await AsyncStorage.getItem('@Meta')
           setURIS(val)
      }
         getItem()
      },[uris])
      	
	const screenOptions={
		headerShown:true,
		headerTitleAlign:'center',
		}

	return(
	        <NavigationContainer>
		   <NativeBaseProvider>
		   <Global.Provider value={{uris,mode,setMode}}>
		   {!isLoading?(
		      <Drawer.Navigator screenOptions={screenOptions}>
		         <Drawer.Screen name="Home" component={Home}/>
		         <Drawer.Screen name="GalleryView" component={GalleryView}/>
		      </Drawer.Navigator>)
		    :(<Box><Center h='100%'>
		        <Spinner color="Emerald.600" size='lg'/>
		      </Center></Box>)}
		    </Global.Provider>
		   </NativeBaseProvider>
		</NavigationContainer>)
}

export default App
