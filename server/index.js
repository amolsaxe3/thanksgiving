const { app } = require('./app');
const PORT = 3000;
const { db, Person, Dish } = require('../db');

async function syncAndSeedDatabase() {
  try {
    await db.sync({ force: true });
    //  Create some rows in your Person and Dish tables here
    //  to interact with your API using the `npm run start:watch`
    //  or `npm run start` commands.

    const people = [
      { name: 'sasi', isAttending: true },
      { name: 'aarav', isAttending: false },
      { name: 'dada', isAttending: true },
      { name: 'harish', isAttending: true}
    ];
    const [sasi, aarav, dada, harish] = await Promise.all( people.map(person => Person.create(person))); 
    const dishes = [ 
      { name: 'rice', description: 'yummy biryani rice', spoiled: true, personId: sasi.id },
      { name: 'curry1', description: 'spicy curry1', spoiled: false, personId: dada.id },
      { name: 'curry2', description: 'spicy curry2', spoiled: false, personId: harish.id },
    ];
    const [dishA, dishB] = await Promise.all( dishes.map(dish => Dish.create(dish)));

  } catch (e) {
    console.log(e);
  }
  console.log('done seeding and associating!');
}

syncAndSeedDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});