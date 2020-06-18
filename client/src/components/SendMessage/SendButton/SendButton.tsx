import React from "react";
import * as styles from "./SendButton.module.scss";

export interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = React.memo((props) => {
  return <button className={styles.sendButton} onClick={props.onClick} />;
});
