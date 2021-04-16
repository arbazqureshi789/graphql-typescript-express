import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";


export class DbOperations {

    private userRepository = getRepository(User);

    async getAllUser() {
        const getUsers = await this.userRepository.find();
        return getUsers;
    }

}