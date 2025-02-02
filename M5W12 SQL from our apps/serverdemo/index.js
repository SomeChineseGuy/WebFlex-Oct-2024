const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool}      = require('pg');
const app = express();
const PORT = 8080;

const pool = new Pool({
  user: 'alvinng',
  host: 'localhost',
  password: 'alvinng',
  database: 'intro',
  port: 5432
});


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
	res.send('ok');
})


app.get('/', (req, res) => {
	const query = req.query.query;
	templateVars = {resp: null}
	res.render('home', templateVars);
})

app.get('/getusers', (req, res) => {
	pool.query('SELECT * FROM users;').then((resp) => {
		
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})

app.get('/getpets', (req, res) => {
	pool.query('SELECT * FROM pets;').then((resp) => {
		
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})

app.post('/pets/search', (req,res) =>{
	const { name }= req.body;
	pool.query("SELECT * FROM pets WHERE Name like $1;", [`%${name}%`]).then((resp) => {
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})


app.get('/api/pets/all', (req, res) => {
	pool.query('SELECT * FROM PETS;').then((resp) => {
		const data = resp.rows;
		res.json({data})
	})
})

app.post('/add/pets', (req, res) => {
	console.log(req.body);
	const { name, species, breed, sex, age, user_id } = req.body;
	pool.query(`INSERT INTO pets(name, species, breed, sex, age) VALUES($1, $2, $3, $4, $5);`, [name, species, breed, sex, age])
	.then(() => {
		res.redirect('/getpets')
	})
})

app.post('/query', (req, res) => {
	const query = req.body.query;
	console.log(query);
	pool.query(query)
	.then((resp) => {
		const templateVars = {resp}
		res.render('home', templateVars);
	})
})


app.listen(PORT, () => console.log("Server is listening on:", PORT));