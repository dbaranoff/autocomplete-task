import * as React from 'react';
import { animated, useTransition } from 'react-spring';

type Props = {
  children?: React.ReactNode;
  show: boolean;
};

export default ({ show, children }: Props) => {
  const transitions = useTransition(show, null, {
    from: { position: 'absolute', opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { position: 'relative', opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { position: 'absolute', opacity: 0, transform: 'translate3d(50%,0,0)' },
  });

  return (
    <React.Fragment>
      {children
        ? transitions.map(({ item, key, props }) =>
          item && <animated.div key={key} style={props}>
            {children}
          </animated.div>
        )
        : null}
    </React.Fragment>
  );
};
