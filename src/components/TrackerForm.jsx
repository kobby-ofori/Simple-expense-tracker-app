import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTracker } from "../slices/trackerSlice";
import { v4 as uuidv4 } from "uuid";
import { HiSaveAs } from 'react-icons/hi';

function TrackerForm() {
  const dispatch = useDispatch();
  const [items, setItems] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (!items || !date || !amount || !category) {
      setErrorMessage("Please fill in all fields.");
      return; // Exit early if any field is empty
    }

    const newExpense = {
      id: uuidv4(),
      items: items,
      date: date,
      amount: amount,
      category: category,
    };

    console.log(newExpense);

    dispatch(addTracker(newExpense));

    // Clear input fields and error message
    setItems("");
    setDate("");
    setAmount("");
    setCategory("");
    setErrorMessage("");
  };

  return (
    <div style={{marginTop:"25px"}}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Paid Items</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Paid Items or Service"
            rows={3}
            value={items}
            onChange={(e) => {
              setItems(e.target.value);
            }}
          />
        </Form.Group>
        <label>
          Date <br />
          <input
            type="date"
            placeholder="Enter"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label>
          Amount paid <br />
          <input
            type="number"
            // placeholder="Enter"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <label htmlFor="category" style={{paddingRight:"15px"}}>Category of Expense:</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="choose"></option>
          <option value="food">Food and Drink</option>
          <option value="accommodation">Accommodation</option>
          <option value="transportation">Transportation</option>
          <option value="housing">Housing and Rent</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <br />
        <br />
        <Button variant="primary" type="submit">
          <HiSaveAs/>
        </Button>
      </Form>
    </div>
  );
}

export default TrackerForm;
