import * as React from 'react';
import { animated, useTransition } from 'react-spring';

type Props = {
  children?: React.ReactNode;
  show: boolean;
};

export default ({ show, children }: Props) => {
  const transitions = useTransition(show, null, {
    from: { position: 'absolute', transform: 'translateX(-150%) scale(1)', zIndex: 1 },
    enter: { position : 'relative', transform: 'translateX(0) scale(1)', zIndex: 1 },
    leave: { position: 'absolute', transform: 'translateX(0) scale(0)', zIndex: 1 },
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
