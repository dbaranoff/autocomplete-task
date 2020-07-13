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
  return (
    <Form className={cn(className, styles.shippingForm)} onSubmit={form.handleSubmit} onReset={form.handleReset}>

      <Form.Row className={styles.row}>
        <Col xs={6}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="receiver_first_name"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_first_name}
          />
        </Col>

        <Col xs={6}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="receiver_last_name"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_last_name}
          />
        </Col>
      </Form.Row>

      <Form.Row className={styles.row}>
        <Col xs={12}>
          <Form.Label>Phone for shipping label</Form.Label>
          <Form.Control
            type="text"
            name="receiver_phone"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.receiver_phone}
          />
        </Col>
      </Form.Row>

    </Form>
  );
};
