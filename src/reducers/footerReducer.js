import * as constants from '../constants/AppConstants';

const initialState = {
footer:'sampleData',
};

export default function footerReducer(state = initialState, action) {

  switch (action.type) {
    case 'xxxx':
      return { ...state, nav: action.name };


    default:
      return state;
  }
}
