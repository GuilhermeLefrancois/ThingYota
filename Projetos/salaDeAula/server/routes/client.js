const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

// rota de teste
router.get('/status',(req,res) =>{
    res.send({
        status : "OK",
    });
});

// todos os estuantes
router.get('/student',studentController.index);

// busca por id
router.get('/student/:id',studentController.find);
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

function validation(req,res,next) {
    // TODO: Criar validação de estudante no banco de dados
}

// FIXME: Talvez não seja necessário criar controller

// rota de validação do estudante

module.exports = router;