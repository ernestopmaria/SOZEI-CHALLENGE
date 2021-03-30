import { Request, Response } from "express"
import { container } from 'tsyringe'
import { CreateTagUseCase } from "./CreateTagsUseCase"

class CreateTagsController {



    async handle(request: Request, response: Response): Promise<Response> {
        const { name, toolId } = request.body
        const createToolUseCase = container.resolve(CreateTagUseCase)
        await createToolUseCase.execute({ name, toolId })
        return response.status(201).send()
    }


}

export { CreateTagsController }