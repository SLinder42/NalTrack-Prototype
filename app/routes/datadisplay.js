var express = require('express');
var router = express.Router();

router.get('/datadisplay', function(req, res) {
	var NalPurchaseData = req.app.get("NalPurchases");
	var NalUseData = req.app.get("NalUses");

	res.render('datadisplay', {
		pageTitle: "All Tracking Information",
		pageID: "alltracking"
	});
});

module.exports = router;