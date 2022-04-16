export type Styles = {
  srOnly: string;
  truncate: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
