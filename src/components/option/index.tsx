import { CSSProperties, MouseEventHandler } from "react";
import styles from "./index.module.css";

type Props = {
  backgroundColor?: string;
  textStyle?: CSSProperties;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Option({
  backgroundColor = "",
  textStyle,
  children,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.container}
      style={{ background: backgroundColor }}
    >
      {typeof children === "string" ? (
        <span style={textStyle}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
}
