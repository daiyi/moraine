import React, { Component } from 'react'

import File from 'components/File'
import fs from 'fs';

const dir = "/home/daiyi/nets/moraine/data/"

class FileTree extends Component {

  constructor(props) {
    super(props);

    // fs.readdir(dir, this.reeadDir.bind(this));
    const files = fs.readdirSync(dir);
    let filesByTag = {}
    let etc = new Set()

    files.forEach(filename => {
      const file = fs.readFileSync(dir+filename, 'utf8').trim();
      const lastLine = file.slice(file.lastIndexOf('\n')).trim();
      let tagged = false;

      if (lastLine[0] == '#') {
        const tags = lastLine.split(' ');
        tags.forEach(tag => {
          if (tag[0] == '#') {
            tag = tag.slice(1);
            tagged = true;
            if (filesByTag[tag]) {
              filesByTag[tag].push(filename)
            }
            else {
              filesByTag[tag] = [filename]
            }
          }
        })
      }

      if (!tagged) {
        etc.add(filename)
      }
    })

    filesByTag['etc'] = etc;

    this.state = {
      files,
      filesByTag
    };
  }

  readDir(err, files) {
    if (err) {
      return <p>error, can't get files ):</p>
    }
    else {
      this.setState({files});
    }
  }

  render() {
    let files = Object.keys(this.state.filesByTag).map((tag, i) => {
      let filelist = []
      this.state.filesByTag[tag].forEach((file, i) => {
        filelist.push(<File key={i}>{file}</File>)
      })
      return (
        <span key={i}>
          <h2>{tag}</h2>
          {filelist}
        </span>
      )
    })

    return (
      <div className="file-tree">
        <ul>
          {files}
        </ul>
      </div>
    );
  }
}

export default FileTree
