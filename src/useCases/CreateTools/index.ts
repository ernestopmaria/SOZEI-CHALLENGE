import { ToolRepository } from "../../repository/implementation/ToolRepository";
import { CreateToolsController } from "./CreateToolsController";
import { CreateToolUseCase } from "./CreateToolUseCase";




const toolRepository = ToolRepository.getInstance();
const createToolUseCase = new CreateToolUseCase(toolRepository)
const createToolController = new CreateToolsController(createToolUseCase)

export { createToolController }