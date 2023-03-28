import React from 'react'
import { 
	Text,
	View,
} from 'react-native'
import {
	Box,
	Center,
	Heading,
	Switch,
	VStack
} from 'native-base'
import { Global } from './../App.js'

const Home=()=>{
	
	const {mode,setMode}=React.useContext(Global)

	return(
		<Box flexDirection='column' m='0' p='0' w='100%' h='100%'>
		   <Center h='80%' w='100%' my='10%'>
		      <Heading size='md'>Welcome to Gallery App!</Heading>
		      <Text>{"This is a simple Gallery App!"}</Text>
		   </Center>
		</Box>)
}

export default Home
