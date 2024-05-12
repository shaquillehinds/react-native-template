type AppTheme = 'DEFAULT' | 'DEFAULT_DARK';

interface AppColors {
  primary: Colors;
  secondary: Colors;
  complimentary: Colors;
  accent: string;
  warning: string;
  background: string;
  lightBackground: string;
  extraLightBackground: string;
  form: string;
  input: string;
  typeface: TypefaceColor;
  mode: 'light' | 'dark';
  theme: AppTheme;
}

type Themes = { [key in AppTheme]: AppColors };

interface TypefaceColor {
  primary: string;
  secondary: string;
  tertiary: string;
  warning: string;
}

interface ButtonColors {
  background: string;
  text: string;
  border: string;
}
interface Colors {
  dark: string;
  medium: string;
  light: string;
  button: ButtonColors;
}
