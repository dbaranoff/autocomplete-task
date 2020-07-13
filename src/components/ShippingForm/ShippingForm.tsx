import * as React from 'react';
import { useFormik } from 'formik';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';

import styles from './ShippingForm.module.scss';

import Greeting from '../Greeting/Greeting';
import { IGetInitResponse, IPostUpdateRequest, IReceiverInfo } from '../../types/api';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';
import { IAddressSuggestion, IInitRequest } from '../../types/shipping';
import { formatApiAddress, setEmptyAddress } from '../../util/address';
import FormUSAddress from '../forms/FormUSAddress';
import FormSwitch from '../FormSwitch/FormSwitch';
import FormInternationalAddress from '../forms/FormInternationalAddress';
import SlideComponent from '../SlideComponent/SlideComponent';
import { formValidation as validationSchema } from '../../util/validation';
import { useHistory } from 'react-router-dom';
import { routes } from '../../constants/routes';
import Loader from '../Loader/Loader';
import { getColor } from '../../util/helpers';

interface IProps {
  userData: IGetInitResponse;
  update: (formData: IPostUpdateRequest) => void;
  queryData: IInitRequest,
  setError: (error: any) => void,
}

export default ({ userData, update, queryData, setError }: IProps) => {
  const history = useHistory();
  const [receiverInfo, setReceiverInfo] = React.useState<Partial<IReceiverInfo & IInitRequest> | null>(null);
  const [isExpandedForm, switchForm] = React.useState(true);

  const form = useFormik({
    initialValues: receiverInfo || {},
    validateOnMount: true,
    onSubmit: async (values, actions) => {
      await update({ values })
        // @ts-ignore
        .then(() => {
          actions.setSubmitting(false);
          history.push(routes.success);
        })
        .catch((e: any) => {
          actions.setSubmitting(false);
          if (e.response) {
            if (e.response.data && e.response.status === 403) {
              setError(e.response.data);
              history.push(routes.forbidden);
            }
          }
        });
    },
    enableReinitialize: true,
    validationSchema
  });

  const updateAddress = React.useCallback(() => {
    form.handleSubmit();
  }, [form])

  React.useEffect(() => {
    if (userData && userData.receiver_info && queryData) {
      setReceiverInfo({
        ...userData.receiver_info,
        ...queryData,
      });
    }
  }, [userData, queryData]);

  const handleSelect = React.useCallback((address: IAddressSuggestion) => {
    setReceiverInfo({
      ...receiverInfo,
      ...formatApiAddress(address),
    });
  }, [receiverInfo]);

  const handleReset = React.useCallback(() => {
    setReceiverInfo({
      ...receiverInfo,
      ...setEmptyAddress(),
    });
  }, [receiverInfo]);

  const buttonStyles = React.useMemo(() => {
    let color;
    if (userData && userData.org_info) {
      color = getColor(userData.org_info.button_color, false);
    }
    return color
      ? {
        backgroundColor: color,
        borderColor: color,
        boxShadow: 'none',
      }
      : {};
  }, [userData]);

  return (
    <Container className={styles.container}>
      {form.isSubmitting && <Loader isLoading fullScreen />}
      <Row>
        {userData && userData.receiver_info && userData.sender_info && (
          <Greeting {...userData.receiver_info} {...userData.sender_info} />
        )}
        <Col xs={12} sm={10} md={8} lg={6} className={styles.formContainer}>

          <FormSwitch
            className={styles.switch}
            onClick={() => switchForm(!isExpandedForm)}
            checked={isExpandedForm}
            labelOn="Ship to USA"
            labelOff="International shipping"
          />

          {receiverInfo && (
            <React.Fragment>
              <SlideComponent show={isExpandedForm}>
                <FormUSAddress className={styles.form} form={form} />
                <AutoCompleteInput onReset={handleReset} onSelect={handleSelect} />
              </SlideComponent>
              <SlideComponent show={!isExpandedForm}>
                <FormInternationalAddress className={styles.form} form={form} />
              </SlideComponent>
            </React.Fragment>
          )}

          <Form.Row className={styles.actions}>
            <Button
              variant="info"
              type="button"
              className={styles.submitBtn}
              onClick={updateAddress}
              disabled={form.isSubmitting || !form.isValid}
              style={buttonStyles}
            >
              Confirm
            </Button>
          </Form.Row>

        </Col>
      </Row>
      <Row>
        <Col xs={12} className={styles.message}>
          Your address will not be shared or sold, and is only used once for delivering this gift.
        </Col>
      </Row>
    </Container>
  );
};
