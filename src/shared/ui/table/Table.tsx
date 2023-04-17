import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {IRowData} from '@shared/types';
import styles from './styles';

interface Columns {
  key: string;
  title: string;
}

interface TableProps<ListData, RowData> {
  data: ListData;
  columns: Columns[];
  makeRowData: (data: ListData, item: string) => RowData;
}

function Table<ListData extends object, RowData extends IRowData>({
  data,
  columns,
  makeRowData,
}: TableProps<ListData, RowData>) {
  const opacity = useSharedValue(0);
  opacity.value = withTiming(1, {duration: 500, easing: Easing.ease});
  const style = useAnimatedStyle(() => ({opacity: opacity.value}), []);

  const renderItem = ({item}: {item: any}) => {
    const rowData = makeRowData(data, item);

    return (
      <View style={styles.row}>
        {columns.map(column => (
          <Animated.View key={column.key} style={[style, styles.cell]}>
            <Text style={styles.cellText}>{rowData[column.key]}</Text>
          </Animated.View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        {columns.map(column => (
          <View key={column.key} style={styles.headerCell}>
            <Text style={styles.headerCellText}>{column.title}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={Object.keys(data)}
        keyExtractor={item => item}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Table;
