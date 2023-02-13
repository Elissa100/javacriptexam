var http = require('http');
const express = require('express')
const app = express();



app.get('/', (req,res) => {
    return res.status(200).send('Hello user well come to my calculate you can use "/sum"/ to get the sum of two numbers or use "/arraysum"/ to get the sum of numbers in array ')
})

app.get('/sum', (req, res) => {
    res.json({'sum': 5+4, 'status':'success'});
} );

app.get('/sumarray', (req, res) => {
    const numbers = [34,45,56,56];
    let sum = 0;
    for(let i =0; i < numbers.length; i++){
        sum += numbers[i];
    };
    return res.json({'array numbers sum' : sum, 'status':'success'})
})
app.listen(4000, () => {
    console.log('server is running ');
})




