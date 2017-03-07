const filepath = "/home/daiyi/nets/moraine/data/notes.txt";

export const saveFile = (fileName, text) => {
  return {
    type: 'SAVE_FILE',
    filepath,
    text
  }
}

export const loadFile = (fileName, text) => {
  return {
    type: 'LOAD_FILE',
    filepath,
    text
  }
}
