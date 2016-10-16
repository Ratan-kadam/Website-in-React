import * as constants from '../constants/AppConstants';

const initialState = {
  displayData: {
    logfile: 'Data form logfile1',
  },
  file: 'logfile',
};

export default function input(state = initialState, action) {
  let updateddata;
  let displayObj;
  let NewDisplayData;

  switch (action.type) {
    case constants.SETACTIVE:
      return { ...state, file: action.file };


    default:
      return state;
  }
}
