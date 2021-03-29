import { IToolsRepository } from "../../repository/IToolsRepository"
import {inject,injectable} from 'tsyringe'

@injectable()
class DeleteToolUseCase {


    constructor(
        @inject("ToolRepository")
        private toolRepository: IToolsRepository) { }

    async execute(id:string): Promise<void> {
       await this.toolRepository.deleteTools(id)

    }
}

export { DeleteToolUseCase }