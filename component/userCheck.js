import jwt from 'jsonwebtoken'

export default function userCheck(req) {
    const token = req?.headers?.token;
    try {
        var decoded = jwt.verify(token, process.env.JWT_KEY);
        return {
            ok: true,
            userId: decoded.userId,
        };
    } catch(err) {
        console.log(err)
        return {
            ok: false,
            decoded: decoded,
            json: {
                success: false,
                message: 'token 无效或过期',
            }
        };

    }

    
}