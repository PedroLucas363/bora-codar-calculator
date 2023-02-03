import { useState } from "react";
import Content from "./content";

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [currentCalculation, setCurrentCalculation] = useState("");
  const [shouldCleanCurrentNumber, setShouldCleanCurrentNumber] =
    useState(false);

  const checkIfOptionIsOperator = (option: string) => {
    return (
      option === "+" ||
      option === "-" ||
      option === "*" ||
      option === "/" ||
      option === "%" ||
      option === "+/-"
    );
  };

  const handleClickOption = (option: string) => {
    if (checkIfOptionIsOperator(option)) {
      setCurrentCalculation(
        (prev) => prev + currentNumber + " " + option + " "
      );
      setShouldCleanCurrentNumber(true);
    } else {
      if (
        (currentNumber === "0" && option !== ",") ||
        shouldCleanCurrentNumber
      ) {
        setCurrentNumber(option);
        setShouldCleanCurrentNumber(false);
      } else setCurrentNumber((prev) => prev + option);
    }
  };

  const handleClearAll = () => {
    setCurrentCalculation("");
    setCurrentNumber("0");
  };

  const handleClearOne = () => {
    if (currentNumber.length === 1) setCurrentNumber("0");
    else setCurrentNumber((prev) => prev.slice(0, currentNumber.length - 1));
  };

  const calc = (operator: string, num1: number, num2: number) => {
    let currentResult = 0;
    switch (operator) {
      case "+":
        currentResult = num1 + num2;
        break;
      case "-":
        currentResult = num1 - num2;
        break;
      case "/":
        currentResult = num1 / num2;
        break;
      case "*":
        currentResult = num1 * num2;
        break;
    }
    return currentResult;
  };

  const handleCalculate = () => {
    const nums: number[] = [];
    const operators: string[] = [];
    const calculating = currentCalculation.trimEnd().split(" ");

    calculating.forEach((value) => {
      if (checkIfOptionIsOperator(value)) operators.push(value);
      else {
        nums.push(parseFloat(value));
      }
    });

    const result = calc(
      operators[operators.length - 1],
      nums.reduce((prevValue, currValue, index) => {
        return calc(operators[index], prevValue, currValue);
      }),
      parseFloat(currentNumber)
    );

    setCurrentNumber(result.toString());
    setCurrentCalculation("");
  };

  return (
    <Content
      currentCalculation={currentCalculation}
      currentNumber={currentNumber}
      onCalculate={handleCalculate}
      onClearAll={handleClearAll}
      onClearOne={handleClearOne}
      onClickOption={handleClickOption}
    />
  );
}
