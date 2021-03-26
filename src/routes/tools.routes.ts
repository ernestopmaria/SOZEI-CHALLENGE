import { Router } from 'express';
import { Tool } from '../model/Tools';

const toolsRoutes = Router();
const tools: Tool[] = []

toolsRoutes.post("/tools", (request, response) => {
    const { title, link, description, tags } = request.body

    const tool = new Tool();

    Object.assign(tool, {
        title,
        link,
        description,
        tags,
        created_at: new Date
    }
    )

    tools.push(tool)
    return response.status(201).json(tool)
})

toolsRoutes.get("/tools", (request, response) => {
    return response.status(200).json(tools)
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