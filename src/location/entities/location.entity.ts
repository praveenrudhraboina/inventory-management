import { Product } from "src/products/entities/product.entity";
import { BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Location {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @PrimaryColumn()
    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    pincode: number;
    
    @Column()
    location_type: string;

    @Column()
    capacity: number;

    // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    @Column()
    @CreateDateColumn()
    created: Date;

    // @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    @Column()
    @UpdateDateColumn()
    updated: Date;

    @OneToMany(()=>Product, (product)=>product.location)
    location_id: Product;
    // @BeforeUpdate()
    // updateTimestamp() {
    //     this.updated = new Date;
    // }

}
