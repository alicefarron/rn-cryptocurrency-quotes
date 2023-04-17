import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TabStackScreenProps,
  TabStackParamList,
  ScreensTypes,
} from '@shared/types';
import Button from '@shared/ui/button';
import styles from './styles';

interface SwitchButtonProps {
  screen: keyof TabStackParamList;
  title: string;
}

const SwitchScreenButton: React.FC<SwitchButtonProps> = ({title, screen}) => {
  const navigation =
    useNavigation<TabStackScreenProps<ScreensTypes>['navigation']>();

  const goToAnotherScreen = (): void => {
    navigation.navigate(screen as keyof TabStackParamList);
  };

  return (
    <View style={styles.container}>
      <Button title={title} onPress={goToAnotherScreen} />
    </View>
  );
};

export default SwitchScreenButton;
