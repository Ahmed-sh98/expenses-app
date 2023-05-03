import React from "react";
import TableRow from "./TableRow";

const TableExpense = (props) => {
  return (
    <table className="table ">
      <thead>
        <tr>
          <th> Title</th>
          <th> Date</th>
          <th>value</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr id="addRow"></tr>
        {/* <TableRow title="one" price = "250" date="30/4/2023" /> */}
        {props.expensesData.map((element) => (
          <TableRow
            title={element.title}
            date={element.date}
            value={element.value}
            describe={element.describe}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableExpense;
