const express = require('express');
const app = express();
const PORT = 8080;

// Set my server to send EJS
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.send('Welcome to my new and improved page!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page!')
})

// Fake Database
const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://i.imgur.com/drvA0ew.jpg'
}


// ------------------- CATS
app.get('/cats', (req, res) => {
  console.log(req.params)
  const templateVar = {
    catsDatabase: catsDatabase
  }
  res.render('cats', templateVar)
})

// ('/cats/:id') having a /: means it's a catch all
app.get('/cats/:id', (req, res) => {
  const userInput = req.params.id;
  if(catsDatabase[userInput]) {
    const templateVar = {
      catsDatabase: catsDatabase[userInput]
    }
    res.render("cats-single", templateVar)  
  } else {
    res.send('Wrong URL')
  }
})


// amazon/kitchen/stuff/1
// amazon/kitchen/stuff/2
// amazon/kitchen/stuff/3


app.listen(PORT, () => {
  console.log('Server is on!')
})