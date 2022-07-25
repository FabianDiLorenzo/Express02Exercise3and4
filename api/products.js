const exp = require('express');
const rt = express.Router();

let pr = require('../products');

//get all
rt.get('/', (req, res) => {res.status(200).json(pr);});

//get by id
rt.get('/:id', (req, res) => {
	const id = +req.params.id;
	const p = pr.find(x => x.id === id);
	return res.status(200).json(p);
});

//add new
rt.post('/', (req,res) => { 
	const c = req.body;
	pr.push({ ...c, id: pr.length++ });
	return res.status(200).json(pr);
});

//modify 
rt.put('/:id', (req, res) => {
	const id = +req.params.id;
	const b = req.body;
	const pA = pr.map ( (x) => {
		if(x.id === id) return b;
		else return x;
	});
	pr = pA;
	res.status(200).json(pr);
});

//del
rt.delete('/:id', (req,res) => {
	const id = +req.params.id;
	pr = pr.filter( (x) => x.id !== id);
	res.status(200).json(pr);
});
