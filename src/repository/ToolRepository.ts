import {Tool} from '../model/Tools'
import { ICreateToolsDTO, IToolsRepository } from './IToolsRepository';


class ToolRepository implements IToolsRepository{
    private tools: Tool[]

    constructor(){
        this.tools=[];
    }

    create({title, link, description, tags}:ICreateToolsDTO):void{
        const tool = new Tool();

        Object.assign(tool, {
            title,
            link,
            description,
            tags,
            created_at: new Date
        });
    
        this.tools.push(tool)
       
     
    }

    list():Tool[]{
        return this.tools
    }

    findByTitle(title:string){
        const tool = this.tools.find(tool=>tool.title===title)

        return tool
    }
}







export {ToolRepository}