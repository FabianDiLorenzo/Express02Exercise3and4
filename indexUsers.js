const exp = require('express');
const e = exp();

e.use(express.json());

const rt = require('./api/users.js');
e.use('./users.js', rt);

app.listen(42069, () => { console.log('What is a man? A misarable little pile of secrets...');});
