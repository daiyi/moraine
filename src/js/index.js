import fs from 'fs';


// THIS IS HOW you import/require local componentsw. ???
import path from 'path';
module.paths.push(path.resolve('dist/js'));


function getEditor() {
  return document.querySelector('#editor');
}

function loadFile(file) {
  let reader = new FileReader();
  reader.onload = function(e) {
    console.log(e.target.result);
    getEditor().value = e.target.result;

    console.log(`file loaded: ${file.name}`);
  };

  reader.readAsText(file);
}

function handleFileSelection(event) {
  let file = event.target.files[0];

  if (file) {
    loadFile(file);
  }
}



// ----------------- //

var filepath = "/home/daiyi/nets/moraine/data/notes.txt";
var content = "NEW STUFF";

function saveChanges(filepath,content){
    fs.writeFile(filepath, content, function (err) {
        if(err){
            alert("An error ocurred updating the file"+ err.message);
            console.log(err);
            return;
        }

        console.log("The file has been succesfully saved");
    });
}


document.querySelector('.select-file').addEventListener('change', handleFileSelection);

document.getElementById('save-file').addEventListener('click',function(){
    if(filepath){
      saveChanges(filepath, getEditor().value);
    }
    else{
      console.log("Please select a file first");
    }
}, false);
