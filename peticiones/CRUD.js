const request = require('request');
const URL='https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'
function createAuthor(nombre, apellidos, nac, bio, gender, age) {

    return new Promise((resolve, reject) => {
        request.post({ url: URL_FINAL, form: jsonSend }, (err, res, body) => {
            let json = JSON.parse(body)
            res.statusCode == 201

                
        })
    })


    const jsonSend = {
        name: nombre,
        last_name: apellidos,
        nacionalidad: nac,
        biography: bio,
        //con ecmascript6 podemos reemplazar gender: gender por gender solamente, si los dos son iguales 
        gender,
        age: age,
    } 
    
    //aqui va la url :)
    request.post(URL, {form: jsonSend}, (err,res,body)=>{
        console.log(res.statusCode);
        console.log(JSON.parse(body))
    });
}

function updateNameAuthorById(idAuthor, name) {
    const json ={
        name:name
    }
    request.patch(`${URL}${idAuthor}/`,{form: json},
    (err,res,body) =>{
        console.log(res.statusCode);
        console.log(JSON.parse(body));
    });
}

function getAuthorById(idAuthor){

}


// createAuthor('Cinta roja 36', 'otro batch','MX','lorem','M','30');
updateNameAuthorById('3581', 'Nombre Rojo');