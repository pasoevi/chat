export type Styles = {
  bottom: string;
  chat: string;
  hidden: string;
  srOnly: string;
  truncate: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
