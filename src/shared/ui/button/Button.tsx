import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {colors} from '@shared/styles';

interface Props {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
}

const Button: React.FC<Props> = ({
  title,
  onPress,
  color = colors.lightPurple,
  textColor = colors.lightish,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
