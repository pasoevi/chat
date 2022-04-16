export type Styles = {
  author: string;
  message: string;
  messageInfo: string;
  sent: string;
  sentDate: string;
  srOnly: string;
  text: string;
  truncate: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
