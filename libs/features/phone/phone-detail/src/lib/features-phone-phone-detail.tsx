import { useParams } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FeaturesPhonePhoneDetailProps {}

export function PhoneDetail(props: FeaturesPhonePhoneDetailProps) {
  const params = useParams();
  return <div>Phone ID: {params['phoneId']}</div>;
}

export default PhoneDetail;
