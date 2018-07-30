import {user} from '../events'

const initialState = {};


export function currentUser() {
    this.userName = '';
    this.level = 0;
    this.fullTime = '';
}

export const addValue = {
    type: 'ADD_ITEM',
    payload: user
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, users: user};
    }
    return state;
}


// function cartReducer(state = initialState, action) {
//     switch(action.type) {
//         case 'ADD_ITEM':
//             return {...state, cartData: {...state.cartData, ...action.payload}}
//
//         case 'EDIT_ITEM':
//             return {...state, cartData: {...state.cartData, ...action.payload}}
//
//         case 'REMOVE_ITEM':
//             let newState = Object.keys(state.cartData).reduce((r, e) => {
//                 if(!action.payload[e]) r[e] = state.cartData[e];
//                 return r
//             }, {})
//
//             return {...state, cartData: newState}
//
//         default:
//             return state;
//     }
// }
//
// var state = {}
//
// state = cartReducer(undefined, {
//     type: 'ADD_ITEM',
//     payload: {"React":{'name': 'React', 'quantity': 1}}
// })
// console.log(state)
//
// state = cartReducer(state, {
//     type: 'ADD_ITEM',
//     payload: {"Node":{'name': 'Node', 'quantity': 2}}
// })
// console.log(state)
//
// state =  cartReducer(state, {
//     type: 'EDIT_ITEM',
//     payload: {"React":{'name': 'React', 'quantity': 4}}
// })
// console.log(state)
//
// state = cartReducer(state, {
//     type: 'REMOVE_ITEM',
//     payload: {"React":{'name': 'React', 'quantity': 1}}
// })
// console.log(state)