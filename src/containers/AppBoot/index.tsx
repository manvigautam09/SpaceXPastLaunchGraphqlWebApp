import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from '../../store';
import AppRoutes from '../../routes';
import AppContainer from '../AppContainer';

const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
 }
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </Provider>
  );
};

export default App;
