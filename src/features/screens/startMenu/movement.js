import store from '../../config/store'
import {SPRITE_SIZE} from '../../config/constants'

export default function handleMovement(boss) {

    function getNewPosition(direction) {
        const oldPosition = store.getState().boss.position
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

    function dispatchMove(direction) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
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

    return boss
}