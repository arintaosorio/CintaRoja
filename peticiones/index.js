const request = require("request");

//POKEAPI
//guardamos en una variable la URL de la api
const POKE_URI= 'https://pokeapi.co/api/v2'

//creamos la función 
const getMovesNames = (id) => {
    request.get(POKE_URI + '/pokemon/' +id, (error, response, body) =>{
        if(response.statusCode ===200){

       const pokemon = JSON.parse(body);

       const moves = pokemon.moves;

       const name = pokemon.name;

       for (let i = 0; i < moves.length; i++){
           console.log(moves[i].move.name);
       }
       console.log(`Estos son los movimientos de ${name}`)
        }else{
            console.log(response.statusCode)
        };
    });
};

// getMovesNames(150)

//SWAPI

const SWAP_URL = 'https://swapi.co/api/people/1/'

const getCharacter = () => {
    request.get(SWAP_URL, (error,response,body) =>{
        const json = JSON.parse(body);

        if(response.statusCode ===200){
            console.log(json.name)
        };

});
};
getCharacter();