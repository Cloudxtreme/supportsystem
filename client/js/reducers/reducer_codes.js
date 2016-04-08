import { LANG_LIST, REGIONS_LIST, LOCATION_LIST} from '../actions/index';
const INITIAL_STATE={ alllang: [], allregions: [], alllocations: [],lang: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case LANG_LIST:
        return {...state, alllang:action.payload.data};    
    case REGIONS_LIST:
        return {...state, allregions:action.payload.data};   
    case LOCATION_LIST:
        return {...state, alllocations:action.payload.data};
    default:
      return state;

  }
}