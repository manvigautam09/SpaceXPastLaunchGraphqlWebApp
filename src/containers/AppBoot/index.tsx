import { Provider } from "react-redux";

import store from "../../store";
import AppRoutes from "../../routes";
import AppContainer from "../AppContainer";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </Provider>
  );
};

export default App;
