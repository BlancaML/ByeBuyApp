require('dotenv').config();

const faker = require('faker');
const mongoose = require('mongoose');
const items = require('../data/items.json');
const Item = require('../models/item.model');
const User = require('../models/user.model');


require('../config/db.config');


mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);

    mongoose.connection.collections['items'].drop(() => {
      User.find()
        .then(users => {
         items.forEach((item, i) => {
            new Item({
              ...item,
              description: faker.lorem.sentence(),
              cost: Math.floor(Math.random() * 20 + 5),
              renter: users[0].id,
              location: { 
                coordinates: [Math.random() * (2.19 - 2.08) + 2.08, Math.random() * (41.48 - 41.38) + 41.38 ] }
            })
              .save()
              .then(data => console.info(`Successfully created ${i++} item`))
              .catch((err) => {
                console.error(err);
              });
          });
        })
        .catch(err => console.error(err))
    })
  })

