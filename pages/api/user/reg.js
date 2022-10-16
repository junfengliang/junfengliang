import * as uuid from 'uuid';
import crypto from 'crypto';

import {
  DynamoDBClient,
  QueryCommand,
  PutItemCommand
} from '@aws-sdk/client-dynamodb';

const tableName = 'user';

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  },
  region: process.env.REGION
});

export default async function handler(req, res) {
    const params = {
        KeyConditionExpression: "email = :s",
        IndexName: "email-index",
        ExpressionAttributeValues: {
          ":s": { S: req.body.email }
        },
        TableName: tableName,
    };
    const {Items}  = await client.send(new QueryCommand(params));
    if(Items.length>0){
        return res.json({
            message: "该邮箱已注册",
            success: false
        })
    }

    const hash = crypto.createHash('sha1');
    const uid = uuid.v4() 
    const password = hash.update(req.body.password + uid).digest('hex');

    const data = await client.send(
        new PutItemCommand({
          TableName: tableName,
          Item: {
            userId: { S: uid},
            email: { S: req.body.email },
            password: {S:password},
            ts: {N: (new Date()).getTime()+''}
          }
        })
      );

    return res.json({
        message: "注册成功",
        success: true
    });

}