import { Tool } from "../entities/Tools";

interface ICreateToolsDTO {
    title: string,
    link: string,
    description: string,
    tags: string

}

interface IToolsRepository {
    findByTitle(title: string): Promise<Tool>;
    list(): Promise<Tool[]>;
    create({ title, link, description, tags }: ICreateToolsDTO): Promise<void>
    /*  findByTags(tags: string): Promise<Tool[]>;
     deleteTools(id: string): Promise<void>; */
}

export { IToolsRepository, ICreateToolsDTO }