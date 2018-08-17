import React from 'react'
import { connect } from 'react-redux'
import programmer from './player.png'
import handleMovement from './movement'


function Player(props) {
    
    return (
        <div
        
        style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${programmer}')`,
            backgroundPosition: '0 0',
            width: `40px`,
            height: `40px`
        }}
        
        ></div> 
        
    )
}

function mapStateToProps(state) {
    return {
      ...state.player,
    }
  }

  export default connect(mapStateToProps)(handleMovement(Player))