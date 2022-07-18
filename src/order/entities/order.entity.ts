import { BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false})
    order_status:  string;

    @Column({nullable: false})
    quantity: number;

    @Column({nullable:false})
    location: string;

    // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    @Column()
    @CreateDateColumn()
    created: Date;

    // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    @Column()
    @UpdateDateColumn()
    updated: Date;

    // @BeforeUpdate()
    // updateTimestamp() {
    //     this.updated = new Date;
    // }

}
