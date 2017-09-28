var router = express.Router();
var bodyParser = require('bodyParser');
var fs = require('fs');
var NalPurchaseData = require("../data/NalPurchases.json");
var NalUseData = require("../data/NalUses.json");

// Get Actions for Read

router.get('/api/:class', function(req, res) {
	if (req.params.class == 'purchases') {
		res.json(NalPurchaseData);
	}
	else if (req.params.class == 'uses') {
		res.json(NalUseData);
	}
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

// Post Actions for Create and Update

router.post('/api/:class/:action/:index', function(req, res) {
	if (req.params.class == 'purchases') {
		if (req.params.action == 'create') {
			NalPurchaseData.push(req.body);
		}
		else if (req.params.action == 'update') {
			index = req.params.index;
			NalPurchaseData[index] = req.body;
		}
		fs.writeFile('app/data/NalPurchases.json', JSON.stringify(NalPurchaseData), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
	else if (req.params.class == 'uses') {
		if (req.params.action == 'create') {
			NalUseData.push(req.body);
		}
		else if (req.params.action == 'update') {
			index = req.params.index;
			NalUseData[index] = req.body;
		}
		fs.writeFile('app/data/NalUses.json', JSON.stringify(NalUseData), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
});

// Delete Actions

router.delete('api/:class/:id', function(req, res) {
	if (req.params.class == 'purchases') {
		NalPurchaseData.splice(req.params.id, 1);
		fs.writeFile('app/data/NalPurchases.json', JSON.stringify(NalPurchaseData), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});

	}
	else if (req.params.class == 'uses') {
		NalUseData.splice(req.params.id, 1);
		fs.writeFile('app/data/NalUses.json', JSON.stringify(NalUseData), 'utf8', function(err) {
			if (err) {
				console.log(err);
			}
		});
	}
});