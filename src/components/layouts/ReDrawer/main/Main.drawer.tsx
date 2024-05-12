import RowLayout from '@components/layouts/Row.layout';
import Category from '@components/svgs/filled/Category';
import Login from '@components/svgs/outline/Login';
import Setting from '@components/svgs/outline/Setting';
import { Heading, Title } from '@components/typography';
import { useActions } from '@hooks/useActions';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { navigationRef } from '@navigators/navigation.ref';
import { categories } from '@utils/constants/Categories.const';
import {
  isIOS,
  relativeX,
  relativeY,
  SCREEN_HEIGHT,
} from '@utils/constants/Layout.const';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function MainDrawer() {
  const reDrawer = useTypedSelector(state => state.app.reDrawer);
  const userId = useTypedSelector(state => state.user._id);
  const actions = useActions();
  const onSettingsPress = () => {
    navigationRef.current?.navigate('Settings');
    setTimeout(() => reDrawer?.closeDrawer(), 250);
  };
  const onLoginPress = () => {
    actions.updateUser({ authenticated: false });
    setTimeout(() => reDrawer?.closeDrawer(), 250);
  };
  const searchCategory = (payload: string) => {
    navigationRef.current?.navigate('Home', {
      screen: 'Browse',
      params: { payload, type: 'category' },
    });
    reDrawer?.closeDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.divider} />
        <TouchableOpacity onPress={userId ? onSettingsPress : onLoginPress}>
          <RowLayout padding={[0, 2]} center style={styles.settings}>
            {userId ? (
              <Setting color="white" strokeWidth={2} />
            ) : (
              <Login color="white" />
            )}
            <Title
              margin={[0, 0, 0, 3]}
              customColor="white"
              fontSize="titleL"
              fontStyle="PoppinsSemiBold">
              {userId ? 'Settings' : 'Login'}
            </Title>
          </RowLayout>
        </TouchableOpacity>
      </View>
      <RowLayout center backgroundColor="transparent">
        <Category size={20} color="white" />
        <Heading fontSize="headingL" margin={[0, 0, 0, 3]} customColor="white">
          Categories
        </Heading>
      </RowLayout>
      <View style={styles.divider} />
      {categories.map(item => (
        <TouchableOpacity
          key={item.label}
          onPress={() => searchCategory(item.value)}
          style={styles.category}>
          <Title
            fontSize="titleL"
            fontStyle="PoppinsMedium"
            customColor="white">
            {item.label}
          </Title>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  settings: { backgroundColor: 'transparent' },
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    paddingTop: relativeY(8),
    paddingLeft: relativeX(5),
  },
  divider: {
    width: relativeX(50),
    borderWidth: relativeY(0.1),
    borderColor: 'white',
    opacity: 0.5,
    marginVertical: relativeY(2),
  },
  category: {
    marginBottom: isIOS ? relativeY(2.4) : relativeY(1.4),
    marginLeft: relativeX(3),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: relativeY(5),
    paddingLeft: relativeX(5),
  },
});
