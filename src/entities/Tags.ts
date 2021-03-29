import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Tool } from './Tools';


@Entity('tags')
class Tag {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(type=>Tool, tags=>Tag)
    tool:Tool

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { Tag }