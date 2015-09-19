require('babel/register');
require('./server').listen(process.env.PORT || 3000);
