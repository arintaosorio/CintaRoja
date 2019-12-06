const express = require('express');

const app= express();
//todo el contenido tiene que estar aqui, entre el app = express() y el listen()


//Configuracion para aceptrar body en el objeto 'req'

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//



// Aqui creamos el endpoint, no lo consumimos!!!!
app.get('/', (request,response) => {
    console.log('Entreeeee');
    response.send({mensaje: 'Mi primera respuesta desde el backend'});
});
app.get('/saludo',(req, res)=>{
    res.send({mensaje: 'Hola'})
}) ;

//:uid es una variable (unique id)
app.get('/users/:uid',(req, res) =>{
    //estamos imprimiendo la variable:uid
    console.log(req.params);
    res.send({message: `Usuario a buscar: ${req.params.uid}`})
});

app.get('/search',(req, res)=>{
    console.log(req.query);
    res.send({message: 'Busqueda'})
});

app.post('/users',(req, res)=>{
   console.log(req.body)
   //spreadobject ...
   res.status(201).send({ ...req.body, id:1})
    // res.send({message: 'POST'})
});
//el listen levanta todo el servidor
app.listen(3000, ()=>{
    console.log('Server on port 3000');
});