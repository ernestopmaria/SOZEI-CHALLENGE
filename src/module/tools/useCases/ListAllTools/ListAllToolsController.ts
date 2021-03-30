import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { ListAllToolsUseCase } from './ListAllToolsUseCase'

class ListAllToolsController {
    async handle(request: Request, response: Response): Promise<Response> {

        const listToolsUseCase = container.resolve(ListAllToolsUseCase)
        const tools = await listToolsUseCase.execute()
        if (tools.length <= 0) {
            return response.status(400).json("Does not exists tools")
        }
        return response.status(201).json(tools)

    }
}

export { ListAllToolsController }