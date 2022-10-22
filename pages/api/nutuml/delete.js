import {
    DynamoDBClient,
    DeleteItemCommand
  } from '@aws-sdk/client-dynamodb';
  import userCheck from '../../../component/userCheck';
  
  
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
  
      await client.send(
          new DeleteItemCommand({
            TableName: tableName,
            Key: {
                userId: { S: uid },
                ts: {N: req.query.ts}
            }
          })
      );
  
      return res.json({
          success: true
      });
  }