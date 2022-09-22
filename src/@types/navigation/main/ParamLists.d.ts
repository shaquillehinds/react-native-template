// Screens and props for the Home Stack
type HomeStackParamList = {
  Default: undefined;
  Feed: undefined;
};

// Screens and props for the Profile Stack
type ProfileStackParamList = {
  Default: undefined;
};

// Stacks used on the Main Bottom Tab
type MainBottomTabParamList = {
  Home: import('@react-navigation/native').NavigatorScreenParams<HomeStackParamList>;
  Profile: import('@react-navigation/native').NavigatorScreenParams<ProfileStackParamList>;
};
