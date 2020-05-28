import React, { Component } from 'react'
import FilesData from '../assets/files.json'
import { Table } from 'reactstrap'

class FileList extends Component {

    state = {
      sorted: true
    }
  
  
    render () {
  
      let files = FilesData.map(data => {
        return (
          <tr key={data.id}>
            <td>{data.title}</td>
            <td>{data.number}</td>
            <td>{data.status}</td>
            <td>{data.autor}</td>
            <td>{data.tip}</td>
            <td>{data.datum}</td>
          </tr>
      )})
  
      return (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Naziv dokumenta</th>
                <th>Broj</th>
                <th>Status</th>
                <th>Autor</th>
                <th>Tip</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>{files}</tbody>
          </Table>
        </div>
      )
    }
  }
  
  
  
  export default FileList;