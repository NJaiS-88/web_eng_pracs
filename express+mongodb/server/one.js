const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("this is the home page");
});

app.get('/books', (req, res) => {
    res.send("thsi is the books page");
})

app.listen(3000, () => {
    console.log("server running at port 3000");
})