import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import maptile from './map1.png'
import  {types} from './types'
import Player from '../player'
import Boss from '../boss'

import './styles.css'

 
function getImageSprite(type) {


  switch(type) {
    case 0: 
      return types[type].obj[0].class
    case 5: 
    return types[type].obj[0].class
    case 6: 
    return types[type].obj[0].class
  }
}
function MapImage(props) {
  
  return <div 
  className={`image ${getImageSprite(props.image)}`}
  style={{
    height: SPRITE_SIZE,
    width: SPRITE_SIZE,
    backgroundImage: `url('${maptile}')`,
    ...types[props.image].obj[0].css

  }}
  >
 
  </div>
}

function  MapRow(props) {
 
  return <div className="row" >
  {
  props.images.map( (image,i) => <MapImage image={image}index={i}key={`r-${i}-${Math.random()}`} /> )
  }
  </div>
}

class Map extends React.Component  {
  constructor(props){
    super(props);
    this.state={images:this.props.images}
    };

 render(){
  return(
    <div
    style={{
      position: 'relative',
      top: '0px',
      left: '0px',
      width: '800px',
      height: '400px',
      
    }}
  >

  {
 this.props.images.map( (row,i) => <MapRow images={row}  key={`r-${i}-${Math.random()}`} index={i}/> )
}
{<Player />}
{ <Boss/>}
  </div>
 )
 }

}

export default Map