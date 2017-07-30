const express = require('express');
const router = express.Router();
const hltv = require('hltv');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/matches', (req, res) => {
    console.log("MATCHES CALLED");
    hltv.getMatches()
        .then((matchData) => {
            res.status(200).json(matchData);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
})

router.get('/match/:id', (req, res) => {
    console.log("MATCH CALLED");
    hltv.getMatch({id: req.params.id})
        .then((matchData) => {
            res.status(200).json(matchData);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
})

module.exports = router;