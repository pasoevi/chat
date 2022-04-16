export type Styles = {
  app: string;
  container: string;
  menu: string;
  settingsOverlay: string;
  srOnly: string;
  truncate: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
