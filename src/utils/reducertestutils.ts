import { Reducer } from '@reduxjs/toolkit'

interface Payload<C> {
    type: string,
    payload?: C
}


export function initalReducerState<A,>(is: A, reducer: Reducer<A, any>) {
    expect(reducer(undefined, { type: '' })).toStrictEqual(is)
}



export function stateUpdate<A, B>(ps: A, fs: A, payload: Payload<B>, reducer: Reducer<A, any>) {
    expect(reducer(ps, payload)).toStrictEqual(fs)
}
// import { initalState, stateUpdate } from '../../utils/reducertestutils'