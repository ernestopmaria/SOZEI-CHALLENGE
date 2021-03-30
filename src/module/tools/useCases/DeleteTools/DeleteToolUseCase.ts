import { inject, injectable } from 'tsyringe'

import { IToolsRepository } from '../../repository/IToolsRepository'

interface IRequest {
    id: string
}

@injectable()
class DeleteToolUseCase {
    constructor(
        @inject('ToolRepository')
        private toolRepository: IToolsRepository
    ) { }

    async execute({ id }: IRequest): Promise<void> {
        this.toolRepository.delete(id)
    }
}

export { DeleteToolUseCase }