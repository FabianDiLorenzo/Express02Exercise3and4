const express = require('express');
const rt = express.Router();
let usr = require('../users');

rt.use(express.json());

//add new user
rt.post('/', (req,res) => {
	const b = req.body;
	usr = [...usr, b];
	return res.status(200).json(usr);
});

//modify user
rt.put('/', (req, res) => {
	const id = +req.params.id;
	const b = req.body;
	const usrT = usr.map((x) => {
		if(x.id === id) return b;
		else return x;		
	});
	usr = usrT;
	return res.status(200).json(usr);
});

//finito user
rt.delete('/:id', (req, res) =>{
	const id = +req.params.id;
	usr = usr.filter( (x) => x.id === id);
	return res.status(200).json(usr);
});

//get all
rt.get('/', (req,res) =>  {return res.json(usr);});

//patch
rt.patch('/:id', (req,res) => {
	const id = +req.params.id;
	const { password: npswrd } = req.body; //destruct cause lazy
	usr = usr.map( (u, i) => {
		if(u.id === id) usr[i].password = npswrd; return u;
	}); 
	return res.status(200).json(usr);
});

module.exports = rt;