
import {CHANGE_FILTER} from '../actions/index';


function filterReducer(state= 'All',action){

  console.log(action);
  
    switch(action.type){
        case CHANGE_FILTER:
          return action.payload
        default:
            return state;
    }
}
export default filterReducer;