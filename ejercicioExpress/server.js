const express = require('express');

const app= express();
//conf
app.use(express.urlencoded({ extended:true}));
app.use(express.json());



app.get('/api/', (req, res)=>{
    console.log('siii');
    res.status(201).send({mensaje: 'hola mundo'});
});

app.get('/api/suma',(req, res)=>{
    const suma = (parseInt(num1) + parseInt(num2));
    res.status(200).send({ suma });
});

app.get('/api/usuario/:usuario', (req, res) => {
    const {usuario} = req.params;
    res.status(200).send({ usuario });
});

app.listen(3000, ()=>{
    console.log('Server on port 3000');
});