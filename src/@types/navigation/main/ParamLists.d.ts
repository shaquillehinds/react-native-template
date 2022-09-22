// Screens and props for the Home Stack
type HomeStackParamList = {
  Default: undefined;
  Feed: undefined;
  Settings: undefined;
};

type SearchStackParamList = {
  Default: undefined;
};

// Screens and props for the Profile Stack
type ProfileStackParamList = {
  Default: undefined;
};

type SettingsStackParamList = {
  Default: undefined;
};

// Stacks used on the Main Bottom Tab
type MainBottomTabParamList = {
  Home: import('@react-navigation/native').NavigatorScreenParams<HomeStackParamList>;
  Search: import('@react-navigation/native').NavigatorScreenParams<SearchStackParamList>;
  Profile: import('@react-navigation/native').NavigatorScreenParams<ProfileStackParamList>;
  Settings: import('@react-navigation/native').NavigatorScreenParams<SettingsStackParamList>;
  Slider: any;
};
