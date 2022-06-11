import { PhoneModel } from '../models/phone';

export const getAllPhones = (req, res) => {
  PhoneModel.find()
    .then((phones) => {
      res.status(200).send(phones);
    })
    .catch(() => {
      res.status(500).send();
    });
};

export const getPhoneById = (req, res) => {
  const id = req.params.id;
  PhoneModel.findById(id)
    .then((phone) => {
      if (phone) {
        res.status(200).send(phone);
      } else {
        res.status(404).send({ message: 'Phone not found' });
      }
    })
    .catch(() => {
      res.status(500).send();
    });
};

export const createPhone = (req, res) => {
  const newPhone = new PhoneModel(req.body);
  newPhone
    .save()
    .then((createdPhone) => {
      res.status(201).send({
        id: createdPhone._id,
        ...createdPhone,
      });
    })
    .catch(() => {
      res.status(500).send();
    });
};

export const deletePhone = (req, res) => {
  PhoneModel.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.deletedCount) {
        res.status(200).send();
      } else {
        res.status(404).send();
      }
    })
    .catch(() => {
      res.status(500).send();
    });
};
