const express = require("express");
const router = new express.Router();
const axios = require('axios');


router.post('/', function(req, res, next) {
    try {
        let results = req.body.developers.map(d => {
          return axios.get(`https://api.github.com/users/${d}`);
        });
        let devs = [];
        Promise.all(results)
        .then(r => {
          r.forEach(dev => {
            let currentDev = ({ name : dev.data.name, bio : dev.data.bio });
            devs.push(currentDev);
          });  
          res.json(devs);
        })
        .catch(err => {
            res.json({error : `${err.message}`});
        }); 
    } catch(err) {
      next(err);
    }
});
module.exports = router;