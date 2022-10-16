import * as uuid from 'uuid';
import userCheck from '../../../component/userCheck';
import {
  DynamoDBClient,
  UpdateItemCommand,
  QueryCommand
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
        return res.json(check.json)
    }
    const uid = check.userId;
    const params = {
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
        ":userId": { S: uid },
        },
        ProjectionExpression: "title, ts",
        TableName: tableName,
    };
  
    
      const data = await client.send(new QueryCommand(params));
      var arr = []
      data.Items.forEach(function (e) {
        arr.push({
            title: e.title.S,
            ts: e.ts.N,
        })
      });
    return res.json({
        data: arr,
        success: true
    });

}