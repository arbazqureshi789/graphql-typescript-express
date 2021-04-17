import { v4 as uuid } from 'uuid';
import { getRepository } from "typeorm";
import { DbOperations } from '../migration/connection';
import { User } from '../entity/User';
// import { resolve } from 'node:path';

export const queryResolver = {
    async register({ name, email, password }: {
        name: string,
        email: string, password: string
    }, context: any) {
        const db = new DbOperations();
        const register = await db.register(name, email, password);
        return register;
    },

    async login({ email, password }: { email: string, password: string }) {
        const db = new DbOperations();
        const userExist = await db.login(email, password);
        return userExist;
    },

    async getAllUser() {
        const db = new DbOperations();
        const users = await db.getAllUser();
        return users;
        // return {
        // id: users[1].id,
        // name: users[1].name,
        // email: users[1].email,
        // password: users[1].password
        // };
    },
    // async getUser() {
    //     const userRepository = getRepository(User);
    //     const getUsers = await userRepository.find();
    //     console.log("printing users",getUsers[0]);
    //     return {
    //         id:getUsers[0].id,
    //         name:getUsers[0].name,
    //         email:getUsers[0].email,
    //         password: getUsers[0].password
    //     };
    // }
    async getUserByEmail({ email }: { email: string }) {
        const db = new DbOperations();
        const user = await db.getUserByEmail(email);
        return user;
    }


}