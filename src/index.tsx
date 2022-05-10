import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme';
import App from './App';

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={store}>
        <ChakraProvider resetCSS theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
);
