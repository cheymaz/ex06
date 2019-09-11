import {User} from './user.model';
import jwt from 'jsonwebtoken';

export const userList = async (req,res)=>{
    try {
        const users = await User.find();
        if(!users) return res.status(400).end();
        res.status(200).json({users:users});
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const getOneUser = async (req,res)=>{
    try {
        const users = await User.findOne({_id:req.params.id});
        if(!users) return res.status(400).end();
        res.status(200).json({users}); 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const createUser = async (req,res)=>{
    try {
        let user;
        if(user) {
            console.log('That email is already taken.');
            return res.status(400).end();
        }
        else {
            var newUser = new User();
            newUser.email = req.body.email;
            newUser.password = newUser.generateHash(req.body.password);
        }
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
    
    try {
        const users = await User.create(newUser);
        res.status(201).json({users}); 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const updateOne = async (req,res)=>{
    try {
        const updatedUser = await User.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}
            );
        if(!updatedUser) return res.status(400).end();
        res.status(200).json({users:updatedUser}); 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const deleteOne = async (req,res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete({_id:req.params.id});
        if(!deletedUser) return res.status(400).end();
        res.status(200).json({users:deletedUser}); 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}
export const login = async (req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(user) {
            if(user.validPassword(req.body.password)) {
                jwt.sign({user}, 'secretkey', { expiresIn: '120s' }, (err, token) => {
                    if(err) {
                        res.status(403).end();
                    } else {
                        res.json({token});
                    }
                });
            }
        } 
    } catch(err) {
        console.error(err);
        res.status(400).end();
    }
}