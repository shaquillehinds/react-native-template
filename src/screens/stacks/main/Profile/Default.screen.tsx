import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Heading } from '@components/typography';
import DraggableFlatlist from '@shaquillehinds/react-native-draggable-flatlist';

const renderArray = () => {
  const arr: { [key: string]: number }[] = [];
  for (let i = 0; i < 10; i++) {
    arr.push({ a: i });
  }
  return arr;
};

const style: StyleProp<ViewStyle> = {
  width: 300,
  height: 50,
  alignSelf: 'center',
  marginVertical: 10,
  backgroundColor: 'red',
  borderRadius: 10,
};

export default function DefaultScreen(
  // MainNavationtionProps.{Name of stack}<{Name of screen}>
  _: MainNavigationProps.Profile<'Default'>,
) {
  return (
    <DraggableFlatlist<{ [key: string]: number }>
      data={renderArray()}
      renderItem={({ item }) => (
        <View style={style}>
          <Heading customColor="white">{item.a}</Heading>
        </View>
      )}
    />
  );
}
