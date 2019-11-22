exports.index = (req,res,next) => {
    res.send({

        title : "teste"
    });
    // TODO: Buscar todos os estudantes
    res.end();
}

// GET for by id
exports.find = (req,res,send) => {
    const id =req.parans.id;
    res.send({id: id});
}

// exports store();