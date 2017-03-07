export default (state = {}, action) => {
  switch (action.type) {
    case 'SAVE_FILE':
      return Object.assign({}, state, {
        filepath: action.filepath
      });
    case 'LOAD_FILE':
      return Object.assign({}, state, {
        filepath: action.filepath,
        text: action.text
      });
    default:
      return state
  }
}
