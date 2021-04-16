import { v4 as uuid } from 'uuid';
import { getRepository } from "typeorm";
import { DbOperations } from '../migration/connection';
import { User } from '../entity/User';

export const queryResolver = {
    register({ name, email, password }: {
        name: string,
        email: string, password: string
    }, context: any) {
        return {
            id: uuid(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        }
    },
    login({ email, password }: { email: string, password: string }) {
        return true;
    },
    async getUser() {
        const db = new DbOperations();
        const users = await db.getAllUser();
        return {
            id: users[0].id,
            name: users[0].name,
            email: users[0].email,
            password: users[0].password
        };
    }
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

}