import { Tag } from "../entities/Tags";
import { Tool } from "../entities/Tools";

interface ICreateToolsDTO {
    title: string,
    link: string,
    description: string,
    tags:Tag[]

}

interface IToolsRepository {
    findByTitle(title: string): Promise<Tool>;
    list(): Promise<Tool[]>;
    create({ title, link, description }: ICreateToolsDTO): Promise<void>
     deleteTools(id: string): Promise<void>; 
}

export { IToolsRepository, ICreateToolsDTO }