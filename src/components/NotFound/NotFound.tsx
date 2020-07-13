import * as React from 'react';

import styles from './NotFound.module.scss';

export default () => (
  <div className={styles.notFound}>
    404
    <span className={styles.message}>not found</span>
  </div>
);
