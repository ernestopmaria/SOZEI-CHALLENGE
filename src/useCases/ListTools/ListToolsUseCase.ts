import { inject, injectable } from "tsyringe";
import { Tool } from "../../entities/Tools";
import { IToolsRepository } from "../../repository/IToolsRepository";

@injectable()
class ListToolsUseCase {
    constructor(
      @inject('ToolRepository')
      private toolRepository: IToolsRepository) { }

      async execute(): Promise<Tool[]> {
         const tools = await this.toolRepository.list()
         return tools;
 
     } 
}

export { ListToolsUseCase }