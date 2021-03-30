import { inject, injectable } from 'tsyringe'

import { Tool } from '../../entities/Tool'
import { IToolsRepository } from '../../repository/IToolsRepository'

interface IRequest {
  tag: string[] | undefined
}

@injectable()
class ListToolsUseCase {
  constructor(
    @inject('ToolRepository')
    private toolRepository: IToolsRepository
  ) { }

  async execute({ tag }: IRequest): Promise<Tool[]> {
    const tools = await this.toolRepository.list(tag)

    return tools
  }
}

export { ListToolsUseCase }