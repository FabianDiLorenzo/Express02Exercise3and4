const exp = require('express');
const e = exp();

let rt = require('./api/products');

e.use(express.json());
e.use('/products', rt);

app.listen(42069, () => { console.log('All your base are belong to us');});
