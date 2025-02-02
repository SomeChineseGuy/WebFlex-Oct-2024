const { Pool } = require('pg');
const config = {
  database: 'intro',
  user: 'alvinng',
  password: 'alvinng',
  port: 5432,
  hostname: 'localhost'
}

const pool = new Pool(config);

// pool.query('SELECT * FROM pets ;')
//   .then((res) => {
//     console.log(res.rows);
//   }).catch(err => {
//     console.log(err);
//   })

const getAllPets = () => {
  return pool.query('SELECT * FROM pets;')
  .then((res) => {
    return res.rows;
  }).catch((err) => {
    console.log(err);
  })
}

getAllPets().then((res) => {
  console.log(res);
})

// const getAllUsers = () => {
//   pool.query('SELECT * FROM users;')
//   .then((res) => {
//     console.log(res.rows)
//   })
// }


// const getPet = (id) => {
//   pool.query(`SELECT * FROM pets where id = ${id};`)
//   .then((res) => {
//     console.log(res.rows)
//   })
// }

