import React, { type FC } from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { DatabaseProvider } from '@nozbe/watermelondb/DatabaseProvider';
import * as Sentry from '@sentry/react-native';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/navigators';
import { persistor, store } from './src/store';
import database from './src/store/database';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};

Sentry.init({
    dsn: 'https://96c17a35888775dcde4a9fcbb055eb66@o4506316960038912.ingest.us.sentry.io/4507926617456640',
    tracesSampleRate: 1.0,
    _experiments: {
        profilesSampleRate: 1.0,
    },
});

const App: FC = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <DatabaseProvider database={database}>
                        <Navigator />
                    </DatabaseProvider>
                </PaperProvider>
            </PersistGate>
        </StoreProvider>
    );
};

// export default App;

export default Sentry.wrap(App);
