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

    findByTags(tag:string){
        const tags = this.tools.filter(tool => tool.tags.includes(tag))
        return tags
    }



    deleteTools(id:string):void{
        const ChecktoolsId = this.tools.findIndex(tool => tool.id === id)
        if (ChecktoolsId === -1) {
            throw new Error("tools does not exists" )
        }
       this.tools.splice(ChecktoolsId, 1)    

    }
}





export {ToolRepository}