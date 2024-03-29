import { combineReducers } from 'redux';
import AccountReducer from './reducer_accounts';
import CodeReducer from './reducer_codes';
import PlanningReducer from './reducer_planning';
import CustomerReducer from './reducer_customer'
import { reducer as formReducer} from 'redux-form';
import { reducer as modal } from 'redux-modal'

const rootReducer = combineReducers({
  accounts:AccountReducer,
  codes: CodeReducer,
  plannings: PlanningReducer,
  customers: CustomerReducer,
  form: formReducer,
  modal
});

export default rootReducer;