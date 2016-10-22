# React Native Network Image

In your componenet import NetworkedImage 

```
import NetworkedImage from 'react-native-network-image'

```

Define a function to calculate the height and width of resized image

```
calcImage(downlodImageWidth,downloadImageHeight){
      
      //Perform your calculations
        
	// Return the final dimensions of image to be displayed
        return {width:newwidth,height:newheight}
  }

```

Call NetworkedImage componenet in your render method

```
render(){
	return (
		<View>
		//pass the image dimension calculation function in the callback prop
		<NetworkedImage source={{uri:imageURI}} 
                             resizeMode={Image.resizeMode.contain} 
                            callback={this.calcImage} />
		</View>
	)
}	
```