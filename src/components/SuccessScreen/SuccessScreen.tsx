import * as React from 'react';

import styles from './SuccessScreen.module.scss';

export default () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Congratulations!</h2>
      <div className={styles.message}>
        The gift is on the way to you!
      </div>
    </div>
  );
};
