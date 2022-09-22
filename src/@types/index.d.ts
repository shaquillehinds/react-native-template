type BorderSize = 'razor' | 'thin' | 'medium' | 'large';
type RadiusSize = 'edgy' | 'sharp' | 'medium' | 'soft' | 'curvy' | 'round';
type ButtonSize = 'small' | 'large' | 'medium';

type FontStyle =
  | 'Poppins'
  | 'PoppinsMedium'
  | 'PoppinsSemiBold'
  | 'PoppinsBold'
  | 'PoppinsItalic';

type FontSize =
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'titleL'
  | 'titleM'
  | 'titleS'
  | 'bodyL'
  | 'bodyM'
  | 'bodyS';

type LineHeight = 'short' | 'tall';

type LetterSpacing = 'wide' | 'extraWide';

type FontColor = 'primary' | 'secondary' | 'tertiary' | 'warning';

type ButtonColor = keyof ButtonColors;
