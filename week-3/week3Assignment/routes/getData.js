const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    let result;
    const number = req.query.number;


    if (!number) {
        result = 'Lack of Parameter'
    } else if (Number(number) % 1 === 0 && Number(number) > 0) {
        result = 'sum of 1 to ' + number + ' : ' + ((1 + Number(number)) * Number(number)) / 2;
    } else {
        result = 'Wrong Parameter';
    }
    res.send(result);
});

module.exports = router;