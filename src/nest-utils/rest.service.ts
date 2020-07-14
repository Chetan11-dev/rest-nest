export interface RestService<T, I = string, P = any> {
    update(id: I, f: T): T
    remove(id: I): T
    add(f: T, id?: I): T
    get(id: I): T
    getAll?(): T[]
    getAllWithProperty?(property: P): T[]
    // ? means optional see https://stackoverflow.com/questions/27522973/typescript-optional-function-in-interface
    exists?(id: I): boolean

}
