// Props for Home screens
type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    HomeStackParamList,
    T,
    'HomeStack'
  >;

type SearchStackScreenProps<T extends keyof SearchStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    SearchStackParamList,
    T,
    'SearchStack'
  >;

// Props for Profile screens
type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    ProfileStackParamList,
    T,
    'ProfileStack'
  >;

type SettingsStackScreenProps<T extends keyof SettingsStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    SettingsStackParamList,
    T,
    'SettingsStack'
  >;

declare namespace MainNavigationProps {
  type Home<T extends keyof HomeStackParamList> = HomeStackScreenProps<T>;
  type Search<T extends keyof SearchStackParamList> = SearchStackScreenProps<T>;
  type Profile<T extends keyof ProfileStackParamList> =
    ProfileStackScreenProps<T>;
  type Settings<T extends keyof SettingsStackParamList> =
    SettingsStackScreenProps<T>;
}
