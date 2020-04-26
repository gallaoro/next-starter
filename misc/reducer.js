import { actionTypes } from './actions';

export const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  placeholderData: [],
  error: null,
};

// REDUCERS
export const rootReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.RESET:
      return {
        ...exampleInitialState,
      };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 },
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 },
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.LOAD_DATA_THEN_NAVIGATE_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light },
      };

    default:
      return state;
  }
};
