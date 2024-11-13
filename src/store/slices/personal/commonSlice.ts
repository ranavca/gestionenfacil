import { User } from '@/@types/api'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PersonalState = {
    personal: User[] | null | 'error'
    createDrawer: 'create' | User | null
    deleteDialog: User | null
}

export const initialState: PersonalState = {
    personal: null,
    createDrawer: null,
    deleteDialog: null
}

export const commonSlice = createSlice({
    name: `personal/common`,
    initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<PersonalState>>) => {
            state = Object.assign(state, action.payload)
        },
        resetState: (state) => {
            state = Object.assign(state, initialState)
        },
    },
})

export const { updateState, resetState } = commonSlice.actions

export default commonSlice.reducer
