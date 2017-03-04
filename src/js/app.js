function getEditor() {
  return document.querySelector('#editor');
}

function loadFile(file) {
  let reader = new FileReader();
  reader.onload = function(e) {
    getEditor().value = e.target.result;
    // getEditor().value = reader.readAsText(file);
  };

  reader.readAsText(file);
}

function handleFileSelection(event) {
  let file = event.target.files[0];

  if (file) {
    // console.log(file);
    console.log(`file loaded: ${file.name}`);
    loadFile(file);
  }
}

document.querySelector('.select-file').addEventListener('change', handleFileSelection);
