const AWS= require('aws-sdk')


const actualizarPelicula= async(event)=>{

    const dynamodb=new AWS.DynamoDB.DocumentClient();
    const {id}=event.pathParameters;

    const {done}=JSON.parse(event.body)

    await dynamodb.update({
        TableName : 'PeliculaTabla',
        Key: {id},
        UpdateExpression: ' set done = :done',
        ExpressionAttributeValues:{
            ':done':done,
        },
        ReturnValues: 'ALL_NEW'

    }).promise();

    return{
        status:200,
        body: JSON.stringify({
            message: ' Pelicula Actualizada Satisfactoriamente '
        }),
    };
};
module.exports={
    actualizarPelicula,
};