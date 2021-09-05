require('dotenv').config();

const faker = require('faker');
const mongoose = require('mongoose');
const items = require('../data/items.json');
const Item = require('../models/item.model');


require('../config/db.config');


mongoose.connection.once('open', () => {
    console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
  
    mongoose.connection.db
      .dropDatabase()
      .then(() => console.log(`- Database dropped`))
      .then(() => {
        items.forEach((item) => {
          new Item({
            ...item,
            // status: available,
            description: faker.lorem.sentence(),
            cost: Math.floor(Math.random() * 20 + 5),
            location: { 
              coordinates: [Math.random() * (2.19 - 2.08) + 2.08, Math.random() * (41.48 - 41.38) + 41.38 ] }
          })
            .save()
            .then(items => console.info(`Successfully created ${items.length} items`))
            .catch((err) => {
              console.error(err);
            });
        });
      })
      .catch((error) => console.error(error));
     

  });