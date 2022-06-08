import { Phone } from '@phonehome/api-interfaces';
import * as express from 'express';

const app = express();

const greeting = { message: 'Welcome to the family!' };

const phones: Phone[] = [
  {
    id: 0,
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

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.get('/api/phones', (req, res) => {
  res.send(phones);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
