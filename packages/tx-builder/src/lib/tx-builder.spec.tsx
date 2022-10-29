import { render } from '@testing-library/react';

import TxBuilder from './tx-builder';

describe('TxBuilder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TxBuilder />);
    expect(baseElement).toBeTruthy();
  });
});
