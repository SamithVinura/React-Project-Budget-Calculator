import React from "react";
import { MdSend } from "react-icons/md";
function ExpenseForm({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSumbit,
  edit
}) {
  return (
    <form onSubmit={handleSumbit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn" >
        {edit? "Edit" : "Submit" }<MdSend className="btn-icon" />
      </button>
    </form>
  );
}

export default ExpenseForm;
