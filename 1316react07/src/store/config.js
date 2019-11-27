import {createStore,combineReducers} from 'redux'

function msg(state='默认的共享数据',actions){
    if(actions.type == "SET"){
        return actions.str
    }else{
        return state
    }
}

let store = createStore(combineReducers({msg}));

function mapStateToProps(state) {
    return {
        msg:state.msg
    }
}

function mapDispatchToProps(dispatch,props){
    return {
        setMsg(val){
            dispatch({
                type:'SET',
                str:val
            })
        }
    }
}

export {mapStateToProps,mapDispatchToProps,store}