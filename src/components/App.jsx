import Counter from './counter/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Math from './math/Math';
export const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Math />
    </Provider>
  );
};
