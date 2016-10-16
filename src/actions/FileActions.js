import * as constants from '../constants/AppConstants';


export function setActiveAction(filename) {
  socket.emit('changeFile', filename);
  return {
    type: constants.SETACTIVE,
    file: filename,
  };
}

export function addNewData(newChunk) {
  const obj = JSON.parse(newChunk);
  let file = obj.ReadFile.substring(0, obj.ReadFile.length - 4);
  file = file.split('/');
  file = file[file.length - 1];
  return {
    type: constants.NEWCHUNK,
    file,
    newChunk: obj.newChunk,
  };
}

export function addTabsCount(tabsName) {
  return {
    type: constants.ADDTABCOUNT,
    tabsName,
  };
}
