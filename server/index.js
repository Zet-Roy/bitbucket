const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./db');
const booksControler = require('./controllers/books');

const app            = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', booksControler.all);

app.post('/books', booksControler.create);

app.put('/books/:id', booksControler.edit);

app.delete('/books/:id', booksControler.delete);


db.connect('mongodb://localhost:27017/myapi', (err, database) => {
	if(err){
		return console.log(err);
	}

	app.listen(port, () => {
		console.log('We are live on ' + port); //Вызывается при запуске сервера.
	});
});