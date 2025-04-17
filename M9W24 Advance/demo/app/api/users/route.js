/*
  app.post('/api/users', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    db.query('insert into user.....)
    res.json('added new user')
  })
  
  app.get('/api/users')
  app.put('/api/users')
  app.delete('/api/users')
  app.patch('/api/users')
*/
import { NextResponse } from "next/server" // this is (req, res) the res


export const POST = (req)  => {
  console.log('Does this work?!');
  // db.query()
  return NextResponse.json({message: 'User added'})
}

export const GET = (req)  => {
  console.log('Does this work?!');
  return NextResponse.json({message: 'GET ROUTE!'})
}

export const PUT = (req)  => {
  console.log('Does this work?!');
  return NextResponse.json({message: 'GET ROUTE!'})
}

export const PATCH = (req)  => {
  console.log('Does this work?!');
  return NextResponse.json({message: 'GET ROUTE!'})
}

export const DELETE = (req)  => {
  console.log('User Deleted');
  return NextResponse.json({message: `It's done....`})
}