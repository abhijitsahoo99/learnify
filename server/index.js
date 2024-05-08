const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/' , (req, res) => {
    res.send('hello from learnify');
})

app.listen(3000, () => console.log('listening on port 3000'));