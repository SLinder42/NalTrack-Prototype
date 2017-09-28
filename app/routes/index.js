var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var NalPurchaseData = req.app.get("NalPurchases");
	var NalUseData = req.app.get("NalUses");
	var OverdoseData = findOverdoses(NalUseData);
	var FinanceData = findFinances(NalPurchaseData);	

	res.render('index', {
		pageTitle: "Home",
		pageID: "home"
	});

	function findOverdoses(data) {
		return "";
	}

	function findFinances(data) {
		return "";
	}

	// Take the Naloxone data to summarize uses and fatalities

	function summarizeOverdoses(data) {
		message = "<p>";
		totalNalAmountUsed = 50;
		totalTargets = 10;
		totalNalUses = 16;
		totalNalDeaths = 5;
		message += "There have been ";
		message += totalNalAmountUsed;
		message += " milligrams of Naloxone used so far. "
		message += "The naloxone reversed the overdoses of "
		message += totalTargets;
		message += " individuals. "
		message += "Of the ";
		message += totalNalUses;
		message += " reported, there were ";
		message += totalNalDeaths;
		message += " fatalities recorded."
		message += "</p>"
		return message;
	}

	// Take the Naloxone purchases to summarize cost and demand

	function summarizeFinances(data) {
		message = "<p>";
		totalNalAmount = 70;
		totalNalCost = 538.17;
		message += "There have been ";
		message += totalNalAmount;
		message += " milligrams of Naloxone purchased so far. "
		message += "Records indicate $";
		message += 	totalNalCost
		message += " has been spent to distribute the life-saving drug."
		message += "</p>"
		return message;
	}
});

module.exports = router;