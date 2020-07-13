import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';

import styles from  './App.module.scss';
import { IGetInitResponse, IPostUpdateRequest } from '../../types/api';
import { init, saveAddress } from '../../api/request';
import { IInitRequest } from '../../types/shipping';
import { routes } from '../../constants/routes';
import Loader from '../../components/Loader/Loader';
import { getColor } from '../../util/helpers';

// For test app only
import mockUserData from '../../mocks/userdata.json';

interface IProps {
  render(props: any): React.ReactNode;
}

function App({ render }: IProps) {
  const history = useHistory();
  const location = useLocation();

  const [userData, setUserData] = React.useState<IGetInitResponse | void | null>(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  const stopLoading = React.useCallback(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  const startLoading = React.useCallback(() => {
    if (!isLoading) {
      setLoading(true);
    }
  }, [isLoading]);

  React.useEffect(() => {
    const search: any = qs.parse(location.search);

    if (!search || !(search.order_id && search.key)) {
      // history.push(routes.notFound);

      setUserData(mockUserData); // Using this mock just for test

      stopLoading();
    } else {
      startLoading();
      init(search).then(response => {
        setUserData(response);
        stopLoading();
      }).catch((e) => {
        if (e.response) {
          if (e.response.data && e.response.status === 403) {
            setError(e.response.data);
            history.push(routes.forbidden);
          }
          if (e.response.data && e.response.status === 401) {
            setError(e.response.data);
            history.push(routes.notFound);
          }
        }
        stopLoading();
      });
    }
  }, []);

  const queryData: IInitRequest | {} = React.useMemo(() => {
    if (location && location.search) {
      return qs.parse(location.search);
    }
    return {};
  }, [location]);

  const update = React.useCallback(async (formData: IPostUpdateRequest) => {
    startLoading();
    await saveAddress(formData);
    stopLoading();
  }, [userData]);

  const { logo_url, header_color } = React.useMemo(() => {
    if (userData) {
      return userData.org_info
    }
    return { logo_url: undefined, header_color: undefined };
  }, [userData]);

  return (
    <React.Fragment>
      {isLoading ? <Loader isLoading /> : (
        <React.Fragment>
          <Container fluid className={styles.AppHeader} style={{ backgroundColor: getColor(header_color) }}>
            <Container>
              <Row>
                <Col xs={5} sm={4} md={3} lg={2}>
                  <a href="https://bluebird.cx">
                    <img src={logo_url || '/logo.svg'} alt="" className="brand-logo"/>
                  </a>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container className={styles.AppWrapper}>
            <Row className={styles.contentRow}>
              <Col xs={12} className={styles.contentWrapper}>
                {render({
                    userData,
                    update,
                    queryData,
                    error,
                    isLoading,
                    setError,
                    startLoading,
                    stopLoading,
                  })}
              </Col>
            </Row>
          </Container>
          <Container fluid className={styles.AppFooter}>
            <Container>
              <Row>
                <Col xs={12}>
                  Powered by <a href="https://bluebird.cx">bluebird.cx</a>. All rights reserved
                </Col>
              </Row>
            </Container>
          </Container>
        </React.Fragment>
      ) }
    </React.Fragment>
  );
}

export default App;
