import { render } from '@testing-library/react';

import UiPhoneItem from './ui-phone-item';

describe('UiPhoneItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPhoneItem />);
    expect(baseElement).toBeTruthy();
  });
});
