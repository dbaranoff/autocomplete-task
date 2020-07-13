import * as React from 'react';
import cn from 'classnames';
import { FormikProps } from 'formik';
import { Col, Form } from 'react-bootstrap';

import styles from './Forms.module.scss';

import { IInitRequest } from '../../types/shipping';
import { IReceiverInfo } from '../../types/api';

type Props = {
  className?: string;
  form: FormikProps<Partial<IInitRequest & IReceiverInfo>>;
};

export default ({ form, className }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleChange(e);
  };
  return (
    <Form className={cn(className, styles.shippingForm)} onSubmit={form.handleSubmit} onReset={form.handleReset}>

      <Form.Row className={styles.row}>
        <Col className={styles.col} xs={6}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="receiver_first_name"
            type="text"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_first_name}
          />
        </Col>

        <Col className={styles.col} xs={6}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="receiver_last_name"
            type="text"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_last_name}
          />
        </Col>
      </Form.Row>

      <Form.Row className={styles.row}>
        <Col className={styles.col} xs={12} sm={5}>
          <Form.Label>Phone for shipping label</Form.Label>
          <Form.Control
            type="text"
            name="receiver_phone"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_phone}
          />
        </Col>

        <Col className={styles.col} xs={12} sm={7}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="receiver_email"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_email}
          />
        </Col>
      </Form.Row>

      <Form.Row className={styles.row}>
        <Form.Group as={Col} controlId="receiver_company_name">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            name="receiver_company_name"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_company_name}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row className={styles.row}>
        <Col className={styles.col} xs={7}>
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control
            type="text"
            name="receiver_address1"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_address1}
          />
        </Col>

        <Col className={styles.col} xs={5}>
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control
            type="text"
            name="receiver_address2"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_address2}
          />
        </Col>
      </Form.Row>

      <Form.Row className={styles.row}>

        <Col className={styles.col} xs={6}>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="receiver_city"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_city}
          />
        </Col>

        <Col className={styles.col} xs={6}>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="receiver_country"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_country}
          />
        </Col>
      </Form.Row>

      <Form.Row className={styles.row}>
        <Col className={styles.col} xs={6}>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="receiver_state"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_state}
          />
        </Col>

        <Col className={styles.col} xs={6}>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            name="receiver_zip"
            onChange={handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_zip}
          />
        </Col>
      </Form.Row>

    </Form>
  );
};
