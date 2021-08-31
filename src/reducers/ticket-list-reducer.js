import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
    case c.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          names,
          location,
          issue,
          id,
          timeOpen,
          formattedWaitTime
        }
      });
    case c.DELETE_TICKET:
      let newState = { ...state };
      delete newState[id];
      console.log(newState);
      return newState;
    case c.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], { formattedWaitTime });
      const updatedState = Object.assign({}, state, {
        [id]: newTicket
      });
      return updatedState;
    default:
      return state;
  }
};