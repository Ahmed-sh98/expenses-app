import React, { useRef } from "react";
import Swal from "sweetalert2";
const FormExpense = (props) => {
  let titleRef = useRef();
  let describeRef = useRef();
  let valueRef = useRef();
  let dateRef = useRef();

  const onSubmitHandller = (event) => {
    event.preventDefault();
    if (checkForm()) {
      let newExpense = {
        title: titleRef.current.value,
        date: dateRef.current.value,
        value: valueRef.current.value,
        describe: describeRef.current.value,
      };

      props.newExpenseHandller(newExpense);
      clearForm();
    }




    
    };

    const checkForm = () => {
      if (
        titleRef.current.value !== "" &&
        dateRef.current.value !== "" &&
        describeRef.current.value !== "" &&
        valueRef.current.value !== ""
      ) {
        return true;
      };

      Swal.fire({
        icon: "Error",
        title: "Error Data !",
        text: "Enter Expense info",
        showCancelButton: false,
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    
    };

  const clearForm = () => {
    titleRef.current.value = "";
    dateRef.current.value = "";
    valueRef.current.value = "";
    describeRef.current.value = "";
  };





  return (
    <form className="row" onSubmit={onSubmitHandller}>
      <div className="mb-3 col-md-6">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control addTitle"
          aria-describedby=""
          ref={titleRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control addDate"
          aria-describedby=""
          ref={dateRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label className="form-label">Value</label>
        <input
          type="number"
          className="form-control addValue"
          aria-describedby=""
          ref={valueRef}
        />
      </div>

      <div className="mb-3 col-md-6">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control addDescrption"
          aria-describedby=""
          ref={describeRef}
        />
      </div>

      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">
          Add
        </button>
      </div>
    </form>
  );
};

export default FormExpense;
