import AppRouter from './Routes/AppRouter';

import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  //       const { data, isLoading } = useFeaturedBanners();
  //       console.log(data, isLoading);
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
