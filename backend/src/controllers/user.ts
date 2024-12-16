import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserReqestBody } from "../types/types.js";

export const newUser = async (
  req: Request<{},{},NewUserReqestBody>, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, _id, dob } = req.body;

    const user = await User.create({
      name, email, photo, gender, _id, dob : new Date(dob),
    });

    return res.status(201).json({
      success: true,
      message: `Welcome, ${user.name}`,
    });
    
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error`,
    });
  }
};
