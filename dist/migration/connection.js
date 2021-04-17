"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbOperations = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
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
            const salt = await bcrypt_1.default.genSalt(10);
            const hashedPassword = await bcrypt_1.default.hash(password, salt);
            const newUser = this.userRepository.create({
                id: uuid_1.v4(),
                name: name,
                email: email,
                password: hashedPassword
            });
            const errors = await class_validator_1.validate(newUser);
            if (errors.length > 0) {
                // console.log("Error occured while validating email", errors);
                throw new Error(`${errors}`);
            }
            else {
                const registerUser = await this.userRepository.save(newUser);
                return registerUser;
            }
        }
        else {
            throw new Error(`${email} already Exist`);
        }
    }
    async login(email, password) {
        const user = await this.userRepository.findOne({
            where: {
                email: email
            }
        });
        if (user === undefined) {
            return false;
        }
        const compare = await bcrypt_1.default.compare(password, user.password);
        return compare;
    }
}
exports.DbOperations = DbOperations;
