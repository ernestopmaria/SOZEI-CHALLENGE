import { Router } from 'express';
import { ToolRepository } from '../repository/implementation/ToolRepository';
import createToolController from '../useCases/CreateTools';
import { listToolsController } from '../useCases/ListTools';


const toolsRoutes = Router();
//const toolRepository = new ToolRepository()

toolsRoutes.post("/tools", (request, response) => {
    return createToolController().handle(request, response)
})

toolsRoutes.get("/tools", (request, response) => {
    return listToolsController.handler(request, response)
})

/* toolsRoutes.get("/tools/:tag", (request, response) => {
    const { tag } = request.params
    const tagSearch = toolRepository.findByTags(tag)

    if (!tagSearch.length) {
        return response.status(401).json({ message: "tools not found" })
    }

    return response.status(200).json({ tagSearch })
})

toolsRoutes.delete("/tools/:id", (request, response) => {
    const { id } = request.params
    toolRepository.deleteTools(id)
    return response.status(204).send()
}) */

export { toolsRoutes }