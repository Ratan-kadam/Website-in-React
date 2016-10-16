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

    case constants.NEWCHUNK:
      updateddata = state.displayData[action.file] + action.newChunk;
      displayObj = { ...state.displayData, [action.file]: updateddata };
      return { ...state, displayData: displayObj, file: action.file };

    case constants.ADDTABCOUNT:
      NewDisplayData = {};
      for(const fileName in action.tabsName) {
        NewDisplayData[action.tabsName[fileName]] = 'Log from ' + action.tabsName[fileName];
      }
      return { ...state, displayData: NewDisplayData, file: action.tabsName[0] };

    default:
      return state;
  }
}
