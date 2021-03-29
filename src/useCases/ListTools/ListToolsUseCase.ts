import { Tool } from "../../model/Tools";
import { IToolsRepository } from "../../repository/IToolsRepository";

class ListToolsUseCase {

    constructor(private toolRepository: IToolsRepository) { }

    execute(): Tool[] {
        const tools = this.toolRepository.list()
        return tools;

    }
}

export { ListToolsUseCase }