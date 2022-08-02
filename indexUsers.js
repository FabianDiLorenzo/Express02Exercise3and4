const exp = require('express');
const e = exp();
const rt = require('./api/users.js');

e.use(express.json());
e.use('api/users', rt);

app.listen(42069, () => { console.log('What is a man? A misarable little pile of secrets...');});
