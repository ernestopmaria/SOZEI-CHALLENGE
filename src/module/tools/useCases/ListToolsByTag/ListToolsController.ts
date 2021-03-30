import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListToolsUseCase } from './ListToolsUseCase'

class ListToolsController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { tag } = request.params
        const parsedTag = String(tag).split(',').map(tg => String(tg).trim())
        const listToolsUseCase = container.resolve(ListToolsUseCase)
        const tools = await listToolsUseCase.execute({ tag: parsedTag })
        if (tools.length <= 0) {
            return response.status(400).json("Does not exists tools with this tag")
        }
        return response.status(201).json(tools)


    }
}

export { ListToolsController }