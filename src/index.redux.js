export const ADD = 'ADD';

let state = {
    num:0,
}

export function reducer(initialState=state,action){
    switch(action.type){
        case 'ADD':
            return { 
                ...initialState,
                num: action.number
            }
        default:
            return initialState
    }
}

export function addGun(){
    return {
        type:'ADD',
        number:1
    }
}

