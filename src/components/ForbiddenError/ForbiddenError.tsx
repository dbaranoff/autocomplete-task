import * as React from 'react';

import styles from './ForbiddenError.module.scss';

import { DEFAULT_ERROR_MESSAGE, DEFAULT_ERROR_TITLE } from '../../constants/errors';

type Props = {
  error?: {
    message: string;
  };
  title?: string;
};

export default ({
  error,
  title = DEFAULT_ERROR_TITLE
}: Props) => {
  const message = error ? error.message : DEFAULT_ERROR_MESSAGE;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.message} dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};
