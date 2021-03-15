const express = require('express');
const router = express.Router();
const compaignService = require('./campaign.service');
const _ = require('lodash');

router.get('/getData', getData);

module.exports = router;

function getData(req, res, next) {
    try {
        if (true) {
            compaignService.getData(req)
                .then(camp => res.status(camp.status).json(camp.response))
                .catch(err => next(err));
        } else {
            res.status(400).json({ "success": false, "message": "You do not have authorised access." });
        }
    } catch (e) {
        res.status(500).json({ "success": false, "error": "Internal server error." });
    }
}
