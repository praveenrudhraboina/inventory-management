import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    product_name: string;

    @Column({ nullable: false})
    color: string;

}
