import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    admin: boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;


}


export { User };