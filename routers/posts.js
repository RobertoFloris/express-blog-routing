const posts = require("./../data/posts")

const express = require('express');
const router = express.Router();

//Index
//GET http://localhost:3000/posts
router.get('/', (req,res) =>{
    // res.send ('Lista intera');
    res.json(posts)
})

//Show
//GET http://localhost:3000/posts/Cracker alla barbabietola
router.get('/:title', (req,res) =>{
    // res.send (`Dettaglio elemento con titolo ${req.params.title}`);const paramsTitle = req.params.title;
    const postByTitle = posts.find(post => post.title.includes(paramsTitle))
    res.json(postByTitle)
})

//Store
//POST http://localhost:3000/posts
router.post('/', (req,res) =>{
    res.send('Nuovo elemento')
})

//Update
//PUT http://localhost:3000/posts/Cracker alla barbabietola
router.put('/:title', (req,res)=>{
    res.send(`Modifico l'elemento con titolo ${req.params.title} `)
})

//Modify
//PATCH http://localhost:3000/posts/Cracker alla barbabietola
router.patch('/:title', (req, res)=>{
    res.send(`Modifico parzialmente l'elemento con titolo ${req.params.title}`)
})

//Destroy
//DEL http://localhost:3000/posts/Cracker alla barbabietola
router.delete('/:title', (req,res)=>{
    res.send(`Elimino elemento con titolo ${req.params.title}`)
})


module.exports = router