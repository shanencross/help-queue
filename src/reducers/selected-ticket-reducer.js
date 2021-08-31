export default (state = { ticket: null }, action) => {
  const { ticket } = action;
  switch (action.type) {
    case 'SELECT_TICKET':
      
      return {
        ticket: ticket
      };
  }
};