import jwt from 'jsonwebtoken';

export const verify = (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
        res.status(403).end();
        } else {
            next();
        }
    })
}