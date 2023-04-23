import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react-lite';
import {useIsFocused} from '@react-navigation/native';
import timer from '@shared/state/Timer';
import styles from './styles';
import Table from '@shared/ui/table';
import Loader from '@shared/ui/loader';
import {CustomText} from '@shared/ui/text';
import {useFetching} from '@shared/hooks';
import {RateService} from '@shared/api';
import {CurrencyList, TableRoll} from '@shared/types';
import {useIsFirstRender} from '@shared/hooks/useFirstRender';

const columns = [
  {key: 'name', title: 'Name'},
  {key: 'last', title: 'Last'},
  {key: 'highestBid', title: 'Highest Bid'},
  {key: 'percentChange', title: '% Change'},
];

const RateTable: React.FC = observer(() => {
  const [rateData, setData] = useState<CurrencyList>();
  const [requestError, setRequestError] = useState<string>('');
  const isFocused: boolean = useIsFocused();
  const isFirst = useIsFirstRender();

  const tagListQuery = async () => {
    try {
      const res = await RateService.getRate();
      setRequestError('');
      setData(res);
    } catch (err) {
      setRequestError(err);
    }
  };

  const [getRateData, isLoading, isError] = useFetching(() => tagListQuery());

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> = setInterval(() => {});

    if (!isError && isFocused && timer.seconds > 0) {
      interval = setInterval(() => {
        getRateData();
      }, timer.seconds);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused, isError]);

  useEffect(() => {
    if (!isError) {
      getRateData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (requestError) {
      console.log('Ошибка при получении данных в таблице:', requestError);
    }
  }, [requestError]);

  const makeDataForTableRow = (data: CurrencyList, item: string): TableRoll => {
    return {
      name: item,
      id: data[item].id,
      last: data[item].last,
      highestBid: data[item].highestBid,
      percentChange: data[item].percentChange,
    };
  };

  if (isFirst && isLoading) {
    return <Loader />;
  }

  if (isError || requestError) {
    return <CustomText>Ошибка! то-то пошло не так</CustomText>;
  }

  return (
    <View style={styles.container}>
      {!!rateData && (
        <Table
          data={rateData}
          columns={columns}
          makeRowData={makeDataForTableRow}
        />
      )}
    </View>
  );
});

export default RateTable;
