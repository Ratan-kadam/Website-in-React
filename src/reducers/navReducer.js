import * as constants from '../constants/AppConstants';

const initialState = {
nav:'sampleData',
};

export default function navReducer(state = initialState, action) {

  switch (action.type) {
    case 'xxxx':
      return { ...state, nav: action.name };


    default:
      return state;
  }
}
