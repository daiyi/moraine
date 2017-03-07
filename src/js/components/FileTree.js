import React, { Component } from 'react'

import File from 'components/File'
import fs from 'fs';

class FileTree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    };

    fs.readdir("/home/daiyi/nets/moraine/data/", this.readDir.bind(this));
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
    let files = this.state.files.map((filename, i) => {
      return <File key={i}>{filename}</File>;
    });

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
