import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../ShippingForm/ShippingForm.module.scss';

type Props = {
  receiver_first_name: string;
  receiver_last_name: string;
  sender_company_name: string;
  sender_first_name: string;
  sender_last_name: string;
};

export default ({
  receiver_first_name,
  sender_company_name,
  sender_first_name,
  sender_last_name,
}: Props) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className={styles.title}>Hi {`${receiver_first_name}`}! A gift is coming your way!</h1>
          <p>
            We've found almost everyone is working from home, and want to make sure you actually get to enjoy this!
            <br/>
            Please confirm your preferred ship-to address and your gift will be on its way!
          </p>
          <div className={styles.sender}>{`${sender_first_name} ${sender_last_name}`} with {sender_company_name}</div>
        </Col>
      </Row>
    </Container>
  );
};
