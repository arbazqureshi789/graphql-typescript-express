import express from 'express';
import { } from 'graphql';

export const queryResolver = {
    register({ name, email, password }: {
        name: string,
        email: string, password: string
    }, context: any) {
        return {
            id: Math.random().toString(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        }
    },
    login({email,password}: {email: string , password: string}){
        return true;
    },
    getUser(){
        return {
            id: Math.random().toString(),
            name: "Arbaz Qureshi",
            email: "arbaz.qureshi@gmail.com"
        }
    }

}