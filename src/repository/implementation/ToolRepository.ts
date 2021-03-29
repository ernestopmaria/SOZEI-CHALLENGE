import { Tool } from '../../entities/Tools'
import { getRepository, Repository } from 'typeorm';
import { ICreateToolsDTO, IToolsRepository } from '../IToolsRepository';


class ToolRepository implements IToolsRepository {
    private repository: Repository<Tool>
 
    constructor() {
        this.repository = getRepository(Tool)

    }

  
    async create({ title, link, description }: ICreateToolsDTO): Promise<void> { 
        const tool = this.repository.create({
            title,
            link,
            description,  
        })

        await this.repository.save(tool)
    }

    async list(): Promise<Tool[]> {
        const tools = await this.repository.find()
        return tools
    }

    async findByTitle(title: string): Promise<Tool> {
        const tool = await this.repository.findOne({ title })

        return tool
    }

    
     async deleteTools(id: string): Promise<void> {
         const ChecktoolsId = await this.repository.findByIds([id])
         if (!ChecktoolsId) {
             throw new Error("tools does not exists")
         }
          await this.repository.remove(ChecktoolsId)
         
 
     } 
}





export { ToolRepository }