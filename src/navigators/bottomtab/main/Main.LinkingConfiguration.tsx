import { LinkingOptions } from '@react-navigation/native';

const AppLinkingConfiguration: LinkingOptions<MainBottomTabParamList> = {
  prefixes: ['app://'],

  config: {
    screens: {
      Home: {
        path: 'home',
        initialRouteName: 'Default',
        screens: { Default: { path: 'default' } },
      },
      Profile: {
        path: 'Profile',
        initialRouteName: 'Default',
        screens: { Default: { path: 'default' } },
      },
    },
  },
};

export default AppLinkingConfiguration;
