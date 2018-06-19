const Datastore = require('nedb'),
    db = new Datastore({
        filename: './datastores/Config.db'
    });
db.loadDatabase(function (err) { // Callback is optional
    db.find({}, (err, docs) => {
        if (docs.length)
            db.remove({});
        db.insert({
            title: "Fiona Le Masson"
        }, (err, newDoc) => {
            console.log(newDoc);
        })
    })
});