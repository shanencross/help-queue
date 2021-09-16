import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { fireStoreReducer } from 'redux-firestore'; // brackets?
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTicketList: ticketListReducer,
  formVisibleOnPage: formVisibleReducer,
  firestore: fireStoreReducer,
});

export default rootReducer;