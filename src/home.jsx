import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./navbar";
import "./index.css";

let count = 5;
const Home = () => {
  const [amount, setAmount] = useState();
  const [category, setCategory] = useState();
  const [exp, setExp] = useState([
    {
      id: 1,
      amount: 200,
      category: "Petrol",
    },
    {
      id: 2,
      amount: 100,
      category: "Food",
    },
    {
      id: 3,
      amount: 20,
      category: "Juice",
    },
    {
      id: 4,
      amount: 200,
      category: "Petrol",
    },
  ]);

  const addExpense = () => {
    if (!amount || !category) return;
    setExp((prev) => [...prev, { id: count++, amount: amount, category }]);
    setAmount("");
    setCategory("");
  };

  const delExpense = (id) => {
    console.log(id);
    setExp((prev) => prev.filter((exp) => exp.id != id));
  };

  return (
    <div>
      <Navbar />
      <h1>Expenses</h1>
      <TextField
        id="amt"
        label="Amount"
        variant="outlined"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <TextField
        id="cat"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button onClick={addExpense} variant="contained">
        Add Expense
      </Button>
      <div className="expenselist">
        {exp.map((expense) => (
          <div className="newexp">
            <div className="window">
              <p>Amount = {expense.amount}</p>
              <p>Category = {expense.category}</p>
            </div>
            <Button
              className="del"
              onClick={() => delExpense(expense.id)}
              variant="contained"
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
