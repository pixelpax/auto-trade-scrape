const Datastore = require('nedb-promise');
let db = Datastore({
  filename: './sprinters.db',
  autoload: true
});

const objects = require('./transits');
objects.forEach(ob => {
  if(ob.miles) {
    let milesm = ob.miles.match(/[\d,]{2,7}/)
    if(milesm) {
      try {
        ob.miles = Number(milesm[0].replace(',',''));
      } catch(e) {

      }
    }
    // ob.miles = miles;
  }

  if(ob.year) {
    try {
      ob.year = Number(ob.year);
    } catch(e) {

    }
  }

  if(ob.cost) {
    let milesm = ob.cost.match(/[\d,]{2,7}/)
    if(milesm) {
      try {
        ob.cost = Number(milesm[0].replace(',',''));
      } catch(e) {

      }
    }
  }

  if(ob.link) {
    ob.link = 'https://www.autotrader.com' + ob.link;
  }
});

// db.remove({}, {multi: true}).then(() => {
//   db.insert(objects);
// });

db.cfind({wb: '148"', roof: 'High Roof', cost: {$lt: 35000}, miles: {$exists: true, $lt: 70000}}, {link: 1, miles: 1, cost: 1, year: 1}).sort({miles: 1}).limit(20).exec().then(console.log);



// db.cfind({wb: '148"', cost: {$lt: 37000}, miles: {$exists: true}}, {link: 1, miles: 1, year: 1, cost: 1, wb: 1}).sort({miles: 1}).limit(20).exec().then(console.log);

