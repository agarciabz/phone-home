import { render } from '@testing-library/react';

import FeaturesPhonePhoneDetail from './features-phone-phone-detail';

describe('FeaturesPhonePhoneDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPhonePhoneDetail />);
    expect(baseElement).toBeTruthy();
  });
});
