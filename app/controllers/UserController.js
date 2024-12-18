import UserModel from "../models/UserModel.js";
import {TokenEncode} from "../utility/TokenUtility.js";


export const Registration = async (req, res) => {
    try {
        let reqBody=req.body;
        await UserModel.create(reqBody)
        return res.json({status:"success","Message":"User registered successfully"})
    }catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};

export const login = async (req, res) => {
    try {
        let reqBody=req.body;
        let data=await UserModel.findOne(reqBody)
        if(data===null){
            return res.json({status:"fail","Message":"User not found"})
        }
        else {
            // Login Success Token Encode
            let token=TokenEncode(data['phoneNumber'],data['_id'])
            return res.json({status:"success",Token:token,"Message":"User Login successfully"})
        }

    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};

export const ReadProfile = async (req, res) => {
    try {
        let user_id=req.headers['user_id'];
        let data=await UserModel.findById({"_id":user_id})
        return res.json({status:"success","Message":"User ProfileDetails successfully",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};

export const ReadProfileAll = async (req, res) => {
    try {
        let user_id=req.headers['user_id'];
        let data=await UserModel.find({"_id":user_id})
        return res.json({status:"success","Message":"User ProfileDetails successfully",data:data})
    }
    catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};

export const UpdateProfile = async (req, res) => {

    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id'];
        await UserModel.updateOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User Update successfully"})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};
export const DeleteProfile = async (req, res) => {
    try {
        let reqBody=req.body;
        let user_id=req.headers['user_id'];
        await UserModel.deleteOne({"_id":user_id},reqBody)
        return res.json({status:"success","Message":"User Deleted successfully"})
    } catch(err){
        return res.json({status:"fail","Message":err.toString()})
    }
};

