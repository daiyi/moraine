export const loadFile = (filename, filepath, text) => {
  return {
    type: 'LOAD_FILE',
    filename,
    filepath,
    text
  }
}
