const AWS= require('aws-sdk');

const obtenerPelicula= async (event)=>{

    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const {id}=event.pathParameters;

    const result=await dynamodb.get({
        TableName : 'PeliculaTabla',
        Key: {
            id: id
        }
    }).promise();

    const pelicula=result.Item;

    return{
        status:200,
        body:pelicula
        
    };

};
module.exports={
    obtenerPelicula,
};