const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function() {
    return db.get().collection('books').find().toArray();
}

exports.create = function (book){
    return db.get().collection('books').insert(book);
}

exports.edit = function (id, newData){
    return db.get().collection('books').updateOne({ _id: ObjectID(id) }, {$set: newData});
}

exports.delete = function(id){
	return db.get().collection('books').deleteOne({ _id: ObjectID(id) });
}