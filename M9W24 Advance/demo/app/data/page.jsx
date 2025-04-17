import DataFetch from "@/components/DataFetch";
import axios from 'axios';

const getData = async () => {
  const {data } = await axios.get('https://dog.ceo/api/breeds/image/random');
  // const query = await db.query('select * from users;')
  // return query
  console.log(data)
  return data
}

const Data = async () => {
  const data = await getData()
  return (
    <div>
      <h1>This is the Data page</h1>
      <img src={data.message} />
       <DataFetch />
    </div>
  )
};

export default Data;


/*
app.get('/data', (req, res) => {
  db.query('select * from users')
  .then(({res}) => {
    const data = res.rows[0]
    const templateVars = {
      data
    }
    res.render(DataComponent, templateVars)
  })
})
*/ 