import React, {FC} from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface Props {
  children: React.ReactNode;
  style?: object;
}

const Headline: FC<Props> = ({children, style}) => {
  return <Text style={[styles.headline, style]}>{children}</Text>;
};

export default Headline;
