    
const campaignCtrl = require('./controllers/campaign/campaign.controller');

module.exports = function (app) {
    app.use('/campaign', campaignCtrl);
  
};


