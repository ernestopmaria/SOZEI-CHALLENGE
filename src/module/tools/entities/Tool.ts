
import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('tools')
class Tool {
    @PrimaryColumn('uuid')
    id?: string

    @Column()
    title: string

    @Column()
    link: string

    @Column()
    description: string

    @Column('varchar', { array: true })
    tags: string[]

    @CreateDateColumn()
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { Tool }