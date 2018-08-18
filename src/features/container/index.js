import React from 'react'
import Player from '../player'
import Boss from '../boss'
import Map from '../map'
import Menu from '../screens/startMenu'
import { images } from '../../data/maps/1'
import store from '../../config/store'

function Container(props) {
    store.dispatch({ type: 'ADD_IMAGES', payload: {
      images,
    }})
    
    return (
        <div 
        className="level1"
        style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '200px auto',
        }}
        >
            <Map images={images}/>
            <Player />
            <Boss/>
            <Menu/>
        </div>
    )
}

export default Container