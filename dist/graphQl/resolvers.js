"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
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
    // getUser() {
    //     // const db = new DbOperations();
    //     // const users = db.getAllUser();
    //     // users.then(user => {
    //     //     console.log("printring user email",user[0].email);
    //     // })
    //     return {
    //         id: uuid(),
    //         name: "Arbaz Qureshi",
    //         email: "arbaz.qureshi@gmail.com",
    //         password:"123456"
    //     };
    // }
    async getUser() {
        const userRepository = typeorm_1.getRepository(User_1.User);
        const getUsers = await userRepository.find();
        console.log("printing users", getUsers[0]);
        return {
            id: getUsers[0].id,
            name: getUsers[0].name,
            email: getUsers[0].email,
            password: getUsers[0].password
        };
    }
};
