import React from 'react';
import {View, Image} from 'react-native';
import {Headline} from '@shared/ui/text';
import styles from './styles';

const IntervalSelection: React.FC = () => {
  return (
    <View>
      <Headline>
        Добро пожаловать в приложение, которое предоставляет котировки! Это
        приложение создано для того, чтобы помочь вам следить за актуальными
        ценами на биткоинсы.
      </Headline>
      <Image
        style={styles.image}
        source={require('../../../assets/images/about.png')}
      />
    </View>
  );
};

export default IntervalSelection;
