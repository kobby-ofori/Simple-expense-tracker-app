import React, { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { editTracker, deleteTracker } from "../slices/trackerSlice";
import { useDispatch } from "react-redux";

const NoteModal = (props) => {
  const { expense } = props;
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const [items, setItems] = useState(expense.items);
  const [date, setDate] = useState(expense.date);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleItemsChange = (e) => {
    setItems(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCatogoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    handleModal();

    // console.log(note);

    const newExpense = {
      id: expense.id,
      items: items,
      date: date,
      amount: amount,
      category: category,
    };

    dispatch(editTracker({ id: expense.id, newExpense: newExpense }));

    // console.log(newExpense);
  };

  const handleDelete = () => {
    dispatch(deleteTracker(expense.id));
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Paid Items</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Paid Items or Service"
                rows={3}
                value={items}
                onChange={handleItemsChange}
              />
            </Form.Group>
            <label>
              Date <br />
              <input
                type="date"
                placeholder="Enter"
                value={date}
                onChange={handleDateChange}
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
                onChange={handleAmountChange}
              />
            </label>
            <br />
            <br />
            <label htmlFor="category" style={{ paddingRight: "15px" }}>
              Category of Expense:
            </label>
            <select
              value={category}
              onChange={handleCatogoryChange}
            >
              <option value="food">Food and Drink</option>
              <option value="accommodation">Accommodation</option>
              <option value="transportation">Transportation</option>
              <option value="housing">Housing and Rent</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
            <br />

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <h1>{note.title}</h1>
      <h3>{note.notes}</h3> */}

      <Card className="text-center">
        <Card.Header>{expense.category}</Card.Header>
        <Card.Body>
          <Card.Title>{expense.amount}</Card.Title>
          <Card.Text>{expense.items}</Card.Text>

          <Button onClick={handleModal}>Edit</Button>
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{expense.date}</Card.Footer>
      </Card>
    </div>
  );
};

export default NoteModal;
