# Phonehome

The Phone Home is an web application that allows you to manage a catalogue of smartphones.
You can view the list of available phones, query its details and add new ones.

## Local installation

### Pre-requirements

Install [Node](https://nodejs.org/) version 16 (currently the latest stable).

If you're using `nvm`, add it with `nvm install --lts`.

### Install dependencies.

```
npm install
```

### Run REST API

Start the API server and leave it running:

```
npm run api
```

It should display in terminal that the API is connected to the database.

```
Listening at http://localhost:3333/api
Connected to database!
```

### Run frontend

Open an extra terminal and start the frontend application:

```
npm start
```
