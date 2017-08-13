const express = require('express');
const router = express.Router();
const hltv = require('hltv');
var cors = require('cors');

router.use(cors());

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/matches', (req, res) => {
    hltv.getMatches()
        .then((matchData) => {
            res.status(200).json(matchData);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
})

router.get('/match/:id', (req, res) => {
    hltv.getMatch({id: req.params.id})
        .then((matchData) => {
            res.status(200).json(matchData);
        })
        .catch((error) => {
            res.status(500).json(error);
        })
})

module.exports = router;