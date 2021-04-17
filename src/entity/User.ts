import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail,Length} from 'class-validator';
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

    @Length(8, 18)
    @Column()
    password: string;

    constructor() {
        this.id = uuid();
        this.name = "";
        this.email = "";
        this.password = "";
    }

}
