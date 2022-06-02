const AWS= require('aws-sdk');

//se declara la promesa
const listActor= async (event)=>{
 //declaramos la conexion usando la libreria de Dynamo
    const dynamodb= new AWS.DynamoDB.DocumentClient();
//declaramos el objeto con los atributos correspondientes
    const result= await dynamodb.scan({
        TableName : 'ActorsTabla',

    }).promise();//la funcion espera la promesa como tal
    //declaramos una constante el cual almcenara los items de la peticion
    const Actors=result.Items;
//si todo va bien te retornorara els tatuscode 200 junto con la informacion solicitada
    return{

        statuscode:200,
        body: Actors
    };

};
//exportamos el modulo actual junto con su funcion
module.exports={
    listActor
}