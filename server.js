const app = require('express')();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.get('/*', (req, res, next) => {
    console.log(req);
    res.send('ok');
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})