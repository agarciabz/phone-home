import { Phone } from '@phonehome/api-interfaces';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { PhoneModel } from './app/models/phone';
import {
  createPhone,
  getAllPhones,
  getPhoneById,
} from './app/controllers/phones';

const app = express();

const dbChain =
  'mongodb+srv://agarciabz:o9rIXvZ0Ril87fxD@cluster0.ic1cc.azure.mongodb.net/phone_home_db?retryWrites=true&w=majority';

mongoose
  .connect(dbChain)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Conection failed!');
  });

const phones: Phone[] = [
  {
    id: '0',
    name: 'Galaxy S20 FE 5G Standard',
    manufacturer: 'Samsung',
    color: 'Navy blue',
    img: 'https://phonedb.net/img/samsung_galaxy_s20_fe_2.jpg',
    price: 699.99,
    processor: 'Qualcomm Snapdragon 865 5G',
    ram: 6,
    screen: '6.5 inch AM-OLED',
  },
];

app.get('/api/phones', getAllPhones);

app.get('/api/phones/:id', getPhoneById);

app.post('/api/phones', bodyParser.json(), createPhone);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
