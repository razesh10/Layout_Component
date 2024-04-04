import React, { useState } from "react";
import styles from "@/components/crousel/crousel.module.css";

const Crousel = () => {
  const [leftmargin, setLeftmargin] = useState(0);
  const [rightmargin, setRightmargin] = useState(0);

  return (
    <>
      <div
        className={styles.mainContainer}
        style={{ marginLeft: leftmargin, marginRight: rightmargin }}
      >
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
        <div className={styles.crouselItems}>Item 1</div>
      </div>
      <div className={styles.sliderButtons}>
        <div
          onClick={() => setLeftmargin(leftmargin + 200)}
          className={styles.arrow}
        >
          L
        </div>
        <div
          onClick={() => setRightmargin(rightmargin + 200)}
          className={styles.arrow}
        >
          R
        </div>
      </div>
    </>
  );
};

export default Crousel;
