import { ToolRepository } from "../../repository/implementation/ToolRepository";
import { ListToolController } from "./ListToolsController";
import { ListToolsUseCase } from "./ListToolsUseCase";




const toolsRepository = ToolRepository.getInstance()
const listToolsUseCase = new ListToolsUseCase(toolsRepository)
const listToolsController = new ListToolController(listToolsUseCase)


export { listToolsController }