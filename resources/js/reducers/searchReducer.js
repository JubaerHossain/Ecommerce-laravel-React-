import {GET_SEARCH} from '../actions/types';

const initialState = {
    search:{},
    loading:false
}
export default function(state = initialState, action){      
       
    switch(action.type){
        case GET_SEARCH:
        return {
            ...state,
            search:action.payload
        }
        default:
            return state;
    }
}