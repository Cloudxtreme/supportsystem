import { LNCUSTOMER_LIST } from '../actions/index';
const INITIAL_STATE={ all: [], customer: null};

export default function(state=INITIAL_STATE, action ) {
  switch (action.type) {
    case LNCUSTOMER_LIST:
        return {...state, all:action.payload.data};
    default:
      return state;

  }
}