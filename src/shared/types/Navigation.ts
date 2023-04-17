import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type TabStackParamList = {
  RateScreen: undefined;
  AboutAppScreen: undefined;
};

export type TabStackScreenProps<T extends keyof TabStackParamList> =
  BottomTabScreenProps<TabStackParamList, T>;

export type ScreensTypes = 'RateScreen' | 'AboutAppScreen';
