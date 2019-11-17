const express = require('express');
const router = express.Router();
// Arduino routers

// dados da sala onde está o arduino
router.post('/room', (req,res,next)=>{
    const data = {
        did : req.query.did,
        ssid : req.query.ssid,
        // class : {
        //     room :req.query.room,
        //     class : req.query.class,
        // }
        room : req.query.room
    }
    // next();
    res.json(data);
    res.end(); 
});

module.exports = router;