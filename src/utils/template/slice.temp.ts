import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


export type ReducerArgs = {
    id?: string
}

interface ReducerIntialState {
    args: ReducerArgs[]
}


export const initialState: ReducerIntialState = {
    args: [],
}

export const reducer = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        actionNoPayLoad: (state,) => {
            // TODO Perform operation on state as 
            // state.args = null 
        },
        actionPayLoad: (state, action: PayloadAction<ReducerArgs>) => {
            // TODO Perform operation on state as 
            // state.args.push(action.payload)

        },
    },
})

export const { actionPayLoad, actionNoPayLoad } = reducer.actions

export function setAction(alertInfo: ReducerArgs, dispatch: Dispatch<any>) {
    // TODO Modify actionPayLoad 
    dispatch(actionPayLoad(alertInfo))
}

export const selectState = (state: RootState) => {
    // TODO  return state.state
}

export default reducer.reducer