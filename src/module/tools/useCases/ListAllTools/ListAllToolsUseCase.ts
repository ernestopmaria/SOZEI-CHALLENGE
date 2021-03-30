import { inject, injectable } from 'tsyringe'

import { Tool } from '../../entities/Tool'
import { IToolsRepository } from '../../repository/IToolsRepository'

@injectable()
class ListAllToolsUseCase {
  constructor(
    @inject('ToolRepository')
    private toolRepository: IToolsRepository
  ) { }

  async execute(): Promise<Tool[]> {
    const tools = await this.toolRepository.listAllTool()

    return tools
  }
}

export { ListAllToolsUseCase }