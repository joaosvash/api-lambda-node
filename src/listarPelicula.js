const AWS= require('aws-sdk');


const listarPelicula= async (event)=>{

    const dynamodb= new AWS.DynamoDB.DocumentClient();

    const result= await dynamodb.scan({
        TableName : 'PeliculaTabla',

    }).promise();

    const peliculas=result.Items;

    return{

        statuscode:200,
        body: peliculas
    };

};
module.exports={
    listarPelicula
}