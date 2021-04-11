"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResolver = void 0;
exports.queryResolver = {
    register({ name, email, password }, context) {
        return {
            id: Math.random().toString(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        };
    },
    login({ email, password }) {
        return true;
    },
    getUser() {
        return {
            id: Math.random().toString(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        };
    }
};
