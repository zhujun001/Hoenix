import {
  STOCK_LEVEL_TEST_ACTION,
} from './constants';

const initialState = {
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case STOCK_LEVEL_TEST_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}

