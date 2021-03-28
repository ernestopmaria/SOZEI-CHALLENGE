import { Router } from 'express';
import { ToolRepository } from '../repository/ToolRepository';
import { CreateToolUseCase } from '../useCases/CreateTools/CreateToolUseCase';

const toolsRoutes = Router();
const toolRepository = new ToolRepository()

toolsRoutes.post("/tools", (request, response) => {
  
})

toolsRoutes.get("/tools", (request, response) => {
    const all = toolRepository.list()
    return response.status(200).json(all)
})

toolsRoutes.get("/tools/:tag", (request, response) => {
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
})

export { toolsRoutes }