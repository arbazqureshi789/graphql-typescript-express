import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, Min } from 'class-validator';
import { v4 as uuid } from 'uuid';

@Entity({ name: "users" })
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", {
        length: 100
    })
    name: string;

    @IsEmail()
    @Column()
    email: string;

    @Min(8)
    @Column()
    password: string;

    constructor() {
        this.id = uuid();
        this.name = "";
        this.email = "";
        this.password = "";
    }

}
