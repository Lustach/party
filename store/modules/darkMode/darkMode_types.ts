import type { _GettersTree } from 'pinia';

export interface IDarkModeState {
    isDarkMode: boolean
}

type TGetters = _GettersTree<IDarkModeState>

export interface IDarkModeGetters extends TGetters {
    getDarkMode: ()=> boolean
}


type T = Awaited<Promise<PromiseLike<void>>>

export interface IDarkModeActions {
    toggleDarkMode: ()=>void
}
