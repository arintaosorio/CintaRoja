const express = require('express');
const { user, publicacion } = require('./models/index'); 
const app= express();

//Conf

app.use(express.urlencoded({ extended:true}));
app.use(express.json());


app.post('/user',(req, res)=>{
    const newUser= user(req.body);

    newUser.save((err, user) =>{
        err
        ? res.status(400).send(err)
        : res.status(201).send(user);
    }) 
 });

 app.post('/add/publicacion/:idUser', (req, res) => {
    const id = req.params.idUser;
    director.findByIdAndUpdate(id, { $push: { publicacion: [req.body.publicacion] } }, { new: true }).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(409).send(err)
        });
});


app.listen(3000, ()=>{
    console.log('Server on');
});