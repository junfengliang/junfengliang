import crypto from 'crypto';
import userCheck from '../../../component/userCheck';

import {
  DynamoDBClient,
  UpdateItemCommand,
  GetItemCommand
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
    const check = userCheck(req);
    if(!check.ok){
        return res.status(401).json(check.json)
    }
    const uid = check.userId;


    const {Item}  = await client.send( new GetItemCommand({
        TableName: tableName,
        Key: {
          userId: { S: uid },
        }
      }));
    if(Item === undefined){
        return res.json({
            message: "未找到用户!",
            success: false
        })
    }

    const hash = crypto.createHash('sha1');
    const password = hash.update(req.body.oldPass + uid).digest('hex');
    if(password !== Item.password.S){
        return res.json({
            message: "旧密码错误",
            success: false
        })
    }
    const hashNew = crypto.createHash('sha1');
    const newPassword = hashNew.update(req.body.newPass + uid).digest('hex');

    const { Attributes } = await client.send(
        new UpdateItemCommand({
          TableName: tableName,
          Key: {
            userId: { S: uid }
          },
          UpdateExpression: 'set password = :password',
          ExpressionAttributeValues: {
            ':password': { S: newPassword },
          },
          ReturnValues: 'ALL_NEW'
        })
    );
    return res.json({
        success: true
    });

}