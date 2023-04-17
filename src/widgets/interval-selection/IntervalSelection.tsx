import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import timer from '@shared/state/Timer';
import {CustomText} from '@shared/ui/text';
import styles from './styles';
import intervalListData from './IntervalListData';

const IntervalSelection = observer(() => {
  const handleUpdateIntervalChange = (interval: number) => {
    timer.setTimerValue(interval);
  };

  return (
    <View>
      <CustomText>Выберите интервал обновления таблицы</CustomText>
      <CustomText>Текущий интервал: {timer.seconds / 1000} секунд</CustomText>
      <View style={styles.buttonsContainer}>
        {intervalListData.map(item => (
          <TouchableOpacity
            key={item.value}
            style={styles.button}
            onPress={() => handleUpdateIntervalChange(item.value)}>
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
});

export default IntervalSelection;
