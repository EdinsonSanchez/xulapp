import store from '../../config/store'
import {SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT} from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPosition = store.getState().player.position
        switch (direction) {
            case 'WEST':
                return [ oldPosition[0]-SPRITE_SIZE, oldPosition[1]]
            case 'EAST':
                return [ oldPosition[0]+SPRITE_SIZE, oldPosition[1]]
            case 'NORTH':
                return [ oldPosition[0], oldPosition[1]-SPRITE_SIZE]
            case 'SOUTH':
                return [ oldPosition[0], oldPosition[1]+SPRITE_SIZE]

        }
    }

    //stay in map while moving
    function observeBoundaries(oldPosition, newPosition) {
        return (newPosition[0] >= 0 && newPosition[0] <= MAP_WIDTH - SPRITE_SIZE) &&
               (newPosition[1] >= 0 && newPosition[1] <= MAP_HEIGHT - SPRITE_SIZE)
               ? newPosition : oldPosition

    }

    function dispatchMove(direction) {
        const oldPosition = store.getState().player.position
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: observeBoundaries(oldPosition,getNewPosition(direction))
            }
        })
    }

    function handleKeyDown(e) {
        e.preventDefault() //disables the scroll action
        

        switch(e.keyCode) {
            case 37: //left arrow
                return dispatchMove('WEST')
                
            case 38: //up arrow
                return dispatchMove('NORTH')

            case 39: //right arrow
                return dispatchMove('EAST')

            case 40: //down arrow
                return dispatchMove('SOUTH')
            default:
                
        }
    }
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}