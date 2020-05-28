import React, { Component } from 'react';
import FilesData from './assets/files.json'
import { Table } from 'reactstrap'
import './App.css';

class App extends Component {


  render () {

    let files = FilesData.map(data => {
      return <tbody>
        <tr key={data.id}>
          <td>{data.title}</td>
          <td>{data.number}</td>
          <td>{data.status}</td>
          <td>{data.autor}</td>
          <td>{data.tip}</td>
          <td>{data.datum}</td>
        </tr>
      </tbody>
    })

    return (
      <div>
        <div>Hello World!!</div>
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
          {files}
        </Table>
      </div>
    )
  }
}



export default App;
