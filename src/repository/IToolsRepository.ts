import { Tool } from "../model/Tools";

interface ICreateToolsDTO{
    title:string,
    link:string,
    description:string,
    tags: string | string[]
    
    }

interface IToolsRepository{
    findByTitle(title:string):Tool;
    list():Tool[];
    create({title, link, description, tags}:ICreateToolsDTO):void
}

export {IToolsRepository, ICreateToolsDTO}