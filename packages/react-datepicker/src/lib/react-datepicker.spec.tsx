import { render } from '@testing-library/react';

import ReactDatepicker from './react-datepicker';

describe('ReactDatepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDatepicker />);
    expect(baseElement).toBeTruthy();
  });
});
