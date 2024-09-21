import React, { useState } from 'react';
import './App.css';

function App() {
  const [approvedAmount, setApprovedAmount] = useState(0);
  const [expenses, setExpenses] = useState([{ title: "", amount: "" }]);

  const handleChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = value;
    setExpenses(updatedExpenses);
  };

  const addExpenseRow = () => {
    setExpenses([...expenses, { title: "", amount: "" }]);
  };

  const calculateTotalExpenses = () => {
    return expenses.reduce((sum, expense) => sum + (parseFloat(expense.amount) || 0), 0);
  };

  const calculatePendingAmount = () => {
    return approvedAmount - calculateTotalExpenses();
  };

  return (
    <div className="App">
      <h1>Budget Manager</h1>
      
      <label>Approved Amount: </label>
      <input 
        type="number" 
        
        onChange={(e) => setApprovedAmount(parseFloat(e.target.value) || 0)}
      />
      
      <h2>Add Expense</h2>

      <div className="expenses-list">
        {expenses.map((expense, index) => (
          <div key={index} className="expense-row">
            <label>Title: </label>
            <input 
              type="text" 
              value={expense.title} 
              onChange={(e) => handleChange(index, 'title', e.target.value)} 
            />
            <label>  Amount: </label>
            <input 
              type="text" 
              value={expense.amount} 
              onChange={(e) => handleChange(index, 'amount', e.target.value)} 
            />
          </div>
        ))}
      </div>
      
      <input type="button" value="+" onClick={addExpenseRow} />

      <h2>Totaled Amount: {calculateTotalExpenses()}</h2>

      <div className='footer'>
        <h2>Pending Amount: {calculatePendingAmount()}</h2>
        <h2>Total Expenses Made: {calculateTotalExpenses()}</h2>
      </div>
    </div>
  );
}

export default App;
