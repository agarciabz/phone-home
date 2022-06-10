import { render } from '@testing-library/react';

import FeaturesPhoneComponentsPhoneForm from './features-phone-components-phone-form';

describe('FeaturesPhoneComponentsPhoneForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesPhoneComponentsPhoneForm />);
    expect(baseElement).toBeTruthy();
  });
});
