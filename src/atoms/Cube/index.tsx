import React from 'react';

import IMAGES from '../../assets';
// @ts-ignore
import styles from './styles.module.scss';

const Cube = (): any => {
  return (
    // <!-- 3D transform -->
    <div className={styles.new}>
      <div className={styles.cube}>
        <div className={`${styles.sketch} ${styles.fronts}`}>
          <img src={IMAGES.skif} alt='astral' />
        </div>
        <div className={`${styles.sketch} ${styles.backk}`}>
          <img src={IMAGES.escobar} alt='astral' />
        </div>
        <div className={`${styles.sketch} ${styles.right}`}>
          <img src={IMAGES.astral} alt='astral' />
        </div>
        <div className={`${styles.sketch} ${styles.left}`}>
          <img src={IMAGES.park} alt='astral' />
        </div>
        <div className={`${styles.sketch} ${styles.top}`}>
          <img src={IMAGES.bodyguard} alt='astral' />
        </div>
        <div className={`${styles.sketch} ${styles.bottom}`}>
          <img src={IMAGES.t34} alt='astral' />
        </div>
      </div>
    </div>
    // <!-- 3D transform -->
  );
};

export default Cube;
