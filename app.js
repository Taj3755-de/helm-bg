const express = require('express');
const app = express();

const color = process.env.COLOR || 'unknown';

app.get('/', (req, res) => {
    res.send(`Finacplus App Running - Environment: ${color}`);
});

app.listen(3000, () => {
    console.log(`Server running on port 3000 (${color})`);
});
