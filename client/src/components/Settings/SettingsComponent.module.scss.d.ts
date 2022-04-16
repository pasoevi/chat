export type Styles = {
  header: string;
  settings: string;
  settingspart: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
