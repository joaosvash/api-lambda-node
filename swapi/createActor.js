const{v4} = require ('uuid')
const AWS = require('aws-sdk');

//se trabaja la promesa
const createActor= async (event)=>{
    //declaramos la conexion usando la libreria de Dynamo
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    //declaramos el objeto con los atributos correspondientes
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
        = JSON.parse(event.body);
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
    createActor,
};