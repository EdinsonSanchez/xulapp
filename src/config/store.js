import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import bossReducer from '../features/player/reducer'
const rootReducer = combineReducers({
    player: playerReducer,
    boss: bossReducer,
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  
  export default store