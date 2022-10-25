import * as uuid from 'uuid';
import userCheck from '../../../component/userCheck';
import {
  DynamoDBClient,
  UpdateItemCommand,
  PutItemCommand
} from '@aws-sdk/client-dynamodb';

const tableName = 'nutuml';

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  },
  region: process.env.REGION
});

export default async function handler(req, res) {
    const check = userCheck(req);
    if(!check.ok){
        return res.status(401).json(check.json)
    }
    const uid = check.userId;

    var ts = req.body.ts;
    if(ts){
        const { Attributes } = await client.send(
            new UpdateItemCommand({
              TableName: tableName,
              Key: {
                userId: { S: uid },
                ts: {N:ts+''}
              },
              UpdateExpression: 'set content = :content, title = :title',
              ExpressionAttributeValues: {
                ':content': { S: req.body.content },
                ':title': {S: req.body.title }
              },
              ReturnValues: 'ALL_NEW'
            })
        );
    
    }else{
        const data = await client.send(
            new PutItemCommand({
              TableName: tableName,
              Item: {
                userId: { S: uid},
                content: { S: req.body.content },
                title: {S:req.body.title},
                ts: {N: (new Date()).getTime()+''}
              }
            })
        );
    }

    return res.json({
        message: "保存成功",
        success: true
    });

}