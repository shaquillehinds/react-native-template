type AppTheme = 'DEFAULT';

interface AppColors {
  primary: {
    dark: string;
    medium: string;
    light: string;
    button: {
      background: string;
      text: string;
      border: string;
    };
  };
  secondary: {
    dark: string;
    medium: string;
    light: string;
    button: {
      background: string;
      text: string;
      border: string;
    };
  };
  accent: string;
  warning: string;
  background: string;
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
