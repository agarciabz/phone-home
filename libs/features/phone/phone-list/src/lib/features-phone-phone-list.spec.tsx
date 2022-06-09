import { render } from '@testing-library/react';

import FeaturesPhonePhoneList from './features-phone-phone-list';

describe('FeaturesPhonePhoneList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPhonePhoneList />);
    expect(baseElement).toBeTruthy();
  });
});
