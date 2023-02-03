import styles from "./index.module.css";

import { Equals } from "phosphor-react";
import colors from "../../colors";

type Props = { currentNumber: string; currentCalculation: string };
export default function Display({ currentNumber, currentCalculation }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.calculation}>{currentCalculation}</div>
      <div className={styles.result}>
        <div>
          {currentCalculation && (
            <Equals size={20} style={{ color: colors.lightGray }} />
          )}
        </div>
        <span className={styles.total}>{currentNumber}</span>
      </div>
    </div>
  );
}
