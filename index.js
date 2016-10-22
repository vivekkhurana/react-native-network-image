import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    Text
} from 'react-native'

const {dheight, dwidth} = Dimensions.get('window')
export default class NetworkedImage extends Component{
    constructor(props){
        super(props)
        this.state = {
            width:100,
            height:100,
            dheight:dheight,
            loaded:false
        }
        
        
    }
    componentDidMount() {
       
        Image.getSize(this.props.source.uri, (width, height) => {
            
            
            var dimen = this.props.callback(width,height)
           
        this.setState({width:dimen.width, height:dimen.height,loaded:true});
        });
        
    }
    
    render(){
        
        if(this.state.loaded){
           return (
               <Image source={this.props.source} 
            style={[this.props.style,{width:this.state.width,height:this.state.height}]}
            />
           ) 
        }else{
            return (
                <Text></Text>
            )
        }
        
    }
    
    
}
