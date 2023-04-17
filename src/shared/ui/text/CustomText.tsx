import React, {FC} from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  style?: object;
}

const CustomText: FC<Props> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;
