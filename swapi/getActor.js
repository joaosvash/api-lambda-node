const AWS= require('aws-sdk');

const getActor= async (event)=>{

    const dynamodb= new AWS.DynamoDB.DocumentClient();
    const {id}=event.pathParameters;

    const result=await dynamodb.get({
        TableName : 'ActorsTabla',
        Key: {
            id: id
        }
    }).promise();

    const Actor=result.Item;

    return{
        status:200,
        body:Actor
        
    };

};
module.exports={
    getActor,
};