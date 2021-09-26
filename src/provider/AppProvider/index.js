import { createContext, useContext, useReducer } from 'react';
import { isLoadingReducer } from './reducers';

const appInitState = { isLoading: true };

const AppContext = createContext(appInitState);

const appReducer = (state, action) => ({
  ...state,
  isLoading: isLoadingReducer(state.isLoading, action)
});

const AppProvider = ({
  reducer = appReducer,
  initialState = appInitState,
  children
}) => {
  const initializer = () => ({
    ...initialState
  });

  return (
    <AppContext.Provider
      value={useReducer(reducer, initialState, initializer)}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export {
  AppContext,
  appInitState,
  AppProvider,
  appReducer,
  useAppContext
};
