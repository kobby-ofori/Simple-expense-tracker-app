import React from "react";
import { Col, Navbar, Container, Row } from "react-bootstrap";
import expense from "../images/expense.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Container className="Nav">
        <Navbar>
          <Row className="Row-nav">
            <Col md="6" xs="12">
              <img src={expense} alt="" />
            </Col>
            <Col md="6" xs="12">
              <span className="span1">Expense</span>
              <span className="span2">Tracker</span>
            </Col>
          </Row>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
