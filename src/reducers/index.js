import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTicketList: ticketListReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;