const express = require('express');
const { director, pelicula } = require('./models/index'); //Si mi archivo se llama index.js, puedo dejar solo ./models
//directo va entre {} porque en estamos exportando el objeto { director} en director. js y es lo que estamos trayendo 
const app = express();

//Configuracion para aceptrar body en el objeto 'req'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post('/director', (req, res) => {
    const newDirector = director(req.body);
    //aqui guardamos el nuevo director que creemos
    newDirector.save((err, director) => {
        // if (err){
        //     res.status(400).send(err)
        // } else{
        //     res.status(201).send(director);
        // } 
        // Es lo mismo que usando ternarios:

        err
            ? res.status(400).send(err)
            : res.status(201).send(director);
    })


});

//.exec lo convierte en una promesa

app.get('/all/directors', (req, res) => {
    director.find().exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err)
        });


});

app.get('/directors/:id', (req, res) => {
    const id = req.params.id
    director.findById(id).exec()
        .then((result) => {
            result
                ? res.send(result)
                : res.status(404).send({ message: 'Director not ' })
        }).catch((err) => {
            res.status(400).send(err)
        });
});

app.patch('/director', (req, res) => {
    const id = req.params.id
    director.findByIdAndUpdate(id,
        { $set: req.body },
        { new: true }).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err)
        });
});
//aqui vamos a crea un premio, usamos :idDirector para saber a que director se le agragrá el premio
app.post('/add/premio/:idDirector', (req, res) => {
    const id = req.params.idDirector;
    director.findByIdAndUpdate(id, { $push: { premios: [req.body.premios] } }, { new: true }).exec()
        .then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(409).send(err)
        });
});


//PELICULAS

app.post('/pelicula', (req, res) => {
    const newPelicula = pelicula(req.body);
    newPelicula.save((err, pelicula) => {
        err
            ? res.status(400).send(err)
            : res.status(201).send(pelicula);
    })
});

app.get('/all/peliculas',(req,res)=>{
    //modelo.find.exec()
    pelicula.find()
    .populate('director')
    .exec()
    .then((result) =>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send(err)
    });

});


app.listen(3000, () => {
    console.log('Server on');
});