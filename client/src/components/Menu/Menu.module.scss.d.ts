export type Styles = {
  menu: string;
  srOnly: string;
  toggleSettings: string;
  truncate: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
