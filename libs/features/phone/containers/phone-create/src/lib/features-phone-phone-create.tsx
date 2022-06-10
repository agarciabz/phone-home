import { Heading, VStack } from '@chakra-ui/react';
import { PhoneForm } from '@phonehome/features/phone/components/phone-form';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneCreateProps {}

export function PhoneCreate(props: FeaturesPhonePhoneCreateProps) {
  return (
    <VStack p={5}>
      <Heading>New Phone</Heading>
      <PhoneForm></PhoneForm>
    </VStack>
  );
}

export default PhoneCreate;
