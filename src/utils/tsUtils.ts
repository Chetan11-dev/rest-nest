export function isEmpty(param: any) {
    if (param == null || !param) {
        return true
    } else return false
}
export function notArraysEqual(a: any[], b: any[]) {
    return !arraysEqual(a, b)
}


export function arraysEqual(a: any[], b: any[]) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false
    }
    return true
}
type Empty = | null | undefined
export function isListEmpty(param: any[] | Empty) {
    if (isEmpty(param) || param!.length === 0) {
        return true
    } else return false
}

export function isListNotEmpty(param: any[] | Empty) {
    return !isListEmpty(param)
}


export function isEmptyString(p: string | Empty) {
    if (isEmpty(p) || p!.trim().length === 0) {
        return true
    } else return false
}

export function isNotValidString(p: string | Empty) {
    return !isEmptyString(p)
}
export function createObFromList<A>(ls: string[], f: (v: string) => A) {
    const l: any = {}
    Object.assign({},)
    ls.forEach(e => {
        l[e] = f(e)
    })
    return l
}
// import { isEmpty, isListNotEmpty , isListEmpty,isInValidString ,createObFromList,isValidString} from '';import { type } from '../app/store'