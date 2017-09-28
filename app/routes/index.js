var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var NalPurchaseData = req.app.get("NalPurchases");
	var NalUseData = req.app.get("NalUses");

	res.render('index', {
		pageTitle: "Home",
		pageID: "home"
	});
});

module.exports = router;