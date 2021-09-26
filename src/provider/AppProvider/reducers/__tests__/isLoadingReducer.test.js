import { appInitState } from '../../index';
import isLoading from '../isLoadingReducer';

describe('isLoading reducer', () => {
  test('should return the initial state', () => {
    expect(isLoading(
      appInitState.isLoading, {}
    )).toEqual(appInitState.isLoading);
  });

  test('should set loading state', () => {
    const isLoadingState = false;

    expect(
      isLoading(
        isLoadingState, { type: 'SET_IS_LOADING' })
    ).toEqual(true);
  });

  test('should set not loading state', () => {
    expect(
      isLoading(
        appInitState.isLoading, { type: 'RESET_IS_LOADING' })
    ).toEqual(false);
  });
});
