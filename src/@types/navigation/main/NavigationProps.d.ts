// Props for Home screens
type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    HomeStackParamList,
    T,
    'HomeStack'
  >;

// Props for Profile screens
type ProfileStackScreenProps<T extends keyof ProfileStackParamList> =
  import('@react-navigation/stack').StackScreenProps<
    ProfileStackParamList,
    T,
    'ProfileStack'
  >;

declare namespace MainNavigationProps {
  type Home<T extends keyof HomeStackParamList> = HomeStackScreenProps<T>;
  type Profile<T extends keyof ProfileStackParamList> =
    ProfileStackScreenProps<T>;
}
