import { useState } from "react";
import "./assets/custom.css";
import imageOne from "./assets/img/m1.png";
import FormExpense from "./components/FormExpense";
import TableExpense from "./components/TableExpense";
import Swal from "sweetalert2";

function App() {
  const [expenses, setExpenses] =useState([]);
  let onNewExpenseHandller =(newExpense)=>{
    // expenses.push(newExpense)
    console.log(expenses.length);    
    setExpenses((prevExpense)=>{
      return[newExpense,...prevExpense];
    }); 
    Swal.fire({
      title:'succes',
      text:"succes",
      timer:1500,
    })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img src={imageOne} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <div className="row tit">
            <h4 className="">wellcom to Momen Expense Manager </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <FormExpense newExpenseHandller={onNewExpenseHandller}   />
        </div>
      </div>

      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <TableExpense expensesData={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;
