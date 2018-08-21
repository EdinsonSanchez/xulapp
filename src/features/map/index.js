import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import maptile from './map1.png'

import './styles.css'

function getImageSprite(type) {
  switch(type) {
    case 0: 
      return 'backgroundimage'
    case 5: 
      return 'desk'
    case 6: 
      return 'worker'
  }
}

function MapImage(props) {
  return <div 
  className={`image ${getImageSprite(props.image)}`}
  style={{
    height: SPRITE_SIZE,
    width: SPRITE_SIZE,
    backgroundImage: `url('${maptile}')`,

  }}
  >
 
  </div>
}

function  MapRow(props) {
 
  return <div className="row">
  {
  props.images.map( image => <MapImage image={image} /> )
  }
  </div>
}

function Map(props) {
 
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
    props.images.map( row => <MapRow images={row}/> )
  }
  </div>
 )
}

export default Map