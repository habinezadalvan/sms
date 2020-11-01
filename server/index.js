const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index');


app.use(express.json());

app.use(cors())

app.use('/', router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port: ${port}`));
