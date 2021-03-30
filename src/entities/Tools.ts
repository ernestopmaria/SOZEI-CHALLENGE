import { v4 as uuidV4 } from 'uuid'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Tag } from './Tags';


@Entity('tools')
class Tool {

    @PrimaryColumn()
    id?: string;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    /*  @OneToMany(() => Tag, tag => tag.tool, { eager: true })
     tags: Tag[] */

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { Tool }