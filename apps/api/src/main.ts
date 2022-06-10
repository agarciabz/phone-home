import { Phone } from '@phonehome/api-interfaces';
import { randomUUID } from 'crypto';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

const greeting = { message: 'Welcome to the family!' };

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

app.get('/api', (req, res) => {
  res.send(greeting);
});

app.get('/api/phones', (req, res) => {
  res.send(phones);
});

app.get('/api/phones/:id', (req, res) => {
  const id = req.params.id;
  const phone = phones.find((p) => p.id === id);
  if (phone) {
    res.status(200).send(phone);
  } else {
    res.status(404).send({ message: 'Phone not found' });
  }
});

app.post('/api/phones', bodyParser.json(), (req, res) => {
  const newPhone = { ...req.body, id: randomUUID() } as Phone;
  phones.push(newPhone);
  res.status(200).send(newPhone);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
