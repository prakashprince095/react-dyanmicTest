const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all domains
app.use(cors());

// Or, for more fine-grained control, enable CORS for a specific domain
// app.use(cors({ origin: 'http://localhost:5173' }));

app.post('/api/test/submit', (req, res) => {
    res.send('Request received');
});

app.listen(7001, () => {
    console.log('Server running on port 7001');
});
