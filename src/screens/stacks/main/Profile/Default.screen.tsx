import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { DebugLogger } from '@utils/Logger';
import { Heading } from '@components/typography';
// import DraggableFlatlist from '@shaquillehinds/react-native-draggable-flatlist';
import DraggableFlatlist from '@components/wrapped/DraggableFlatlist';

const log = DebugLogger('Default.screen.tsx');

const array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }];

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
  props: MainNavigationProps.Profile<'Default'>,
) {
  return (
    <DraggableFlatlist<{ [key: string]: number }>
      data={renderArray()}
      renderItem={({ item, index }) => (
        <View style={style}>
          <Heading customColor="white">{item.a}</Heading>
        </View>
      )}
    />
  );
}
