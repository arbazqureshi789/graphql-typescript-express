import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";


export class DbOperations {

    private userRepository = getRepository(User);

    getAllUser() {
        const getUsers =  this.userRepository.find();
        return getUsers;
    }

}