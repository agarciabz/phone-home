import { Heading, VStack } from '@chakra-ui/react';
import { Phone } from '@phonehome/api-interfaces';
import { PhoneForm } from '@phonehome/features/phone/components/phone-form';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneCreateProps {}

export function PhoneCreate(props: FeaturesPhonePhoneCreateProps) {
  const navigate = useNavigate();

  const onSubmit = (phone: Phone) => {
    fetch('/api/phones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(phone),
    })
      .then((r) => r.json())
      .then((phone) => {
        navigate(`/phone/${phone.id}`);
      });
  };

  return (
    <VStack p={5}>
      <Heading>New Phone</Heading>
      <PhoneForm onSubmit={onSubmit}></PhoneForm>
    </VStack>
  );
}

export default PhoneCreate;
