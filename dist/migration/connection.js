"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbOperations = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const uuid_1 = require("uuid");
const User_1 = require("../entity/User");
class DbOperations {
    constructor() {
        this.userRepository = typeorm_1.getRepository(User_1.User);
    }
    getAllUser() {
        const getUsers = this.userRepository.find();
        return getUsers;
    }
    getUserByEmail(email) {
        const user = this.userRepository.findOne({ where: { email: email } });
        return user;
    }
    isEmailExist(email) {
        const count = this.userRepository.count({ where: { email: email } });
        return count;
    }
    async register(name, email, password) {
        const checkEmail = await this.isEmailExist(email);
        if (!checkEmail) {
            const newUser = this.userRepository.create({
                id: uuid_1.v4(),
                name: name,
                email: email,
                password: password
            });
            const errors = await class_validator_1.validate(newUser);
            if (errors.length > 0) {
                console.log("Error occured while validating email", errors);
                throw new Error(`Validation failed!`);
            }
            else {
                const registerUser = await this.userRepository.save(newUser);
                return registerUser;
            }
        }
    }
    async login(email, password) {
        const user = await this.userRepository.findOne({ where: { email: email,
                password: password } });
        if (user === undefined) {
            return false;
        }
        return true;
    }
}
exports.DbOperations = DbOperations;
