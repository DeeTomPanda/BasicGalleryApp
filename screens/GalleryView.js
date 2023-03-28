import React from 'react'
import { Dimensions,
	Text,
	View,
	FlatList,
	TouchableHighlight,
	
} from 'react-native'
import { 
	Box,
	Center,
	Heading,
	Image,
	AspectRatio,
	Modal
} from 'native-base'
import Gallery from 'react-native-image-gallery'
import {Global} from './../App.js'
import getImages from './../utils/getImages.js'

const GalleryView=()=>{

	const {uris}=React.useContext(Global)
	const URIS=getImages(uris)
	const [modal,showModal]=React.useState(false)
	const [uri,setURI]=React.useState('')
	return(
		<View style={{flex:1,width:'100%'}}>
		 <FlatList data={URIS} renderItem={(v)=>{
			 console.log(URIS)
			  return(
			     <TouchableHighlight onPress={()=>{
				     		showModal(true)
				     		 setURI(v.item.uri)}}>
			     <Image m='0' alt='no image' size='xl' resizeMode='cover' 
			      source={{uri:String(v.item.uri)}}/>
			     </TouchableHighlight>)}}
			initialNumtoRender={25}
			numColumns={3}
			horizontal={false}/>
		  <Modal isOpen={modal} onClose={()=>showModal(false)}>
		     <Modal.Content size='2xl' w='100%' >
		        <Modal.Body bg='black' opacity='2'>
			      <Gallery
 			       images={[{source:{uri}}]}/>
		        </Modal.Body>
		     </Modal.Content>
		 </Modal>
	       </View>
	)
}

export default GalleryView

