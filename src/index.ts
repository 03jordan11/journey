import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../index.html');
})

const path=require('path');
app.use('/src', express.static(path.join(__dirname, '../../src')))
app.use('/public', express.static(path.join(__dirname, '../../compiled')))

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})