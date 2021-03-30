import { Tool } from '../entities/Tool'

interface IToolDTO {
    title: string
    link: string
    description: string
    tags: string[]
}

interface IToolsRepository {
    create({ title, link, description, tags }: IToolDTO): Promise<Tool>
    delete(id: string): Promise<void>
    listAllTool(): Promise<Tool[]>
    list(tag?: string[]): Promise<Tool[]>

}

export { IToolsRepository, IToolDTO }