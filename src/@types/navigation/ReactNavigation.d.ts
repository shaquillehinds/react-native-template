export declare global {
  namespace ReactNavigation {
    // overriding the RootParamList type so we can get type safety and autocomplete
    // when using useNavigation, Link, ref etc. We will get type safety for routes and params
    interface RootParamList extends MainBottomTabParamList {}
  }
}
