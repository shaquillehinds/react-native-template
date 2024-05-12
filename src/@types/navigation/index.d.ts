type NavigationHook = import('@react-navigation/native').NavigationProp<
  ReactNavigation.RootParamList,
  keyof ReactNavigation.RootParamList,
  undefined,
  Readonly<{
    key: string;
    index: number;
    routeNames: (keyof ReactNavigation.RootParamList)[];
    history?: unknown[] | undefined;
    routes: any;
    type: string;
    stale: false;
  }>,
  {},
  {}
>;
