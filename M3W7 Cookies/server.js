const express = require('express');
const app = express();
const PORT = 8000;
const morgan = require('morgan')
const cookieParser = require('cookie-parser')


app.use(morgan('dev'));
app.use(cookieParser())
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})); // req.body

const languages = require('./languages.json')


const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1"
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "2"
  }
}

const user = {
  username: 'alvin',
  password: 'a',
  id: 10
}

app.get("/login", (req, res) => {
  res.render('login')
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let foundUser;
  // loop over user obj to find matching what the user typed in
  for(let user in users) {
    if(users[user].email === email && users[user].password === password) {
      foundUser = users[user]
    }
  }

  // incorrect path
  if(!foundUser) {
    return res.send('Wrong email or password!')
  }


  if(foundUser) {
    // Set the cookie. We are making an object
    res.cookie("userId", foundUser.id);
    res.redirect('/');
  }
})

app.get('/', (req, res) => {
  const lang = req.cookies.lang;
  const templateVars = {
    heading: languages.homeHeadings[lang] || languages.homeHeadings.en,
    body: languages.homeBodies[lang] || languages.homeBodies.en
  }

  res.render('home', templateVars)
})

app.get('/protected', (req,res) => {
  // if(req.cookies.userId) {
  //   res.render('protected')
  // } else {
  //   res.send('You need to login to see this page')
  // }

  req.cookies.userId ?  res.render('protected') : res.send('You need to login to see this page')
})

app.get('/languages/:userLang', (req, res) => {
  console.log(req.params.userLang);
  const lang = req.params.userLang;
  res.cookie('lang', lang)
  res.redirect('/')
})

app.get('/about', (req, res) => {
  const lang = req.cookies.lang;
  console.log(languages.aboutHeadings[lang] );
  const templateVars = {
    heading: languages.aboutHeadings[lang] || languages.aboutHeadings.en,
    body: languages.aboutBodies[lang] || languages.aboutBodies.en
  }
  res.render('about', templateVars)
})



app.listen(PORT, () => {
  console.log(`This app is listening on PORT: ${PORT}`);
})
