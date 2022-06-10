import { render } from '@testing-library/react';

import FeaturesPhonePhoneCreate from './features-phone-phone-create';

describe('FeaturesPhonePhoneCreate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPhonePhoneCreate />);
    expect(baseElement).toBeTruthy();
  });
});
