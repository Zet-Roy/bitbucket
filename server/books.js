const db = require('./db');

exports.all = function() {
    return new Promise(function(resolve, reject) {

        db.get().collection('books').find().toArray(function(err, docs){
            if(err) {
                reject(err);
            }

            resolve(docs);
        })

    });
}