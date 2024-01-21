/* eslint-disable eqeqeq */
export const initialState = null
export const reducer = (state,action)=>{
    if(action.type=="USER"){
        return action.payload
    }
    if(action.type=="CLEAR"){
        return null
    }

    if(action.type=="UPDATEPIC"){
        return {
            ...state,
            profilepic:action.payload
        }
    }
    return state
}