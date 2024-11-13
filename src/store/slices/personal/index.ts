import { combineReducers } from '@reduxjs/toolkit'
import personal, { PersonalState } from './commonSlice'

const reducer = combineReducers({
    personal,
})

export type BaseState = {
    personal: PersonalState
}

export * from './commonSlice'

export default reducer
