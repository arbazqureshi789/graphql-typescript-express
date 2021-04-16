"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbOperations = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
class DbOperations {
    constructor() {
        this.userRepository = typeorm_1.getRepository(User_1.User);
    }
    getAllUser() {
        const getUsers = this.userRepository.find();
        return getUsers;
    }
}
exports.DbOperations = DbOperations;
