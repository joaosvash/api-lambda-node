const{v4} = require ('uuid')
const AWS = require('aws-sdk');


const agregarPelicula=async (event)=>{

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {titulo, descripcion}= JSON.parse(event.body);
    const createdAt= new Date()
    const id=v4()

    const nuevaPelicula={
        id,
        titulo,
        descripcion,
        createdAt,
        done:false,
    }

    await dynamodb.put({
        TableName: 'PeliculaTabla',
        Item: nuevaPelicula
    }).promise()

    return{

        statusCode:200,
        body: JSON.stringify(nuevaPelicula),
    }


};
module.exports={
    agregarPelicula
};