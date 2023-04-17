import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Routes from './Routes';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 200});
  }, []);

  return <Routes />;
}

export default App;
