import RowLayout from '@components/layouts/Row.layout';
import FilterIcon from '@components/svgs/outline/Filter';
import { Body, Title } from '@components/typography';
import { Spaces } from '@styles/Spacer/Spacer.types';
import { theme } from '@utils/themes';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FilterSortProps {
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSort: React.Dispatch<React.SetStateAction<boolean>>;
  sortBy?: string;
  style?: StyleProp<ViewStyle>;
  margin?: Spaces;
}

export default function FilterSort(props: FilterSortProps) {
  return (
    <RowLayout
      margin={props.margin || [3, 0]}
      backgroundColor="transparent"
      center
      spaceBetween
      style={props.style}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={() => {
          props.setShowFilter(true);
        }}>
        <RowLayout center backgroundColor="transparent">
          <FilterIcon color={theme.typeface.secondary} />
          <Title margin={[0, 0, 0, 3]} color="secondary" fontSize="titleS">
            Filters
          </Title>
        </RowLayout>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPressIn={() => {
          props.setShowSort(true);
        }}>
        <RowLayout center backgroundColor="transparent">
          <Body fontStyle="PoppinsSemiBold" margin={[0, 3, 0, 0]}>
            Sort by:{' '}
          </Body>
          <Title fontSize="titleS" color="secondary">
            {props.sortBy}
          </Title>
        </RowLayout>
      </TouchableOpacity>
    </RowLayout>
  );
}
