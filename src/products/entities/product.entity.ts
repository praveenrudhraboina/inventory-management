import { Location } from "src/location/entities/location.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    product_name: string;

    @Column({ nullable: false})
    color: string;
    
    @Column({nullable: false})
    price: number;

    @Column()
    quantity: number;

    @Column({nullable: false})
    status: string;

    @ManyToOne(() => Location, (location) =>location.location_id) 
    location: Location[];

}
