import React from 'react';
import {View, Linking, Alert, TouchableOpacity, Text} from 'react-native';
import {Headline} from '@shared/ui/text';
import {API_BASE_URL} from '@shared/config';
import styles from './styles';

const RateHeader: React.FC = () => {
  const handlePress = () => {
    Linking.openURL(API_BASE_URL).catch(() => {
      Alert.alert('Произошла ошибка');
    });
  };

  return (
    <View>
      <Headline>
        Котировки представлены сервисом
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.linkButtonText}>https://poloniex.com</Text>
        </TouchableOpacity>
      </Headline>
    </View>
  );
};

export default RateHeader;
