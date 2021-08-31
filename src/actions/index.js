import * as c from './ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, timeOpen, formattedWaitTime } = ticket;
  return {
    type: c.ADD_TICKET,
    names,
    location,
    issue,
    timeOpen,
    id,
    formattedWaitTime
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id,
  formattedWaitTime
});