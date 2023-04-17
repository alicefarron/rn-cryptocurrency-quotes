import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {colors} from '@shared/styles';

interface LoaderProps {
  color?: string;
  size?: 'small' | 'large';
}

const Loader: React.FC<LoaderProps> = ({
  color = colors.black,
  size = 'large',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
