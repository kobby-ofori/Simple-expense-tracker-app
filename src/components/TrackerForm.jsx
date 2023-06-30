import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTracker } from "../slices/trackerSlice";
import { v4 as uuidv4 } from "uuid";

function TrackerForm() {
  const dispatch = useDispatch();
  const [items, setItems] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      items: items,
      date: date,
      amount: amount,
      category: category,
    };

    console.log(newExpense);

    dispatch(addTracker(newExpense));

    setItems("");
    setDate("");
    setAmount("");
    setCategory("");
  };

  return (
    <div style={{marginTop:"25px"}}>
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
          <option value="food">Food and Drink</option>
          <option value="accommodation">Accommodation</option>
          <option value="transportation">Transportation</option>
          <option value="housing">Housing and Rent</option>
          <option value="miscellaneous">Miscellaneous</option>
        </select>
        <br />
        <br />
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default TrackerForm;
