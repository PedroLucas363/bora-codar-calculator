import {
  Percent,
  Divide,
  Minus,
  Plus,
  X,
  PlusMinus,
  Equals,
} from "phosphor-react";
import colors from "../../../colors";
import Display from "../../display";
import Option from "../../option";

import styles from "./index.module.css";

type Props = {
  currentNumber: string;
  currentCalculation: string;
  onClearAll: () => void;
  onClearOne: () => void;
  onClickOption: (option: string) => void;
  onCalculate: () => void;
};
export default function Content({
  currentNumber,
  currentCalculation,
  onClearAll,
  onClearOne,
  onClickOption,
  onCalculate,
}: Props) {
  return (
    <div className={styles.calculator}>
      <div className={styles.container}>
        <Display
          currentNumber={currentNumber}
          currentCalculation={currentCalculation}
        />

        <div className={styles.optionsContainer}>
          <Option textStyle={{ color: colors.violet }} onClick={onClearAll}>
            CE
          </Option>
          <Option onClick={onClearOne}>C</Option>
          <Option onClick={() => onClickOption("%")}>
            <Percent size={28} style={{ color: colors.white }} />
          </Option>
          <Option
            backgroundColor={colors.operationsOption}
            onClick={() => onClickOption("/")}
          >
            <Divide size={28} style={{ color: colors.white }} />
          </Option>

          <Option onClick={() => onClickOption("7")}>7</Option>
          <Option onClick={() => onClickOption("8")}>8</Option>
          <Option onClick={() => onClickOption("9")}>9</Option>
          <Option
            backgroundColor={colors.operationsOption}
            onClick={() => onClickOption("*")}
          >
            <X size={28} style={{ color: colors.white }} />
          </Option>

          <Option onClick={() => onClickOption("4")}>4</Option>
          <Option onClick={() => onClickOption("5")}>5</Option>
          <Option onClick={() => onClickOption("6")}>6</Option>
          <Option
            backgroundColor={colors.operationsOption}
            onClick={() => onClickOption("-")}
          >
            <Minus size={28} style={{ color: colors.white }} />
          </Option>

          <Option onClick={() => onClickOption("1")}>1</Option>
          <Option onClick={() => onClickOption("2")}>2</Option>
          <Option onClick={() => onClickOption("3")}>3</Option>
          <Option
            backgroundColor={colors.operationsOption}
            onClick={() => onClickOption("+")}
          >
            <Plus size={28} style={{ color: colors.white }} />
          </Option>

          <Option>
            <PlusMinus size={28} style={{ color: colors.white }} />
          </Option>
          <Option onClick={() => onClickOption("0")}>0</Option>
          <Option
            textStyle={{ fontSize: "36px", lineHeight: "43px" }}
            onClick={() => onClickOption(",")}
          >
            ,
          </Option>
          <Option backgroundColor={colors.equalsOption} onClick={onCalculate}>
            <Equals size={28} style={{ color: colors.white }} />
          </Option>
        </div>
      </div>
    </div>
  );
}
