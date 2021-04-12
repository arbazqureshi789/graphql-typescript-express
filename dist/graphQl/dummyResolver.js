"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyResolver = void 0;
exports.DummyResolver = {
    hello(args, request) {
        return {
            name: args.person.name,
            email: args.person.email
        };
    }
};
