import Counter from './counter/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';
export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
