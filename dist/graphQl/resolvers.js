"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const connection_1 = require("../migration/connection");
exports.queryResolver = {
    async register({ name, email, password }, context) {
        const db = new connection_1.DbOperations();
        const register = await db.register(name, email, password);
        return register;
    },
    async login({ email, password }) {
        const db = new connection_1.DbOperations();
        const userExist = await db.login(email, password);
        return userExist;
    },
    async getAllUser() {
        const db = new connection_1.DbOperations();
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
    async getUserByEmail({ email }) {
        const db = new connection_1.DbOperations();
        const user = await db.getUserByEmail(email);
        return user;
    }
};
