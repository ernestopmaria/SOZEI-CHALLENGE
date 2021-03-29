import { ToolRepository } from "../../repository/implementation/ToolRepository";
import { CreateToolsController } from "./CreateToolsController";
import { CreateToolUseCase } from "./CreateToolUseCase";



export default (): CreateToolsController => {
    const toolRepository = new ToolRepository();
    const createToolUseCase = new CreateToolUseCase(toolRepository)
    const createToolController = new CreateToolsController(createToolUseCase)

    return createToolController
}