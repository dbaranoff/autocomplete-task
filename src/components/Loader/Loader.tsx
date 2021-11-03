import * as React from 'react';
import cn from 'classnames';
import { useTransition, animated } from 'react-spring';

import styles from './Loader.module.scss';

type Props = {
  isLoading: boolean;
  fullScreen?: boolean;
};

export default ({ isLoading = false, fullScreen = false }: Props) => {
  const transitions = useTransition(isLoading, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return <React.Fragment>
    {transitions.map(({ item, key, props }) =>
      item && (
        <div key={`loading-${key}`} className={cn(styles.loaderContainer, { [styles.fullScreen]: fullScreen })}>
          <animated.div className={styles.loader} key={key} style={props}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </animated.div>
        </div>
      ))}
  </React.Fragment>;
};
