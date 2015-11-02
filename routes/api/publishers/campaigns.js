var router = require('express').Router();
var campaign = require('../../../controllers/api/publishers/campaign');
var campaigns = require('../../../controllers/api/publishers/campaigns');
router.route('/')
    .get(campaigns.getAll)
    .post(campaigns.create);
router.route('/:id')
    .get(campaign.getSingle)
    .put(campaign.update)
    .delete(campaign.remove);
module.exports = router;
//# sourceMappingURL=campaigns.js.map