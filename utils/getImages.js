const getImagesAsArray=(DATA)=>{
	let url=`https://farm`
	let imageURLs=DATA.map((v,i)=>{
		return {uri:`${url}${v.farm}.static.flickr.com/${v.server}/${v.id}_${v.secret}.jpg`}
	})
	return imageURLs
	//The skeleton url
	//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
	}
export default getImagesAsArray
