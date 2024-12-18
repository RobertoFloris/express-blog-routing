const express = require('express');

const router = express.Router();

//Index
router.get('/', (req,res) =>{
    res.send ('Lista intera')
})

//Show
router.get('/:id', (req,res) =>{
    res.send (`Dettaglio elemento con id ${req.params.id}`)
})

//Store
router.post('/', (req,res) =>{
    res.send('Nuovo elemento')
})

//Update
router.put('/:id', (req,res)=>{
    res.send(`Modifico l'elemento con id ${req.params.id} `)
})

//Modify
router.patch('/:id', (req, res)=>{
    res.send(`Modifico parzialmente l'elemento con id ${req.params.id}`)
})

//Destroy
router.delete('/:id', (req,res)=>{
    res.send(`Elimino elemento con id ${req.params.id}`)
})


module.exports = router