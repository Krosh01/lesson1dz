import {applyMiddleware} from 'redux'
import reducer from './reducers/reducer'

const store = applyMiddleware({reducer})

export default store ;