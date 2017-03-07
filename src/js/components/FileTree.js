import React, { Component } from 'react'
import File from 'components/File'

class FileTree extends Component {

  render() {
    return (
      <div className="file-tree">
        <ul>
          <File>hello.txt</File>
          <File>potato.txt</File>
          <File>notes.txt</File>
          <File>The Unbearable Lightness of Being.txt</File>
          <File>cafes.txt</File>
          <File>passwords!!.txt</File>
        </ul>
      </div>
    );
  }
}

export default FileTree
