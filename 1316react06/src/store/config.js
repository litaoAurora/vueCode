
import {createStore,combineReducers} from 'redux'

function count(state=100,actions){
    switch(actions.type){
        case "PLUS":
            return ++state
        case "REDUCE":
            return --state
        default:
            return state
    }
}

let store = createStore(combineReducers({count}));

function stateToProps(state,props){
    return {
        count:state.count
    }
}

function dispatchToProps(dispatch,props){
    return {
        add(){
            dispatch({
                type:'PLUS'
            })
        },
        reduce(){
            dispatch({
                type:'REDUCE'
            })
        }
    }
}

export {stateToProps,dispatchToProps,store}