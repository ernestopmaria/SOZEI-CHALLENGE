import { Tool } from '../../entities/Tools'


import { ICreateToolsDTO, IToolsRepository } from '../IToolsRepository';

import { getRepository, Repository } from 'typeorm';
class ToolRepository implements IToolsRepository {

    private repository: Repository<Tool>

    // private static INSTANCE: ToolRepository

    constructor() {
        this.repository = getRepository(Tool)
    }

    /*   public static getInstance(): ToolRepository {
          if (!ToolRepository.INSTANCE) {
              ToolRepository.INSTANCE = new ToolRepository()
          }
          return ToolRepository.INSTANCE;
      }
   */
    async create({ title, link, description, tags }: ICreateToolsDTO): Promise<void> {
        const tool = this.repository.create({
            title,
            link,
            description,
            tags,
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

    /*  findByTags(tag: string) {
         const tags = this.repository.find(tool => tool.tags.includes(tag))
         return tags
     }
 
 
 
     async deleteTools(id: string): Promise<void> {
         const ChecktoolsId = await this.repository.find(tool => tool.id === id)
         if (ChecktoolsId === -1) {
             throw new Error("tools does not exists")
         }
         this.tools.splice(ChecktoolsId, 1)
 
     } */
}





export { ToolRepository }