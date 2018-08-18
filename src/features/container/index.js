import React from 'react'
import Player from '../player'
import Boss from '../boss'
import Map from '../map'

import Menu from '../screens/startMenu'
function Container(props) {
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
            <Map />
            <Player />
            <Boss/>
            <Menu/>
        </div>
    )
}

export default Container