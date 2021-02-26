const app = require('express')();
const cors = require('cors');

app.use(cors());
app.get('/*', (req, res, next) => {
    console.log(req);
    res.send('ok');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})