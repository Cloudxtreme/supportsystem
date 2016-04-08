import { PLANNING_LIST, PLANNING_SHOW, ISA_ACTION_LIST } from '../actions/index';
const INITIAL_STATE={ all: [], planning: null, allactions: []};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case ISA_ACTION_LIST:
        return {...state, allactions:action.payload.data};
    case PLANNING_LIST:
        return {...state, all:action.payload.data};
   case PLANNING_SHOW:
      return {...state, planning:action.payload.data[0]};
    default:
      return state;

  }
}