const GET_GREETING = 'GET_GREETING';

const initialState = '';

export const getGreeting = (greeting) => ({
  type: GET_GREETING,
  payload: greeting,
});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;