export function isEmpty(param: any) {
    if (param == null || !param) {
        return true
    } else return false
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
export function createObFromList<A>(ls: string[] , f: (v: string) => A )  {
    const l: any = {}
    Object.assign({},)
    ls.forEach(e => {
        l[e] = f(e)
    })
    return l
}
// import { isEmpty, isListNotEmpty , isListEmpty,isInValidString ,createObFromList,isValidString} from '';import { type } from '../app/store'