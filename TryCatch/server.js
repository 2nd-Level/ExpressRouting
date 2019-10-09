require('dotenv').config();
const express = require('express');
const postsRouter = require('./data/db-router');
const server = express();

server.use(express.json());
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
  res.send(`
    <h2>API Working</h>
    
  `);
});


//Create Post
server.post( '/api/posts', (req, res) => {
  const {title, contents} = req.body
  const newPost = req.body

  if(!title|| !contents) {
    res.status(400).json({errorMessage: "Please provide title and contents for the post."  })
  } else {
  db.insert(newUser)
  
  //then take the user and send it back to the client
    .then(user => {
      if(user) {
      res.status(201).json({ newPost });
    }})
    .catch(err => {
      res.status(500).json({error: "There was an error while saving the post to the database" });
    });
};

})
//Create Comments
server.post( '/api/posts/:id/comments', (req, res) => {

})
//Get ALL Post
server.get('/api/posts', (req, res) => {
  res.send.json({users})

})
//Get A post
server.get('/api/posts/:id', (req, res) => {

})
//Get Post Comments
server.get('/api/posts/:id/comments', (req, res) => {

})
//Delete Post
server.delete('/api/posts/:id', (req, res) => {

})


//Update Post
server.put('/api/posts/:id', (req, res) => {

})
module.exports = server