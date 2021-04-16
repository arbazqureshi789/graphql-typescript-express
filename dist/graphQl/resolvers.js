"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const uuid_1 = require("uuid");
const connection_1 = require("../migration/connection");
exports.queryResolver = {
    register({ name, email, password }, context) {
        return {
            id: uuid_1.v4(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        };
    },
    login({ email, password }) {
        return true;
    },
    async getUser() {
        const db = new connection_1.DbOperations();
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
};
