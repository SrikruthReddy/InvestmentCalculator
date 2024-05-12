import React from 'react';

export default function Results({ resultArray }) {
  if (resultArray.length === 0) {
    return null; 
  }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>header1</th>
          <th>header2</th>
          <th>header3</th>
          <th>header4</th>
          <th>header5</th>
        </tr>
      </thead>
      <tbody>
        {resultArray.map((row, index) => (
          <tr key={index}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
            <td>{row[4]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}