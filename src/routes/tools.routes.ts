import { Router } from 'express';
import { ToolRepository } from '../repository/ToolRepository';
import { CreateToolService } from '../services/CreateToolService';

const toolsRoutes = Router();
const toolRepository = new ToolRepository()

toolsRoutes.post("/tools", (request, response) => {
    const { title, link, description, tags } = request.body
    const createToolService = new CreateToolService(toolRepository)
    createToolService.execute({title, link, description, tags })
    return response.status(201).send()
})

toolsRoutes.get("/tools", (request, response) => {
    const all = toolRepository.list()
    return response.status(200).json(all)
})

toolsRoutes.get("/tools/:tag", (request, response) => {
    const { tag } = request.params
    const tagSearch = tools.filter(tool => tool.tags.includes(tag))

    if (!tagSearch.length) {
        return response.status(401).json({ message: "tools not found" })
    }

    return response.status(200).json({ tagSearch })
})

toolsRoutes.delete("/tools/:id", (request, response) => {
    const { id } = request.params

    const ChecktoolsId = tools.findIndex(tool => tool.id === id)
    if (ChecktoolsId === -1) {
        return response.status(401).json({ message: "tools does not exists" })
    }
    tools.splice(ChecktoolsId, 1)

    return response.status(204).send()
})

export { toolsRoutes }