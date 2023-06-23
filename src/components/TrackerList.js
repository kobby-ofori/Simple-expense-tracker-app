import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import TrackerModal from "./TrackerModal";

const TrackerList = () => {
  const state = useSelector((state) => {
    return state.trackerReducer;
  });

  console.log(state);

  return (
    <Container>
      <Row>
        <Col md="12">
          <h1>Note List</h1>

          {state.expenses.map((expense) => {
            return (
              <div key={expense.id}>
                <TrackerModal expense={expense} />
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default TrackerList;
