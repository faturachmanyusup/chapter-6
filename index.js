const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerDoc = require('./docs');

const PORT = 3000;
const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORT, () => {
  console.log('>> SERVER listening on PORT', PORT);
})