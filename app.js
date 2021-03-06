const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('./models/Usuario');
require('./models/Mascota');
require('./models/Solicitud');
require('./config/passport');

const PORT = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);
mongoose.set('debug', true);

app.use('/v1', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is litening on port ${PORT}`);
});
