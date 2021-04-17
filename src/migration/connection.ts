import { getRepository } from "typeorm";
import { validate } from "class-validator";
import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import { User } from "../entity/User";


export class DbOperations {

    private userRepository = getRepository(User);

    getAllUser() {
        const getUsers = this.userRepository.find();
        return getUsers;
    }

    getUserByEmail(email: string) {
        const user = this.userRepository.findOne({ where: { email: email } });
        return user;
    }

    private isEmailExist(email: string) {
        const count = this.userRepository.count({ where: { email: email } });
        return count;
    }

    async register(name: string, email: string, password: string) {
        const checkEmail = await this.isEmailExist(email);
        if (!checkEmail) {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = this.userRepository.create({
                id: uuid(),
                name: name,
                email: email,
                password: hashedPassword
            });
            const errors = await validate(newUser);
            if (errors.length > 0) {
                // console.log("Error occured while validating email", errors);
                throw new Error(`${errors}`);
            } else {
                const registerUser = await this.userRepository.save(newUser);
                return registerUser;
            }
        }else{
            throw new Error(`${email} already Exist`);
        }
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });
        if (user === undefined) {
            return false;
        }
        const compare = await bcrypt.compare(password, user.password)
        return compare;
    }

}