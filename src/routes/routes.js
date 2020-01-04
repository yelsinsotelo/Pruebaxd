const express = require('express')
const router = express.Router();
router.get('/', (req,res)=>{
    res.render('ti_admin.htm');
});

module.exports = router;    
