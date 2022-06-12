import { model, Schema } from 'mongoose';
import { Phone } from '@phonehome/api-interfaces';

const phoneSchema = new Schema<Phone>({
  name: String,
  manufacturer: String,
  price: Number,
  screen: String,
  processor: String,
  ram: Number,
  img: String,
});

export const PhoneModel = model('Phone', phoneSchema);
