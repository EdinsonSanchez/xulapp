const initialState = {
    position: [40, 40],
    spriteLocation: '0px 0px',
    direction: 'east',
    walkIndex: 0,
  }
  
  const bossReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'MOVE_PLAYER':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default bossReducer