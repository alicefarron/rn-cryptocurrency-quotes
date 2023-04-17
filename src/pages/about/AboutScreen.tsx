import React from 'react';
import {ScrollView} from 'react-native';
import SwitchScreenButton from '@widgets/switch-screen-button';
import AboutApp from '@widgets/about-app';
import {styles} from '@shared/styles';
import {ScreensTypes} from '@shared/types';
import IntervalSelection from '@widgets/interval-selection';

const AboutScreen: React.FC = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <AboutApp />
      <SwitchScreenButton
        title={'К котировкам'}
        screen={'Rate' as ScreensTypes}
      />
      <IntervalSelection />
    </ScrollView>
  );
};

export default AboutScreen;
