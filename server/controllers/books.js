const Books = require('../models/books');

exports.all = function(req, res) {
	Books.all().then(
        results => {
            console.log(results);
            res.send(results);
        }
    ).catch(
        error => {
            console.log(error);
            res.sendStatus(500);
        }
    );
}

exports.create = function(req, res){
    const book = {
        author: req.body.author,
        nameBook: req.body.nameBook,
        description: req.body.description,
        image: req.body.image,
        bookRating: 5,
        status: true       
    };

    Books.create(book).then(
        results => {
            //console.log(results);
            res.send(results);
        }
    ).catch(
        error => {
            console.log(error);
            res.sendStatus(500);
        }
    );
}

exports.edit  = function (req, res){

    const editBookObject = {
        author: req.body.author,
        nameBook: req.body.nameBook,
        description: req.body.description,
        image: req.body.image,
        status: JSON.parse(req.body.status)
    }

	Books.edit(req.params.id, editBookObject).then(
        results => {
            //console.log(results);
            res.send(results);
        }
    ).catch(
        error => {
            console.log(error);
            res.sendStatus(500);
        }
    );
}

exports.delete = function (req,  res) {
    Books.delete(req.params.id).then(
        results => {
            //console.log(results);
            res.sendStatus(200);
        }
    )
    .catch(
        error => {
            console.log(error);
            res.sendStatus(500);
        }
    );
}