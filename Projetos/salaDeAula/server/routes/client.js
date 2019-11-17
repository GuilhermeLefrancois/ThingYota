const express = require('express');
const router = express.Router();

// rota de teste
router.get('/status',(req,res) =>{
    res.send({
        status : "OK",
    })
})

// recebimento de dados do estudante via post
router.post('/student',(req,res,next) => {
    // dados do ppost
    const data = {
        name : req.query.name,
        id : req.query.id,
        macAdress : req.query.mac_adress,
        status : true
    }
    res.json(data);
});

// rpota de validação do estudante

module.exports = router;