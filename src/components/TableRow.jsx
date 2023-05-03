import React from 'react'

const TableRow = (props) => {
  return (
    <tr>
    <td> {props.title}  </td>
    <td> {props.date}</td>
    <td>{props.value} </td>
    <td colSpan="2">{props.describe} </td>
    <td className="text-right">
      <a href="#" className="delete" >
      <i className="fa-solid fa-trash"/>
      </a>
    </td>
  </tr>
  )
}

export default TableRow;