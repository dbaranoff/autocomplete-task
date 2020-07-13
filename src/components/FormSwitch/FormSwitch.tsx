import * as React from 'react';
import cn from 'classnames';

import styles from './FormSwitch.module.scss';

import usaImage from '../../assets/usa.png';
import worldImage from '../../assets/globe.png';

type Props = {
  onClick: () => void;
  checked: boolean;
  labelOff: string;
  labelOn: string;
  className?: string;
};

export default ({ onClick, checked, labelOn, labelOff, className }: Props) => {
  return (
    <div className={cn(styles.container, className)}>
      <label className={styles.formSwitch} htmlFor="form-switch">
        <input id="form-switch" type="checkbox" className={styles.input} onChange={onClick} />
        <span className={styles.toggle} style={{
          backgroundImage: `url(${checked ? usaImage : worldImage})`
        }} />
        <div className={styles.label}>
          {checked ? labelOn : labelOff}
        </div>
      </label>
    </div>
  );
};
