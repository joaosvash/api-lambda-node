const fetch = require("node-fetch");
const{v4} = require ('uuid')
const AWS = require('aws-sdk');


//se trabaja la promesa para solicitar la info y a la misma vez almacenarlo
const getSwapi= async (event)=>{
    //declaramos la conexion usando la libreria de Dynamo
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    //usando la libreria de Fetch consumimos los datos de la api Swapi
    //en este caso usamos al actor con pagina numero 2, pero puede variar
    const result=await fetch("https://swapi.py4e.com/api/people/2")
    //los ingresamos en formato json para que pueda subirse como un arreglo
    const dataJson= await result.json()
    //declaramos los atributos
    const {name ,   
        height , 
        mass ,
        hair_color , 
        skin_color ,  
        eye_color,
        birth_year,
        gender,
        homeworld,
        films,
        species,
        vehicles,
        starships,
        created,
        edited,
        url }
        = JSON.parse(JSON.stringify(dataJson)); // se utiliza el stringify para volver a generarlo como arreglo
        //id para almacenar todos los datos registro una llave unica
        const id=v4()
    
  //declaramos la estructura de la tabla
    const nuevoActor={
        id,
        name ,   
        height , 
        mass ,
        hair_color , 
        skin_color ,  
        eye_color,
        birth_year,
        gender,
        homeworld,
        films,
        species,
        vehicles,
        starships,
        created,
        edited,
        url
    }
//empujamos la tabla correspondientemente hacia dynamo
    await dynamodb.put({
        TableName: 'ActorsTabla',
        Item: nuevoActor
    }).promise()
//si todo va bien te retornorara els tatuscode 200 junto con la informacion enviada
    return{

        statusCode:200,
        body: JSON.stringify(nuevoActor),

    }


}
//exportamos el modulo actual junto con su funcion
module.exports={
    getSwapi,
};