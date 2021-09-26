import { render } from '@testing-library/react';
import { AppProvider } from 'provider';

export const customRender = (node, state, ...options) => {
  const rendered = render(
    <AppProvider initialState={state} {...options}>
      {node}
    </AppProvider>,
    options
  );

  return {
    ...rendered,
    rerender: (updatedNode, updatedState) => {
      customRender({
        node: updatedNode,
        state: updatedState,
        container: rendered.container
      });
    }
  };
};

export * from '@testing-library/react';
export { customRender as render };
