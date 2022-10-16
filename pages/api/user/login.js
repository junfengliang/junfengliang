import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import {
  DynamoDBClient,
  QueryCommand
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
        KeyConditionExpression: "email = :email",
        IndexName: "email-index",
        ExpressionAttributeValues: {
          ":email": { S: req.body.email }
        },
        TableName: tableName,
    };
    const {Items}  = await client.send(new QueryCommand(params));
    if(Items.length==0){
        return res.json({
            message: "用户名或密码错误!",
            success: false
        })
    }

    const hash = crypto.createHash('sha1');
    const uid = Items[0].userId.S;
    const password = hash.update(req.body.password + uid).digest('hex');
    if(password !== Items[0].password.S){
        return res.json({
            message: "用户名或密码错误",
            success: false
        })
    }
    const token = jwt.sign({userId:uid},process.env.JWT_KEY,{ expiresIn: 60*60 })
    return res.json({
        success: true,
        data: {
            token: token
        }
    });

}