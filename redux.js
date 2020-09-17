const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    value: 0,
    age: 17,
}

// Reducer
const rootReducer = (state = initialState, action) => {
    // if(action.type == "ADD_VALUE") {
    //     return {
    //         ...state,
    //         value: state.value + 100
    //     }
    // }

    // if(action.type == "CHANGE_AGE") {
    //     return {
    //         ...state,
    //         age: 18
    //     }
    // }
    switch (action.type) {
        case "ADD_VALUE":
            return {
                ...state,
                value: state.value + 100
            }
            break;
        case "CHANGE_AGE":
            return {
                ...state,
                age: 18
            }
            break;
        default:
            return state
    }
}

// Store
const store = createStore(rootReducer)

// Subscription
store.subscribe(() => {
    console.log("subscribe: ", store.getState())
})

// Dispatching Action
store.dispatch({type: 'ADD_VALUE'})
// store.dispatch({type: 'CHANGE_AGE'})
console.log(store.getState())
