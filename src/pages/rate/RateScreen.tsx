import React from 'react';
import {View} from 'react-native';
import {styles} from '@shared/styles';
import RateTable from '@widgets/rate-table';
import RateHeader from '@widgets/rate-header';
import SwitchScreenButton from '@widgets/switch-screen-button';
import {ScreensTypes} from '@shared/types';

const RateScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <RateHeader />
      <SwitchScreenButton
        title={'К информации о приложении'}
        screen={'About' as ScreensTypes}
      />
      <RateTable />
    </View>
  );
};

export default RateScreen;
