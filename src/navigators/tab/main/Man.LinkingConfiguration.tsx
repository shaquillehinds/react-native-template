import { LinkingOptions } from '@react-navigation/native';

const AppLinkingConfiguration: LinkingOptions<{}> = {
  prefixes: ['app://'],

  config: {
    screens: {
      home: {
        path: 'Home',
        initialRouteName: 'Home',
        screens: {
          templates: '/template',
          template: '/template/:id',
        },
      },
    },
  },
};

export default AppLinkingConfiguration;
